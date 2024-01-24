/*Create a function which takes an array of instances from the class IceCream and returns the 
sweetness value of the sweetest ice cream.
Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a 
sweetness value of 1, and the sweetness values for the flavors are as follows:
Flavors	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10
Chocolate	10
You'll be given instance properties in the order flavor, numSprinkles.
*/
class Icecream {
    static FLAVOUR = {
        "Plain": 0,
        "Vanilla": 5,
        "ChocolateChip": 5,
        "Strawberry": 10,
        "Chocolate": 10
    }
    constructor(flavor, numSprinkles) {
        this.flavor = flavor;
        this.numSprinkles = numSprinkles;
    }
    sweetnessValue() {
        let sweetness = this.numSprinkles + Icecream.FLAVOUR[this.flavor]
        return sweetness;
    }
}
function FindMaximumSweetness(IceCreams) {
    let maxSweetness = 0;
    for(let i = 0; i < IceCreams.length; i++) {
        let IceCream = IceCreams[i]
        let sweetnessOfIcecream = IceCream.sweetnessValue()

        if (maxSweetness < sweetnessOfIcecream) {
            maxSweetness = sweetnessOfIcecream
        }

    }
    return maxSweetness
}
let plainIcecream = new Icecream("plainIcecream", 10)
let vanillaIcecream = new Icecream("Vanilla", 5)
let chocolateChipIcecream = new Icecream("ChocolateChip", 10)
let strawberryIcecream = new Icecream("Strawberry", 0)
let chocolateIceream = new Icecream("chocolate", 10)
let availaleIceCream = [plainIcecream, vanillaIcecream, chocolateChipIcecream, strawberryIcecream, chocolateIceream]
let MaximumSweetness = FindMaximumSweetness(availaleIceCream)
console.log(MaximumSweetness)



