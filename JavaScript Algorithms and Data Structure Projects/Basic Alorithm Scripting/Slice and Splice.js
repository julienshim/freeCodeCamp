function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let frankenArray = arr2.slice(0, arr2.length);
  for (let i = arr1.length - 1; i >= 0; i--) {
    frankenArray.splice(n, 0, arr1[i]);
  }
  return frankenArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);