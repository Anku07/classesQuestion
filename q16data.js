/*Given an int, figure out how many ones, threes and nines you could fit into the number. 
You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.
*/
class OnesThreesNines {
    constructor(number) {
        this.number = number;
    }
    getOne() {
        if (this.number > 0) {
            return this.number
        }
        else {
            return 0
        }
    }
    getThrees() {
        return Math.floor(this.number / 3);
    }
    getNines() {
        return Math.floor(this.number / 9)
    }
}
let integer = new OnesThreesNines(19);
const one = integer.getOne();
const three = integer.getThrees();
const nines = integer.getNines();
console.log(one)
console.log(three)
console.log(nines)