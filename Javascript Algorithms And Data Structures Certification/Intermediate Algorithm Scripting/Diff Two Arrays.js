function diffArray(arr1, arr2) {
  let diff1 = arr1.filter(n => !arr2.includes(n))
  let diff2 = arr2.filter(n => !arr1.includes(n))
  var newArr = [...diff1, ...diff2];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
