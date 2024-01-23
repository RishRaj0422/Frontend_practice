const human = {
    name: 'John',
    age: 30,
    isStudent: false
  };

  console.log(human.name);       // Output: 'John'
console.log(human.age);        // Output: 30
console.log(human.isStudent);  // Output: false

human.age = 35;   // Updates the value of the 'age' property to 35
human.city = 'NY'; // Adds a new property 'city' with the value 'NY'
console.log(human); // Output: { name: 'John', age: 35, isStudent: false, city: 'NY' }

// Nested Object

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    owner: {
      name: 'Alice',
      age: 28
    }
  };
  console.log(car.make); // Output: 'Alice'
  