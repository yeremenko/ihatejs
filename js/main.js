( function () {

	var projectSummary = function () {

		//Calculate Day Number
		var endDate = new Date("July 24, 2015 00:00:00"),
		    nowDate = new Date(),

		    timeDiff = endDate.getTime() - nowDate.getTime(),

		    seconds = Math.floor(timeDiff / 1000),
		    minutes = Math.floor(seconds / 60),
		    hours = Math.floor(minutes / 60),
		    days = Math.floor(hours / 24),

		    todaysDay = 365 - days;

		//Counts the number of projects listed
		var projectWrapper = document.getElementById("project-wrapper"),
		    projectSingle = projectWrapper.getElementsByClassName("project-single"),
		    numberOfUploads = projectSingle.length;

		//subtracts todaysDay from projectWrapper
		var numberOfDaysMissed = todaysDay - numberOfUploads;

		//Updates the numbers on the scoreboard
		document.getElementById("day-digit").innerHTML = todaysDay;
		document.getElementById("complete-digit").innerHTML = numberOfUploads;
		document.getElementById("missed-digit").innerHTML = numberOfDaysMissed;
	}

	var initialize = function () {

		projectSummary();

	}

	initialize();

}());


