const consumer = require("./consumer");
// express
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
// Socket.io
const { Server } = require("socket.io");
const { json } = require("express");
const io = new Server(server);
// redis client
const redisClient = require("./redis");

// controller
const getDashboard = require("./controllers/dashboard");

let callbackRedis = (error, result) => {
	if (error !== null) {
		console.log("Caught error: " + String(error));
		return;
	}
	// console.log(result);
};

function updateRedis(event) {
	let eventType = event.event;
	let carType = event.vehicleType;
	let segmentNumber = event.segment;

	// console.log(
	// 	`eventType ${eventType}, carType ${carType}, segment ${segmentNumber} `
	// );

	if (eventType == "ENTER_ROAD") {
		redisClient.incr("CarsOnRoad", callbackRedis);
		redisClient.incr(carType, callbackRedis);
	} else if (eventType == "EXIT_ROAD") {
		redisClient.decr("CarsOnRoad", callbackRedis);
		redisClient.decr(carType, callbackRedis);
	} else if (eventType == "ENTER_SEGMENT") {
		redisClient.incr("CarsOnSeg" + segmentNumber, callbackRedis);
	} else if (eventType == "EXIT_SEGMENT") {
		redisClient.decr("CarsOnSeg" + segmentNumber, callbackRedis);
	}
}

const retrieveData = async () => {
	let data = {};
	data["CarsOnRoad"] = await redisClient.getAsync("CarsOnRoad");
	data["PERSONAL"] = await redisClient.getAsync("PERSONAL");
	data["TRUCK"] = await redisClient.getAsync("TRUCK");
	data["COMMERCIAL"] = await redisClient.getAsync("COMMERCIAL");
	data["CarsOnRoad"] = await redisClient.getAsync("CarsOnRoad");

	for (let i = 1; i < 6; i++) {
		data["CarsOnSeg" + i] = await redisClient.getAsync("CarsOnSeg" + i);
	}

	return data;
};

consumer.on("data", async (msg) => {
	var event = JSON.parse(msg.value);

	updateRedis(event);
	let data = await retrieveData();
	console.log(data);

	io.emit("new_data", data);
});

app.get("/", getDashboard);

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

const port = 4000;
app.use(express.static("public"));

server.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
