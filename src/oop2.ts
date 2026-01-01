//11 

// Access modifier
class chai{
    public flacor: string = "Masala"

    private secretIngredients = "Cardamon"

    reveal(){
        return this.secretIngredients // ok
    }
}

const c = new chai()
// c.reveal() //using this only we can access the private keys

class Shop{
    protected ShopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.ShopName //Ok
    }
}

// new Branch().getName  // this will have the access to the protected keys

//
class Walet{
    #balance = 100  // # is used in case of private

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

//readonlt properties

class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

// controlled gates
// getter and setter

class ModernChai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if(value > 5) throw new Error("Too Sweet")
            this._sugar = value;
    }

}

const ch = new ModernChai()
ch.sugar = 3;

// static member 
class EkChai{
    static shopName = "Chai code cafe"

    constructor(public flavour: string){
    }
}

console.log(EkChai.shopName)


//abstract classes

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai");
    }
}

//composition
class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}

