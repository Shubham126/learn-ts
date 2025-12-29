// 3
// Union types

let subs: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airLineSeat: 'aisle' | 'window' | 'middle' = 'aisle';
airLineSeat = 'window';

const orders: string[] = ["12", "25", "27", "28", "29"];

let currentorder: string | undefined;

for(let order of orders){
    if(order === "28"){
        currentorder = order; 
        break;
    }

    currentorder = "11";
}

console.log(currentorder);

