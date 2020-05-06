
(function($) {    
    // other code here    
  $(document).ready(function() {  

      ////NAVIGATION 
      const DOM = {
          navItem:  ".navigation__item" ,
          boxCarousel: '.js-caroucel-box',
          contentCarousel: '.js-carousel-content',
          btnCarousel: '.top-movie__content-btn',
          btnCarouselLeft: 'top-movie__content-btn--left',
          listCarousel: '.top-movie__list-carousel',
          itemCarousel: '.top-movie__item-carousel',
          tabs: '.js-tabs',
          tabsContent: '.js-tabs-content',

          tabsContentActive: 'bottom-movie__tabs-content--active',
          tabsActive: 'bottom-movie__tabs-title--active',
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
      $(DOM.tabs).click(function(){
        if($(this).hasClass(DOM.tabsActive)){
          console.log('ok')
          return;
          
        }else {
          $(DOM.tabs).removeClass(DOM.tabsActive);
          $(this).addClass(DOM.tabsActive);
          let index = $(DOM.tabs).index(this);
           let tabsContent = $(DOM.tabsContent +'[data-index='+index+']');
           
          $(DOM.tabsContent).removeClass(DOM.tabsContentActive);
          tabsContent.addClass(DOM.tabsContentActive)
          console.log(tabsContent)


        }
      })
     

   });    
 })(jQuery);