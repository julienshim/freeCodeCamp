function titleCase(str) {
  let array = str.toLowerCase().split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(" ");
}

titleCase("I'm a little tea pot");