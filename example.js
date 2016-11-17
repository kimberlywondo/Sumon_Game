var $tCount = 64;
var $totalVal = 316;
var $level = 1;
var $score = 0;
var $targetVal = 0;

var trackTotalVal = function(val) {
  $totalVal -= val;
  return $totalVal;
};

// gameboard setup
var $tiles = function() {
  return [ 1, 1, 1, 1, 1, 1, 1, 1,
                2, 2, 2, 2, 2, 2, 2,
                3, 3, 3, 3, 3, 3, 3,
                4, 4, 4, 4, 4, 4, 4,
                5, 5, 5, 5, 5, 5, 5,
                6, 6, 6, 6, 6, 6, 6,
                7, 7, 7, 7, 7, 7, 7,
                8, 8, 8, 8, 8, 8, 8,
                9, 9, 9, 9, 9, 9, 9 ];
};

var $tilesShuffle = function(arr) {
  var $newArr = [];
  var $randomIndex;
  var $element;
  while (arr.length) {
    $randomIndex = Math.floor(Math.random() * arr.length);
    $element = arr.splice($randomIndex, 1);
    $newArr.push($element[0]);       
  }
  return $newArr;
};

var $makePieces = function(arr) {
  var $pieces = [];
  var $piece;
  while (arr.length) {
    $piece = '<div>' + arr.pop().toString() + '</div>' ;
    $pieces.push($piece);
  }
  return $pieces;
};

var $makeBoard = function() {
  var $gameTiles = $makePieces($tilesShuffle($tiles()));
  while ($gameTiles.length) {
    $('div.board').append($gameTiles.pop());
  }
};

var $clearBoard = function() {
  $('.board').empty();
};

// generates # for player to make
var $genSum = function(level) {
  var $maxVal = (level * 5) + 10;
  var $minVal = 10;
  if ($totalVal > $maxVal && $tCount > 10) {
    return Math.floor(Math.random()*($maxVal - $minVal + 1) + $minVal);
  }
  else if ($tCount <= 10 && $totalVal > $maxVal) {
    return $genSumFailsafe($maxVal);
  }
  else if ($totalVal <= $maxVal) {
    return $totalVal;
  }
};

// fixes the '$genSum generates # too big or not possible w/ available tiles' bug.
var $genSumFailsafe = function(max) {
  var $max = max;
  var $liveTiles = [];
  var $l = 0;
  $('.board div').not('.dead').each(function() { 
    $liveTiles.push(parseInt($(this).text())); 
  });
  $liveTiles.sort(function(a, b) {
    return b-a;
  });
  for (i = 0; i < $liveTiles.length; i++) {
    for (j = 1; j < $liveTiles.length; j++) {
      $l = $liveTiles[i] + $liveTiles[j];
      if ($l <= $max) {
        return $l;
      }
    }
  }
};

// displays expected # to player
var $displaySum = function(val) {
  $('.sum-display').text(val.toString());
};

// checks whether player exceeded or equaled the expected sum
var $checkSum = function(val, targetVal) {
  if (val === targetVal) {
    return "=";
  }
  else if (val > targetVal) {
    return ">";
  }
  else {
    return "<";
  }
};

// adds to and displays player's score
var $displayScore = function(val) {
  $score += val * 2;
  $('.score-display').text($score.toString());
};

// set up playing board
var $setupBoard = function() {
  $clearBoard();
  $makeBoard();
  $tCount = 64;
  $totalVal = 316;
  $targetVal = $genSum($level);
  $displaySum($targetVal);
  $displayScore(0);
};

// start game
var $initGame = function() {
  $level = 1; // game initiates @ level one, score 0
  $score = 0;
  $setupBoard();
};

$(function() {
  var $selectedTotal = 0;
  var $r; // variable to hold value of checkSum call
  var $t = 0; // variable for tracking # of live tiles
  var $this;
  $initGame();
  $(document).on('click', '.board div', function() { // activates when player clicks piece
    $this = $(this);
    if (!($this.hasClass('dead'))) {
      $this.toggleClass('selected');
      if ($this.hasClass('selected')) {
        $selectedTotal += parseInt($this.text());
        $r = $checkSum($selectedTotal, $targetVal);
        $t++;
        if ($r === "=") {
          $('.selected').empty().addClass('dead').removeClass('selected');
          $displayScore($selectedTotal);
          // tracking available tiles & pts left
          $tCount -= $t; // subtracts # of used tiles from $tCount
          $totalVal -= $selectedTotal;
          // reset and init for next move
          $t = 0;
          $selectedTotal = 0;
          // check to see whether player levels up
          if ($tCount === 0) {
            $setupBoard();
          }
          else {
            $targetVal = $genSum($level);
            $displaySum($targetVal);
          }
        }
        else if ($r === ">") {
          $('.selected').removeClass('selected');
          $selectedTotal = 0;
          $t = 0;
        }
      }
      else {
        $selectedTotal -= parseInt($this.html());
        $tCount++;
      }
    }
  });
  $('#restart').click(function() {
    $initGame();
  });
  $('a.how-to-play').click(function() {
    $('div.how-to-play').addClass('displayed');
  });
  $('#got-it').click(function() {
    $('.how-to-play').removeClass('displayed');
  });
});
