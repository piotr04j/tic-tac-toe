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

	let Chequer = function(type,active){
		this.type = type,
		this.activePayer = active;
		// this.checkPlayer = function(player){

		// };
		this.insertToBoard = function(element){
			element.innerHTML = this.type;
		};
		this.endOfTurn = function(act){
			if(act === 0){
				act = 1;
			} else {
				act = 0;
			}
		};
		this.checkWin = function(arr){
	
			let checkVertical = false,
				checkHorizontal = false,
				checkCross = false;	
				
			for(let i  = 0; i < 3; i++ ){
				if(this.type ===  arr[i][0] && this.type ===  arr[i][1] && this.type ===  arr[i][2]){
					checkVertical = true;
				}
		
			}
			for(let j  = 0; j < 3; j++ ){
				if(this.type ===  arr[0][j] && this.type ===  arr[1][j] && this.type ===  arr[2][j]){
					checkHorizontal = true;
				}
			}
			if((this.type ===  arr[0][0] && this.type ===  arr[1][1] && this.type ===  arr[2][2]) || (this.type ===  arr[0][2] && this.type ===  arr[1][1] && this.type ===  arr[2][0])){
				checkCross = true;
			} 
			if( checkVertical || checkHorizontal || checkCross  ){
				return true;
			} else {
				return false;
			}
		};
	};


	//sub module return

	sub.board = board,
	sub.Chequer = Chequer;


	return sub;

})(GAME);