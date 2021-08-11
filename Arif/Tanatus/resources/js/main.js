$(document).ready(function(){
    // Hero slider
    $('.hero_parent').slick({
      autoplay:true,
        arrows:false,
        speed:300,
    });

    // Scroll 
    $('#scroll_top').click(function(){
        $('html,body').animate({
            scrollTop : 0
        }),100;
    });
        $('#scroll_top').hide();
    $(window).scroll(function(){
        var count = $(this).scrollTop();

        if(count < 100){
            $('#scroll_top').fadeOut();
        }
        else{
            $('#scroll_top').fadeIn();
        }
    });

})
