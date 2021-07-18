const ROAD_SEGMENT = [1, 2, 3, 4, 5];
const VEHICLE_TYPE = ["PERSONAL", "COMMERCIAL", "TRUCK"];

const simulator = function () {
	/*
        Math.random()         ->  0.12345678901234
            .toString()       ->  "0.12345678901234"
                .slice(2,10)  ->  "12345678"
  	*/
	const plateNumber = Math.random().toString().slice(2, 10); // generate a random car plate
	const vehicleType = getVehicleType();
	const date = randomDate(new Date(2021, 0, 1), new Date());
	const specialDate = (date.getDay() == 5 || date.getDay()) == 6 ? true : false;
	const enterSegment = getEntranceSegment();
	const exitSegment = getExitSegment(enterSegment, specialDate);

	return {
		plateNumber: plateNumber,
		vehicleType: vehicleType,
		specialDate: specialDate,
		enterSegment: enterSegment,
		exitSegment: exitSegment,
		date: date.toJSON()
	};

	// return JSON;
};


/**
 *
 */
function getEntranceSegment() {
	return ROAD_SEGMENT[getRandomIntInclusive(0, 4)];
}

/**
 *
 */
function getExitSegment(entrance, specialDate) {
	if (entrance == 5) {
		return 5;
	} else if (entrance == 4) {
		return Math.random() > 0.7 ? 4 : 5;
	} else if (entrance == 3) {
		const rand = Math.random();
		if (rand < 0.7) {
			return 4;
		}
		if (rand < 0.85) {
			return 5;
		}
		return 3;
	} else if (entrance == 2) {
		const rand = Math.random();
		if (rand < 0.7) {
			return 3;
		}
		if (rand < 0.8) {
			return 4;
		}
		if (rand < 0.9) {
			return 5;
		}
		return 2;
	} else if (entrance == 1) {
		const rand = Math.random();
		if (rand < 0.7) {
			return 2;
		} else if (rand < 0.775) {
			return 3;
		} else if (rand < 0.85) {
			return 4;
		} else if (rand < 0.925) {
			return 5;
		}
		return 1;
	}

	// higher travel distance
	// if (specialDate) {
	// } else {
	// 	// need to implement
	// }
}

/**
 * 70% - PERSONAL
 * 20% - COMMERCIAL
 * 10% - TRUCK
 * @returns vehicleType with distributed probability
 */
function getVehicleType() {
	let rnd = getRandomIntInclusive(0, 9);
	if (rnd < 7) {
		return VEHICLE_TYPE[0];
	} else if (rnd == 7 || rnd == 8) {
		return VEHICLE_TYPE[1];
	}
	return VEHICLE_TYPE[2];
}

/**
 *
 * @param {Integer} min
 * @param {Integer} max
 * @returns a random integer between two values, inclusive -> [min, max]
 */
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function randomDate(start, end) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
}

// we define an async function that writes a new message each second

module.exports = simulator;
