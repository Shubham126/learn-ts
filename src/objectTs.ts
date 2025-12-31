//7

const shape = {
    name: "rectangle",
    sides: 4,
    isClosed: true
}

//type script is infering the vaulue in the object shape
// something like this
// {
//     name: string;
//     sides: number;
//     isClosed: Boolean
// }

// declaring object types

let Figure: {
    name: string;
    sides: number;
    isClosed: boolean
}

Figure = {
    name: "triangle",
    sides: 3,
    isClosed: true
}

//alias object types
type FigureType = {
    name: string;
    sides: number;
    sideLengths: string[]
} // this is reuasable

const Square: FigureType = {
    name: "square",
    sides: 4,
    sideLengths: ["4cm", "4cm", "4cm", "4cm"]
}

// look alike
// duck typing
// if two objects have same structure then they are considered same
type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup; // this is allowed as both have same structure

// one more example

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee; // allowed as both have same structure

// type is prone to extra values is added

// user checking function
// is catches the missing properties in the object

type User = {
    username: string;
    password: string
}

const u : User = {
    username: "admin",
    password: "root"
}

// in case if we forget to add any property (username or password) it will throw an error
// it won't throw error if we add extra properties


// split data types

type Item= {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string,
    items: Item[],  // separated data type
    address: Address
}

// we define the data type using one way and use it in other ways

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updaiting chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
// If we try to do partial updates like this then it might pass empty object as well, which will cause error

// Requiered utility type
type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const PlaceOrder = (order: Required<ChaiOrder>) => {
    console.log("Placing order for", order);
}

PlaceOrder({
    name: "Masala Chai",
    quantity: 2
})


// Pick 

type Coffee = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicCoffeeInfo = Pick<Coffee, "name" | "price">;

const CoffeeInfo: BasicCoffeeInfo = {
    name: "Espresso",
    price: 30
}


// Omit

type Maggie = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredient: string;
};

type PublicMaggie = Omit<Maggie, "secretIngredient">;

// best use case is split data types of this entire chapter