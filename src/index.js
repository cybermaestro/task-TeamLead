
$(document).ready(function() {
	$('#pagepiling').pagepiling({
        sectionsColor: ['rgba(0,0,0,0.8)', '#4BBFC3', '#7BAABE', 'whitesmoke', '#e3f054'],
        loopBottom: true,
        loopTop: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],

    });
});

// block-3 слайдер

$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      centerPadding: "250px",
      vertical: true,
    //   verticalSwiping: true,
      // autoplay: true,
      // autoplaySpeed: 1500,
    });
    $(".slick-prev").text("❯");
    $(".slick-next").text("❯");
  });









