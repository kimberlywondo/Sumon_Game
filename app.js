//Create 36 board tiles using tilesJS library
//tiles should be numbered 1-6 (6 of each)
var TILE_IDS = [
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6
];

var totalValue = 126;
var tileCount = 36;
var score = 0;

//start game --> shuffle tiles; score 0



//computer generates random integer from 2-12 and displays the number to the user (.displayNum)
var generatedNum = document.getElementById("displayNum");

function displayNum() {
    var randomNum = Math.floor(Math.random() * 12) + 2;
    console.log("Random Num "+randomNum);
    randomNum = String(randomNum);
    generatedNum.innerHTML = randomNum;
}

displayNum();

//creates tiles on board and assigns tile id 
var $board = document.getElementById("board");


function createBoard() {
  for (let i = 1; i <= tileCount; i++) {
      var tile = document.createElement("div");
      tile.id = i;
      tile.className = "tile";
      if (tile.id <= 6) {
          tile.innerHTML === "1";
      } else if (tile.id <= 12) {
          tile.innerHTML === "2";
      } else if ( tile.id <= 18) {
          tile.innerHTML === "3";
      } else if ( tile.id <= 24) {
          tile.innerHTML === "4";
      } else if ( tile.id <= 30) {
          tile.innerHTML === "5";
      } else { 
          tile.innerHTML === "6";
      }
    console.log(tile.id, tile.innerHTML);
    $board.appendChild(tile);
  }  
    
};

createBoard();





var numberToSum = function() {
    for (var i=1; i <= tileCount; i++) {
        
    }
};



//user selects activeTiles from board --> (selectedTiles)
// sum selectedTiles
    
    //if sum(selectedTiles) ==== numberToSum --> (selectedTiles value * 2) --> add to userScore
        //kill selectedTiles --> Generate new numberToSum
            //* make sure number generated is not > sum of ramaining active tiles or can't be created with available tiles
    

    // if value of selected tiles > displaNum --> revert to activeTiles



//reset: shuffle board, set beginning values to null




var sum = TILE_IDS.reduce(function(a, b) { return a + b; }, 0);

console.log(sum);


//?? possible next level with 8x8 board??





