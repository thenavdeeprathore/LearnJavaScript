function name(firstName) {
    console.log("Hello "+firstName)
}
name('John')


function results(num1, num2) {
    let add = num1 + num2
    return add
}
console.log(results(2, 3))

// undefined parameters
function defaultParameter(name, age) {
    return 'Hi my name is: '+name+' and my age is: '+age
}
console.log(defaultParameter())

// default parameters
function defaultParameters(name='John', age=30) {
    return 'Hi my name is: '+name+' and my age is: '+age
}
console.log(defaultParameters())
console.log(defaultParameters('Chris', 27))