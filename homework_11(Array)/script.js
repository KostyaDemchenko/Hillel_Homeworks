let arrLength = prompt("Enter the length of the array: ");
let arr = [];
for (let i = 0; i < arrLength; i++) {
  arr[i] = prompt(`Enter element ${i + 1}:`);
}
document.write(`Original Array: ${arr} <br>`);

arr.sort((a, b) => a - b);
document.write(`Sorted Array: ${arr} <br>`);

arr.splice(1, 3);
document.write(`Array after removing elements from 2 to 4: ${arr} <br>`);