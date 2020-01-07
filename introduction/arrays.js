let superheroes = ['IronMan', 'SuperMan', 'BatMan']

console.log(superheroes)
console.log(superheroes.length)
console.log(superheroes[0])
console.log(superheroes[1])
console.log(superheroes[2])
console.log(superheroes[superheroes.length-1])
// console.log(superheroes[3]) //undefined
// console.log(superheroes[-1]) //undefined

console.log(`Length of this array is ${superheroes.length}`)



const nums = ['one', 'two', 'three', 1, 2, 3, null, 23.99]
console.log(nums)

nums[2] = 'SOMETHING'
console.log(nums)

//start
console.log(nums.shift())
console.log(nums)

nums.unshift('navdeep')
console.log(nums)

//end
console.log(nums.pop())
console.log(nums)

nums.push('THOR')
console.log(nums)

//middle
nums.splice(2, 4, 'SPLICE')
console.log(nums)


