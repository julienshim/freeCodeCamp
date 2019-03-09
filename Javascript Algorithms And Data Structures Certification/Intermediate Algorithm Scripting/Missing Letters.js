function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let adx = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (alphabet[adx] !== str[i]) {
      return alphabet[adx];
    };
    adx++;
  }
  return undefined;
}

fearNotLetter("abce");
