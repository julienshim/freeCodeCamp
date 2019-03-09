function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(obj){
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  })
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");