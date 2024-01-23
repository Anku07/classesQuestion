/*Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both 
respective areas and perimeter (circumference).
For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
*/
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    getArea() {
        const areaOfCircle = Math.PI * this.radius * this.radius;
        return areaOfCircle;
    }
    getPerimeter() {
        const perimeterOfCircle = 2 * Math.PI * this.radius;
        return perimeterOfCircle;
    }
}
let circle = new Circle(7);
const area = circle.getArea();
const perimeter = circle.getPerimeter();
console.log(area)
console.log(perimeter)