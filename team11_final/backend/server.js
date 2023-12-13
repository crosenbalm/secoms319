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
const menu_collection = 'final';
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
  .collection(menu_collection)
  .find(query)
  .limit(100)
  .toArray();

  console.log(results);
  res.status(200);
  res.send(results);
});

app.post("/addDish", async (req, res) => {
  let client;
  try {
    client = new MongoClient(url);
    await client.connect();

      console.log("Request Body:", req.body);

      const { id, title, price, description, image } = req.body;

      console.log(id, title, price, description, image);

      const db = client.db(dbName);
      const collection = db.collection(menu_collection);

      const existingItem = await collection.findOne({ id: id });

      if (existingItem) {
          console.log(`Item with ID ${id} already exists`);
          return res.status(400).json({ error: `Item with ID ${id} already exists` });
      }

      const newDocument = {
          id,
          title,
          price,
          description,
          image
      };

      console.log("New Document:", newDocument);

      const results = await collection.insertOne(newDocument);

      const insertedItem = results.ops && results.ops.length > 0 ? results.ops[0] : null;

      if (insertedItem) {
          return res.status(201).json(insertedItem);
      } else {
          console.error("Error adding item: No inserted item found");
          return res.status(500).json({ error: "Internal Server Error" });
      }
    } catch (error) {
      console.error("Error adding item:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    } finally {
      if (client) {
        await client.close();
      }
    }
  });


  app.delete("/deleteDish/:id", async (req, res) => {
    try {
      await client.connect();
  
      const productId = parseInt(req.params.id); // Corrected line
  
      const collection = db.collection(menu_collection);
  
      const result = await collection.deleteOne({ id: productId });
  
      if (result.deletedCount === 1) {
        console.log(`Successfully deleted product with ID ${productId}`);
        return res.status(200).json({ message: `Successfully deleted product with ID ${productId}` });
      } else {
        console.log(`No product found with ID ${productId}`);
        return res.status(404).json({ error: `No product found with ID ${productId}` });
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await client.close();
    }
  });
  


app.put("/updateItem/:id", async (req, res) => {
  try {
      await client.connect();
      const productId = parseInt(req.params.id);
      const updatedData = req.body;

      const collection = db.collection(menu_collection);
      const result = await collection.updateOne({ id: productId }, { $set: updatedData });

      if (result.modifiedCount === 1) {
          console.log(`Successfully updated product with ID ${productId}`);
          return res.status(200).json({ message: `Successfully updated product with ID ${productId}` });
      } else {
          console.log(`No product found with ID ${productId}`);
          return res.status(404).json({ error: `No product found with ID ${productId}` });
      }
  } catch (error) {
      console.error("Error updating item:", error);
      return res.status(500).json({ error: "Internal Server Error" });
  } finally {
      await client.close();
  }
});