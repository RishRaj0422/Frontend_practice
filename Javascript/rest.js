function sum(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4,8)); // Output: 10
  