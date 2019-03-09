function pairElement(str) {
  let split = str.split("");
  let paired = [];
  split.forEach(function(p){
    switch (p) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  });
  return paired;
}

pairElement("GCG");
