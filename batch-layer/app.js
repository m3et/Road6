const { initDB, insertDoc, closeDB } = require("./db");
const { predictExitSegment } = require("./bigML");
const consumer = require("./consumer");

async function run() {
	await initDB().then(console.log).catch(console.error);
}

run();

const carsPrediction = {};

/**
 *  each msg need to be saved in Mongo
 * then if msg.event == ENTER_ROAD make prediction
 * then if msg.event == EXIT_ROAD check prediction
 */

consumer.on("data", function (msg) {
	// console.log(msg.value.toString());

	let obj = JSON.parse(msg.value.toString());
	// Insert event to MongoDB
	insertDoc(obj);
	// make prediction
	if (obj.event == "ENTER_ROAD") {
		let plateNumber = obj.plateNumber;
		carsPrediction[plateNumber] = predictExitSegment();
	} else if (obj.event == "EXIT_ROAD") {
		let plateNumber = obj.plateNumber;
		carsPrediction = obj.plateNumber;
	}
});

// const app = express()
// app.use(bodyParser.json())
// app.use(routes)

// init().then(() => {
//   console.log('starting server on port 3000')
//   app.listen(3000)
