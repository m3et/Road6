const simulator = require("./simulator");
// const produce = require("./producer");
const produce_msg = require('./producer')

const time = 15 * 1000
const events = ["ENTER_SEGMENT", "EXIT_SEGMENT", "EXIT_ROAD"]

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const trackCar = async function () {
	const json = simulator();

	const date = new Date(json.date);

	let msg = {
		plateNumber: json.plateNumber,
		vehicleType: json.vehicleType,
		date: date.toJSON(),
		specialDate: json.specialDate,
	};

	for (let i = json.enterSegment; i <= json.exitSegment; i++) {
		msg.segment = i;
		msg.event = events[0];
		// console.log(`Message: ${JSON.stringify(msg)}, Segment: ${msg.segment}, Event: ${msg.event}`)
		// console.log(msg);

		await produce_msg(msg); // enter segment

		await sleep(time);

		date.setSeconds(date.getSeconds() + 15);
		msg.date = date.toJSON();
		msg.event = events[1];
		// console.log(msg);
		await produce_msg(msg); // exit segment
	}
	msg.event = events[2];
	// console.log(msg);
	await produce_msg(msg); // exit road
};

// call the `trackCar` function and log an error if it occurs
setInterval(trackCar, 1000);
// trackCar()
