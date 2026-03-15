// Create a function that takes a number and give factorial of that number
function calcFact(num){
    var fact = 1;
    for(let i=1;i<=num;i++){
        fact = fact * i;
    }
    return fact;
}

console.log("The factorial is",calcFact(5));