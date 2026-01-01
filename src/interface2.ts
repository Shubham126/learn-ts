// 12

interface Chai{
    flavor: string
    price: number
    milk?: boolean
}

const masala: Chai = {
    flavor: "Masala",
    price: 30,
}

interface Shop{
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: " Chai Code cafe"}
// s.id = 2

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine{
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("Stop")
    }
}

//index signature

interface ChaiRating{
    [flavor: string]: number
}

const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
}

interface User{
    name: String
}

interface User{
    age: number
}

const u : User = {
    name: "Shubham",
    age: 22
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}