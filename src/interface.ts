//6

type shapeDescription = {
    type: string;
    side: number;
    closedFigure: boolean
};

// function findPermimeter(order: {type: string; side:number; closedFigure: boolean}){
//     console.log(order);
// }

// function findArea(order: {type: string; side: number; closedFigure: boolean}){
//     console.log(order);
// }

// we can describe the shape using the predefined interface
// in the above example we have repeated the same structure twice
// to avoid that we can use interface or type alias

function findPermimeter(order: shapeDescription){
    console.log(order);
}

function findArea(order: shapeDescription){
    console.log(order);
}

// implementing interface or type alias in class
// we made a class Square which implements the shape interface
// we can define the type but in a certain limit
type shape = {
    edge: number;
    vertex: number
};

class Square implements shape{
    edge= 4;
    vertex= 4;
}

// we will encounter a problem here
// when object is basic we can use it, but when it is defined by us then it is not allowed, hence the error highlighting "curve"


type curve = "open" | "closed";

// class figure implements curve{
//     curve = "open";
// }

//use interface to counter the error
// area is similar to the shape 
interface structure {
    length: number;
    breadth: number
};

// making interface for classes like this are easy, 
// but we will learn how to convert hard-coded values of the object to conver to interface.


//we generally prefer making interface for classes instead of types
interface fig{
    side: "length" | "breadth";
}

class Area implements fig{
    side: "length" | "breadth" = "length";
}

// a place where types usually breaks
// so we prefer making the interfaces
// the below code has error in the "Response", make the reponse interface instead of type, below code is commented

// type Response = {ok: true} | {ok: false};
// class myRes implements Response{
//     ok: boolean = true;
// }

// "|" is union
type ShapeType = "circle" | "rectangle" | "triangle";

function getShape(s: ShapeType){
    console.log(s);
}

// "&" is intersection
type Quadilateral = {vertex: number};
type Pentagon = {edges: number};

type ComplexShape = Quadilateral & Pentagon;

const building: ComplexShape = {
    vertex: 6,
    edges: 6
}

// Optional values in ts

type User={
    username: string;
    bio?: string
}

const u1: User = {username: "Shubham"};
const u2: User = {username: "Aditya", bio: "hello there!"};


// readonly values in ts
type config={
    readonly appName: string;
    version: number
}

const cfg: config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "Sirji"; 
// error: cannot assign to 'appName' because it is a read-only property