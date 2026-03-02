export  function summ(a, b) {
    try{
        a = Number(a);
        b = Number(b);
        if (isNaN(a) || isNaN(b)) {
            return "Error: Invalid input. Please provide valid numbers.";
        }
    }catch(error){
        return "Error: Invalid input. Please provide valid numbers.";
    }
    return a + b;
}
export  function devision(a, b) {
    try{
        a = Number(a);
        b = Number(b);
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        if (isNaN(a) || isNaN(b)) {
            return "Error: Invalid input. Please provide valid numbers.";
        }
    }catch(error){
        return "Error: Invalid input. Please provide valid numbers.";
    }
    return a / b;
}   
export  function multiplication(a, b) {
    try{
        a = Number(a);
        b = Number(b);
        if (isNaN(a) || isNaN(b)) {
            return "Error: Invalid input. Please provide valid numbers.";
        }
    }catch(error){
        return "Error: Invalid input. Please provide valid numbers.";
    }
    return a * b;
    
}
export  function substraction(a, b) {
    try{
        a = Number(a);
        b = Number(b);
        if (isNaN(a) || isNaN(b)) {
            return "Error: Invalid input. Please provide valid numbers.";
        }
    }catch(error){
        return "Error: Invalid input. Please provide valid numbers.";
    }

    return a - b;
}