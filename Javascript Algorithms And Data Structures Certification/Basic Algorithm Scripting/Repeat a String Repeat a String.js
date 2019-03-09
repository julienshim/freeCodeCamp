function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeat = "";
  if (num < 0) {
    return repeat;
  } else {
    for (let i = 0; i < num; i++) {
      repeat += str;
    }
    return repeat;
  }
}

repeatStringNumTimes("abc", 3);