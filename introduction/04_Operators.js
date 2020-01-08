console.log();
console.log("ABC" + 123);
console.log("ABC" + 2 + 2);
console.log(2 + 2 + "ABC");
console.log("ABC" + (2 + 2));
console.log("ABC" + [2 + 3]);

let n1 = 23.23;
let n2 = 45;
console.log(n1 + n2); // 68.23

let x = 1;
let y = 1;
x++;
console.log(x); // 2
x--;
console.log(x); // 1
++y;
console.log(y); // 2
--y;
console.log(y); // 1

console.log(10 / 2); // 5
console.log("10" / "2"); // 5
console.log(2 ** 4); // 16 (2 * 2 * 2 * 2)
console.log(1 + 2, 3 + 4); // 3 7
let m = (1 + 2, 3 + 4);
console.log(m); // 7
