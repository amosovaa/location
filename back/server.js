import app from './app.js';
import http from 'http';

const server = http.createServer(app);

server.listen(process.env.PORT ?? 3000, () => {
  console.log(`
  Server started at ${port} port
  `);
});
