const kafkaConfig = {
	"group.id": "speed-layer-processing",
	"metadata.broker.list":
		"dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(
			","
		),
	"socket.keepalive.enable": true,
	"security.protocol": "SASL_SSL",
	"sasl.mechanisms": "SCRAM-SHA-256",
	"sasl.username": "dpl7bns4",
	"sasl.password": "zUKe5tVHTSwbc5a_x28H-zYlUDvfkZYV",
	debug: "generic,broker,security",
};

module.exports = kafkaConfig;
