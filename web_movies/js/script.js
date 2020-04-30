
var moviesController = (function(){

})();

var UIController = (function(){
    var DOMstring = {
        nav: 'mega-menu-1',
        navLI: "navigation__sub-container"
    }

    return {
        getDOMstring: function(){
            return DOMstring
        } 
    }
})();

var controller = (function(moviCtrl, UICtrl){
  var DOM =  UICtrl.getDOMstring();
    var setup = function(){

        document.getElementById(DOM.nav).addEventListener('mouseover', addActive);
        document.querySelector(".navigation__sub-container").addEventListener('mouseout', removeActive)
    }

    var addActive = function(e){
        var parent = e.target.parentElement;

        if(parent && parent.className === 'navigation__item'){
            parent.classList.add('active');
        }
        
        console.log(parent)
    }

    var removeActive = function(e){
        console.log('hi')
        var parent = e.target.parentElement;
        parent.classList.remove('active')
    }
    return {
        init: function(){
            console.log('Application has started');
            setup()
        }
    }
})(moviesController, UIController);

controller.init()