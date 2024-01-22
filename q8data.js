/*Create a class that takes the following four arguments for a particular football player:
name
age
height
weight
Also, create three functions for the class that returns the following strings:
getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"
*/
class FootballPlayer {
    constructor(name, age, height, weight) {
        this.name = name,
            this.age = age,
            this.height = height,
            this.weight = weight
    }
    getAge() {
        return this.name + " is age " + this.age
    }
    getHeight() {
        return this.name + " is " + this.height + "cm";
    }
    getWeight() {
        return this.name + " is " + this.weight + "kg";
    }
}

let player = new FootballPlayer("Ankita", 27, 179, 98)
const playerInfo = player.getAge()
const playerInfo2 = player.getHeight()
const playerInfo3 = player.getWeight()
console.log(playerInfo)
console.log(playerInfo2)
console.log(playerInfo3)

