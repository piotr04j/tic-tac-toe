let APP = APP || {};
    
(function(app,game){

	//variuables 

	let boardFront = document.getElementById('js-board'),
		playerOne = document.getElementById('js-player-one');

	//depediences

	let gameData = game;

	boardFront.addEventListener('click',function(event){
		
		let target = event.target,
			row, column, chequer, playerActive;

		if(target.classList.contains('board__field')){
			row = target.dataset.row,
			column = target.dataset.column;

		}

		if(gameData.board[row][column] === false || gameData.board[row][column] === undefined ){

			if(playerOne.classList.contains('active')){
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


