$(document).ready (function(){
    $('.carousel__inner').slick({
    adaptiveHeight: true,
    infinite: true,
    speed: 1300,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider_arrow/right.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_arrow/left.png"></button>',
    responsive:[
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        }
    ]
      });
  });