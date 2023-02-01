const userAge = prompt('Enter your age');
const userCity = prompt('Enter your city', 'Kiev, Amsterdam, Madrid');
const userActivity = prompt('Enter your favorite sport', 'Football, Basketball, Golf');

let resultMessage = '';

if (userAge === null || isNaN(userAge) || parseInt(userAge) <= 0) {
    resultMessage = 'You did not enter a valid age!';
} else if (userCity === null || userCity.trim() === '') {
    resultMessage = 'You did not enter a valid city!';
} else if (userActivity === null || userActivity.trim() === '') {
    resultMessage = 'You did not enter a valid activity!';
} else {
    resultMessage = 'You are ' + userAge + ' years old\n';
    switch (userCity.trim()) {
        case 'Kiev':
        case 'Amsterdam':
        case 'Madrid':
            resultMessage += 'Oh cool, you live in the capital!\n';
            break;
        default:
            resultMessage += 'You live in a beautiful city!\n';
    }
    switch (userActivity.trim()) {
        case 'Football':
            resultMessage += 'Do you want to be Messi?';
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
}

alert(resultMessage);
