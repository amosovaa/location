import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
import coordsRouter from './routes/coords.js';
import path from 'path';

const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve('../client/build/')));
app.get('/', (req, res) => {
  res.send('hello');
});
app.use('/', coordsRouter);

export default app;
