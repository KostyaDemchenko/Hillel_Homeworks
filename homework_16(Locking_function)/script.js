let total = 0;

function addToTotal(n) {
    total += n;
    return total;
}

while (true) {
    let input = prompt("Enter a number to add, print 'quit' to stop or click cancel: ");
    if (input === 'quit' || null) {
        break;
    }
    let num = parseInt(input);
    if (isNaN(num)) {
        console.log("Invalid input. Function was stoped. Please enter only a number");
        break;
    }
    total = addToTotal(parseInt(input));
    console.log("Current total:", total);
}