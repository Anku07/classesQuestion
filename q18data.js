/*Create a class named User and create a way to check the number of users (number of 
instances) that were created, so that the value can be accessed as a class attribute.
*/
class User {
    constructor(name) {
        this.name = name;
    }
    numberOfUserAccess() {
        console.count()
        return this.name;
    }
}
let U1 = new User("Ankita");
let U2 = new User("Shubu");
const user = U2.numberOfUserAccess()
const user1 = U2.numberOfUserAccess()
console.log(user)

