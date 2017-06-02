$(function() {
	$(".toggle-mnu").click(function() {
  	$(this).toggleClass("on");
  	$(".main-mnu").slideToggle();
  return false;
});

	$('.down-button').click(function(){
		$('html,body').animate({
			scrollTop: $('.about-box1').offset().top
		},2000)
	});
    
    $('.nav-menu ul li').click(function(){
        $('.nav-menu ul li').removeClass("active");
        $(this).addClass("active");
    });
    
    $('.hello').click(function(){
		$('html,body').animate({
			scrollTop: $('.main-head').offset().top
		},2000)
	});
    
    $('.about').click(function(){
		$('html,body').animate({
			scrollTop: $('.ab-wrapp').offset().top
		},2000)
	});
    
    $('.services').click(function(){
		$('html,body').animate({
			scrollTop: $('.our-services-container').offset().top
		},2000)
	});
    
    $('.portfolio').click(function(){
		$('html,body').animate({
			scrollTop: $('.portBG').offset().top
		},2000)
	});
    
    $('.team').click(function(){
		$('html,body').animate({
			scrollTop: $('.teamBG').offset().top
		},2000)
	});
    
    $('.blog').click(function(){
		$('html,body').animate({
			scrollTop: $('.Blog-wrapp').offset().top
		},2000)
	});
    
    $('.contact').click(function(){
		$('html,body').animate({
			scrollTop: $('.cont-wrapp').offset().top
		},2000)
	});

	$('.f-projects .col-md-4').hover(function(){
		$(this).css("filter","grayscale(0%)");
		$(this).addClass("active");
		$('.f-projects .col-md-4').css("width","25%");
		$(this).css("width","50%");
		$('.col-md-4.active .imgfilter').css("opacity","0");
	},function(){
		$(this).css("filter","grayscale(100%)")
		$('.f-projects .col-md-4').removeClass("active");
		$('.f-projects .col-md-4').css("width","");
		$('.imgfilter').css("opacity","1");
	});

	var gallery = $('#galleryherepls').galereya({
		spacing: 15,
		noCategoryName: 'all works',
	});


	$('.portfolio-menu ul li').click(function(){
		$('.portfolio-menu ul li').removeClass("active");
		$(this).addClass("active");
		gallery.changeCategory($(this).html().toLowerCase());
	});
	

	$('.bxslider').bxSlider({
		adaptiveHeight: true,
		responsive: true,
	});

	$('.bxsliderBlog').bxSlider({
		adaptiveHeight: true,
		responsive: true,
		mode: 'vertical',

	});

	$('.first').hover(function(){
		$('.first .pboxwrap').css('opacity','0');
		$('.first .pboxwrap2').css('opacity','1');
	},function(){
		$('.first .pboxwrap').css('opacity','1');
		$('.first .pboxwrap2').css('opacity','0');
	});

	$('.second').hover(function(){
		$('.second .pboxwrap').css('opacity','0');
		$('.second .pboxwrap2').css('opacity','1');
	},function(){
		$('.second .pboxwrap').css('opacity','1');
		$('.second .pboxwrap2').css('opacity','0');
	});

	$('.third').hover(function(){
		$('.third .pboxwrap').css('opacity','0');
		$('.third .pboxwrap2').css('opacity','1');
	},function(){
		$('.third .pboxwrap').css('opacity','1');
		$('.third .pboxwrap2').css('opacity','0');
	});

    $('.mapfilter').click(function(){
        $(this).fadeOut(500);
    });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
