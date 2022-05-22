function factorial(number) {
  result = 1;
  for (i = number; i > 1; i--) {
    result = result * i;
  }
  console.log(result);
}

factorial(12);
