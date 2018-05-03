import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import conf from './conf/config';

const port = process.env.PORT || conf.port;
const url = process.env.DB_URL || conf.url;

// Connect to MongoDB
mongoose.connect(url);

// Initialize http server
const app = express();

// app.use(express.static('public'))

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(port, () => {
  let { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});