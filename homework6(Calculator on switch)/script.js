const mathOperator = prompt('Which operation do you want to do?' + '\n' +
'(add/sub/mult/div)').trim().toLowerCase();

const firstNum = +prompt('Enter first num');
const secondNum = +prompt('Enter second num');

switch (mathOperator){
    case 'add':
    case '+':
        alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
        break;
    case 'sub':
    case '-':
        alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
        break;
    case 'mult':
    case '*':
        alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        break;
    case 'div':
    case '/':
        alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
        break;
    default:
        alert('error!');
        break;
}

//Ипользуем метиод .trim и .toLowerCase для того чтобы отсеять ненуждные ответы для понимания нашего скрипта