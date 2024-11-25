import { MongoClient } from "mongodb";

const uri = "YOUR_MONGODB_URI";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("haive");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

export { connectToDatabase };
