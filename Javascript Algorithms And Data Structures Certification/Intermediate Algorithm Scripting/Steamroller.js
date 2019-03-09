function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce((a, b) => Array.isArray(b) ? a.concat(steamrollArray(b)) : a.concat(b), []);
}

steamrollArray([1, [2], [3, [[4]]]]);