$(document).ready(function () {
  $(".details__carousel-list").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    centerMode: false,
    cssEase: "linear",
  });

  //// SELECT PHOTO

  $(".js-details-mini").click(function () {
    console.log("details");

    if ($(this).hasClass("details-mini--active")) {
      return console.log("active");
    }

    $(".details-mini--active").removeClass("details-mini--active");
    $(this).addClass("details-mini--active");

    let index = $(this).attr("data-index");

    let itemContent = $(".details__pho[data-index='" + index + "']");
    console.log(itemContent);
    $(".details__photo--active").removeClass("details__photo--active");
    itemContent.addClass("details__photo--active");
  });

  /// SELECT NUMBER
    let count;
    let numbeBasket = $(".details__number-basket")
    count = parseInt(numbeBasket.text())
    console.log(count)

    $(".details__number-plus").click(function() {
        count++
        numbeBasket.text(count)
    })
    $(".details__number-minus").click(function() {
        if(count <= 1){
            return
        }else{
            count--;
            numbeBasket.text(count)
        }
    })
});
