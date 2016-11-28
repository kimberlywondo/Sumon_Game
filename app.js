$(document).ready(function() {
    console.log( 'ready!');
    displayNum();
    createBoard();
    $(".tile").click(addSelectedToArray);
    $(".tile").click(compareValues);
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
var tileArray = [];
var currentTurnValues = [];
var userScore = 0;
var reset;

//will be used in future version for levelUp functionality
//?? possible next level with 8x8 board??
var sum = tileIDs.reduce(function(a, b) { return a + b; }, 0);
console.log(sum);



//start game --> shuffle tiles; score 0
//Add Popup options for startGame

//computer generates random integer from 2-12 and displays the number to the user (displayNum)
//JS = var generatedNum = document.getElementById("displayNum");
var generatedNum = function() { return Number($("#displayNum").text())};

function displayNum() {
    var randomNum = Math.floor(Math.random() * 12) + 2;
    console.log("Random Num "+randomNum);
    randomNum = String(randomNum);
    $("#displayNum").text(randomNum);
}



//createBoard function pushes tile.ID into array to be shuffled
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



//shuffles tiles
function shuffleBoard() {
    var parent = $("#board");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}



//user selects activeTiles from board --> (selectedTiles)
function addSelectedToArray() {
    console.log("selected");
    currentTurnValues.push(this.innerHTML);
    $(this).addClass("selected");
}


// sum selectedTiles
var sumOfSelectedValueArray = function() {
    return currentTurnValues.reduce(function(acc, x) {
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
    console.log("compare");
    if (sumOfSelectedValueArray() === generatedNum()) {
        recordWin();
        addClassDead();
        removeClassSelected();
        displayNum();
        currentTurnValues = [];
    } else if (sumOfSelectedValueArray() > generatedNum()) {
        removeClassSelected();
        currentTurnValues = [];
        console.log("try again")
    }
}

//* make sure number generated is not > sum of ramaining active tiles or can't be created with available tiles


//Called in compareValues()
function recordWin() {
    userScore += (sumOfSelectedValueArray() * 2);
    $('#userScore').text(userScore);
    console.log("win recorded");
}

//?? SCORING: # of tiles used (addSelectedToArray.length) is


function addClassDead() {
    $(".selected").addClass("dead");
    console.log("dead");
}


function removeClassSelected() {
    $(".selected").removeClass("selected");
}

function removeClassDead() {
    $(".dead").removeClass("dead");
}

//reset: shuffle board, set beginning values to 0
function reset() {
    userScore = 0;
    $('#userScore').text(userScore);
    removeClassDead();
    removeClassSelected();
    displayNum();
    shuffleBoard();
}











