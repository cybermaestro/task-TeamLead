
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
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "150px",
        vertical: true,
    //   verticalSwiping: true,
        // autoplay: true,
        // autoplaySpeed: 1500,
    });
    $(".slick-prev").text("❯");
    $(".slick-next").text("❯");
  });

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Таймер
window.onload = function () {
    var fiveMinutes = 60 * 30,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

// Запрет на ввод букв в поле телефона
let num = document.querySelector('.ss');

num.addEventListener('input', function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)







