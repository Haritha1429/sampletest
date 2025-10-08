/* 
syntax for creating an array using squre brace[]

keyword variablename : datatype[]
*/

let flowers : string[] = ["rose","jasmin","Whiterose","Redrose","hibiscus","lilly","orangerose"]


console.log(flowers[0])  // rose
console.log(flowers[4])  // hibscus
console.log(flowers[6])  //orangerose
console.log(flowers[1])  //jasmin


//console.log ("====================count of values in Array======================")
console.log(flowers.length) 


//console.log("=======================iterating the array using for loop====================")
/*syntax
for(initalization;condition;increment/decrement){


}

*/

//static array

for(let i=0; i<7 ; i++)  {

    console.log(flowers[i])

}

// dynamic array
console.log("=======iterating the array using dynamic loop==================")


for(let i=0; i<flowers.length; i++){
    console.log(flowers[i])

}

//reverse order

console.log("===============reverse order==================")

for (let i=flowers.length-1; i>=0; i--){
    console.log(flowers[i])

}

//ascending order

let numbers1 : number = [2,30,47,58,987,69,100,118,987,1000]


console.log("=====ascending order===============")

numbers1.sort()

for (let i=0; i < numbers1.length; i++){
    console.log(numbers1[i])
}

//descending order

console.log("=========descending order============")

numbers1.sort()

for(let i=0; i=numbers1.length-1; i>=0; i--) {

    console.log(numbers1[i])

}









