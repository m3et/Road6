const consumer = require("./consumer");
const redis = require("redis");
// var redisClient = redis.createClient("redis://redis:6379");
var redisClient = redis.createClient();
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

var car_num = [0, 0, 0, 0, 0];

redisClient.on("error", function (err, reply) {
	console.log(err);
});

redisClient.set("CarsOnRoad", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("personal", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("truck", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("commercial", "0", function (err, reply) {
	console.log(reply);
});

for (let i = 1; i < 6; i++) {
	redisClient.set("CarsOnSeg" + i, "0", function (err, reply) {
		console.log(reply);
	});
}

consumer.on("data", function (msg) {
	var obj = JSON.parse(msg.value);

	if (obj.event == "ENTER_ROAD") {
		redisClient.incr("CarsOnRoad", function (err, reply) {
			console.log("CarsOnRoad   " + reply);
			
		});
		if (obj.vehicleType == "PERSONAL") {
			redisClient.incr("personal", function (err, reply) {
				console.log("personal :  " + reply);
				
			});}
		if (obj.vehicleType == "TRUCK") {
			redisClient.incr("truck", function (err, reply) {
		 		console.log("truck :  " + reply);
					
			});}
		if (obj.vehicleType == "COMMERCIAL") {
			redisClient.incr("commercial", function (err, reply) {
				 console.log("commercial :  " + reply);
						
			});}			
	}

	if (obj.event == "EXIT_ROAD") {
		redisClient.decr("CarsOnRoad", function (err, reply) {
			console.log("CarsOnRoad   " + reply);
		});
	
		if (obj.vehicleType == "PERSONAL") {
			redisClient.decr("personal", function (err, reply) {
				console.log("personal :  " + reply);
				
			});
		}
		if (obj.vehicleType == "TRUCK") {
			redisClient.decr("truck", function (err, reply) {
		 		console.log("truck :  " + reply);
					
			});
		}
		if (obj.vehicleType == "COMMERCIAL") {
			redisClient.decr("commercial", function (err, reply) {
				 console.log("commercial :  " + reply);
						
			});		
		}

	}

	for (let i = 1; i < 6; i++) {
		if (obj.event == "ENTER_SEGMENT" && obj.segment == i) {
			redisClient.incr("CarsOnSeg" + i, function (err, reply) {
				console.log("CarsOn seg " + i + " : " + reply);
			});
		}

		if (obj.event == "EXIT_SEGMENT" && obj.segment == i) {
			redisClient.decr("CarsOnSeg" + i, function (err, reply) {
				console.log("CarsOn seg " + i + " : " + reply);
			});
		}
	}

	for (var i = 0; i < 5; i++) {
		redisClient.get("CarsOnSeg" + i, function (err, reply) {
			car_num[i] = reply;
			console.log(car_num[i]);
		});
	
	}
	redisClient.get("CarsOnRoad" , function (err, reply) {
		var cars_on_road= reply;
		
	});
	redisClient.get("personal" , function (err, reply) {
		var personal_car= reply;
		
	});
	redisClient.get("truck" , function (err, reply) {
		var truck_car= reply;
		
	});
	redisClient.get("commercial" , function (err, reply) {
		var commercial_car= reply;
		
	});


	var msg = {
		CarsOnSeg1: json.car_num[0],
		CarsOnSeg2: json.car_num[1],
		CarsOnSeg3: json.car_num[2],
		CarsOnSeg4: json.car_num[3],
		CarsOnSeg5: json.car_num[4],
		CarsOnRoad: json.cars_on_road,
		personal_car: json.personal_car,
		truck_car: json.truck_car,
		commercial_car: json.commercial_car,
	};




	io.emit("new_data", JSON.stringify(msg.value));
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
