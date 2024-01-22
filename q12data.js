/*Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, and follow it with @company.com 
at the end. Make sure the entire email is in lowercase.
*/
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    fullName() {
        return this.firstName + " " + this.LastName
    }
    email() {
        return this.firstName + "." + this.lastName + "@company.com"


    }
}
let person1 = new Employee("Ayush", "Singhi")
let personName = person1.fullName()
let personEmail = person1.email()
console.log(person1.firstName)
console.log(personEmail)
