const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls:false,
    nav: true,
  });
  document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');
  });