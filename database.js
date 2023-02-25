import { MongoClient } from 'mongodb';

import * as dotenv from 'dotenv'
dotenv.config();


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD


const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.nwry9.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const query = { type: "magicItems", subtype: "itemsOfMagic" };

// use dbFind(query).catch(console.dir); to run the query
export async function dbFind(query) {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        const db = client.db("shropshire-dm");
        const tarot = db.collection("tarrot");
        const result = await tarot.find(query).toArray();

        return result;

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// use dbFindOne(query).catch(console.dir); to run the query
export async function dbFindOne(query) {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        const db = client.db("shropshire-dm");
        const tarot = db.collection("tarrot");
        const result = await tarot.findOne(query);
        return result;

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
