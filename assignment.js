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
    numberOfBrick = 12 * 1000 * floor;
  } else {
    numberOfBrick = 10 * 1000 * floor;
  }
  return numberOfBrick;
}

// ==== assignment 01: tinyFriend ====

function tinyFriend(array) {
  var tinyFriendName = array[0];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (tinyFriendName.length > element.length) {
      tinyFriendName = element;
    }
  }
  return tinyFriendName;
}
