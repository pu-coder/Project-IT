// program for a simple calculator

// take the input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else 
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

//displaying the final result 
console.log(`${number1} ${operator} ${number2} = ${result}`);
document.write("<h3 style='font-size: 30px;'> Answer: </h3>" + `<h3 style='text-align: left;'> ${number1} ${operator} ${number2} = ${result} </h3>`);
