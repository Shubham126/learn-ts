function getValue(kind: string | number){
    if(typeof kind === 'string'){

        return `${kind} is a string`;
    }
    return `${kind} is a number`;
}

console.log(getValue(123));
console.log(getValue("Hello"));