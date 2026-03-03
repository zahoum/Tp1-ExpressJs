import express from 'express';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {summ, devision, substraction, multiplication} from './calcul.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 8000;
const IP = '10.99.164.210';
const EQUIPES_FILE = join(__dirname, 'eqp.json');

app.use(express.json());

// Helper functions
const readEquipes = async () => JSON.parse(await fs.readFile(EQUIPES_FILE, 'utf8'));
const writeEquipes = async (data) => await fs.writeFile(EQUIPES_FILE, JSON.stringify(data, null, 2));

app.listen(PORT, IP, () => console.log(`Server running on http://${IP}:${PORT}`));

// Redirect routes
app.get('/', (req, res) => res.redirect('https://zahoum.github.io/PORTFOLIO/'));
app.get('/about', (req, res) => res.redirect('https://github.com/ZAHOUM'));

// Math routes
app.get('/summ/:a/:b', (req, res) => res.send(`Sum: ${summ(+req.params.a, +req.params.b)}`));
app.get('/substraction/:a/:b', (req, res) => res.send(`Subtraction: ${substraction(+req.params.a, +req.params.b)}`));
app.get('/devision/:a/:b', (req, res) => res.send(`Division: ${devision(+req.params.a, +req.params.b)}`));
app.get('/multiplication/:a/:b', (req, res) => res.send(`Multiplication: ${multiplication(+req.params.a, +req.params.b)}`));

// CRUD operations
app.get('/equipes', async (req, res) => res.json(await readEquipes()));

app.post('/equipes', async (req, res) => {
    const equipes = await readEquipes();
    equipes.push(req.body);
    await writeEquipes(equipes);
    res.json(equipes);
});

app.put('/equipes/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    let equipe = equipes.find(equipe => equipe.id === id)
    equipe.name = req.body.name;
    equipe.cuntry = req.body.cuntry;
    res.status(202).json(equipe);
});

app.delete('/equipes/:id', async (req, res) => {
    const equipes = await readEquipes();
    const filtered = equipes.filter(e => e.id != req.params.id);
    await writeEquipes(filtered);
    res.json(filtered);
});