var num = prompt();

var counter = 0;
var numList = [];

while (num != 1) {
  if (num % 2 == 0) {
    num /= 2;
  } else {
    num = 3 * num + 1;
  }
  numList[counter] = num;
  counter++;
}

var results = document.getElementById("output");

for (var i = 0; i < numList.length; i++) {
  results.innerHTML = results.innerHTML + numList[i] + ", ";
}

let totalNum = numList;
totalNum.sort((a, b) => b - a);
// console.log(totalNum);
document.getElementById("output2").innerHTML = "Highest Number: " + totalNum[0];
// console.log(totalNum[0]);

document.getElementById("output3").innerHTML = "Total steps: " + counter;
