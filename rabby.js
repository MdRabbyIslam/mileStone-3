var rabby = "hey I am rabby";

console.log(rabby);

function hello(num1, num2) {
  return num1 + num2;
}

console.log(hello(5, 6)); //!hi this is a commet

var myArray = [1, 5, 6, 8, 7, 4, 5, 8];

function arrayElementAdd(array) {
  var initialValue = 0;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    initialValue = initialValue + element;
  }
  return initialValue;
}

console.log(arrayElementAdd(myArray));

var num1 = 56;

var num2 = 78;

var result = num1 + num2;

console.log(result);
