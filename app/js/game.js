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

	var createChequer = function createChequer(type) {
		this.type = type;
		this.insertToBoard = function (element) {
			element.innerHTML = this.type;
		};
	};

	//sub module return

	sub.board = board, sub.createChequer = createChequer;

	return sub;
})(GAME);