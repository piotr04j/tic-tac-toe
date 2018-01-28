'use strict';

window.onload = function () {

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

		return sub;
	})(UI);
};