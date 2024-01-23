/*Write a class called Name and create the following attributes given a first name and last name 
(as fname and lname):
An attribute called fullname which returns the first and last names.
An attribute called initials which returns the first letters of the first and last name. Put a . 
between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.
*/
class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        const fullname = this.firstName + " " + this.lastName;
        return fullname;
    }
    initials() {
        const initial = this.firstName.slice(0, 1) + "." + this.lastName.slice(0, 1);
        return initial;
    }
}
let person = new Name("Ayush", "Singhi");
const fullname = person.fullName()
const fullNameInitials = person.initials()
console.log(fullname)
console.log(fullNameInitials)