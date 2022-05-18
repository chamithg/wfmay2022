var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (i = 0; i < numbers.length; i++) {
  if (0 < numbers[i]) {
    countPositives++;
  }
}

console.log("there are " + countPositives + " positive values");
