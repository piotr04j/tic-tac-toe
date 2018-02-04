"use strict";

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
		this.endOfTurn = function (act) {
			if (act === 0) {
				act = 1;
			} else {
				var _act = 0;
			}
		};
	};

	//sub module return

	sub.board = board, sub.Chequer = Chequer;

	return sub;
})(GAME);