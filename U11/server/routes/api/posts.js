const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  
  const MongoClient = require('mongodb').MongoClient;
  const uri = "xxx";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("Web-Eng").collection("Posts");
    // perform actions on the collection object
    res.send(collection.find({}).toArray());
    client.close();
  });

});

// Add Post
router.post('/', async (req, res) => {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "xxx";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("Web-Eng").collection("Posts");
    // perform actions on the collection object
    collection.insertOne({
      text: req.body.text,
      createdAt: new Date()
    });
    res.status(201).send();
    client.close();
  });
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "xxx";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("Web-Eng").collection("Posts");
    // perform actions on the collection object
    collection.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
    client.close();
  });
});

module.exports = router;
