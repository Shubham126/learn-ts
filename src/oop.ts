// 10
// this and 

class Shape{
    colour: string;
    // side: number

    // constructor(colour: string, side: number){
    //     this.colour = colour
    //     this.side = side

    // }

    constructor(colour: string){
        this.colour = colour;
        console.log(this)
    }
}

// const Square = new Shape("Ginger", 20)
// Square.colour = "red"

const Circle = new Shape("Green")