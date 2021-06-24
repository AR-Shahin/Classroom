
const print = (e) => console.log(e)
const $ = (e) => document.querySelector(e)
// selector 
// document.getElementById() // select by id
// document.getElementsByTagName() // select by tag name
// document.getElementsByClassName() // select by class name 

// document.querySelector() // select like as css
// document.querySelectorAll() // select like as css


// let h2 = document.getElementById('heading')
let h2 = document.getElementsByTagName('h2') 

// console.log(h2[0].innerHTML)

// let p = document.getElementsByClassName('para')
// print(p)
// console.log(p[0].innerHTML);


// let select = document.querySelector('#test')
// print(select)


// let test = document.querySelectorAll('#heading') 
// print(test)


// change 
let h4 = $('h4')
print(h4)

h4.innerHTML = 'Change Cine'
h4.style.backgroundColor = 'red'
h4.setAttribute('title', 'helo')


