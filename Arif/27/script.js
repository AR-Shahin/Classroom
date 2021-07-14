
$(document).ready(function(){

  let changeBtn = $('#btnChange')
  let changeContent = $('.changeContent')
    let input = $('#input')
//   changeBtn.click(function(){
//     // $('.changeContent').text('<i>Changed!</i>')
//     changeContent.html('<i>Changed!</i>')
//     // input.val('Arif')
//     // console.log(changeContent)

//     // changeContent.attr('title','Hello')
//   })
   
//   $("#btn1").click(function(){
//     alert("Text: " + $("#test").text());
//   });
//   $("#btn2").click(function(){
//     alert("HTML: " + $("#test").html());
//   });


// get
// changeBtn.click(function(){
//         console.log(changeContent.html());
//     })



    // add element
    // changeBtn.click(function(){
    //     // changeContent.append(' test')
    //      changeContent.prepend(' test')

    // })

    // after 
    // changeBtn.click(function(){
    //         // changeContent.append(' test')
    //         // changeContent.after('<b> After!</b>')
    //         changeContent.before('<b> Before!</b>')
    // })

    // delete / empty
    //   changeBtn.click(function(){
    //     // changeContent.remove()
    //     changeContent.empty()
    // })

    // $("button").click(function(){
    //     $("#div1").empty();
    //   });


    // add class
    // $('#click').click(function(e){
    //     e.preventDefault();
        
    //     // $(this).addClass('bg-info')
    //     // $(this).removeClass('btn-danger')

    //     $(this).toggleClass('btn-success')
    // })


    // $('#any').click(function(){
    // $('h4').css({
    //     'color' : 'red',
    //     'font-size' : '100px'
    //     })
    // })
    

    /// parents
    //  $('.child').click(function(){
    //   let p =  $(this).parent().css({'background-color' : 'red'})
    //   console.log(p)
    // })


    //siblings
    $('.h5').click(function(){
        $(this).siblings().css({
            'color' : 'green'
        })
    })
});


