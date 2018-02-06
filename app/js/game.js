'use strict';

var GAME = GAME || {};

(function (gm) {

	//variuables


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
		// this.checkPlayer = function(player){

		// };
		this.insertToBoard = function (element) {
			element.innerHTML = this.type;
		};
		// end turn and change player
		this.endOfTurn = function (act) {
			if (act === 0) {
				return 1;
			} else {
				return 0;
			}
		};
		this.checkWin = function (arr) {

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
		this.startNextTurn = function (arr, elements) {
			for (var _i2 = 0; _i2 < 3; _i2++) {
				for (var j = 0; j < 3; j++) {
					arr[_i2][j] = false;
				}
			}
			for (var _i3 = 0; _i3 < elements.length; _i3++) {
				elements[_i3].innerHTML = '';
				console.log('trolo');
			}
		};
	};

	//sub module return

	sub.board = board, sub.Chequer = Chequer;

	return sub;
})(GAME);