
const print = (e) => console.log(e)

function calculator(a, b, callback) {
    let sum = a + b
    callback(a, b)
}


// calculator(10, 20, function (a, b) {
//     print(a / b)
// })


// function test(a, b) {
//     print(a * b)
// }

// Asynchronous
// print('first')
// //print('second')
// setTimeout(function () { print("I love You !!!"); }, 2000)
// print('third')

// setInterval(() => {

// }, 1000);


// setInterval(function () {
//     print('i am from set time interval')
// }, 1000)


// Object 

let person = {
    name: 'shahin',
    age: 21,
    height: 5.8,
    getName: function () {
        return this.name
    },
    skills: ['PHP', 'JS', 'PYTHON']
}


// print(person.getName())
// let a = 'sss'
// console.log(typeof a)


// Array Functions

var arr = [10, 50, 40, 60, 80, 90]

//sort
// print(arr.sort())

//item -> index -> array 

// Foreach
// arr.forEach((item) => {
//     print(item + 5)
// })

// Filter

// let temp = arr.filter((value, index, arr) => {
//     return value > 50
// })
// // print(temp)

// function ourFunction(brr, target) {
//     let temp = brr.filter(item => {
//         return item != target
//     })

//     return temp
// }

// print(ourFunction(arr, 50))

// map
// arr.map(item => {
//     print(item)
// })

let b = [100, 500, 600]
// concat
// print(arr.concat(b))

// let temp = b.concat(arr)

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
var arr = [10, 50, 40, 60, 80, 90]
let temp = arr.slice(0, 2)
print(temp)
// let temp = arr.splice(0, 2)
// print(temp)
print(arr)
