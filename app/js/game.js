"use strict";

var GAME = GAME || {};

(function (gm, ui) {

	//variuables

	// depediences

	var userInterfave = ui;

	//sub module

	var sub = gm.gen = gm || {};

	//create board 

	var board = new Array(3);
	for (var i = 0; i < 3; i++) {
		board[i] = new Array(3);
	}

	//create 

	var Chequer = function Chequer(type, active) {
		this.type = type, this.activePayer = active;
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

		var checkVertical = false,
		    checkHorizontal = false,
		    checkCross = false;

		for (var _i = 0; _i < 3; _i++) {
			if (this.type === arr[_i][0] && this.type === arr[_i][1] && this.type === arr[_i][2]) {
				checkVertical = true;
			}
		}
		for (var j = 0; j < 3; j++) {
			if (this.type === arr[0][j] && this.type === arr[1][j] && this.type === arr[2][j]) {
				checkHorizontal = true;
			}
		}

		if (this.type === arr[0][0] && this.type === arr[1][1] && this.type === arr[2][2] || this.type === arr[0][2] && this.type === arr[1][1] && this.type === arr[2][0]) {
			checkCross = true;
		}
		if (checkVertical || checkHorizontal || checkCross) {
			return true;
		} else {
			return false;
		}
	};

	// Chequer.prototype.cpuNormal = function (arr) {

	// 	for (let i = 0; i < 3; i++) {
	// 		if ((this.type === arr[i][0] && this.type === arr[i][1]) || (this.type === arr[i][2] && this.type === arr[i][1]) || (this.type === arr[i][0] && this.type === arr[i][2]) {
	// 			if (arr[i][0] === undefined || arr[i][0] === '') {
	// 				arr[i][0] = this.type;
	// 			} else if (arr[i][1] === undefined || arr[i][1] === '') {
	// 				arr[i][1] = this.type;
	// 			} else if (arr[i][2] === undefined || arr[i][2] === '') {
	// 				arr[i][2] = this.type;
	// 			}
	// 		}
	// 	}
	// 	for (let j = 0; j < 3; j++) {
	// 		if ((this.type === arr[0][j] && this.type === arr[1][j]) || (this.type === arr[2][j] && this.type === arr[1][j]) || (this.type === arr[0][j] && this.type === arr[2][j]) {
	// 			if (arr[0][j] === undefined || arr[0][j] === '') {
	// 				arr[0][j] = this.type;
	// 			} else if (arr[1][j] === undefined || arr[1][j] === '') {
	// 				arr[1][j] = this.type;
	// 			} else if (arr[2][j] === undefined || arr[2][j] === '') {
	// 				arr[2][j] = this.type;
	// 			}
	// 		}
	// 	}
	// 	if ((this.type === arr[0][0] && this.type === arr[1][1]) || (this.type === arr[0][0] && this.type === arr[2][2]) || (this.type === arr[2][2] && this.type === arr[1][1])) {
	// 		if (arr[0][0] === undefined || arr[0][0] === '') {
	// 			arr[0][0] = this.type;
	// 		} else if (arr[1][1] === undefined || arr[1][1] === '') {
	// 			arr[1][1] = this.type;
	// 		} else if (arr[2][2] === undefined || arr[2][2] === '') {
	// 			arr[2][2] = this.type;
	// 		}
	// 	} else if ((this.type === arr[0][2] && this.type === arr[1][1]) || (this.type === arr[2][0] && this.type === arr[1][1]) || (this.type === arr[0][2] && this.type === arr[2][0])) {
	// 		if(arr[0][2] === undefined || arr[0][2] === '' ) {
	// 			arr[0][2] = this.type;
	// 		} else if (arr[1][1] === undefined || arr[1][1] === '' ){
	// 			arr[1][1] = this.type;
	// 		} else if (arr[2][0] === undefined || arr[2][0] === '' ){
	// 			arr[2][0] = this.type;
	// 		}
	// 	}
	// }

	//sub module return


	sub.board = board, sub.Chequer = Chequer;

	return sub;
})(GAME, UI);