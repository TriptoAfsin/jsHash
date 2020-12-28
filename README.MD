# jsHash

This is a simple implementation of <a href="https://en.wikipedia.org/wiki/Hash_table">hastable</a> in Javascript

<p align="center"><img src="./jsHash.png"" width="384"></p>

## Features - 
1. Automatic <a href="https://stackoverflow.com/questions/10901752/what-is-the-significance-of-load-factor-in-hashmap">loadfactor</a> based hashtable resizing
2. Data <a href="https://www.educative.io/edpresso/what-is-chaining-in-hash-tables">chaining</a>
3. No extra dependecies
4. Only 4KB

## Installaltion - 
### Method 1 - 
1. Clone this repo and use it in your project

### Method 2 (NPM)- 
1. Run this command - ```npm i js-hash-triptex ```


## Usage - 

```js
const hashtable = require('js-hash-triptex'); //importing the hash


const myTable = new hashtable(); 

myTable.setItem('firstName', 'Tripto21');
myTable.setItem('lastName', 'Afsin');
myTable.setItem('age', 22);

console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
```