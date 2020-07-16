$(document).ready(function(){
    // MENU CLONE

    $(".header-right__open-draw").click(function(){
      $(this).toggleClass('active');

      if($(this).hasClass('active')){
        $(this).find('i').removeClass().addClass("fas fa-times mobile")
        // $("#clone-menu").animate({left: '0'}, 500)
        $("#clone-menu").addClass('active');
        $('.clone-menu__box').css("display", "block")
      }else{
        $(this).find('i').removeClass().addClass("fas fa-bars mobile");
        // $("#clone-menu").animate({left: '-28rem'}, 500)
        $("#clone-menu").removeClass('active');
        $('.clone-menu__box').css("display", "none")
      }
    });
    
    $('.clone-menu__box').click(function(){
      console.log("ok")
      $("#clone-menu").removeClass('active');
      $(".header-right__open-draw").find('i').removeClass().addClass("fas fa-bars mobile");
      $(this).css("display", "none")
    })

    
    

    ///// SEARCH
     $('.header-right__search').click(function(){
       $('#header-right__search-box').addClass('active')
     })

     $('.header-right__search-icon').click(function(){
      $('#header-right__search-box').removeClass('active')
     })

     //// USER

     $(".header-right__icon.fa-user").click(function() {
       console.log("ok")
       $(this).addClass(".header-right__icon--active")

       $(".clone-menu__box").css("display" , "block");
      $("#header__user").addClass("header__user--active")
      
     })

     $(".clone-menu__box").click(function() {
       $(this).css("display" , "none");
       $("#header__user").removeClass("header__user--active")
     })
  });