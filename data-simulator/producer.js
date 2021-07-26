const uuid = require("uuid");
const kafkaConfig = require("./config");
const Kafka = require("node-rdkafka");

const prefix = "dpl7bns4-";
const topic = `${prefix}new`;
const producer = new Kafka.Producer(kafkaConfig);

const genMessage = (m) => new Buffer.alloc(m.length, m);

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

producer.on("ready", function (arg) {
	console.log(`Producer ${arg.name} is ready on topic ${topic}`);
});

const produce_msg = async (msg) => {
	if (!producer.isConnected()) {
		let iteration = 1;
		while (!producer.isConnected()) {
			await producer.connect();
			await sleep(1000);
			console.log(`Still here ${iteration}`);
			iteration++;
		}
	}
	// await producer.connect();

	// after the produce has connected, we start an interval timer
	try {
		let _msg = JSON.stringify(msg);
		// send a message to the configured topic with
		// the key and value formed from the current value of `i`
		await producer.produce(topic, -1, genMessage(_msg), uuid.v4());

		// if the message is written successfully, log it and increment `i`
		producer.flush(0);
		console.log("writes: ", msg);
	} catch (err) {
		console.error("could not write message " + err);
	}

	// await producer.disconnect()
};

producer.connect();
module.exports = produce_msg;
