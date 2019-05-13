$(window).load(function() {
  // Header Slider

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.header__slider-wrapper').length !== 0) {
      var headerSlider = jQuery('.header__slider-wrapper');

      headerSlider.slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true
            },
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true
            },
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              pauseOnHover: false,
              pauseOnFocus: false
            },
            breakpoint: 1260,
            settings: {
              arrows: false,
            }
          }
        ]
      });

      headerSlider
        .find('.slick-arrow')
        .html('<div class="round-btn-bg"></div>');
    }
  });
});

$(window).load(function() {
  // Portfolio Slider

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.portfolio__slider-wrapper').length !== 0) {
      var headerSlider = jQuery('.portfolio__slider-wrapper');

      headerSlider.slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 321,
            settings: {
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true
            },
            breakpoint: 768,
            settings: {
              autoplay: true,
              pauseOnHover: true,
              pauseOnFocus: true
            },
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            },
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false
            },
            breakpoint: 1260,
            settings: {
              arrows: false,
              autoplay: false,
              slidesToShow: 3
            },
            breakpoint: 1400,
            settings: {
              arrows: true,
              autoplay: false,
              slidesToShow: 4
            }
          }
        ]
      });

      headerSlider
        .find('.slick-arrow')
        .html('<div class="round-btn-bg"></div>');
    }
  });
});

$(window).load(function() {
  $(function() {
      $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
          $('.toTop').fadeIn();
        } else {
          $('.toTop').fadeOut();
        }
      });
      
      $('.toTop').click(function() {
        $('body,html').animate({scrollTop:0},1300);
      });
    });
});

$(window).load(function() {
  $(function() {
    var btns = $('.blog__pagination-btn')
    var btnLength = btns.length
    console.log(btnLength)
      for(var i = 0; i <= btnLength - 1; i++){
        btns[i].onclick = function(){
          return console.log(i);
          for(var j = 0; j <= btnLength - 1; j++){
            btns[j].classList.remove('blog__pagination-btn_active')
          }
          if(!this.classList.contains('blog__pagination-disabled')){
            this.classList.add('blog__pagination-btn_active')
          }
          if(i = btnLength - 2){
            btns[btnLength - 1].classList.add('blog__pagination-disabled')
            btns[0].classList.remove('blog__pagination-disabled')
          }
        }
      }
      // $('.toTop').click(function() {
      //   $('body,html').animate({scrollTop:0},1300);
      // });
    });
});