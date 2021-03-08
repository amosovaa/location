import mongoose from 'mongoose';

const Coords = mongoose.model('Coords', {
  latitude: Number,
  longitude: Number,
});

export default Coords;
