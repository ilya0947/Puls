//Слайдер
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

  //Переключение между разделами
  $(document).ready (function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    //Переключение на описание
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
      $('.overlay, #consultation, #order, #thanks').fadeOut(500);
    });

    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn(500);
      })
    });

    // valid-form
   
    function valideFofms(form){
      $(form).validate({
        rules:{
          name:  {
            required: true,
            minlength: 1
          },
          phone: "required",
          email: {
            required: true,
            email:true
          }
        },
        messages: {
          name:{
            required: "Введите имя",
            minlength: jQuery.validator.format("Введите {0} символов(а)!")
          },
          phone: "Введите номер телефона",
          email: {
          required: "Введите ваш email",
          email: "Введите правильный email"
          }
        }
      });
    };
    valideFofms('#consultation-form');
    valideFofms('#consultation form');
    valideFofms('#order form');

    // maska ввода
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // Обработка полученных данных из инпутов

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn(500);
        $('form').trigger('reset');
      });
      return false; 
    });




    // появление стрелки
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1300) {
        $('.pageup').fadeIn(600);
      } else {
        $('.pageup').fadeOut(600);
      }
    });

     // Плавный скролл
    $("a[href^='#up']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
      });
      //Появление анимации
      new WOW().init();
  });