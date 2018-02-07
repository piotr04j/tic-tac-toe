'use strict';

var UI = UI || {};

(function (ui) {

	//variuable 

	var titleDestination = document.getElementById('js-game-title'),
	    title = 'Tic Tac Toe';

	//set sub module

	var sub = ui.fun = ui.funcionality || {};

	// display title

	function showTitleLetterByLetter(destination, message, speed) {
		var i = 0;
		var interval = setInterval(function () {
			if (message.charAt(i) === ' ') {
				destination.innerHTML += message.charAt(i) + message.charAt(i + 1);
				i++;
			} else {
				destination.innerHTML += message.charAt(i);
			}
			i++;
			if (i > message.length) {
				clearInterval(interval);
			}
		}, speed);
	}

	showTitleLetterByLetter(titleDestination, title, 1000);

	var nextTurn = function nextTurn(arr, elements) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				arr[i][j] = false;
			}
		}
		for (var _i = 0; _i < elements.length; _i++) {
			elements[_i].innerHTML = '';
		}
	};

	var init = function init(arr, elemnt, scoreOne, scoreTwo) {
		nextTurn(arr, elemnt);
		scoreOne.innerHTML = 0;
		scoreTwo.innerHTML = 0;
	};

	sub.nextTurn = nextTurn;
	sub.init = init;

	return sub;
})(UI);