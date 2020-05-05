
(function($) {    
    // other code here    
  $(document).ready(function() {  

      ////NAVIGATION 
      let DOM = {
          navItem:  ".navigation__item" ,
          boxCarousel: '.js-caroucel-box',
          contentCarousel: '.js-carousel-content',
          btnCarousel: '.top-movie__content-btn',
          btnCarouselLeft: 'top-movie__content-btn--left',
          listCarousel: '.top-movie__list-carousel',
          itemCarousel: '.top-movie__item-carousel',

          navItemActive: 'navigation__item-active'
      }
    $(DOM.navItem).hover(
        function() {
            console.log('hi')
          $( this ).addClass( DOM.navItemActive );
        }, function() {
          $( this ).removeClass(DOM.navItemActive);
        }
      ); 
      
    ////TOP-MOVIE-BOX-CAROUSEL


    $(window).on('load resize', function() {
    let widthBoxCarousel = $(DOM.boxCarousel).width();
    let heightBoxCaroucel = widthBoxCarousel/3.16;
    $(DOM.contentCarousel).height(heightBoxCaroucel);
    })

    let current = 1;
      $(DOM.btnCarousel).click(function(){
        if($(this).hasClass(DOM.btnCarouselLeft)){
          current++;
        }else {
          current--;
        }

        if(current < 1){
          current = $(DOM.itemCarousel).length -4;
        }else if(current > $(DOM.itemCarousel).length -4){
          current = 1
        }
        let casouselItem = $('.js-item-' + current)
        $(DOM.listCarousel).animate({
          'left': 0 - casouselItem.position().left
        }, 300)

       
      })
     

      // BOTTOM-MOVIE-UPDATE
      $(window).on('load resize', function(){
        console.log($(window).width())
      })
     

   });    
 })(jQuery);