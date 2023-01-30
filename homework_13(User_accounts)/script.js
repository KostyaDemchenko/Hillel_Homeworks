import {
    users
} from './user.js';

let filteredUsers = users.filter(user => {
    let balance = parseFloat(user.balance.replace(/[^\d.-]/g, ''));
    return balance > 2000;
});

let phoneNumbers = filteredUsers.map(user => user.phone);

let totalBalance = users.reduce((acc, user) => {
    let balance = parseFloat(user.balance.replace(/[^\d.-]/g, ''));
    return acc + balance;
}, 0);

console.log(phoneNumbers);
console.log(new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(totalBalance));
