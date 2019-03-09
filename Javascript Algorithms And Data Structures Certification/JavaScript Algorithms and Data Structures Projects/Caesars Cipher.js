function rot13(str) { // LBH QVQ VG!
  let cipher = {
      "A": "N",
      "B": "O",
      "C": "P",
      "D": "Q",
      "E": "R",
      "F": "S",
      "G": "T",
      "H": "U",
      "I": "V",
      "J": "W",
      "K": "X",
      "L": "Y",
      "M": "Z",
      "N": "A",
      "O": "B",
      "P": "C",
      "Q": "D",
      "R": "E",
      "S": "F",
      "T": "G",
      "U": "H",
      "V": "I",
      "W": "J",
      "X": "K",
      "Y": "L",
      "Z": "M",
      
  }
  let decode = str.split("");
  for (let i = 0; i < decode.length; i++) {
      if (cipher.hasOwnProperty(decode[i])) {
          decode[i] = cipher[decode[i]]
      }
  }
  return decode.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
