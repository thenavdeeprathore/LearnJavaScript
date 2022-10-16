console.log("comparison operators")
console.log(2 == 2); // true
console.log(2 == 3); // false
console.log(2 > 3); // false
console.log(2 < 3); // true
console.log(2 != 3); // true
console.log("Z" == "A"); // false
console.log("Z" > "A"); // true
console.log("Java" < "Python"); // true
console.log("Z" == "z"); // false
console.log("2" > 1); // true
console.log("2" > "12"); // true
console.log(true == 1); // true
console.log(false == ""); // true
console.log(false == 0); // true

console.log("=== strict equality operator")
// === strict equality operator (checks both value and type)
console.log(false === 0); // false, because the types are different
console.log(null === undefined); // false

console.log("== equality operator")
// == equality operator (checks only value)
console.log(false == 0);  // true
console.log(null == undefined); // true

console.log("tricky questions")
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
// ! [Important]
console.log(null >= 0); // true [Important]

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
