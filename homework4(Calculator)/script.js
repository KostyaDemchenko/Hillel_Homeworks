const mathOperator = prompt('Which operation do you want to do?' + '\n' +
    '(add/sub/mult/div)').trim().toLowerCase();

const firstNum = +prompt('Enter first num');
const secondNum = +prompt('Enter second num');

if ((mathOperator == 'add') || (mathOperator == '+')) {
    alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
} else if ((mathOperator == 'sub') || (mathOperator == '-')) {
    alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
} else if ((mathOperator == 'mult') || (mathOperator == '*')) {
    alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
} else if ((mathOperator == 'div') || (mathOperator == '/')) {
    alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
} else {
    alert('Error!');
}
