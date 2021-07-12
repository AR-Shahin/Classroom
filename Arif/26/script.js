
$(document).ready(function(){

    let btn1 = $('#btn1')
    let btn2 = $('#btn2')
    let p = $('p')

    p.hide()


    btn1.click(function(){
        p.show()
    })

    btn2.click(()=>{
        p.hide()
    })

    $('#btn3').click(function(){
        $(this).hide()
    })
    $('p.test').hide()


    // toggle 
    $('#toggle').click(function(){
        $('h6').toggle()
    })

    // fade

    // $('#fade').click(function(){
    //     $('.ourH1').fadeOut(2000)
    // })
    // $('#fadeIn').click(function(){
    //     $('.ourH1').fadeIn(5000)
    // })

    //toggle
    $('#toggleFade').click(function(){
        $('.ourH1').fadeToggle(1000)
    })


    // Slider

    $('#SlideDown').click(function(){

        $('.ourSlideH1').slideDown()
    })
    $('#SlideUp').click(function(){
        $('.ourSlideH1').slideUp()
    })

    //toggle
    $('#SlideToggle').click(function(){
        $('.ourSlideH1').slideToggle(1000,function(){
            console.log('Working!!')
        })
    })

    //animation 
    $('#animation').click(function(){
        $('.animation').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
            marginTop : '100px',
          });
    })
// callback
    $("#callBack").click(function(){
        $(".callBack").hide("slow", function(){
        alert("The paragraph is now hidden");
        });
    });

    // chain

    $('#div').dblclick(function(){
        $(this).css("backgroundColor", "red").slideUp(2000).slideDown(2000);
    })
   
   
});

// $(function(){

   
  
//   });
