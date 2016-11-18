//Create 36 board tiles using tilesJS library
//tiles should be numbered 1-6 (6 of each)
var tileIDs = [ 1, 1, 1, 1, 1, 1,
                2, 2, 2, 2, 2, 2,
                3, 3, 3, 3, 3, 3,
                4, 4, 4, 4, 4, 4,
                5, 5, 5, 5, 5, 5,
                6, 6, 6, 6, 6, 6];
var totalValue = 126;
var tileCount = 36;
var score = 0;


var sum = tileIDs.reduce(function(a, b) { return a + b; }, 0);

console.log(sum);


//start game --> shuffle tiles; score 0


    //shuffle tiles
    //createBoard function pushes tile.ID into array to be shuffled


//computer generates random integer from 2-12 and displays the number to the user (.displayNum)
var generatedNum = document.getElementById("displayNum");

function displayNum() {
    var randomNum = Math.floor(Math.random() * 12) + 2;
    console.log("Random Num "+randomNum);
    randomNum = String(randomNum);
    generatedNum.innerHTML = randomNum;
}
displayNum();

var $board = document.getElementById("board");

function createBoard() {
for (let i = 0; i < tileIDs.length; i += 1) {
    var tile = document.createElement("div");
    tile.className = "tile";
    tile.id = i;
    tile.innerHTML = tileIDs[i];
    console.log(tile.innerHTML);
    $board.appendChild(tile);
    }  console.log(tile.id, tile.innerHTML, tile.value);
}
createBoard();


//user selects activeTiles from board --> (selectedTiles)
// sum selectedTiles



    //if sum(selectedTiles) ==== displayNum --> (selectedTiles value * 2) --> add to userScore
        //kill selectedTiles --> Generate new displayNum
            //* make sure number generated is not > sum of ramaining active tiles or can't be created with available tiles
    

    // if value of selected tiles > displaNum --> revert to activeTiles



//reset: shuffle board, set beginning values to null






//?? possible next level with 8x8 board??





