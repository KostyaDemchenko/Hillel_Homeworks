function sum(num) {
    let total = 0;
    return function addToTotal(n) {
      total += n;
      return total;
    }
  }
  
  const addToTotal = sum(0);
  console.log(addToTotal(3)); // 3
  console.log(addToTotal(5)); // 8
  console.log(addToTotal(20)); // 28