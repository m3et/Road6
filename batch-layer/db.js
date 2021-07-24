const { MongoClient } = require("mongodb");

const url =
	"mongodb+srv://raphael:SpwZ8tKKKVyE419m@datalake.idnsl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const dbName = "cars";
let db;
let collection;

const initDB = async function () {
	// Use connect method to connect to the server
	await client.connect();
	db = client.db(dbName);
	collection = db.collection("events");
	return "Connected successfully to MongoDB server";
};

const closeDB = async function () {
	await client.close();
};

const insertDoc = async function (doc) {
	const insertResult = await collection.insertOne(doc);
	// console.log("Inserted document =>", insertResult);
};

module.exports = {
	initDB,
	closeDB,
	insertDoc,
};
