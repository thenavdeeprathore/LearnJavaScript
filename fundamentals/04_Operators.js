/**
 * Types of Operator:
 *
 * Arithmetic
 * Assignment
 * Ternary
 * Comparison
 * Logical
 * Binary
 */

//-----Arithmetic-----
let a = 2;
let b = 3;
console.log(a + b); //5
console.log(a - b); //-1
console.log(a * b); //6
console.log(a / b); //0.6666666666666666
console.log(a ** b); //8

console.log();
console.log("ABC" + 123); //ABC123
console.log("ABC" + 2 + 2); //ABC22
console.log(2 + 2 + "ABC"); //4ABC
console.log("ABC" + (2 + 2)); //ABC4
console.log("ABC" + [2 + 3]); //ABC5

let n1 = 23.23;
let n2 = 45;
console.log(n1 + n2); //68.23

let x = 1;
let y = 1;
x++; //x=x+1
console.log(x); //2
x--; //x=x-1
console.log(x); //1
++y;
console.log(y); //2
--y;
console.log(y); //1

console.log(10 / 2); //5
console.log("10" / "2"); //5
console.log(2 ** 4); //16 (2 * 2 * 2 * 2)
console.log(1 + 2, 3 + 4); //3 7
let m = (1 + 2, 3 + 4);
console.log(m); //7

//-----Assignment-----
let i = 10;
let j = i + 10;
console.log(j);

// i = i * 10;
i *= 10;
console.log(i);

//-----Comparison-----
let p = 10;
console.log(p > 1);
console.log(p == 10);
//strict equality - type and value is checked
console.log(p === 10);
// lose equality - value is checked
console.log("1" == 1);
console.log(1 == 1);
console.log(true == 1);

//-----Ternary-----
let marks = 50;
let rank = marks > 65 ? "pass" : "fail";
console.log(rank);

//-----Logical-----
// AND (&&)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
// OR (||)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
// NOT (!)
let isActive = true;
console.log(!isActive); //false
console.log(!(4 > 2)); //false

//-----Logical operators with non-boolean value-----
// falsy (false) values:
// undefined
// null
// 0
// ''
// false
// NaN

// truthy (true) values:
console.log(false || "John"); //John
console.log(false || 1 || 2); //1
console.log(true || 1 || 2); //true
console.log(false || undefined); //undefined
console.log(false || null); //null

//-----Bitwise-----
//1 = 00000001
//2 = 00000010
//3 = 00000011 -- |
//3 = 00000000 -- &
console.log(1 | 2); //3
console.log(1 & 2); //0

//----- Operator precedence -----
console.log(2 + 3 * 4); //14
console.log((2 + 3) * 4); //20
