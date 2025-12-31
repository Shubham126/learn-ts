//8

function makeShape(type: string, sides: number){
    console.log(`Making a ${type} with ${sides} sides`);
}

makeShape("Triangle", 3);

function getArea(): number{
    return 25;
}


//since we wanted to return a number here, a null is not valid
// function makePerimeter(side: number): number{
//     if(!side) return null;
//     return side*side;
// }

// we removed the type of the function here
function makePerimeter(side: number){
    if(!side) return null;
    return side*side;
}

//we won't give a return here so the void is used
function shape(): void{
    console.log("Your shape is ready")
}

// optional parameter below

// function makeFigure(type?: string){
// }

// this is also optional parameter
function makeFigure(type: string = "Quad"){}

//for libraries like react use this complex type description
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | " large"
}): number{
    return 4
}

