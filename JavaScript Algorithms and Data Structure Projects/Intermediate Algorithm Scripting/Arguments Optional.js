function addTogether() {
  let args = [...arguments];
  let sum = undefined;
  for (let i = 0; i < args.length; i++) {
    if (!isNum(args[i])) { return undefined; }
    sum === undefined ? sum = args[i] : sum += args[i];
  }
  if (args.length === 1) {
    return function(extArg) {
      return isNum(extArg) ? sum + extArg : undefined;
    }
  }
  return sum;
}

function isNum(num) {
  return typeof num !== "number" ? false : true;
} 


addTogether(2,3);