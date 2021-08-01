const $ = (data) => document.querySelector(data)
const print = (data) => console.log(data)
const create = (data) => document.createElement(data)

// // create 
// let a = document.createElement('a')
// a.innerText = 'Click Me'
// // a.style.background = 'red'
// a.className = 'btn btn-sm btn-success'
// a.setAttribute('id' , 'btn1')
// // a.innerText = '<b>Click Me</b>'
// // print(a)


// let a2 = document.createElement('a')
// a2.innerText = 'Click Me 2'

// a2.className = 'btn btn-sm btn-warning mx-2'
// a2.setAttribute('id' , 'btn2')

// let a3 = document.createElement('a')
// a3.innerText = 'Click Me 3'

// a3.className = 'btn btn-sm btn-info mx-2'
// a3.setAttribute('id' , 'btn3')

// /// btn 4
// let a4 = document.createElement('a')
// a4.innerText = 'Click Me 4'

// a4.className = 'btn btn-sm btn-danger mx-2'
// a4.setAttribute('id' , 'btn4')

// let app = $('#app')


// app.appendChild(a)
// app.appendChild(a2)
// app.appendChild(a3)
// app.appendChild(a4)
// // print(app)

// let btn2 = $('#btn2')
// let btn3 = $('#btn3')
//  print(btn3)

// //remove 
// // app.removeChild(btn2)

// //replace 
// app.replaceChild(a4,btn2)


// event listener 

// let btn = $('#btn')

// btn.addEventListener('click',function(){
//     print('I am clicked!!')
// })


let form = $('form')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    // select 
    let name = $('#name').value
   
   if(name === ''){
       alert('Field Must not be empty')
   }else{
       //create 
        let tr = create('tr')
        let td1 = create('td')
        let td2 = create('td')

        // data add 
        td1.innerText = name
        td2.innerHTML = '<a class="btn btn-sm btn-danger rmv_btn">Delete</a>'

        tr.appendChild(td1)
        tr.appendChild(td2)

        // push in tbody
        let tbody = $('#tbody')
        tbody.appendChild(tr)
        $('#name').value = ''
        let btn = $('.rmv_btn')
        btn.addEventListener('click',function(){
            let deleteRow = this.parentElement
            print(deleteRow)
            
        });


   }
        
})
