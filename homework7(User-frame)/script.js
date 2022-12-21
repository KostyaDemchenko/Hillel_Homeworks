const userAge = prompt('Enter your age');
const userSity = prompt('Enter your sity', 'Kiev, Amsterdam, Madrid');
const userActivity = prompt('Say your favorite sport ?', 'Football, Basketball, Golf');

let input = 0; 
let alertSport, alertSity = 0;

// Age case
switch (true) {
    case userAge === null:
        alert('You didnt enter your age!');
        break;
    case parseInt(userAge) <= 0:
        alert('How did you get here!');
        break;
    default:
        input++;
}

//Sity case
switch (true) {
    case userSity === null:
        alert('You didnt enter your sity!');
        break;
    case userSity.trim() === '':
        alert('You didnt enter your sity!');
        break;
    default:
        input++;
}

//Activity case
switch (true) {
    case userActivity === null:
        alert('You didnt enter your activity!');
        break;
    case userActivity.trim() === '':
        alert('You didnt enter your activity!');
        break;
    default:
        input++;
}

//Second part
if (input === 3) {
    switch (userActivity.trim()){
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
    switch (userSity.trim()){
        case 'Kiev' || 'Amsterdam' || 'Madrid':
            alertSity = 'Oh cool you live in the capital!';  
            break;
        default:
            alertSity = 'You live in a beautiful city!';         
    }
    alert('You are ' + userAge + ' years old \n' + alertSity + '\n' + alertSport);
}

console.log(input)