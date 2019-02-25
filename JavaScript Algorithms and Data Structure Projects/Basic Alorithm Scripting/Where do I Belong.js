function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let func = function(a, b) {return a - b};
  return arr.indexOf(num) > -1 
    ? arr.sort(func).indexOf(num) 
    : [...arr, num].sort(func).indexOf(num);
}

getIndexToIns([40, 60], 50);