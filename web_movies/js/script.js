
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
          current = $(DOM.itemCarousel).length - 4;
        }else if(current > $(DOM.itemCarousel).length - 4){
          current = 1
        }
       
        carousel(current);

      
      })

      function carousel(index, len = 4){
        let casouselItem = $('.js-item-' + index)
        $(DOM.listCarousel).animate({
          'left': 0 - casouselItem.position().left
        }, 300)
      }

      /////////////////////////////////////////////////////////

      let currentX = 0;
      let startPoit;
      function removeEventl(){
        window.removeEventListener('mousemove', carouselGrabbing)
        window.removeEventListener('mouseup', carouselStop)
      }
      function carouselGrabbing(e){
       
        let distanceX = e.pageX - currentX;
            currentX = e.pageX;
       
        $(DOM.listCarousel).css({
          left: $(DOM.listCarousel).position().left + distanceX
        })

        if(startPoit - e.pageX > 50){
          removeEventl();
          current++;
          if(current > $(DOM.itemCarousel).length - 4){
            current = 1;

          }
          carousel(current);
          console.log('a')
        }else if(e.pageX - startPoit > 50){
          removeEventl();
          current--;
          if(current < 1){
            current = $(DOM.itemCarousel).length - 4;
          }
          carousel(current);
          console.log('b')
        }
      }
      function carouselStop(e){
        
        removeEventl()
      }
      $(DOM.itemCarousel).on('mousedown', function(e){
        e.preventDefault();
       
      })
      //action grabbing
      $(DOM.listCarousel).on('mousedown', function(e){
        currentX = startPoit = e.pageX;
        
        // $(window).on('mousemove', carouselGrabbing)
        window.addEventListener('mousemove', carouselGrabbing)
        window.addEventListener('mouseup', carouselStop)
      })

      //infility

      function setup(){
        let realitem = $(DOM.itemCarousel).first()
        let itemfist = realitem.clone();
        let itemfistIndex = $(DOM.itemCarousel).length + 1;
        itemfist.removeClass('js-item-1')
        itemfist.addClass('js-item-' + itemfistIndex);
        itemfist.addClass('clone');
        console.log(itemfist);

        let itemLast = $(DOM.listCarousel).find(DOM.itemCarousel).last().clone();
        let itemLastIndex = 0;

        itemLast.removeClass('js-item-' + $(DOM.itemCarousel).length )
        itemLast.addClass('js-item-' + itemLastIndex);
        itemLast.addClass('clone');
        console.log(itemLast);

        $(DOM.listCarousel).append(itemfist);
        $(DOM.listCarousel).prepend(itemLast)
        $(DOM.listCarousel).css('left', 0 - realitem.position().left)
      }
      setup()



      // BOTTOM-MOVIE-UPDATE
      $(DOM.tabs).click(function(e){
        e.preventDefault();
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