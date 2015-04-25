( function () {

	var projectSummary = function () {

		//Counts the number of projects listed
		var projectWrapper = document.getElementById("project-wrapper"),
		    projectSingle = projectWrapper.getElementsByClassName("project-single"),
		    numberOfUploads = projectSingle.length;

		//Updates the numbers on the scoreboard
		document.getElementById("complete-digit").innerHTML = numberOfUploads;
	}

	var initialize = function () {

		projectSummary();

	}

	initialize();

}());


