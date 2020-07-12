
$(document).ready(function(){
    $('.details__carousel-list').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
        cssEase: 'linear',
        
       
    });

    
    $(".js-details-mini").click(function(){
        console.log("details")

        if ($(this).hasClass("details-mini--active")) {
            return console.log("active")
        }

        $(".details-mini--active").removeClass("details-mini--active");
        $(this).addClass("details-mini--active")

        let index = $(this).data('inx')
        console.log(index)
    })

  });