// ==== assignment 01: feetToMile ====

function feetToMile(feet) {
  var convertToMile = Math.abs(feet) / 5280;
  return convertToMile;
}

// ==== assignment 02: woodCalculator ====

function woodCalculator(chair, table, bed) {
  var totalNeedWood = chair * 1 + table * 3 + bed * 5;
  return totalNeedWood;
}

// ==== assignment 01: brickCalculator ====

function brickCalculator(floor) {
  var numbeOfBrick;
  if (floor > 0 && floor <= 10) {
    numberOfBrick = 15 * 1000 * floor;
  } else if (floor > 10 && floor <= 20) {
    numberOfBrick = 12 * 1000 * (floor - 10) + 15 * 1000 * 10;
  } else {
    numberOfBrick = 10 * 1000 * (floor - 20) + 12 * 1000 * 10 + 15 * 1000 * 10;
  }
  return numberOfBrick;
}

console.log(brickCalculator(21));
// ==== assignment 01: tinyFriend ====

function tinyFriend(array) {
  var tinyFriendName = array[0];

  if (array.length == 0) {
    console.log("you give an empty array");
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (tinyFriendName.length > element.length) {
      tinyFriendName = element;
    }
  }
  return tinyFriendName;
}
