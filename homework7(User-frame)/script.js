const userAge = prompt('Enter your age');
const userCity = prompt('Enter your city', 'Kiev, Amsterdam, Madrid');
const userActivity = prompt('Say your favorite sport ?', 'Football, Basketball, Golf');

let input = 0;
let resultMessage = '';

// Age validation
if (userAge === null || isNaN(userAge) || parseInt(userAge) <= 0) {
    resultMessage = 'You did not enter a valid age!\n';
} else {
    input++;
}

// City validation
if (userCity === null || userCity.trim() === '') {
    resultMessage += 'You did not enter a valid city!\n';
} else {
    input++;
}

// Activity validation
if (userActivity === null || userActivity.trim() === '') {
    resultMessage += 'You did not enter a valid activity!\n';
} else {
    input++;
}

// Second part
if (input === 3) {
    switch (userActivity.trim()) {
        case 'Football':
            resultMessage += 'Do you want to be a Messi?';
            break;
        case 'Basketball':
            resultMessage += 'Do you want to be Kobe Bryant?';
            break;
        case 'Golf':
            resultMessage += 'Do you want to be Bernhard Langer?';
            break;
        default:
            resultMessage += 'I wish you success in this sport';
    }
    switch (userCity.trim()) {
        case 'Kiev':
        case 'Amsterdam':
        case 'Madrid':
            resultMessage += '\nOh cool you live in the capital!';
            break;
        default:
            resultMessage += '\nYou live in a beautiful city!';
    }
    resultMessage = 'You are ' + userAge + ' years old \n' + resultMessage;
}

if (resultMessage) {
    alert(resultMessage);
}

console.log(input);