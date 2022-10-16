const firstName = "Tom";
const job = "Developer";
const birthYear = 1990;
const currentYear = 2022;

const intro1 = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!'
console.log(intro1);

// from ES6, Template Literal ``
const intro2 = `I'm ${ firstName }, a ${ currentYear - birthYear } years old ${ job }!`
console.log(intro2);

// using regular String
console.log('String with \n\
multiple \n\
lines');

// using Template Literal ``
console.log(`String with
multiple
lines`);
