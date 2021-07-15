const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl =
	"mongodb+srv://raphael:SpwZ8tKKKVyE419m@datalake.idnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbName = "cars";
const collectionName = "events";

let mongoClient;
let db;

const initDB = () =>
	MongoClient.connect(connectionUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).then((client) => {
		mongoClient = client
		db = mongoClient.db(dbName);
	});

const insertItem = (event) => {
	const collection = db.collection(collectionName);
	return collection.insertOne(event);
};

const getItems = () => {
	const collection = db.collection(collectionName);
	return collection.find({}).toArray();
};

const updateQuantity = (id, quantity) => {
	const collection = db.collection(collectionName);
	return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } });
};

const dropCollection = () => {
	const collection = db.collection(collectionName);
	collection.drop(function (err, delOK) {
		if (err) throw err;
		if (delOK) console.log("Collection deleted");
		client.close();
	});
};

const printCollection = () => {
	const collection = db.collection(collectionName);
	collection.find().toArray(function (err, docs) {
		console.log(JSON.stringify(docs));
	});
};


module.exports = {
	initDB,
	insertItem,
	getItems,
	updateQuantity,
	dropCollection,
	printCollection,
};

// initDB().then(() => {
// 	console.log("Mongo is connected");
// 	printCollection();
// 	mongoClient.close()
// });