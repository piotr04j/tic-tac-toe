let APP = APP || {};
    
(function(app,game,ui){

	//variuables 

	let boardFront = document.getElementById('js-board'),
		boardField = document.getElementsByClassName('board__field'),
		playerOne = document.getElementById('js-player-one'),
		playerTwo = document.getElementById('js-player-two'),
		playerOneScore = document.getElementById('js-player__one__score'),
		playerTwoScore = document.getElementById('js-player__two__score'),
		startBtn = document.getElementById('js-start'),
		helpBtn = document.getElementById('js-help'),
		optionBtn = document.getElementById('js-option'),
		closeBtn =  document.querySelector('.btn-close'),
		crown =  document.getElementsByClassName('player__crown'),
		activePlayer = 0,// value to check which player is active
		playersScores= [0,0];


	//depediences

	let gameData = game;
	let userInterface = ui;


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
				//if jak opcja aktywna 2
			} else {
				//if jak opcja aktywna 0
				chequer = new gameData.Chequer('O');
				playerTwo.classList.remove('active');
				playerOne.classList.add('active');	
				//if jak opcja aktywna 1	
			}

			// push chequer to arr
			gameData.board[row][column] = chequer.type;
			// display chequer on screen
			chequer.insertToBoard(target);
			
			let win = chequer.checkWin(gameData.board);
			
			if(win){
				if(activePlayer === 0){
					//add points
					playersScores[activePlayer] += 1;
					playerOneScore.innerHTML = playersScores[activePlayer];
					if(playersScores[activePlayer] > 2) {
						userInterface.displayWinner(crown,activePlayer);
					}
					userInterface.nextTurn(gameData.board,boardField);
					activePlayer = 1;
				} else {
					playersScores[activePlayer] += 1;
					playerTwoScore.innerHTML = playersScores[activePlayer];
					if(playersScores[activePlayer] > 2) {
						userInterface.displayWinner(crown,activePlayer);
					}
					// chequer.startNextTurn(gameData.board,boardField);
					userInterface.nextTurn(gameData.board,boardField);
					activePlayer = 0;
				}	

			} else {
				activePlayer = chequer.endOfTurn(activePlayer);
			}
				
		} else {
			alert('niedozwolony ruch');
		}
		
	});

	//reset game and set values to 0
	startBtn.addEventListener('click', function(){
		userInterface.init(gameData.board,boardField, playerOneScore,playerTwoScore);
		this.innerHTML = 'Again';
		crown[0].style.width = '0px';
		crown[1].style.width = '0px';
	});
	

	// open help
	helpBtn.addEventListener('click', function(){
		document.querySelector('.help').style.display = 'block';
	});

	//open option
	// optionBtn.addEventListener('click',function(){
	// 	document.querySelector('.option').style.display = 'block';
	// });

	//cloes popups
	closeBtn.addEventListener('click', function(){
		document.querySelector('.overlay').style.display = 'none';
	});

	//initialize game
	userInterface.init(gameData.board,boardField, playerOneScore,playerTwoScore);

	return app;

})(APP, GAME.gen,UI.fun);


