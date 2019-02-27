// Unfinished

function convertHTML(str) {
  // &colon;&rpar;
  let array = str.split("");
  let entities = {
    "&" : "&amp;",
    ">" : "	&gt;",
    "<" : "&lt;",
    "\"" : "&quot;",
    "\'" : "&apos;"
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "&") {
      array[i] = "&amp;";
    }
  }
  return array.join("");
}

convertHTML("Dolce & Gabbana");
