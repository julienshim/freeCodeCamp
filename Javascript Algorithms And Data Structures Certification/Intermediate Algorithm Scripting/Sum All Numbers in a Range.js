function sumAll(arr) {
  const max = Math.max.apply(Math, arr);
  const min = Math.min.apply(Math, arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
