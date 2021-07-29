const redis = require("redis");
const { promisifyAll } = require('bluebird');

promisifyAll(redis);
var redisClient = redis.createClient("redis://redis:6379");
// const redisClient = redis.createClient();

redisClient.on("error", function (err, reply) {
	console.log(err);
});

redisClient.set("CarsOnRoad", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("PERSONAL", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("TRUCK", "0", function (err, reply) {
	console.log(reply);
});

redisClient.set("COMMERCIAL", "0", function (err, reply) {
	console.log(reply);
});

for (let i = 1; i < 6; i++) {
	redisClient.set("CarsOnSeg" + i, "0", function (err, reply) {
		console.log(reply);
	});
}

module.exports = redisClient