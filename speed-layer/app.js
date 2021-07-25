const consumer = require("./consumer");
var redis = require("redis");
// var redisClient = redis.createClient("redis://redis:6379");
var redisClient = redis.createClient();


const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
// Socket.io
const { Server } = require("socket.io");
const io = new Server(server);



redisClient.on("error", function (err, reply) {
	console.log(err);
});

redisClient.set("CarsOnRoad", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("CarsOnSeg1", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("CarsOnSeg2", "0", function (err, reply) {
	console.log(reply);

});

redisClient.set("CarsOnSeg3", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("CarsOnSeg4", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("CarsOnSeg5", "0", function (err, reply) {
	console.log(reply);
});

consumer.on("data", function (msg) {

	

	var obj = JSON.parse(msg.value);
 
	if (obj.event == "ENTER_ROAD") {
		redisClient.incr("CarsOnRoad", function (err, reply) {
			console.log("CarsOnRoad   " + reply);
		});
		redisClient.rpush("plateList", String(obj.plateNumber) , function (err, reply) {
			console.log("list push " + reply);

			
		});
	}

	if (obj.event == "EXIT_ROAD") {
		redisClient.decr("CarsOnRoad", function (err, reply) {
			console.log( "CarsOnRoad   " + reply);
		});
		redisClient.lrem("list", 0, String(obj.plateNumber), function (err, reply) {
			console.log("list remove    " + reply);
		});
	}

	if (obj.event == "ENTER_SEGMENT" && obj.segment == 1) {
		redisClient.incr("CarsOnSeg1", function (err, reply) {
			console.log("CarsOn seg 1   " + reply);
		});
	}

	if (obj.event == "EXIT_SEGMENT" && obj.segment == 1) {
		redisClient.decr("CarsOnSeg1", function (err, reply) {
			console.log("CarsOn seg 1   " + reply);
		});
	}

	if (obj.event == "ENTER_SEGMENT" && obj.segment == 2) {
		redisClient.incr("CarsOnSeg2", function (err, reply) {
			console.log("CarsOn seg 2    " +  reply);
		});
	}

	if (obj.event == "EXIT_SEGMENT" && obj.segment == 2) {
		redisClient.decr("CarsOnSeg2", function (err, reply) {
			console.log("CarsOn seg 2    " + reply);
		});
	}

	if (obj.event == "ENTER_SEGMENT" && obj.segment == 3) {
		redisClient.incr("CarsOnSeg3", function (err, reply) {
			console.log("CarsOn seg 3    " + reply);
		});
	}

	if (obj.event == "EXIT_SEGMENT" && obj.segment == 3) {
		redisClient.decr("CarsOnSeg3", function (err, reply) {
			console.log("CarsOn seg 3     " + reply);
		});
	}  

	if (obj.event == "ENTER_SEGMENT" && obj.segment == 4) {
		redisClient.incr("CarsOnSeg4", function (err, reply) {
			console.log("CarsOn seg 4    " + reply);
		});
	}

	if (obj.event == "EXIT_SEGMENT" && obj.segment == 4) {
		redisClient.decr("CarsOnSeg4", function (err, reply) {
			console.log("CarsOn seg 4    " + reply);
		});
	}

	if (obj.event == "ENTER_SEGMENT" && obj.segment == 5) {
		redisClient.incr("CarsOnSeg5", function (err, reply) {
			console.log("CarsOn seg 5    " + reply);
		});
	}

	if (obj.event == "EXIT_SEGMENT" && obj.segment == 5) {
		redisClient.decr("CarsOnSeg5", function (err, reply) {
			console.log("CarsOnseg 5    " + reply);
		});
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

const port = 8000;
server.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});



