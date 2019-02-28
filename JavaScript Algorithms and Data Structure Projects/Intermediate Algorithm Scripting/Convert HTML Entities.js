function convertHTML(str) {
  // &colon;&rpar;
  let array = str.split("");

  for (let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case "&":
        array[i] = "&amp;";
        break;
      case ">":
        array[i] = "&gt;";
        break;
      case "<": 
        array[i] = "&lt;";
        break;
      case '"':
        array[i] = "&quot;";
        break;
      case "'":
        array[i] = "&apos;";
        break;
    }
  }
  return array.join("");
}

convertHTML("Dolce & Gabbana");