import { Router } from 'express';
import Match from '../models/matches';

const router = Router();

// Create a new match
router.post('/', async (req, res) => {
  const { player1, player2, winner, time, duration } = req.body;

  try {
    const match = new Match({
      player1,
      player2,
      winner,
      time,
      duration
    });

    await match.save();

    res.json(match);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    } else {
      console.error('Unexpected error', err);
      res.status(500).send('Server Error');
    }
  }
});

export default router;
