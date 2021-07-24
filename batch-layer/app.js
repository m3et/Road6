// express
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
// Socket.io
const { Server } = require("socket.io");
const io = new Server(server);
// database
const { initDB, insertDoc, closeDB } = require("./db");
// predictions
const {
	predictionOnEnter,
	predictionOnExit,
	predictionCounter,
	confusionMatrix,
} = require("./prediction");
// kafka consumer
const consumer = require("./consumer");

async function run() {
	await initDB().then(console.log).catch(console.error);
}
run();

/**
 * each msg need to be saved in Mongo
 * then if msg.event == ENTER_ROAD make prediction
 * then if msg.event == EXIT_ROAD check prediction update confusion matrix & UI table
 **/
consumer.on("data", function (msg) {
	// console.log(msg.value.toString());

	let event = JSON.parse(msg.value.toString());
	// Insert event to MongoDB
	insertDoc(event);
	// make prediction
	let plateNumber = event.plateNumber;
	let eventType = event.event;
	if (eventType == "ENTER_ROAD") {
		predictionOnEnter(event);
	} else if (eventType == "EXIT_ROAD") {
		predictionOnExit(event);
		json_table = JSON.stringify(confusionMatrix);
		console.log(json_table);
		io.emit("new_prediction", confusionMatrix);
	}
});

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: path.join(__dirname, "views/") });
});

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

const port = 3000;
server.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
