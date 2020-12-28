const hashtable = require('./hashtable'); //importing the hash


const myTable = new hashtable(); 

myTable.setItem('firstName', 'Tripto21');
myTable.setItem('lastName', 'Afsin');
myTable.setItem('color', 'ash');
myTable.setItem('age', '22');
myTable.setItem('favNum', 21);
myTable.setItem('isStudent', true);
myTable.setItem('gender', 'male');

console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('isStudent'));
console.log(myTable.getItem('favNum'));


