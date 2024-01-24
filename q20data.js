/*Step 1: Build a class Challenge
The constructor parameters are id and level. The id will be the numerical identifier of the challenge, 
and level will be a code made of two uppercased letters:
"VE" = "Very Easy"
"EA" = "Easy"
"ME" = "Medium"
"HA" = "Hard"
"VH" = "Very Hard"
"EX" = "Expert"
*/
class Challenge {
    static Level = {
        "VE": 5,
        "EA": 10,
        "ME": 20,
        "HA": 40,
        "VH": 80,
        "EX": 120,
    }
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
    /*Step 2: Build a method for class Challenge
    The name of the method inside class Challenge is points().
    The method must return the amount of points earned solving a challenge, based on the level of the challenge:
    VE = 5 XP
    EA = 10 XP
    ME= 20 XP
    HA= 40 XP
    VH = 80 XP
    EX = 120 XP
    */
    points() {
       let Xp =  Challenge.Level[this.level]
       return Xp
        
    }
}
/*Step 3: Build a class User
The constructor parameters are name, xp and log. The name will be, trivially, the username. 
The xp is the accumulator that stores the XP points earned. The log is a sort of diary of the user:
is an array that will store the id of the challenges solved by the user.
*/
class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    /*Step 4: Build a method for the class User
 The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter,
 it will accept an object of the Challenge class.
 The method must increment the xp of the user and store the challenge id into the array log.
 */
    newSolvedChallenge(obj) {
        this.xp += obj.points()
        let storedValue = this.log.push(obj.id)
       return storedValue
        
        
        
 
       
       

    }
}
/*Step 5: Declare the instances needed for the test
Now that everything is ready, you have to set the exercise and declare the instances of the 
created classes, for sustaining the tests that are made. Start with the users declarations, they are two:
user1 ➞ name = "Madam" | xp = 0 | log = []
user2 ➞ name = "Steve" | xp = 0 | log = []
Now, declare the challenges, they are six:
challenge1 ➞ id = 1 | level = "VE";
challenge2 ➞ id = 2 | level = "EA";
challenge3 ➞ id = 3 | level = "ME";
challenge4 ➞ id = 4 | level = "HA";
challenge5 ➞ id = 5 | level = "VH";
challenge6 ➞ id = 6 | level = "EX";
*/
let user1 = new User("Madam", 0, [])
let user2 = new User("Steve", 0, [])
let challenge1 = new Challenge(1, "VE")
let challenge2 = new Challenge(2, "EA")
let challenge3 = new Challenge(3, "ME")
let challenge4 = new Challenge(4, "HA")
let challenge5 = new Challenge(5, "VH")
let challenge6 = new Challenge(6, "EX")
/*Finally, you have to declare which are the challenges solved by the users, 
using the setter that you have implemented before:
Madam solves the following challenges, in the order:
challenge1 , challenge4 , challenge6
Steve solves the,following challenges, in the order:
challenge5 , challenge3, challenge2
*/
let value = user1.newSolvedChallenge(challenge1)
console.log(value)
let value1 = user1.newSolvedChallenge(challenge2)
console.log(value1)
let value2 = user1.newSolvedChallenge(challenge5)
console.log(value2)
console.log(user1.xp)
console.log(user1.log)

    