
const arr = [5, 1 ,3, 2, 6];

function findSum(arr){
    let sum = 0;
    for(let i =0; i < arr.length; i++){
         sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);

const input = arr.reduce(function(max, curr){
if(curr > max){
    max = curr;
}
return max;
}, 0);

console.log(input);