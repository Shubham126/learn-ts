//9 

//defining an array

const shapeTypes: string[] = ["Square", "Rectangle"];
const sides: number[] = [5, 6];

const rating: Array<number> = [4.5, 5.0]

// Array of objects

type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 25}
]

//read only arrays
const cities: readonly string[] = ["Delhi", "Mumbai"];
// cities.push("Pune")       //the readonly property won't allow us to do this

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]


// Tuple
let chaiTuple: [string, number]
chaiTuple = ["masala", 20];
// chaiTuple=[20, "masala"] // htis is not allowed 

let userInfo: [string, number, boolean?]
userInfo=["Shubham", 100]
userInfo=["Shubham", 100, true]

//readonly touple
const location: readonly [number, number] = [28.66, 32.22];

//named touples
const chaiItems: [name: string, price:number]=["Masala", 25]


//Enums

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status{
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ShapeType {
    EDGE = "edge",
    VERTEX="vertex"
}

function makeShape(type: ShapeType){
    console.log(`Making: ${type}`);
}

makeShape(ShapeType.EDGE)
//makeShape("edge")   // this type of declaration won't work with enum

//heterogenous enum
enum RandomEnum{
    ID=1,
    NAME = "quadrilateral"
}

// we can make enums as contants
const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

const s = Sugars.HIGH;

//a gotcha

let t:[string, number] = ["chai", 10]
t.push("extra")

//we are allowed to push values in enums, since the enums are nothing but a touple and a touple is nothing but an enum




