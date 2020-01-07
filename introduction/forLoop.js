const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element)
}
console.log('-------------------')

for (let index = days.length-1; index >= 0; index--) {
    console.log(days[index])
}
console.log('-------------------')

days.forEach(element => {
    console.log(element)
});

console.log('-------------------')

days.forEach(function(day, index) {
    console.log(day + ' ' +index)
});