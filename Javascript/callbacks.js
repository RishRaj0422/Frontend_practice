function fetchDataFromServer(callback) {
    // Simulate an asynchronous operation that takes 2 seconds
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 5000);
  }
  
  function processUserData(user) {
    console.log(`User Name: ${user.name}, Age: ${user.age}`);
  }
  
  fetchDataFromServer(processUserData);