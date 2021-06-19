let a = 10
const PI = 3.1416

// let b = 20
// const c =30
// console.log(b);

// console.log(a) // 10
if(true){
    a = 100
}
// console.log(a) // 100

let x = 10
let y = 20
let result = x % y
x ++
x --
// console.log(result)


function sum(a,b) {

    console.log(PI)
   // console.log(a+b)
}

//  sum(100,200)

const test = (a,b) =>{
    console.log(a+b)
}

// test(500,500)

//arrow function
let test2 = (a,b) => console.log(a * b)


function  outerFunction(a) {
    let outer = 10
    function innerFunction(params) {
        let inner = 20
        console.log(a + inner + outer)
    }
    innerFunction()
}
// outerFunction(10)

let z = 105.5
let s = 'shahin'


let person = {
    name : 'shahin',
    age : 21,
    walk : function () {
        return 'I am walking'
    }
}

// console.log(person.walk())


//Array
let fruits = ['mango','orange','apple']

// console.log(fruits.length)


let persons = [
    {
        name : "shahin",
        age : 21
    },
    {
        name : "Tanzim",
        age : 22
    }
    ,
    {
        name : "Arif",
        age : 23
    }
]


// for(let i = 0;i<persons.length;i++){
//     console.log('object :>> ', i.name);
// }
// console.log(persons[0].name);

// for(let i = 0;i<=10;i++){
//     console.log(i);
// }
// let i =1
// while(i<=5){
//     console.log('i am from while loop');
//     i++
// }


//if else
let q = 1
if(q === 1){
    console.log('ok');
}else{
    console.log('no')
}

//switch case 
// let val = 100
// switch(val) {
//     case 10:
//       console.log('ten')
//       break;
//     case 20:
//         console.log('two')
//       break;
//     default:
//         console.log('default')
//   }


let date = new Date()

// console.log(date);
let pi = Math.PI
console.log(Math.floor(Math.random() * 100));


let abc = 10
console.log(abc == 110 ? 100 : 1000);
