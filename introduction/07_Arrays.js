// Array is a special kind of object, suited to storing and managing ordered data items.

// There are two syntaxes for creating an empty array:
let array1 = new Array();
let array2 = [];
console.log(array1); // []
console.log(array2); // []

// Array elements are numbered, starting with zero.
// We can get an element by its number in square brackets:
let fruits = ["Apple", "Orange", "Grape"];
console.log(fruits); // [ 'Apple', 'Orange', 'Grape' ]
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Grape

// We can replace an element:
fruits[2] = "Banana";
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]

// Or add a new one to the array:
fruits[3] = "watermelon";
console.log(fruits); // [ 'Apple', 'Orange', 'Banana', 'watermelon' ]

// Or delete an element from the array:
delete fruits[3];
console.log(fruits); // [ 'Apple', 'Orange', 'Banana', <1 empty item> ]

// The total count of the elements in the array is its length:
console.log(fruits.length); // 4

// An array can store elements of any type.
let mix = [
  "Tokyo",
  23,
  true,
  { name: "John" },
  function() {
    console.log("hello");
  }
];
console.log(mix); // [ 'Tokyo', 23, true, { name: 'John' }, [Function] ]
console.log(mix[0]); //Tokyo
console.log(mix[1]); //23
console.log(mix[2]); //true
console.log(mix[3]); //{ name: 'John' }
console.log(mix[3].name); //John
console.log(mix[4]); //[Function]
console.log(mix[4]()); // hello undefined

let superheroes = ["IronMan", "SuperMan", "BatMan"];

console.log(superheroes); //[ 'IronMan', 'SuperMan', 'BatMan' ]
console.log(superheroes.length); //3
console.log(superheroes[0]); //IronMan
console.log(superheroes[1]); //SuperMan
console.log(superheroes[2]); //BatMan
console.log(superheroes[superheroes.length - 1]); //BatMan
// console.log(superheroes[3]) //undefined
// console.log(superheroes[-1]) //undefined

console.log(`Length of this array is ${superheroes.length}`); //Length of this array is 3

/**
 * Array Methods:
 * -- START --
 * shift - Removes the first element of the array.
 * unshift - Add the element to the beginning of the array.
 *
 * -- END --
 * pop - Removes the last element of the array.
 * push - Add the element to the end of the array.
 *
 * -- MIDDLE --
 * splice - delete an element from the array.
 */

const nums = ["one", "two", 1, 2, null, 23.99];
console.log(nums); // [ 'one', 'two', 1, 2, null, 23.99 ]

//start
console.log(nums.shift()); // one
console.log(nums); // [ 'two', 1, 2, null, 23.99 ]

nums.unshift("navdeep");
console.log(nums); // [ 'navdeep', 'two', 1, 2, null, 23.99 ]

//end
console.log(nums.pop()); // 23.99
console.log(nums); // [ 'navdeep', 'two', 1, 2, null ]

nums.push("THOR");
console.log(nums); // [ 'navdeep', 'two', 1, 2, null, 'THOR' ]

//middle
nums.splice(2, 3, "SPLICE");
console.log(nums); // [ 'navdeep', 'two', 'SPLICE', 'THOR' ]
