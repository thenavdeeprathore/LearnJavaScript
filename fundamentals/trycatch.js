let num = 1
let x
try {
    console.log(num)
    // num.toPrecision(500)
    if(x == "") throw "is empty";
    console.log('try block')
} catch (error) {
    console.error('Catching Error'+error)
} finally {
    console.log('finally block')
}