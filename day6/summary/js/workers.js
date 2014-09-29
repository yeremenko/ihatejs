(function () {
	var grid  = [
		null, null, null,
		null, null, null,
		null, null, null
		],
		x     = 'x',
		o     = 'o',
		turnNumber = 1,
		$turnNumber = $('#turn-number'),
		whosTurn,
		$whosTurn = $('#whos-turn'),
		$square = $(".square"),
		$clickPosition = $('#click-position'),
	    $gameOutcome  = $('#game-outcome'),
	    hasWinner = false;

	var whosTurnIsIt = function () {
		$turnNumber.html(turnNumber);

		// X goes if turnNumber is ODD, else O goes
		if (turnNumber % 2) {
			whosTurn = x;
		} else {
			whosTurn = o;
		}
		$whosTurn.html(whosTurn);
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

	//
	var checkForWinner = function () {
		//start checking for winner after 4 moves
		if (turnNumber > 4) {
			console.log('checking...')
			if  ((grid[0]==grid[1] && grid[1]==grid[2] && grid[2] !== null) ||
			    (grid[3]==grid[4] && grid[4]==grid[5] && grid[5] !== null) ||
			    (grid[6]==grid[7] && grid[7]==grid[8] && grid[8] !== null) ||

			    (grid[0]==grid[3] && grid[3]==grid[6] && grid[6] !== null) ||
			    (grid[1]==grid[4] && grid[4]==grid[7] && grid[7] !== null) ||
			    (grid[2]==grid[5] && grid[5]==grid[8] && grid[8] !== null) ||

			    (grid[0]==grid[4] && grid[4]==grid[8] && grid[8] !== null) ||
			    (grid[2]==grid[4] && grid[4]==grid[6] && grid[6] !== null))
			{
				$gameOutcome.text(whosTurn + ' ' + 'WINS!');
				hasWinner = true;
				resetGame();
			}
		//must be a draw after 9 moves
		} else if (turnNumber == 9) {
			$gameOutcome.text('Draw!');
		}

		turnNumber++;
	};

	//reset game by refreshing page
	var resetGame = function () {
		$reset = $('#reset');
		$reset.show();
		$reset.on('click' , function () {
			location.reload();
		});
	};

	var initGame = function () {
		whosTurnIsIt();
	};

	initGame();
}());