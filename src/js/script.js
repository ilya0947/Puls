const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    adaptiveHeight: true,
    controls:false,
    nav: false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1
        }
      }
  });
  
  
  document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');
  });