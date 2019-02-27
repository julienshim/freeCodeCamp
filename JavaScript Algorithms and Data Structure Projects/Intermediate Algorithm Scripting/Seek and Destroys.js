function destroyer(arr) {
  // Remove all the values
  let destroy = [...arguments];
	return destroy.shift().filter(n => !destroy.includes(n));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
