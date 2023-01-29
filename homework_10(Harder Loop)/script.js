// 1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// 2
const dollarToHryvna = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(i + ' dollars is ' + (i * dollarToHryvna) + ' hryvnas');
}

// 3
let N = 1000;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}

// 4
const numPrime = prompt('Enter your num and I will say is it prime');

function isPrime(numPrime) {
    if (numPrime <= 1) {
        return false;
    }
    for (let i = 2; i < numPrime; i++) {
        if (numPrime % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(numPrime));

// 5
const numPower = parseFloat(prompt('Enter a number to check number 3 to a certain power'));

function isPowerOfThree(numPower) {
    if (isNaN(numPower)) {
        return false;
    }
    while (numPower > 1) {
        if (numPower % 3 !== 0) {
            return false;
        }
        numPower /= 3;
    }
    return true;
}
console.log(isPowerOfThree(numPower));
