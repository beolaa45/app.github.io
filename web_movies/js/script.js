
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
       
    $( ".navigation__item" ).hover(
        function() {
            console.log('hi')
          $( this ).addClass( "navigation__item-active" );
        }, function() {
          $( this ).removeClass( "navigation__item-active" );
        }
      );   
   });    
 })(jQuery);