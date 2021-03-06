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
	errRate,
	wrongPrediction,
} = require("./prediction");
// kafka consumer
const consumer = require("./consumer");
const { info } = require("console");
const getConfusionMatrix = require('./controllers/confusionMatrix')

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
	let event = JSON.parse(msg.value.toString());
	// Insert event to MongoDB
	insertDoc(event);
	// make prediction
	let eventType = event.event;
	if (eventType == "ENTER_ROAD") {
		predictionOnEnter(event);
	} else if (eventType == "EXIT_ROAD") {
		let info = predictionOnExit(event);

		console.log(info);
		io.emit("new_prediction", confusionMatrix, info);
	}
});



io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

app.get("/", getConfusionMatrix);

const port = 3000;
server.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
