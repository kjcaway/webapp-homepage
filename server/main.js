import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import api from './routes';

const app = express();

let port = 3000;
// 되나?

// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(path.join(__dirname, './../public')));

// LOAD API FROM ROUTES
app.use('/api', api);
// TO BE IMPLEMENTED

app.listen(port, () => {
  console.log('Express is listening on port', port);
});

console.log('Read: server/main.js......');
