
// var moviesController = (function(){

// })();

// var UIController = (function(){
//     var DOMstring = {
//         nav: 'mega-menu-1',
//         navLI: "navigation__sub-container"
//     }

//     return {
//         getDOMstring: function(){
//             return DOMstring
//         } 
//     }
// })();

// var controller = (function(moviCtrl, UICtrl){
//   var DOM =  UICtrl.getDOMstring();
//     var setup = function(){

//         document.getElementById(DOM.nav).addEventListener('mouseover', addActive);
//         document.getElementById(DOM.nav).addEventListener('mouseout', removeActive)
//     }

//     var addActive = function(e){
//         // var parent = e.target.parentElement;

//         // if(parent && parent.className === 'navigation__item'){
//         //     parent.classList.add('navigation__item-active');
//         //     console.log(parent)
//         // }
//         document.getElementsByClassName('.navigation__item').classList.add('hi')
        
       
//     }

//     var removeActive = function(e){
//     //   document.getElementById(DOM.nav).classList.remove('navigation__item-active')
//     // }
//     return {
//         init: function(){
//             console.log('Application has started');
//             setup()
//         }
//     }
// })(moviesController, UIController);

// controller.init();

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
        }, 200)

        console.log(current)
      })
     
   });    
 })(jQuery);