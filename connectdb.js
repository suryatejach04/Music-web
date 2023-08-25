const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://akhil:akhil@cluster0.zq9rcbe.mongodb.net/test';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Access the database
    const db = client.db('decibel');

    // Insert a new document into the collection
    const result = await db.collection('users').insertOne({ name: 'Akhil' });
    console.log(`Inserted document with _id: ${result.insertedId}`);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

connect();


