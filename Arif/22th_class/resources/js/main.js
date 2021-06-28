const $ = (data) => document.querySelector(data)
const print = (data) => console.log(data)
const create = (data) => document.createElement(data)

// select 

let form = $('#todoForm')
let app = $('#app')


// create

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let name = $('#name')
    if(name.value == ''){
        alert('Field Must not be empty!')
    }else{
        //create 
        const ul = create('ul')
        ul.className = 'list-group'
        const li = create('li')
        const btn = create('a')
        li.className = 'list-group-item d-flex'
        btn.textContent = 'Delete'
        btn.className = 'mx-auto btn btn-danger btn-sm'
        li.textContent = name.value
        li.appendChild(btn)
        ul.appendChild(li)
        app.appendChild(ul)
        name.value = ''
        btn.addEventListener('click',function(){
            let deleteRow = this.parentElement
            ul.removeChild(deleteRow)
        });
    }
})



// dynamic color change 

let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

let colorBtn = $('#colorBtn')
let color = '#'
let body = $('body')
colorBtn.addEventListener('click',(e)=> {
    e.preventDefault()

    for(let i =0;i<6;i++){
        let num = Math.floor(Math.random() * 15)
        color += hex[num]
    }
    body.style.background = color
    color = '#'

})
   
