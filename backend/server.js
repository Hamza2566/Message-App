import express from 'express';

const app = express();
const PORT = process.env.PORT || 9500;


app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});
app.post('/api/login',  (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
   res.json({ success: true, message: "Login successful" });
  
  
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});