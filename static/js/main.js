
// Начинать писать отсюда!!!!

$(document).ready(function(){

  /////////////// Map ///////////////////

  // function initMap() {
  //   var centerLatLng = new google.maps.LatLng(48.468975780852126, 135.1129739999999);
  //   var mapOptions = {
  //     center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
  //     zoom: 10               // Зум по умолчанию. Возможные значения от 0 до 21
  //   };
  //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // }

  // google.maps.event.addDomListener(window, "load", initMap);

  ////////////// Akkordeon /////////////////

  $(".direction__item-img--desc").on("click", function(){
    
    var $this = $(this),
        container = $this.closest('.direction__items'),
        item = $this.closest('.direction__item'),
        currentContent = item.find('.direction__item-content'),
        duration = 600

    
    if(!item.hasClass('active')){

      item.addClass('active');
      currentContent.slideDown(duration);
      // open.removeClass('active');
      
    }else{
        
        item.removeClass('active');
        currentContent.slideUp();
        // open.addClass('active');
        
    }
  });

  /////////// tabs /////////////  

    $('.tabs__item').on('click', function(){

    var $this = $(this),
        item = $this.closest('.tabs__item'),
        container = $this.closest('.tabs'),
        content = container.find('.tabs__content-item'),
        ndx = item.index();

    item.addClass('active')
        .siblings()
        .removeClass('active');

    content.eq(ndx)
        .addClass('active')
        .siblings()
        .removeClass('active');
    });

  ////////////// height ///////////////

  $(".product__title").equalHeights();

  ////////////// slider //////////////

	$('.js-product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
  });



  $('.js-about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 950,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: false
    //     }
    //   },
    //   {
    //     breakpoint: 650,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: false
    //     }
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: false
    //     }
    //   }
    // ]
  });

  $(".js-about-slider").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });

  $('.js-sert-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '20px'
    // responsive: [
    //   {
    //     breakpoint: 1150,
    //     settings: {
    //       arrows: false
    //     }
    //   }
    // ]
  });


    $('.product-slide__img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.product-slider__img'
    });
    $('.product-slider__img').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-slide__img',
      focusOnSelect: true
    });



  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.main-nav__list').toggleClass('mobile-show');
  });



  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline'
  });

});