//4

function getValue(kind: string | number){
    if(typeof kind === 'string'){

        return `${kind} is a string`;
    }
    return `${kind} is a number`;
}

//truthiness

function isTruth(msg?: string){
    if(msg){
        return `Message is ${msg}`;
    }
    return `there is no message`;
}

//exhaustive checks
function getShape(shape: "circle" | "square" | "rectangle" | number){
    if(shape === "circle"){
        return "You selected circle";
    } else if(shape === "square"){
        return "You selected square";
    } else if (shape === "rectangle"){
        return "You selected rectangle";
    }
    return `Shape of ${shape} sides`;
}


// gaurd rails
class square{
    side(){
        return `I have 4 sides`;
    }
}

class pentagon{
    side(){
        return `I have 5 sides`;
    }
}

function getPolygon(polygon: square | pentagon){
    if(polygon instanceof square){
        return polygon.side();
    }
    return polygon.side();
}

// we can types of our own here
type shapeType = {
    type: string,
    side: number
}

function getShapeType(obj: any): obj is shapeType {
    return (
        typeof obj == "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.side === "number"
    )
}

function printShapeType(item: shapeType | string){
    if(getShapeType(item)){
        return `Shape type is ${item.type} with ${item.side} sides`;
    }
    return `${item} is not a shape type`;
}

//intresting way to define type in production
type Feline = {type: "cat"; cute: number };
type Canine = {type: "dog"; danger: "none" | "mid" | "high" | string};
type Leporidae = {type: "rabbit"; jumping: boolean };

type Pet = Feline | Canine | Leporidae;

function buyPet(order: Pet){
    switch(order.type){
        case "cat":
            return `You ordered a cat with cuteness level of ${order.cute} out of 10`;
        case "dog":
            return `You ordered a dog with danger level of ${order.danger}`;
        case "rabbit":
            return `You ordered a rabbit. Can it jump high? ${order.jumping}`;
    }
}

function pet(order: Feline | Canine | Leporidae){
    if("cute" in order){
        return `You ordered a cat`;
    }
}

// function isStringArray(arr: unknown): arr is string[]{    }

console.log(getValue(123));
console.log(getValue("Hello"));
console.log(isTruth("Hello TS"));
console.log(isTruth());
console.log(getShape("circle"));
console.log(getShape(5));
console.log(getPolygon(new square()));
console.log(getPolygon(new pentagon()));
console.log(printShapeType({type: "triangle", side: 3}));
console.log(printShapeType("Apple"));
console.log(buyPet({type: "cat", cute: 9}));
console.log(buyPet({type: "dog", danger: "high"}));
console.log(buyPet({type: "rabbit", jumping: true}));