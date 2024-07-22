import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';  // Import cors
import connectDB from './db';
import playerRoutes from './routes/player';
import matchRoutes from './routes/match';

const app = express();
const port = 3000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001',  // Allow your React app to connect
    methods: ['GET', 'POST'],  // Allow specific methods
    allowedHeaders: ['Content-Type'],  // Allow specific headers
    credentials: true  // Allow cookies to be sent with the requests
  }
});

connectDB();
app.use(express.json());
app.use(cors());  // Use the cors middleware

app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

io.on('connect', (socket: Socket) => {
  console.log('a user connected', socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
