'use strict';

var APP = APP || {};

(function (app, game) {

	//variuables 

	var boardFront = document.getElementById('js-board'),
	    playerOne = document.getElementById('js-player-one');

	//depediences

	var gameData = game;

	boardFront.addEventListener('click', function (event) {

		var target = event.target,
		    row = void 0,
		    column = void 0,
		    chequer = void 0,
		    playerActive = void 0;

		if (target.classList.contains('board__field')) {
			row = target.dataset.row, column = target.dataset.column;
		}

		if (gameData.board[row][column] === false || gameData.board[row][column] === undefined) {

			if (playerOne.classList.contains('active')) {
				chequer = new gameData.createChequer('X');
			} else {
				chequer = new gameData.createChequer('O');
			}

			chequer.insertToBoard(target);
			//nastepnie dodajemy piona do tabeli
			//sprawdzamy warunki
			gameData.board[row][column] = "x";
		} else {
			alert('niedozwolony ruch');
		}
	});

	return app;
})(APP, GAME.gen);