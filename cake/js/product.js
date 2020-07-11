$(document).ready(function(){
    $(".product__section-header").children('span').addClass('isOpen')
    $(".product__section-header").siblings().addClass('isOpen')
    $(".product__section-header").click(function(){
        console.log("ok1")
        $(this).children('span').toggleClass('isOpen')
        $(this).siblings().toggleClass('isOpen')

        
        
    });

    $(".product__btn--white").click(function(e){
        e.preventDefault()
        $("input").prop("checked", false);
    })
})