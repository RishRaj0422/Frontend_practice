const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining arrays
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
const copyArray = [...arr1];
console.log(copyArray); // Output: [1, 2, 3]