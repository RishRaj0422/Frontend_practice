function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Async data';
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  