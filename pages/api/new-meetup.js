// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("d", data);
    const client = await MongoClient.connect(
      "mongodb+srv://ira:cb998585m@cluster0.tjw4ggx.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    await meetupsCollection.insertOne(data);

    await client.close();

    res.status(201).json({ message: "Meetup is inserted!" });
  }
}

export default handler;
