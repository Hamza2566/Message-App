import express from 'express';

const app = express();
const PORT = process.env.PORT || 9500;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});