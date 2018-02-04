let APP = APP || {};
    
(function(app,game){

	//variuables 

	let boardFront = document.getElementById('js-board'),
		playerOne = document.getElementById('js-player-one'),
		playerTwo = document.getElementById('js-player-two'),
		activePlayer = 0,// value to check which player is active
		point = 1;
		playersScores= [0,0];

	//depediences

	let gameData = game;

	boardFront.addEventListener('click',function(event){
		
		let target = event.target,
			row, column, chequer;

		// check what filed was cliked and assign value from cliked field
		if(target.classList.contains('board__field')){ 
			row = target.dataset.row,
			column = target.dataset.column;

		}

		// check is filed was cliked before
		if(gameData.board[row][column] === false || gameData.board[row][column] === undefined ){


			if(activePlayer === 0){
				chequer = new gameData.Chequer('X');
				playerOne.classList.remove('active');
				playerTwo.classList.add('active');
				activePlayer = 1;
			} else {
				chequer = new gameData.Chequer('O');
				playerTwo.classList.remove('active');
				playerOne.classList.add('active');		
				activePlayer = 0;
			}

			// push chequer to arr
			gameData.board[row][column] = chequer.type;
			// display chequer on screen
			chequer.insertToBoard(target);
			chequer.endOfTurn(activePlayer);
			//sprawdzamy warunki
			
		} else {
			alert('niedozwolony ruch');
		}
		
	});


	return app;

})(APP, GAME.gen);


