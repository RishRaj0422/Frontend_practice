
const arr = [5, 1 ,3, 2, 6];

// const binary = function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);
// const output = arr.map(function binary(x){
//     return x.toString(2);
// })
const output = arr.map(x => x.toString(2));

console.log(output);
