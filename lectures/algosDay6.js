function d6() {
  var roll = Math.random();

  while (roll > 0.6 || roll == 0) {
    roll = Math.random();
  }
  roll = Math.ceil(roll * 10);

  return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
