const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'


fruits[1] = 'grape'; // Replaces 'banana' with 'grape'
console.log(fruits); // Output: ['apple', 'grape', 'orange']

fruits.push('pear'); // Adds 'pear' to the end of the array
fruits.pop();        // Removes the last element ('pear') from the array
fruits.shift();      // Removes the first element ('apple') from the array
fruits.unshift('kiwi'); // Adds 'kiwi' to the beginning of the array
console.log(fruits);