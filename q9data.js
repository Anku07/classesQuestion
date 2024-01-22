/*Write a class called Point that represents a point in two-dimensional. It should have the following constructor:
constructor(x, y)
It should have the following properties:
x
y
It should have the following methods:
toString()
Returns a string representation of this point, as [x=1, y=2].
*/
class Point {
    constructor(x, y) {
        this.x = x,
            this.y = y
    }
    toString() {
        return [" x  = " + this.x, " y  = " + this.y];
    }
}
let string = new Point(1, 2)
const stringRep = string.toString()
console.log(stringRep)