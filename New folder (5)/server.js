const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use(bodyParser.json());

// GET request
app.get('/api/posts', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  res.json(response.data);
});

// POST request
app.post('/api/posts', async (req, res) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
  res.json(response.data);
});

// PUT request
app.put('/api/posts/:id', async (req, res) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
  res.json(response.data);
});

// DELETE request
app.delete('/api/posts/:id', async (req, res) => {
  const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
  res.json(response.data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
