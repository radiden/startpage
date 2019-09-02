var hours = ["midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", "sixty"];
var i = 0;
var minutes = 69; //funny number haha (trust me it was gonna be 0 initally but thats not functional)

function getminute() {
	var today = new Date();
	if(today.getMinutes() === 30) {
		return 'it\'s half';
	}
	else if(today.getMinutes() === 15) {
		return 'it\'s quarter';
	}
	else if(today.getMinutes() === 0) {
		return 'it\'s ';
	}
	else { return 'it\'s ' + hours[today.getMinutes()]; }
}

function gettime() {
	var today = new Date();
	if(today.getMinutes() === 0) {
		return 'it\'s ' + hours[today.getHours()];
	}
	return getminute() + " past " + hours[today.getHours()];
}

function updatetime() {
	var today = new Date();
	if (i === 0) {
		document.getElementById("clock").innerText = gettime();
		i++;
		updatetime();
	}
	if (i === 1) {
		setInterval(updatetime, 1000);
		i++;
	}
	if (i === 2) {
		if (minutes != today.getMinutes()) {
			minutes = today.getMinutes();
			document.getElementById("clock").innerText = gettime();
		}
		else {
		}
	}
	else {
		console.log("bruh how the hell are we out of the loop")
	}
}
