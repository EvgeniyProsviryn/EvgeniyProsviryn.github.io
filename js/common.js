$(function() {
    $('.showbox').fadeOut(300);
    
   $("#my-menu").mmenu({
        extensions:['theme-dark','fx-listitems-slide'],
        navbar: {
            title: "Меню"
        },
        offCanvas: {
               position  : "right",
               zposition : "front"
            }
    });
    
    var api = $("#my-menu").data( "mmenu" );
    
    api.bind( "open:start", function() {
         $('.hamburger').addClass('is-active');
      });
    api.bind( "close:after", function() {
         $('.hamburger').removeClass('is-active');
      });
    
    $('.gallery-box').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
        fixedContentPos: false,
		image: {
			verticalFit: true
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
    $('.prodImg-wrapp').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
    var accentColor = $('.accentColor').html();
    
    $(".slider1").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:3,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
    });
    
    $(".slider2").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:3,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
    });
    
    $(".slider3").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:4,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
    });
    

   $('.navigation .prev').click(function() {
        $(".slider3").trigger('prev.owl.carousel');
   })
   $('.navigation .next').click(function() {
        $(".slider3").trigger('next.owl.carousel');
   })
   
   $('.map .filter').click(function(){
       $(this).fadeOut(500);
   })
    
   
    
    if ($(window).width() > 1200) {
        $(".homeM").click(function() {
    $('html, body').animate({
        scrollTop: $(".header-wrapper").offset().top
    }, 700);
    });
    
    $(".galleryM").click(function() {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top - $(".header-menu").height()
    }, 700);
    });
    
    $(".servicesM").click(function() {
    $('html, body').animate({
        scrollTop: $(".services").offset().top - $(".header-menu").height()
    }, 700);
    });
    
     $(".aboutM").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top - $(".header-menu").height()
    }, 700);
    });
    
    $(".contactM").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - $(".header-menu").height()
    }, 700);
    });    
    $(".fa-anchor").click(function() {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top - $(".header-menu").height()
    }, 700);
    });
    }
    else{
      $(".homeM").click(function() {
    $('html, body').animate({
        scrollTop: $(".header-wrapper").offset().top
    }, 700);
    });
    
    $(".galleryM").click(function() {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top
    }, 700);
    });
    
    $(".servicesM").click(function() {
    $('html, body').animate({
        scrollTop: $(".services").offset().top
    }, 700);
    });
    
     $(".aboutM").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 700);
    });
    
    $(".contactM").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 700);
    });    
    $(".fa-anchor").click(function() {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top
    }, 700);
    });  
    }
    
    $(".header-menu").animated("fadeInDown");
    $(".header-box").animated("jello");
    $(".connect-box").animated("jello");
    $(".mod-title").animated("fadeIn");
    $(".gallery-box").animated("fadeIn");
    $(".serv-box").animated("fadeIn");
    $(".anim1").animated("fadeInLeft");
    $(".anim2").animated("fadeInRight");
    $(".slider1").animated("fadeIn");
    $(".products-text").animated("flipInX");
    $(".slider2").animated("fadeIn");
    $(".slider3").animated("fadeIn");
});
