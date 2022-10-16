/**
 * ***** Types of data *****
 * There are 2 types of data in JavaScript.
 *
 * A) 7 Primitive data types:
 * 1) number: integer/floating-point.
 * 2) bigint: is for integer numbers of arbitrary length.
 * 3) string: A string may have one or more characters, there’s no separate single-character type.
 * 4) boolean: true/false
 * 5) null: for unknown values
 * 6) undefined: for unassigned values
 * 7) symbol: for unique identifiers
 *
 * B) Object data types:
 * 1) Object
 * 2) Array
 * 3) Function
 */

console.log("Hello World");
console.log(typeof "Hello World"); // string

let name = "programming";
console.log(`JavaScript ${ name }`);
console.log(typeof `JavaScript ${ name }`); // string

console.log("X");
console.log(typeof "X"); // string

console.log(1, typeof 1); // number
console.log(-2, typeof -2); // number
console.log(9.999, typeof 9.999); // number
console.log(true, typeof true); // boolean
console.log(false, typeof false); // boolean
console.log(123n, typeof 123n); // bigint
console.log(undefined, typeof undefined); // undefined
console.log(null, typeof null); // object
console.log([], typeof []); // object
console.log({}, typeof {}); // object
console.log(Symbol("id"), typeof Symbol("id")); // symbol
