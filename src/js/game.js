let GAME = GAME || {};

(function(gm){


	//variuables

	

	//sub module

	let sub = gm.gen = gm || {};

	//create board 

	let board = new Array(3);
	for(let i  = 0; i < 3; i++ ){
		board[i] = new Array(3);
	}

	//create 

	let createChequer = function(type){
		this.type = type;
		this.insertToBoard = function(element){
			element.innerHTML = this.type;
		};
	
	};


	//sub module return

	sub.board = board,
	sub.createChequer = createChequer;


	return sub;

})(GAME);