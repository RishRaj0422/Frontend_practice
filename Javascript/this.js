const obj = {
    name: 'John',
    sayHello: function() {
      // Traditional function, `this` refers to the `obj` object
      console.log('Hello, ' + this.name);
    },
    sayHelloArrow: () => {
      // Arrow function, `this` refers to the value of `this` from the outer scope,
      // which is the global object (or undefined in strict mode)
      console.log('Hello, ' + this.name);
    }
  };
  
  obj.sayHello();         // Output: Hello, John
  obj.sayHelloArrow();    
  
  
  
  
  // Output: Hello, undefined (or will throw an error in strict mode)
  