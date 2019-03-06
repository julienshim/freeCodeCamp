function palindrome(str) {
  // Good luck!
  let a = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  let b = a.split("").reverse().join("");
  return a === b;
}



palindrome("eye");
