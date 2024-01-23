
console.log("start");

setTimeout( function x() {
    console.log("callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("while expires");
