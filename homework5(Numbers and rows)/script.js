//Метод trim() удаляет пробельные символы с начала и конца строки.

//First task

const num1 = prompt('Enter first Part').trim() + '-';
const num2 = prompt('Enter second Part').trim() + '-';
const num3 = prompt('Enter third Part').trim();

const unitedNum = (num1 + num2 + num3);
alert(unitedNum);

//Second task

//Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

const inputNum = prompt('Enter a five-digit number');

const dividedNum = ('' + inputNum).split('');

alert('Your divided Num = ' + dividedNum);