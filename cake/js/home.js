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
        
    //   let widthCard =  $('.best-slice__card').width()
    //   let heightCard = widthCard * 1.95;
    //   $('.best-slice__card').height(heightCard)
    //   console.log(widthCard)
    //   console.log(heightCard)
    })
  });