function telephoneCheck(str) {
  // Good luck!
  if ( str.match(/1 (\d){3} (\d){3} (\d){4}/g)
  || str.match(/^(\d){10}$/g)
  || str.match(/1 (\d){3}-(\d){3}-(\d){4}/g)
  || str.match(/^((\d){3})-(\d){3}-(\d){4}/g)
  || str.match(/^1 \((\d){3}\) (\d){3}-(\d){4}/g)
  || str.match(/1\((\d){3}\)(\d){3}-(\d){4}/g)
  || str.match(/^\((\d){3}\)(\d){3}-(\d){4}/g)
  ) {
    return true
  } else {
    return false
  }
}

telephoneCheck("555-555-5555");
