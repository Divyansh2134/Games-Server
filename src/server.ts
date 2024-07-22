import express from 'express';
import connectDB from './db';
import playerRoutes from './routes/player';
import matchRoutes from './routes/match';

const app = express();
const port = 3000;

connectDB();
app.use(express.json());

app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
