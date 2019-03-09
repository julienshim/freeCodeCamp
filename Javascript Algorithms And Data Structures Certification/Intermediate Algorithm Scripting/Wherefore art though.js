function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  collection.forEach(o => doesPropsMatch(o) && arr.push(o));

  function doesPropsMatch(obj) {
    let propArray = Object.keys(source);
    for (let i = 0; i < propArray.length; i++) {
      if (obj[propArray[i]] !== source[propArray[i]]) { return false; }
    }
    return true;
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
