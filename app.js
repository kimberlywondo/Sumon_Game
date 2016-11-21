$(document).ready(function() {
    console.log( 'ready!');
    $(".tile").click(addSelectedToArray);
    displayNum();
    createBoard();
    shuffleBoard();
});



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
var userScore = 0;
var tileArray = [];
var currentTurnValues = [];

console.log(tileArray);

var sum = tileIDs.reduce(function(a, b) { return a + b; }, 0);

console.log(sum);


//start game --> shuffle tiles; score 0


    //shuffle tiles
    //createBoard function pushes tile.ID into array to be shuffled


//computer generates random integer from 2-12 and displays the number to the user (.displayNum)
//var generatedNum = document.getElementById("displayNum");
var generatedNum = function() { return Number($('#displayNum').text())};

function displayNum() {
    var randomNum = Math.floor(Math.random() * 12) + 2;
    console.log("Random Num "+randomNum);
    randomNum = String(randomNum);
    $('#displayNum').text(randomNum);
}

var $board = document.getElementById("board");

function createBoard() {
for (let i = 0; i < tileIDs.length; i += 1) {
    var tile = document.createElement("div");
    tile.className = "tile";
    tile.id = i;
    tile.innerHTML = tileIDs[i];
    console.log(tile.innerHTML);
    $board.appendChild(tile);
    tileArray.push(tile);
    }
}




function shuffleBoard() {
    var parent = $("#board");
    var divs = parent.children();
    while (divs.length) {               parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}


//user selects activeTiles from board --> (selectedTiles)
function addSelectedToArray() {
    currentTurnValues.push(this.innerHTML);
    console.log(currentTurnValues);
};

// sum selectedTiles
var sumOfSelectedValueArray = function() {
    return currentTurnValues.reduce(function(acc, x){
    return acc + Number(x);
    }, 0);
}

//if sumSelectedTiles === displayNum
    // remove class .selected add class .dead && add sumOfSelectedValueArray * 2 to userScore
//if > displayNum
    // remove class .selected & clear currentValuesArray
//if < displayNum
    //do nothing

function compareValues() {
    if (sumOfSelectedValueArray() === generatedNum()) {
        recordWin();
        removeSelectedClass();
        addClassDEadTile();
    } else if (sumOfSelectedValueArray > generatedNum) {
        removeSelectedClass();
        currentTurnValues = [];
    }
}





//var sum = 0;
//$('.selected').each(function(){
//    sum += parseFloat($(this).text());  // Or this.innerHTML, this.innerText
//});


    //if sum(selectedTiles) ==== displayNum --> (selectedTiles value * 2) --> add to userScore


//var displayScore = document.getElementsByClassName("userScore");
//
//var userScore = function(score)) {
//    console.log(score.innerHTML);
//    $('.userScore').innerHTML(Score.toString());
//    $board.appendChild(userScore);
//};
//userScore();
        //kill selectedTiles --> Generate new displayNum
            //* make sure number generated is not > sum of ramaining active tiles or can't be created with available tiles
    

    // if value of selected tiles > displaNum --> revert to activeTiles



//reset: shuffle board, set beginning values to 0

//var $startOver = function() {
//  $('.board').empty();
//};
//startOver();





//?? possible next level with 8x8 board??





