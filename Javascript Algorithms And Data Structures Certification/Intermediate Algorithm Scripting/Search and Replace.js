function myReplace(str, before, after) {
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
      if (split[i] === before) {
        return str.replace(before, split[i] === upperCase(split[i]) ? upperCase(after) : after);
      }
  }
}

function upperCase(str) {
  return str = str.charAt(0).toUpperCase() + str.slice(1);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
