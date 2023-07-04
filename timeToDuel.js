class Card {
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        //attacking target causes unit's res is reduced by the attacker's power
        if (target instanceof Unit){
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit!")
        }
    }
}

class Effects extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat; 
        this.magnitude = magnitude;
    }
    play(target) {
        //raise/lower the target's resilience/power by amount in the text
        //implement card text here
        //targeted unit's res is reduced by this.magnitude
        //targeted unit's res is increased by this.magnitude
        //targeted unit's power is increased by this.magnitude
        if (target instanceof Unit) {
            if (this.stat == "resilience") {
                if (this.magnitude > 0) {
                    target.res += this.magnitude;
            } else {
                //need to use Math.abs to acquire the difference
                target.res -= Math.abs(this.magnitude);
            } 
        } else if (this.stat == "power") {
            if (this.magnitude >= 0) {
                target.power += this.magnitude;
            } else {
                //need to use Math.abs to acquire the difference
                target.power -= Math.abs(this.magnitude);
            }
        } else {
                throw new error ("Wrong stat attribute!")
            }
        } else {
            throw new error ("Target must be a unit!");
        }
    }
}

//! Red Belt Ninja Unit Card
const redBeltNinja = new Unit("Red Belt Ninja", cost = 3, power = 3, res = 4);
console.log(redBeltNinja);
console.log('============================\n');

//! Black Belt Ninja Unit Card
const blackBeltNinja = new Unit("Black Belt Ninja", cost = 4, power = 5, res = 4);
console.log(blackBeltNinja);
console.log('============================\n');

//! Hard Algorithm Effects Card
const hardAlgorithm = new Effects("Hard Algorithm", cost = 2, text = "increase target's resilience by 3", stat = "resilience", magnitude = 3)
console.log(hardAlgorithm);
console.log('============================\n');


//! Unhandled Promise Rejection Effects Card
const unhandledPromiseRejection = new Effects("Unhandled Promise Rejection", cost = 1, text = "Reduce target's resilience by 2", stat = "resilience", magnitude = -2)
console.log(unhandledPromiseRejection);
console.log('============================\n');


//! Pair Programming Effects Card
const pairProgramming = new Effects("Pair Programming", cost = 3, text = "Increase target's power by 2", stat = "power", magnitude = 2)
console.log(pairProgramming);
console.log('============================\n');

//! Play out the scenario:
console.log('============================\n');
console.log("********GAME BEGINS!********");
console.log('============================\n');


console.log("Turn 1 ----");
console.log(redBeltNinja);
console.log("I play Hard Algorithm targeting Red Belt Ninja");
console.log("----");
hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

console.log("-----------");
console.log("-----------");
console.log("Turn 2 ----");
console.log(blackBeltNinja);
console.log("I play Unhandled Promise Rejection targeting Redbelt Ninja!");
console.log("----");
unhandledPromiseRejection.play(redBeltNinja);
console.log("Red Belt Ninja lost 2 resilience!");
console.log(redBeltNinja);

console.log("-----------");
console.log("-----------");
console.log("Turn 3 ----");
console.log("I play Pair Programming targeting Red Belt Ninja!");
pairProgramming.play(redBeltNinja);
console.log("----");
console.log("Red Belt Ninja gained 2 power!");
console.log(redBeltNinja);
console.log("----");
console.log("Red Belt Ninja attacks Black Belt Ninja!");
redBeltNinja.attack(blackBeltNinja);
console.log("----");
console.log("Red Belt Ninja dealt 5 damage to the Black Belt Ninja!");
console.log(blackBeltNinja);
console.log("----");
console.log("Black Belt Ninja has no resilience left. Red Belt Ninja is victorious!");


console.log('============================\n');
console.log("********GAME OVER!********");
console.log('============================\n');

