var setTime = function() {

	var nowDate = new Date(),
	    nowHours = nowDate.getHours(),
	    nowMinutes = nowDate.getMinutes(),
	    amPm,
	    timeOfDayHTML = document.getElementById("time-of-day"),
	    hourHTML = document.getElementById("time-hours"),
	    minHTML = document.getElementById("time-minutes"),
	    amPmHTML = document.getElementById("time-amPm");

	// Convert military time to normal
	if (nowHours > 12) {
		hourHTML.innerHTML = nowHours - 12;
		amPm = 'PM';
	} else if (nowHours == 0) {
		hourHTML.innerHTML = 12;
		amPm = 'AM';
	} else {
		hourHTML.innerHTML = nowHours;
		amPm = 'AM';
	}

	// Check if its daytime or nighttime
    // Daytime is 6am - 8pm 
	if (nowHours >= 6 && nowHours <= 19) {
		timeOfDayHTML.classList.add("its-daytime");
	} else {
		timeOfDayHTML.classList.add("its-nighttime");
	}

	// make sure minutes are two digits
	if (nowMinutes < 10) {
		minHTML.innerHTML = '0' + nowMinutes;
	} else {
		minHTML.innerHTML = nowMinutes;
	}
	


	amPmHTML.innerHTML = amPm;

};

setTime();