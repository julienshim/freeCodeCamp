function bouncer(arr) {
  return arr.filter(bool => Boolean(bool))
  
}

bouncer([7, "ate", "", false, 9]);