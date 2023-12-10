/*
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const dbName = "coms319"; // Replace with your desired database name

const client = new MongoClient("mongodb://127.0.0.1:27017");

// server.js
app.get("/listItems", async (req, res) => {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
  
      const db = client.db(dbName);
      const collection = db.collection("Items");
  
      const query = {};
      const results = await collection.find(query).limit(100).toArray();
  
      console.log("Fetched data:", results);
      res.status(200).send(results);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: error.message }); // Send error message to the client
    } finally {
      await client.close();
    }
  });
  
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
*/

var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

const {MongoClient} = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "coms319";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/listItems", async (req, res) => {
    await client.connect();

    console.log("Node connected successfully to GET MongoDB");

    const query = {};

    const results = await db
    .collection("Items")
    .find(query)
    .limit(100)
    .toArray();

    console.log(results);
    res.status(200);
    res.send(results);
})