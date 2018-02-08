'use strict';

var APP = APP || {};

(function (app, game, ui) {

	//variuables 

	var boardFront = document.getElementById('js-board'),
	    boardField = document.getElementsByClassName('board__field'),
	    playerOne = document.getElementById('js-player-one'),
	    playerTwo = document.getElementById('js-player-two'),
	    playerOneScore = document.getElementById('js-player__one__score'),
	    playerTwoScore = document.getElementById('js-player__two__score'),
	    startBtn = document.getElementById('js-start'),
	    helpBtn = document.getElementById('js-help'),
	    closeBtn = document.querySelector('.btn-close'),
	    crown = document.getElementsByClassName('player__crown'),
	    activePlayer = 0,
	    // value to check which player is active
	playersScores = [0, 0];

	//depediences

	var gameData = game;
	var userInterface = ui;

	boardFront.addEventListener('click', function (event) {

		var target = event.target,
		    row = void 0,
		    column = void 0,
		    chequer = void 0;

		// check what filed was cliked and assign value from cliked field
		if (target.classList.contains('board__field')) {
			row = target.dataset.row, column = target.dataset.column;
		}

		// check is filed was cliked before
		if (gameData.board[row][column] === false || gameData.board[row][column] === undefined) {

			if (activePlayer === 0) {
				chequer = new gameData.Chequer('X');
				playerOne.classList.remove('active');
				playerTwo.classList.add('active');
			} else {
				chequer = new gameData.Chequer('O');
				playerTwo.classList.remove('active');
				playerOne.classList.add('active');
			}

			// push chequer to arr
			gameData.board[row][column] = chequer.type;
			// display chequer on screen
			chequer.insertToBoard(target);

			var win = chequer.checkWin(gameData.board);

			if (win) {
				if (activePlayer === 0) {
					//add points
					playersScores[activePlayer] += 1;
					playerOneScore.innerHTML = playersScores[activePlayer];
					if (playersScores[activePlayer] > 2) {
						userInterface.displayWinner(crown, activePlayer);
					}
					userInterface.nextTurn(gameData.board, boardField);
					activePlayer = 1;
				} else {
					playersScores[activePlayer] += 1;
					playerTwoScore.innerHTML = playersScores[activePlayer];
					if (playersScores[activePlayer] > 2) {
						userInterface.displayWinner(crown, activePlayer);
					}
					// chequer.startNextTurn(gameData.board,boardField);
					userInterface.nextTurn(gameData.board, boardField);
					activePlayer = 0;
				}
			} else {
				activePlayer = chequer.endOfTurn(activePlayer);
			}
		} else {
			alert('niedozwolony ruch');
		}
	});

	startBtn.addEventListener('click', function () {
		userInterface.init(gameData.board, boardField, playerOneScore, playerTwoScore);
		this.innerHTML = 'Again';
		crown[0].style.width = '0px';
		crown[1].style.width = '0px';
	});

	helpBtn.addEventListener('click', function () {
		document.querySelector('.overlay').style.display = "block";
	});

	closeBtn.addEventListener('click', function () {
		document.querySelector('.overlay').style.display = "none";
	});

	return app;

	userInterface.init(gameData.board, boardField, playerOneScore, playerTwoScore);
})(APP, GAME.gen, UI.fun);