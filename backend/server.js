import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT|| 9500;


app.use(express.json());



app.use('/api/auth', authRoutes);

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});
app.post('/api/login',  (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
   res.json({ success: true, message: "Login successful" });
});
app.post('/api/signup',  (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
   res.json({ success: true, message: "signup successful" });
  
  
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});