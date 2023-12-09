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
const dbName = 'reactdata';

// Connect to MongoDB
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Define your MongoDB collection
  const itemsCollection = db.collection('your_collection_name');

  // Example route to fetch all items
  app.get('/items', async (req, res) => {
    try {
      const items = await itemsCollection.find({}).toArray();
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`);
});
