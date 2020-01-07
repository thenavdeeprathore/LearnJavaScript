/**
 * ***** Types of variables *****
 * We can declare variables to store data by using the var, let, or const keywords.
 *
 * 1) let – is a modern variable declaration.
 * 2) var – is an old-school variable declaration. Normally we don’t use it at all.
 * 3) const – is like let, but the value of the variable can’t be changed.
 *
 * NOTE: JavaScript is dynamically typed (also called loosely typed) scripting language.
 * NOTE: Javascript variables can receive different data types over time.
 */

let firstName = "Navdeep";
console.log(firstName);

var lastName = "Rathore";
console.log(lastName);
const city = "Pune";
console.log(city);

let x;
console.log(x); // undefined
console.log(typeof x); // undefined

let name = "John";
console.log(name); // John
console.log(typeof name); // string

let a = "100";
console.log(a); // 100
console.log(typeof a); // string

let number = 100;
console.log(number); // 100
console.log(typeof number); // number

let z = 10;
z = "Chris"; // reassignment possible for variable let
console.log(z); // Chris

const n = 11;
// n = "Vicky";  //TypeError: Assignment to constant variable.
console.log(n); // 11

let myArray = [];
console.log(myArray); // []

let myObject = {};
console.log(myObject); // {}
