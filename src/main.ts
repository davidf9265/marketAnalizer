import express from 'express';
import { readCSVData } from './adapters/csvFiles';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/load-data', (req, res) => {
  
  readCSVData();
  res.send({ message: 'Loading data from csv...' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
