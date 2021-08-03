$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,

        navText : ['<i class="fas fa-backward mx-4"></i>','<i class="fas fa-forward"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });


    // $('.slick').slick({
    //     autoplay: true,
    //     arrows:false,
    //     fade:true,
    //     focusOnSelect:true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
        
    //   });

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    // magnifine

    $('.popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    
  });
