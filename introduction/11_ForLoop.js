// Print Ascending using for loop
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

for (let index = 0; index < days.length; index++) {
  const element = days[index];
  console.log(element);
}
console.log("-------------------");

// Print Descending using for loop
for (let index = days.length - 1; index >= 0; index--) {
  console.log(days[index]);
}
console.log("-------------------");

// Print Ascending using forEach loop
days.forEach(element => {
  console.log(element);
});

console.log("-------------------");

// Print loops with index number using for loop
days.forEach(function(day, index) {
  console.log(day + " " + index);
});
