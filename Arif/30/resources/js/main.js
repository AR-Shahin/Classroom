$(document).ready(function(){
    $('.test').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });

    // star
    $("#rateYo").rateYo({
        rating: 0,
        starWidth: "80px",
        normalFill: "teal",
        ratedFill: "#fbc531",
        spacing   : "15px",
        multiColor: {
 
            "startColor": "#FF0000", //RED
            "endColor"  : "#00FF00"  //GREEN
          },
          numStars : 10
      });
});
