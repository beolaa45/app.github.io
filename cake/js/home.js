$(document).ready(function(){
    
    /////// BNANER
    $('.bamner-carousell').slick({
        dots: true,
    });

    $(".slick-arrow.slick-next").text('').append(`<i class="fas fa-chevron-right"></i>`)
    $(".slick-arrow.slick-prev").text('').append(`<i class="fas fa-chevron-left"></i>`)

    $('.slick-dots li button').text('');

    ////// BANNER LIST

    $(window).on("load resize", function(){
        
       let widthPhoto = $(".js-photo-1").width();
       let heightPhoto = widthPhoto;
       $(".js-photo-1").height(heightPhoto)
       
       let widthPhoto2 = $(".js-photo-2").width();
       let heightPhoto2 = widthPhoto2/2;
       $(".js-photo-2").height(heightPhoto2)
    
       let widthPhoto3 = $(".js-photo-3").width();
       let heightPhoto3 = widthPhoto3;
       $(".js-photo-3").height(heightPhoto3)
    })
  });