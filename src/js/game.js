let GAME = GAME || {};

(function (gm, ui) {


	//variuables

	// depediences

	let userInterfave = ui;

	//sub module

	let sub = gm.gen = gm || {};

	//create board 

	let board = new Array(3);
	for (let i = 0; i < 3; i++) {
		board[i] = new Array(3);
	}

	//create 

	let Chequer = function (type, active) {
		this.type = type,
		this.activePayer = active;

	};
	Chequer.prototype.insertToBoard = function (element) {
		element.innerHTML = this.type;
	};
	// end turn and change player
	Chequer.prototype.endOfTurn = function (act) {
		if (act === 0) {
			return 1;
		} else {
			return 0;
		}
	};
	Chequer.prototype.checkWin = function (arr) {

		let checkVertical = false,
			checkHorizontal = false,
			checkCross = false;

		for (let i = 0; i < 3; i++) {
			if (this.type === arr[i][0] && this.type === arr[i][1] && this.type === arr[i][2]) {
				checkVertical = true;
			}
		}
		for (let j = 0; j < 3; j++) {
			if (this.type === arr[0][j] && this.type === arr[1][j] && this.type === arr[2][j]) {
				checkHorizontal = true;
			}
		}
		// for(let i = 0; i < 3; i++) {
		// 	for (let j = 0; j < 3; j++) {
		// 		if (this.type === arr[i][j] && this.type === arr[i][j+1] && this.type === arr[i][j+2]) {
		// 			// checkHorizontal = true;
		// 			// checkVertical = true;
		// 			console.log('spelnino');
		// 		} else if (this.type === arr[i][j] && this.type === arr[i+1][j] && this.type === arr[i+2][j]){
		// 		} else {
		// 			console.log('nie spelnionp')
		// 		}
		// 	}
		// }

		if ((this.type === arr[0][0] && this.type === arr[1][1] && this.type === arr[2][2]) || (this.type === arr[0][2] && this.type === arr[1][1] && this.type === arr[2][0])) {
			checkCross = true;
		}
		if (checkVertical || checkHorizontal || checkCross) {
			return true;
		} else {
			return false;
		}
	};

	Chequer.prototype.cpuNormal = function(arr){
		//horizontal
		for (let i = 0; i < 3; i++) {
			if (this.type === arr[i][0] && this.type === arr[i][1] && this.type === arr[i][2]) {
				checkVertical = true;
			}
		}
	}

	//sub module return


	sub.board = board,
	sub.Chequer = Chequer;


	return sub;

})(GAME, UI);