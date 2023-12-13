const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 8081;
const host = 'localhost';

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'coms319';
const collection = 'final';
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`);
});

app.get("/listDishes", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
  .collection(collection)
  .find(query)
  .limit(100)
  .toArray();

  console.log(results);
  res.status(200);
  res.send(results);
});