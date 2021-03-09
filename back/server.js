import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'));
});

server.listen(process.env.PORT || 4000, () => {
  console.log(`
  Server started
  `);
});
