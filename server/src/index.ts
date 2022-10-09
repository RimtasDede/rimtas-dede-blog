import dotenv from 'dotenv';
import express from 'express';

// env variables init
dotenv.config();

const app = express();
const port = process.env.PORT;

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});
