const userAge = prompt('Enter your age');
const userCity = prompt('Enter your city', 'Kiev, Amsterdam, Madrid');
const userActivity = prompt('Say your favorite sport ?', 'Football, Basketball, Golf');

let input = 0;
let alertSport = '';
let alertCity = '';

// Age validation
if (userAge === null || isNaN(userAge) || parseInt(userAge) <= 0) {
    alert('You did not enter a valid age!');
} else {
    input++;
}

// City validation
if (userCity === null || userCity.trim() === '') {
    alert('You did not enter a valid city!');
} else {
    input++;
}

// Activity validation
if (userActivity === null || userActivity.trim() === '') {
    alert('You did not enter a valid activity!');
} else {
    input++;
}

// Second part
if (input === 3) {
    switch (userActivity.trim()) {
        case 'Football':
            alertSport = 'Do you want to be a Messi?';
            break;
        case 'Basketball':
            alertSport = 'Do you want to be Kobe Bryant?';
            break;
        case 'Golf':
            alertSport = 'Do you want to be Bernhard Langer?';
            break;
        default:
            alertSport = 'I wish you success in this sport';
    }
    switch (userCity.trim()) {
        case 'Kiev':
        case 'Amsterdam':
        case 'Madrid':
            alertCity = 'Oh cool you live in the capital!';
            break;
        default:
            alertCity = 'You live in a beautiful city!';
    }
    alert('You are ' + userAge + ' years old \n' + alertCity + '\n' + alertSport);
}

console.log(input);