/**
 * The three most widely used type conversions are to string, to number, and to boolean.
 * 1) String Conversion
 * 2) Numeric Conversion
 * 3) Boolean Conversion
 */

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

console.log("6" / "2"); // 3, strings are converted to numbers

console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean()); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true, spaces, also true (any non-empty string is true)
