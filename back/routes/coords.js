import express from 'express';
import Coords from '../models/Coords.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
  console.log(req.body);
  console.log('hello');

  const { latitude, longitude } = req.body;

  const newCoords = await new Coords({ latitude, longitude });

  await newCoords.save();

  res.status(201).json(newCoords);
});

export default router;
