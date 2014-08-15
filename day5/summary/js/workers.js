(function () {

	var userChoice;

	// Establish heirarchy of possible hands. ie. rock beats scissors
	var winnerRules = {
	  	rock: 'scissors',
		scissors: 'paper',
		paper: 'rock',
	};

	// Select rock, paper,a or scissors for CPU randomly
	var cpuRandomize = function () {
		var ruleKeys = Object.keys(winnerRules),
		    howManyRules = ruleKeys.length,
		    randomKey = ruleKeys[Math.floor(Math.random() * howManyRules)],
		    cpuChoice = winnerRules[randomKey];

	  	return cpuChoice;
	};

	// Gets user selection for the ID of the element
	var setUserChoice = function (evt) {
		evt.preventDefault();
		userChoice = (this.id);
		this.classList.add("selection-single-selected");
	};

	document.getElementById("rock").addEventListener("click" , setUserChoice , false);
	document.getElementById("paper").addEventListener("click" , setUserChoice , false);
	document.getElementById("scissors").addEventListener("click" , setUserChoice , false);

	//	userChoice, cpuChoice either: scissors, paper, rock
	//	user wins: 1
	//	user loses: -1
	//	draw: 0
	var compareChoice = function (userChoice, compChoice) {
		var winningChoice = winnerRules[userChoice];

		if (userChoice === compChoice) {
			return 0;
		} else if (winningChoice === compChoice) {
			return 1;
		} else {
			return -1;
		}
	};

	// If userChoice is not empty, compare the results
	var matchResult = function (userChoice, compChoice) {
		if (!userChoice) {
			evt.preventDefault();
			return;
		}

		var scoreboard = compareChoice(userChoice, compChoice);

		if (scoreboard === 0) {
			trigger.innerHTML="Draw";
		} else if (scoreboard === 1) {
			trigger.innerHTML="Win!";
		} else {
			trigger.innerHTML="Lose";
		}

	};

	// Clear styles for user selection
	var clearSelection = function () {
		var s = document.getElementsByClassName('selection-single');

		for (var i = 0; i < s.length; i++) {
		   s[i].classList.remove('selection-single-selected');
		}
	};

	// When user clicks go, compare results
	var trigger = document.getElementById("trigger");
	trigger.addEventListener("click" , function () {
		var compChoice = cpuRandomize();
		matchResult(userChoice, compChoice);
		clearSelection();
	}, false);

}());