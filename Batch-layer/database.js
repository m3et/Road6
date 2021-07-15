const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl =
	"mongodb+srv://raphael:SpwZ8tKKKVyE419m@datalake.idnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = "DataLake";

let db;

const initDB = () =>
	MongoClient.connect(connectionUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).then((client) => {
		db = client.db(dbName);
	});

const insertItem = (event) => {
	const collection = db.collection("events");
	return collection.insertOne(event);
};

const getItems = () => {
	const collection = db.collection("events");
	return collection.find({}).toArray();
};

const updateQuantity = (id, quantity) => {
	const collection = db.collection("events");
	return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } });
};

module.exports = { initDB, insertItem, getItems, updateQuantity };
