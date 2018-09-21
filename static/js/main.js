
// Начинать писать отсюда!!!!

$(document).ready(function(){

  /////////////// Popup ////////////////

  $('.popup').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  /////////////// Mobile nav //////////////

  $('.nav__mobile').click(function(){
    $(this).toggleClass('active');
    $('.nav__list-mobile').slideToggle('mobile__show');
  });

  /////////////// Mask ///////////////////

  $(function(){
    $("#phone").mask("+7 (999) 999-9999");
  });
  
  $(function(){
    $("#content-phone").mask("+7 (999) 999-9999");
  });
  
  $(function(){
    $("#popup-phone").mask("+7 (999) 999-9999");
  });

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

  // $(".product__item").equalHeights();
  // $(".product__title").equalHeights();

  ////////////// slider //////////////

	$('.js-product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
  });



  $('.js-about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".js-about-slider").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });

  $('.js-sert-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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

  /////////////// Map ///////////////////

  ymaps.ready(init);
    function init(){ 
    // Хабаровск

      var myMap = new ymaps.Map("map", {
        center: [48.468975780852126,135.1129739999999],
        zoom: 11,
        controls: ['zoomControl']
      });

      myMap.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [48.468975780852126,135.1129739999999],
          [48.39597922710449,135.11091406347649],
          [48.45813007346696,135.0037973642577]
      ];

      var myCollection = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/flag.png',
          iconImageSize: [20, 28],
          iconImageOffset: [-3, -42]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection.add(new ymaps.Placemark(coords[i]));
      }

      myMap.geoObjects.add(myCollection);
    
    // Иркутск

      var myMap2 = new ymaps.Map("map2", {
        center: [52.31576516891367,104.27507699999998],
        zoom: 11,
        controls: ['zoomControl']
      });

      myMap2.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [52.375479648640216,104.08556283984373],
          [52.33974480447526,104.43506540332025],
          [52.275770075044946,104.28263010058593]
      ];

      var myCollection2 = new ymaps.GeoObjectCollection({}, {
          preset: 'islands#redIcon', //все метки красные
          draggable: true, // и их можно перемещать
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/flag.png',
          iconImageSize: [20, 28],
          iconImageOffset: [-3, -42]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection2.add(new ymaps.Placemark(coords[i]));
      }

      myMap2.geoObjects.add(myCollection2);

    // Новосибирск

      var myMap3 = new ymaps.Map("map3", {
        center: [55.00068342164962,82.95627699999989],
        zoom: 11,
        controls: ['zoomControl']
      });

      myMap3.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [55.070880057124675,82.65415297656243],
          [55.00778757283224,83.00296889453116],
          [54.927199835067356,83.21857558398429]
      ];

      var myCollection3 = new ymaps.GeoObjectCollection({}, {
          preset: 'islands#redIcon', //все метки красные
          draggable: true, // и их можно перемещать
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/flag.png',
          iconImageSize: [20, 28],
          iconImageOffset: [-3, -42]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection3.add(new ymaps.Placemark(coords[i]));
      }

      myMap3.geoObjects.add(myCollection3);

    // Екатеринбург

      var myMap4 = new ymaps.Map("map4", {
        center: [56.78886212553732,60.60339449999997],
        zoom: 11,
        controls: ['zoomControl']
      });

      myMap4.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [56.88596398014435,60.51001071093747],
          [56.83857373330716,60.69677828906247],
          [56.788862125522314,60.545716277343715]
      ];

      var myCollection4 = new ymaps.GeoObjectCollection({}, {
          preset: 'islands#redIcon', //все метки красные
          draggable: true, // и их можно перемещать
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/flag.png',
          iconImageSize: [20, 28],
          iconImageOffset: [-3, -42]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection4.add(new ymaps.Placemark(coords[i]));
      }

      myMap4.geoObjects.add(myCollection4);

    // Краснодар

      var myMap5 = new ymaps.Map("map5", {
        center: [45.06148367173665,38.9622065],
        zoom: 11,
        controls: ['zoomControl']
      });

      myMap5.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [45.078513561425446,39.04460396093749],
          [45.04882958979004,38.9347406796875],
          [45.00695369767127,39.02743782324219]
      ];

      var myCollection5 = new ymaps.GeoObjectCollection({}, {
          preset: 'islands#redIcon', //все метки красные
          draggable: true, // и их можно перемещать
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/flag.png',
          iconImageSize: [20, 28],
          iconImageOffset: [-3, -42]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection5.add(new ymaps.Placemark(coords[i]));
      }

      myMap5.geoObjects.add(myCollection5);
    }