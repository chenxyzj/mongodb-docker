import {MongoClient} from "mongodb";
// const {MongoClient} = require("mongodb");

const uri = 'mongodb://db:27017';

connect();

async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('mybooks');
        console.log(`Connected to database ${db.databaseName}`);
    } catch (error) {
        console.error("Error happened! ",error);
    } finally {
        console.log(`Closing mongodb connection.`);
        client.close();
        console.log(`Closed connection.`);
    }
}