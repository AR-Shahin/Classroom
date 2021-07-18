$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin : 10,
        loop : true,
        nav: true,
        navText: ['<b class="btn btn-sm btn-success prevBtn" ><i class="fa fa-arrow-left"></i></b>', '<b class="btn btn-sm btn-info  nextBtn ml-5"><i class="fa fa-arrow-right"></i></b>'],
        autoplay : true,
        autoplayTimeout : 3000,
        animateOut: 'fadeOut',
        responsiveClass:true,
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
            items:3,
            nav:true,
            loop:false
        }
    }
    });
});
