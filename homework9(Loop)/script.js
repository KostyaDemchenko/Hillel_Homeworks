// 1
let ex1 = "";
for (let i = 10; i <= 20; i++) {
  ex1 += i + " ";
}
console.log(ex1);

// 2
for (let i = 10; i <= 20; i++) {
    console.log(i + '^2' + ' = ' + Math.pow(i,2));
  }

// 3
for (let i = 1; i <= 10; i++) {
    console.log('7 x ' + i + ' = ' + 7*i);
  }

// 4
let ex4 = (15 * 16) / 2;
console.log(ex4);

// or
// let ex4 = 0;
// for (let i = 1; i <= 15; i++) {
//   ex4 += i;
// }
// console.log(ex4);

// 5
let ex5 = 1, i = 15;
while (i <= 35) {
  ex5 *= i;
  i++;
}
console.log(ex5);

// 6
let ex6 = 0;
for (let i = 1; i <= 500; i++) {
  ex6 += i;
}
let ex6Ansver = ex6/500;
console.log(ex6Ansver);

// 7
let ex7 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    ex7 += i;
  }
}
console.log(ex7);

// 8
let ex8 = 0;
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      ex8 += i + ' ';
    }
  }
console.log(ex8);

// 9
const ex9 = prompt('Enter your namber');
let ex9Answer = "Divisors of " + ex9 + ": ";
for (let i = 1; i <= ex9; i++) {
  if (ex9 % i === 0) {
    ex9Answer += i + " ";
  }
}
console.log(ex9Answer);

// 10
let evenDivisorsCount = 0;
for (let i = 2; i <= ex9; i++) {
  if (ex9 % i === 0 && i % 2 === 0) {
    evenDivisorsCount++;
  }
}
console.log("Number of even divisors: " + evenDivisorsCount);

// 11
let evenDivisorsSum = 0;
for (let i = 2; i <= ex9; i++) {
  if (ex9 % i === 0 && i % 2 === 0) {
    evenDivisorsSum += i;
  }
}
console.log("Sum of even divisors: " + evenDivisorsSum);

// 12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
    console.log("\n");
}