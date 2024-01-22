/*Create a method in the Person class which returns how another person's age compares. Given the instances 
p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following 
format:
{other person name} is {older than / younger than / the same age as} me.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    ageComparison(age) {
        if (this.age > age) {
            return this.name + "is older  then me "
        }
        if (this.age < age) {
            return this.name + " is younger then me"
        }
        else {
            return this.name + " is same as me"
        }
    }
}
let p1 = new Person("Ayush", 27);
let p2 = new Person("Sakshi", 26);
let p3 = new Person("Prince", 21);
const person = p2.ageComparison(p2.age)
console.log(person)
