let name = "John"

if(true) {
    let name = "Chris"
    let loc = "Paris"
    console.log("Local: "+name)
    console.log(loc)
}

console.log("Global: "+name)
// console.log(loc) //ReferenceError: loc is not defined