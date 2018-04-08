
var BowlingGame = function () {
  this.rolls = [];
}

BowlingGame.prototype.roll = function (pins){
  pins= str.replace(/[-]/g,"", "").split("")
  this.rolls.push(pins);
}

BowlingGame.prototype.score = function (){
  let result = 0;
  let rollIndex = 0;
  var game = this;

  for (let frameIndex = 0; frameIndex< 10; frameIndex++){
    //accounting for a spare
    if(isStrike()){
      result += getStrikeScore();
      rollIndex++
    }
    else if (isSpare()){
      result += getSpareScore();
      //gives the two rolls in each frame
      rollIndex += 2;
    }
    else{
      result += getNormalScore();
      //gives the two rolls in each frame
      rollIndex += 2;
    }

  }
  return result;

  function isStrike(){
    return game.rolls[rollIndex] == 'X';
  }

  function isSpare(){
    return game.rolls[rollIndex] == '/';
  }
//grabs previous number that made it 10 and adds the next number
  function getStrikeScore(){
    return 10 + game.rolls[rollIndex + 1];
  }

  function getSpareScore(){
    return 10 + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getNormalScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
}

new BowlingGame()
//tests for all 0, all 1, a spare, a strike, a perfect game
