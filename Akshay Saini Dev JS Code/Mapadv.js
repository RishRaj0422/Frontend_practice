
const people = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Bob", lastName: "Johnson", age: 25 },
    { firstName: "Alice", lastName: "Williams", age: 28 },
    { firstName: "Charlie", lastName: "Brown", age: 25 }
  ];

//   using chaining of filter and map = 
//   const filteredNames = people.filter(person => person.age < 30).map(person => person.firstName);

//   console.log(filteredNames);

// using reduce =

const filteredNames = people.reduce((acc, person) => {
    if (person.age < 30) {
      acc.push(person.firstName);
    }
    return acc;
  }, []);
  
  console.log(filteredNames);
  
// list of firstname and lastname = 
//   const output = people.map(x => x.firstName + " " + x.lastName);
//   console.log(output);

//   const input = people.reduce(function (acc, curr) {
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
//   }, {});

//   console.log(input);
