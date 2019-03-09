function checkCashRegister(price, cash, cid) {
  let difference = cash - price;
  let virSum = 0;
  let status = "";
  let currency = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let value = cid[i][0];
    let vir = cid[i][1];
    let subtract = difference - (difference % currency[value]);
    if (currency[value] < difference) {
      virSum += vir;
      if (vir < subtract) {
        difference = (difference-vir).toFixed(2);
        change.push([value, vir]);
      } else {
        difference = (difference-subtract).toFixed(2);
        change.push([value, subtract]);
      }
    }
  }

  if (virSum > (cash-price)) {
    status = "OPEN";
  } else if (virSum === (cash-price)) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  // Here is your change, ma'am.
  return {status, change};
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);