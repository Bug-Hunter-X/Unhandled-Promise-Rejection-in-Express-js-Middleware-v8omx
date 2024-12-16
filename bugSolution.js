const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation with proper error handling
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error('Error:', err); // Log the error
    res.status(500).send('Internal Server Error'); // Send a proper error response
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
}