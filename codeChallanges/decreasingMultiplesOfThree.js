function multiplesOf3(number) {
  while (number > 0) {
    if (number % 3 == 0) {
      console.log(number);
      number--;
    } else {
      number--;
    }
  }
}

multiplesOf3(100);
