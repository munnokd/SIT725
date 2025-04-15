const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Sum Calculator API');
});

// Add endpoint
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    res.json({ result: sum });
  } else {
    res.status(400).json({ error: 'Invalid input, please provide two numbers' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});