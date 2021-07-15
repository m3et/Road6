// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");
const kafkaConfig = require("./config");

const prefix = "dpl7bns4-";
const topic = `${prefix}new`;

const topics = [topic];
const consumer = new Kafka.KafkaConsumer(kafkaConfig, {
	"auto.offset.reset": "beginning",
});

consumer.on("error", function (err) {
	console.error(err);
});

consumer.on("ready", function (arg) {
	console.log(`Consumer ${arg.name} ready`);
	consumer.subscribe(topics);
	console.log(`Consumer ${arg.name} is subscribe to ${topics}`);
	consumer.consume();
});

consumer.on("disconnected", function (arg) {
	process.exit();
});
consumer.on("event.error", function (err) {
	console.error(err);
	process.exit(1);
});
consumer.on("event.log", function (log) {
	console.log(log);
});
consumer.connect();

module.exports = consumer;
