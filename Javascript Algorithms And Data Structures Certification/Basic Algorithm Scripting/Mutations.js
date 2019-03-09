function mutation(arr) {
  let mutation = true;
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
      mutation = false;
    }
  }
  return mutation;
}

mutation(["hello", "hey"]);
