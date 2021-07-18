const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
	"mongodb+srv://raphael:SpwZ8tKKKVyE419m@datalake.idnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url)

// Database Name
const dbName = 'cars'
let db
let collection

const initDB = async function () {
	// Use connect method to connect to the server
	await client.connect()
	db = client.db(dbName)
	collection = db.collection('events')
	return 'Connected successfully to MongoDB server'
}

const closeDB = async function() {
	await client.close()
}

const insertDoc = async function (doc) {
	const insertResult = await collection.insertOne(doc)
	console.log('Inserted document =>', doc)
}

module.exports = {
	initDB,
	closeDB,
	insertDoc
};


// main()
// 	.then(console.log)
// 	.catch(console.error)
// 	.finally(() => client.close())


// const { MongoClient } = require("mongodb");

// const connectionUrl =
// 	"mongodb+srv://raphael:SpwZ8tKKKVyE419m@datalake.idnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// const dbName = "cars";
// const collectionName = "events";

// let _db;

// const initDB = () =>
// 	MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
// 		_db = client.db(dbName)
// 	})

// const insertItem = (event) => {
// 	const collection = _db.collection(collectionName);
// 	return collection.insertOne(event);
// };

// const getItems = () => {
// 	const collection = _db.collection(collectionName);
// 	return collection.find({}).toArray();
// };

// const dropCollection = () => {
// 	const collection = _db.collection(collectionName);
// 	collection.drop(function (err, delOK) {
// 		if (err) throw err;
// 		if (delOK) console.log("Collection deleted");
// 		client.close();
// 	});
// };

// const printCollection = () => {
// 	const collection = _db.collection(collectionName);
// 	collection.find().toArray(function (err, docs) {
// 		console.log(JSON.stringify(docs));
// 	});
// };


// module.exports = {
// 	initDB,
// 	insertItem,
// 	getItems,
// 	dropCollection,
// 	printCollection,
// };
