function wrapInArray<T>(item : T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(23)
wrapInArray({flacout: "Ginger"})

function pair<A, B>(a: A, b: B): [A, B]{
    return[a, b]
}

pair("Masala", "test");
pair("masala", 20);
pair("Masala", {flavor: "Ginger"})

// interfaces can be generic also 

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}

const numberBoxCup: Box<string> = {content: "10"};

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data:{flavor: "Masala"}
}

//pre defined generic are also present