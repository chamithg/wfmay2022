function sigma(start, end) {
  total = 0;
  for (i = start; i <= end; i++) {
    total = total + i;
  }
  console.log(total);
}

sigma(1, 100);
