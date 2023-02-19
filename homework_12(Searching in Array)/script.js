let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1
let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    count++;
  }
}

// 2
let min = arr[0];
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
}

// 3
let max = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

// 4
let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    countNegative++;
  }
}

// 5
let countOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    countOddPositive++;
  }
}

// 6 
let countPositiveElements = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    countPositiveElements++;
  }
}

// 7
let sumPositiveEelements = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    sumPositiveEelements += arr[i];
  }
}

// 8
let sumOddPositiveElements = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    sumOddPositiveElements += arr[i];
  }
}

// 9
let product = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    product *= arr[i];
  }
}

// 10 Output(THE LARGEST AMONG THE ELEMENTS OF THE ARRAY)
let maxNum = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === maxNum) {
    newArr.push(arr[i]);
  } else {
    newArr.push(0);
  }
}


// 1 Output (SUM + COUNT)
console.log("Sum of positive elements: " + sum);
console.log("Number of positive elements: " + count);
// 2 Output (MIN)
console.log("Minimum element: " + min);
console.log("Sequence number: " + (minIndex + 1));
// 3 Output(MAX)
console.log("Maximum element: " + max);
console.log("Sequence number: " + (maxIndex + 1));
// 4 Output(COUNT NEGATIVE)
console.log("Number of negative elements: " + countNegative);
// 5 Output(COUNT ODD POSITIVE)
console.log("Number of odd positive elements: " + countOddPositive);
// 6 Output(COUNT POSITIVE ELEMENTS)
console.log("Number of even positive elements: " + countPositiveElements);
// 7 Output(COUNT POSITIVE ELEMENTS)
console.log("Sum of even positive elements: " + sumPositiveEelements);
// 8 Output(SUM OF ODD POSITIVE ELEMENTS)
console.log("Sum of odd positive elements: " + sumOddPositiveElements);
// 9 Output(PRODUCT OF POSITIVE ELEMENTS)
console.log("Product of positive elements: " + product);
// 10 Output(THE LARGEST AMONG THE ELEMENTS OF THE ARRAY)
console.log("New array(ONLY MAX ELEMENT): " + newArr);