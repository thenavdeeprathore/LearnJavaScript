let myBio = {
  name: "Navdeep Rathore",
  age: 30,
  city: "Paris"
};

console.log(myBio);
console.log(myBio.name);
myBio.name = "Rocky";
console.log(myBio.name);
myBio["name"] = "John";
console.log(myBio.name);
