function smallestCommons(arr) {
  let min = Math.min.apply(Math, arr);
  let max = Math.max.apply(Math, arr);
  let compare = max;
  let scm = 0;
  while (scm === 0) {
    for (let i = min; i <= max; i++) {
      if (compare % i !== 0) { break;};
      if (i === max) {scm = compare};
    }
    compare += max;
  }
  return scm;
}


smallestCommons([1,5]);