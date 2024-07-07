var value
var value2
var oper

var readlineSync = require('readline-sync');
oper = readlineSync.question('qual operacao deseja efetuar (+) (-) (*) (/)? : \n');
value = parseFloat(readlineSync.question('insira o primeiro numero: \n'));
value2 = parseFloat(readlineSync.question('insira o segundo numero: \n'));

function calculate(oper, value, value2) {
    switch (oper) {
        case "+":
            return value + value2
        case "-":
            return value - value2
        case "*":
            return value * value2
        case "/":
            return value / value2
    }
}

console.log("o resultado e ", calculate(oper, value, value2))