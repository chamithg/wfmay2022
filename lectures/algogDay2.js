arr = ["A", "B", "C", "D", "E"];

function reverse(arr) {
  var result = [];
  for (i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result);
}

reverse(arr);
