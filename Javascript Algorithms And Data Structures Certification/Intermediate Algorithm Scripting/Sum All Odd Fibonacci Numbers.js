function sumFibs(num) {
  let fib = [1,1]
  let sum = 0;
  for (let i = 2; i < num; i++){
    if (fib[i-1]+fib[i-2] > num) { break }
    fib.push(fib[i-1]+fib[i-2]);
  }
  fib.forEach(function(num){
    if (num % 2 === 1) { sum += num; }
  });
  return sum;
}

sumFibs(4);
