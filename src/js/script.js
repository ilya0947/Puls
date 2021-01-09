const slider = tns({
    container: '.carousel__inner',
    items: 1,
    speed: 500,
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

  $(document).ready (function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function tooggleSlide(item){
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    };
    tooggleSlide('.catalog-item__link');
    tooggleSlide('.catalog-item__back');
    
    // modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn(500);
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order').fadeOut(500);
    });

    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn(500);
      })
    });
  });