// never type
// Learn where type assertion fails

let response: any = "42";

// type assertion fails here, everything is correct, but this happens when we load variables from env or external sources
// so we need to give assurance to typescript and make it belive us on the type we are using
let numbericLength:number = (response as string).length;

type Book = {
    name: string
}

let bookString = '{"name": "Atomic habits"}';
let bookObj: Book = JSON.parse(bookString) as Book;

// the console.log is only showing the .name function because we asserted the type to Book
// remove "as Book" and see the difference
console.log(bookObj.name)


// we need to annotate dom elements too
// this is also type assertion
const inputElement = document.getElementById("username") as HTMLInputElement;


// discussion on unknown and any

let value: any
value = "Hello TS";
value = 123;
value = true;
value.toUpperCase();
// gives no error because any type bypasses type checking

let newValue: unknown;
newValue = "Hello TS";
newValue = 123;
newValue = true;
// newValue.toUpperCase(); // gives error because unknown type forces type checking
if(typeof newValue === "string"){
    newValue.toUpperCase(); // no error now
}


//try catch block

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}

//more safety checks
const data:unknown = "Hello TS";
const strData:string = data as string; // type assertion

// type "never"

type Role = "admin" | "user" | "guest";

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
    }
    if(role === "user"){
        console.log("Redirect to user dashboard");
    }
    if(role === "guest"){
        console.log("Redirect to guest dashboard");
    }
    role;
}

function neverReturn(): never{
    while(true){
        // infinite loop
        // such as live servers or polling services
    }
}