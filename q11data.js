/*Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties
of the following:
BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price
Examples
BasicPlan.hasSD ➞ true 
PremiumPlan.hasSD ➞ true
BasicPlan.hasUHD ➞ false
BasicPlan.price ➞ '$8.99'
PremiumPlan.numOfDevices ➞ 4
Notes
Try to extend the classes to complete the challenge! If you're unsure what that means, try checking out the 
JavaScript class tutorials in the Resources tab.
*/
class Plan {
    constructor(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price) {
        this.canStream = canStream;
            this.canDownload = canDownload;
            this.hasDownload = hasDownload;
            this.hasSD = hasSD;
            this.hasHD = hasHD;
            this.uhd = hasUhd;
        this.numOfDevices = numOfDevices;
            this.price = price
    }
}
class BasicPlan extends Plan {
    constructor(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price) {
        super(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price)
    }
}
class StandardPlan extends Plan {
    constructor(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price) {
        super(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price)
    }
}
class PremiumPlan extends Plan {
    constructor(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price) {
        super(canStream, canDownload, hasDownload, hasSD, hasHD, hasUhd, numOfDevices, price)
    }
}
let basic = new BasicPlan("true", "true", "true", "true", "false", "false", 1, "$8.99");
console.log(basic)
let standard = new StandardPlan("true", "true", "true", "true", "true", "false", 2, "$12.99");
console.log(standard)
let premium = new PremiumPlan("true", "true", "true", "true", "true", "true", 4, "$15.99");
console.log(premium)
console.log(BasicPlan.hasHD, true)