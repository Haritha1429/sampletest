//Map()
//used to Transform each element of an array and return new array

array.map(function(currentValue, index, array) {
    // return new value
})

const numbers=[1,2,3,4,5,6]

const doubled = numbers.map(num => num *2)

console.log(doubled);


//filter()
//used to filter out elements that matches a condition

array.filter(function(currentValue, index, array) {
    // return true to keep element, false to discard
})


const numbers2 = [10,50,20,60,25,15,36,90,85]

const greaterthan20 = numbers2.filter(num=>num>=20)

console.log(greaterthan20);


// Reduce
//used to reduce the entire array into a single value(like,sum,product or object)
//numbers.reduce(...)

array.reduce(function(accumulator, currentValue, index, array) {
    // return new accumulator value
}, initialValue)

// .reduce() is an array method that reduces the array into a single value.

// It goes element by element and applies a function you provide.

// (acc, curr) => acc + curr

// This is an arrow function (the reducer).

// acc = accumulator (the running total).

// curr = current element from the array.

// acc + curr → means "add the current number to the total".

const num=[15,21,4,5,63]

const sum=num.reduce((acc,curr)=>acc+curr,0)

console.log(sum);

0+15=15
15+21=36
36+4=40
40+5=45
45+63=108