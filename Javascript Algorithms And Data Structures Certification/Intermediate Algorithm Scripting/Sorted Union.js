function uniteUnique(arr) {
  let array = [];
  [...arguments].forEach(function(a){
    a.forEach(function(n){
      if (!array.includes(n)){
        array.push(n);
      }
    })
  })
  return array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
