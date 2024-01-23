
const radius =[3,1,2,4];

const area = function(radius) {
    return Math.PI * radius * radius;
}

// map approach = 

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.map(area));
// Both are same 
console.log(radius.calculate(area));

// 2nd approach = 
// const calculate = function(radius, logic){
//     const output = [];
//     for(let i=0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(radius, area));

// 1st approach = 
// const calculateArear = function (radius) {

//     const output = [];
//     for(let i=0; i < radius.length; i++){

//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArear(radius));