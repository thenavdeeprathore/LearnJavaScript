// splice

// splice - delete
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]

// splice - insert
let arr1 = ["I", "study", "JavaScript"];
arr1.splice(2, 0, "complex", "language");
// from index 2
// delete 0
// then insert "complex" and "language"
console.log(arr1); // [ 'I', 'study', 'complex', 'language', 'JavaScript' ]

// Negative indexes allowed
let arr2 = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr2.splice(-1, 0, 3, 4);
console.log(arr2); // 1,2,3,4,5

// forEach
["big", "bang", "theory"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// find - The find method looks for a single (first) element that makes the function return true.
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Chris" },
  { id: 3, name: "Tom" }
];

let user = users.find(item => item.id == 1);
console.log(user.name); // John

// filter - The syntax is similar to find, but filter returns an array of all matching elements.
let employees = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Michael" }
];

// returns array of the first two users
let someUsers = employees.filter(item => item.id < 3);
console.log(someUsers.length); // 2

// indexOf/lastIndexOf and includes:
let arr3 = [1, 0, 2, 2, false];

console.log(arr3.indexOf(0)); // 1
console.log(arr3.lastIndexOf(2)); // 3
console.log(arr3.indexOf(false)); // 4
console.log(arr3.indexOf(null)); // -1
console.log(arr3.includes(1)); // true

// map
let lengths = ["Audi", "Ford", "Ferrari"].map(item => item.length);
console.log(lengths); // [ 4, 4, 7 ]

// sort
let arr4 = [5, 9, 3, 1, 7];
// the method reorders the content of arr4
arr4.sort();
console.log(arr4); // [ 1, 3, 5, 7, 9 ]

// reverse
let arr5 = [1, 2, 3, 4, 5];
arr5.reverse();
console.log(arr5); // [ 5, 4, 3, 2, 1 ]

// split
let arr6 = "Penny, Sheldon, Leo, Howard".split(", ", 2);
console.log(arr6); // [ 'Penny', 'Sheldon' ]

// split into letters
let str = "test";
console.log(str.split("")); // [ 't', 'e', 's', 't' ]

// join
let arr7 = ["Bilbo", "Gandalf", "Nazgul"];
let str1 = arr7.join(";"); // glue the array into a string using ;
console.log(str1); // Bilbo;Gandalf;Nazgul

// concat
let arr8 = [1, 2];

// create an array from: arr8 and [3,4]
console.log(arr8.concat([3, 4])); // [ 1, 2, 3, 4 ]

// create an array from: arr8 and [3,4] and [5,6]
console.log(arr8.concat([3, 4], [5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// create an array from: arr8 and [3,4], then add values 5 and 6
console.log(arr8.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]

console.log(arr8); // [ 1, 2 ]
