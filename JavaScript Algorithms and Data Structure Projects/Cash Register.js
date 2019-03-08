function checkCashRegister(price, cash, cid) {
  let difference = cash - price;
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
  let changeArray = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let value = cid[i][0];
    let vir = cid[i][1];
    if (currency[value] < difference) {
      let subtract = Math.floor(difference / currency[value]);
      difference -= subtract;
      changeArray.push([value, subtract * currency[value]])
    }
  }
  return {status: "OPEN", change: changeArray}
  // Here is your change, ma'am.
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
