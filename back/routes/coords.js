import express from 'express';
import Coords from '../models/Coords.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
  console.log(req.body);

  const { latitude, longitude } = req.body;

  if (latitude > 0 && longitude > 0) {
    const newCoords = await Coords.find({});
    newCoords[0].latitude = latitude;
    newCoords[0].longitude = longitude;
    await newCoords.save();
    res.status(201).json(newCoords);
  } else {
    res.json({ data: 'none' });
  }
});

export default router;
