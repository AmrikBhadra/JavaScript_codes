let score = 33

// console.log(typeof score)
// console.log(typeof(score))  //works similarly

// converting one dataype to another
let myScore = null
// console.log(typeof myScore);  //object

let scoreInInteger = Number(myScore) // here Number() is a class related function for typecasting to integer. Therefore capital N

// console.log(typeof scoreInInteger);  //number

// for Number() conversion
// "33"       =>   value: 33,   type: number
// "33abc"    =>   value: NaN,  type: number
// "Amrik"    =>   value: NaN,  type: number
// true       =>   value: 1,    type: number
// undefined  =>   value: NaN,  type: number
// null       =>   value: 0,    type: number


// Boolean() conversion

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 0            => false
// 1, 2, 3...   => true

// ""(empty string)  => false
// "Amrik"           => true


// String() conversion
let myNum = 33
console.log(typeof myNum);
let stringNum = String(myNum)
console.log(typeof stringNum);