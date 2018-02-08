
let UI = UI || {};

(function(ui){

	//variuable 
	
	let titleDestination = document.getElementById('js-game-title'),
		title = 'Tic Tac Toe';
	
		//set sub module
	
	let sub = ui.fun = ui.funcionality || {};
	
	// display title

	function showTitleLetterByLetter(destination, message, speed){
		let i = 0;
		let interval = setInterval(function(){
			if(message.charAt(i) === ' '){
				destination.innerHTML += message.charAt(i) + message.charAt(i+1);
				i++;
			}else {
				destination.innerHTML += message.charAt(i);
			}
			i++;
			if (i > message.length){
				clearInterval(interval);
			}
		}, speed);
	}
		
	showTitleLetterByLetter(titleDestination, title, 1000);
	
	let nextTurn = function(arr,elements){
		for(let i = 0; i < 3; i++){
			for(let j = 0; j < 3; j++){
				arr[i][j] = false;
			}
		}
		for(let i = 0;i < elements.length ; i++){
			elements[i].innerHTML = '';
		}
	
	};
	let displayWinner = function(el,player){
		let ele = el[player];
		ele.style.width = '200px';
		ele.style.transition = '2s';
	};

	let init = function(arr, elemnt,scoreOne, scoreTwo){
		nextTurn(arr, elemnt);
		scoreOne.innerHTML = 0;
		scoreTwo.innerHTML = 0;
		
	};


	
	sub.nextTurn = nextTurn;
	sub.init= init;
	sub.displayWinner = displayWinner;



	return sub;
	
})(UI);

