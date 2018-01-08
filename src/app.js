const Calculator = require('./src/Calculator');
var fs = require('fs');

const resultDOM = document.querySelector('.calculator-result');

const calculator = new Calculator(resultDOM);

const clickItem = function(command) {
    console.log(command);
    calculator.getUserInput(command);
}
