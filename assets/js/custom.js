$(function () {
  $('.programslider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>', '<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    responsive: {
      0: {
        nav: false,
        items: 1
      },
      992: {
        nav: true,
        items: 2
      }
    }
  });
  $('.successtoryslider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>', '<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    items: 1,
    touchDrag: false,
    mouseDrag: false
  });
  $('.testyslider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>', '<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    items: 1
  });
  $('.guestslider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>', '<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    responsive: {
      0: {
        nav: false,
        items: 1
      },
      767: {
        nav: true,
        items: 2
      },
      992: {
        nav: true,
        items: 3
      }
    }
  });
  $('.opportunityslider').owlCarousel({
    loop: false,
    margin: 30,
    dots: false,
    autoplayHoverPause: true,
    navText: ['<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M299.634 6519.292a1.063 1.063 0 0 0-1.464 0l-8.563 8.264a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413" transform="translate(-289 -6519)"/></svg>', '<svg viewBox="0 0 11 20"><path fill-rule="evenodd" d="M249.366 6538.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827l-8.625-8.325a1.063 1.063 0 0 0-1.454-.01.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414l-7.831 7.557a.974.974 0 0 0 0 1.413" transform="translate(-249 -6519)"/></svg>'],
    responsive: {
      0: {
        nav: false,
        items: 1
      },
      767: {
        nav: true,
        items: 2
      },
      992: {
        nav: true,
        items: 3
      },
      1200: {
        nav: true,
        items: 4
      }
    }
  });


  $(".scrollablebox").mCustomScrollbar({
    scrollButtons: { enable: true },
    theme: "light-thick",
    scrollbarPosition: "inside"
  });
  AOS.init();
});
$(document).on('click', '.open-v-popup', function () {
  var vidpath = $(this).data('vid');
  $('.videopopup').addClass('opened').find('iframe').attr('src', vidpath);
});
$(document).on('click', '.closevidpopup', function () {
  $('.videopopup').removeClass('opened').find('iframe').attr('src', '');
});



$(document).on('click', '.openmenu', function (e) {
  $('#navbarSupportedContent').toggleClass('opened');
});
$(document).on('click', '.hassublist', function (e) {
  if ($(window).width() < 992) {
    $(this).next('ul').slideToggle().parent('li').siblings().find('.submenu').slideUp();
  }
});




function showjobdetails(elem){
  var customid = '#jobdetails'+elem;
  $(customid).toggle();
}

$(document).on('click', '#backtotop', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
$(window).bind('scroll load', function () {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    $('#backtotop').addClass('show');
  } else {
    $('#backtotop').removeClass('show');
  }
});
$(document).on('click', '.closeworldcup', function () {
  $('#popupclose_worldcup').hide();
})






