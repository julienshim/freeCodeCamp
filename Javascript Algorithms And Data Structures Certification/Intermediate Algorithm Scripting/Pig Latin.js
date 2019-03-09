function translatePigLatin(str) {
  let firstVowel = locateFirstVowel(str);
  console.log(firstVowel);
  return firstVowel === 0 
  ? `${str}way` 
  : `${str.substring(firstVowel)}${str.substring(0, firstVowel)}ay`
}

function locateFirstVowel(str) {
  let regex = /[aeiou]/gi
  for(let i = 0; i < str.length; i++) {
    if (str[i].match(regex)) {return i; break;}
  }
  return null;
}

translatePigLatin("consonant");
