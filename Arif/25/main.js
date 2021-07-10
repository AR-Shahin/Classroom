const $ = (el) => document.querySelector(el)
const print = (el) => console.log(el)
const printT = (el) => console.table(el)

// let person = {
//     name : 'shahin',
//     age: 21,
//     friends : [{
//         name : 'omi',
//         age : 21
//     },
//     {
//         name : 'Asik',
//         age : 22
//     }
// ],
//     education : {
//         degree : 'HSC',
//         another : {
            
//         }
//     }

// }

// printT(person)
// let age = person.friends[0].age


// destructuring 

// print(age)

// let {name:title} = person

// print(title)

// let {education:{degree}} = person

// print(degree)


// let arr = [10,20,30,60,40]

// // let x = arr[2]
// let [,,,a] = arr

// print(a)

// import * as Test from './another.js'

// print(Test.title)


// Promise 

// let isMeeting = false
// let promise = new Promise((resolve,reject)=>{
//     if(isMeeting){
//         resolve('Ok')
//     }
//     else{
//         reject('fail')
//     }
// })

// promise
//     .then(response => print(response))
//     .catch(err => print(err))



// async function

// let sum = async (a,b)=> a+b

// sum(20,5).then(res => {
//     print(res)
// }).catch(err => print(err))

// Data types 

// Premitive : Sting,Number,boll,nul,undefine
// Refernce : Array,object,fuction,


// falsy value of js 
// 0,"",null,undefined,NAN

// truthy 
