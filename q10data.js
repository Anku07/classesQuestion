/*Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
Examples
var calculator = new Calculator()
calculator.add(10, 5) ➞ 15
calculator.subtract(10, 5) ➞ 5
calculator.multiply(10, 5) ➞ 50
calculator.divide(10, 5) ➞ 2
*/
class Calculator {
    constructor(a, b) {
        this.a = a,
            this.b = b
    }
    addTwoNumber() {
        return this.a + this.b;
    }
    multiplyTwoNumber() {
        return this.a - this.b;
    }
    subtractTwoNumber() {
        return this.a * this.b;
    }
    divideTwoNumber() {
        return this.a / this.b;
    }
}
const calculator = new Calculator(10, 5);
const add = calculator.addTwoNumber()
const subtract = calculator.subtractTwoNumber()
const multiply = calculator.multiplyTwoNumber()
const divide = calculator.divideTwoNumber()
console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)