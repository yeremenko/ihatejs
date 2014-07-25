var countdown = function() {

	var endDate = new Date("July 24, 2015 00:00:00");
	var nowDate = new Date();

	var timeDiff = endDate.getTime() - nowDate.getTime();

	//If countdown completed
	if (timeDiff <= 0) {
        clearTimeout(timer);
		document.write("Congratulations! Now what?");
	}

	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
		
	seconds %= 60;
	minutes %= 60;
	hours %= 24;
    
    

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("mins").innerHTML = minutes;
	document.getElementById("secs").innerHTML = seconds;

	var timer = setTimeout(countdown , 1000);

}

countdown();