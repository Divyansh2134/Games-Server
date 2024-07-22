import { Router } from 'express';
import Players from '../models/players';

const router = Router();


router.post('/', async (req, res) => {
  const { userName, trophies, email, age, createdAt } = req.body;

  try {
    const player = new Players({
        userName,
        trophies,
        email,
        age,
        createdAt
    });

    await player.save();

    res.json(player);
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
