function chunkArrayInGroups(arr, size) {
  // Break it up.
  let monkey = [];
  while(arr.length) {
    monkey.push(arr.splice(0, size));
  }
  return monkey;
}
