(function () {
	var grid,
		x     = 'x',
		o     = 'o',
		turnNumber,
		whosTurn,
		hasWinner,
		$turnNumber = $('#turn-number'),
		$whosTurn = $('#whos-turn'),
		$square = $(".square"),
		$clickPosition = $('#click-position'),
	    $gameOutcome  = $('#game-outcome');

	// Default values
    var newGame = function () {
    	grid  = [ null, null, null,
				  null, null, null,
				  null, null, null
				],
		hasWinner = false,
		$square.text(''),
		$square.removeClass('x-color'),
		$square.removeClass('o-color'),
		turnNumber = 1,
		$turnNumber.html(turnNumber),
		$whosTurn.html(whosTurn),
		$gameOutcome.html('Unknown');

		whosTurnIsIt();
    };

    //toggle X and O
	var whosTurnIsIt = function () {
		// X goes if turnNumber is ODD, else O goes
		if (turnNumber % 2) {
			whosTurn = x;
		} else {
			whosTurn = o;
		}
	};

	$square.on("click" , function () {
		var clickPosition = (this.getAttribute("data-board-position"));
		$clickPosition.text(clickPosition);

		if (grid[clickPosition] !== null || hasWinner == true) {
			return;
		} else {	
			grid[clickPosition] = whosTurn;
			$(this).text(whosTurn);
			if (whosTurn == x) {
				$(this).addClass('x-color');
			} else if (whosTurn == o) {
				$(this).addClass('o-color');
			}
		}

		checkForWinner();
		whosTurnIsIt();
	});

	/* WINNING BOARDS
	
		0 -- 0 1 2 
		1 -- 3 4 5 
		2 -- 6 7 8 
		   / | | | \
		3    4 5 6  7	  
	*/

	var winningRows = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[2,4,6],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8]
	];

	var checkForWinner = function () {
		// If there are no squares with 'null' then its a draw
		if (grid.indexOf(null) == -1) {
			$gameOutcome.text('Draw!');
			resetGame();
		};
		//checks if rows have winning patterns
		for(i=0; i < winningRows.length; i++){
			possiblity = winningRows[i];
			if (grid[possiblity[0]] != null && grid[possiblity[0]] == grid[possiblity[1]] && grid[possiblity[1]] == grid[possiblity[2]]) {
				$gameOutcome.text(whosTurn + ' ' + 'WINS!');
				hasWinner = true;
				resetGame();
			}
		};

		turnNumber++;
		$turnNumber.html(turnNumber);
	};

	//reset game by re-initializing starts
	var resetGame = function () {
		$reset = $('#reset');
		$reset.show();
		$reset.on('click' , function () {
			newGame();
			$reset.hide();
		});

	};

	newGame();
}());