function findLongestWordLength(str) {
  const array = str.split(" ");
  let max = 0;
  array.forEach(function(n){
    if (n.length > max) { max = n.length };
  });
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");