$(function () {
    // load menu
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
    $('.page_header').load('../inc/page_header.html')

    // slide
    $('.slide').slick({
        draggable: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        // cssEase: 'linear',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    });

    // line
    $('.line_top').animate({width:"100%"},4000,function(){
        $('.line_top').css({'width' : '0'});
    })

    setInterval(function(){
        $('.line_top').animate({width:"100%"},4000,function(){
            $('.line_top').css({'width' : '0'});
        })
    },5000)

    // slide_menu
    $('.slide_menu > li > a').click(function(){
        $('.slide_menu > li > a, .slide_menu li ul').removeClass('active')
        $(this).addClass('active')
        $('.slide_menu li ul').eq($(this).parent().index()).addClass('active')

        $('.slide').slick('slickGoTo', $(this).parent().index());

        $('.line_top').css({'width' : '0'});
    })

    $('.slide_menu ul li').hover(function(){
        $(this).children('div').stop().show()
        $(this).children('div').children('img').stop().animate({'top' : '0'},300)
    },function(){
        $(this).children('div').children('img').stop().animate({'top' : '100px'},300)
    })


    // text
    ScrollReveal().reveal('.text', {
        distance : '60px',
        origin : 'top',
        duration : 2000,
    });
        
    // banner
    $('.banner').slick({
        nextArrow : $('.nextArrow'),
        prevArrow : $('.prevArrow'),
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.page_2 .stop').click(function(){
        $('.banner').slick('slickPause')
        $('.page_2 .stop').toggle()
        $('.page_2 .start').toggle()
    })

    $('.page_2 .start').click(function(){
        $('.banner').slick('slickPlay')
        $('.page_2 .stop').toggle()
        $('.page_2 .start').toggle()
    })

    // 배너 페이지번호
    const prev_page = document.querySelector(".prev_page")
    const next_page = document.querySelector(".next_page")

    prev_page.textContent = 1
    next_page.textContent = 5

    $('.banner').on('afterChange', function(event, slick, currentSlide, nextSlide){
        prev_page.textContent = currentSlide + 1
        next_page.textContent = slick.slideCount
    });

    // 주요사업 items

    $('.items .item').click(function(){
        $('.item p').show()
        $('.item .text_group').hide()
        $(this).children('p').hide()
        $(this).children('.text_group').show()

        $('.items .item').addClass('active')
        $(this).removeClass('active')

        $('.items .item.active').animate({width : '150px'},500)
        $(this).animate({width : '65%'},500)
    })

    // 관련사이트
    $('#link_slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slide: 'li',
		slidesToShow: 5,
		centerMode: false,
		prevArrow: $('.xi-arrow-left'),
		nextArrow: $('.xi-arrow-right'),
		variableWidth: true,
        autoplay : true,
        autoplaySpeed : 2500,
        pauseOnHover : true
	});

    $('.xi-play-circle-o').click(function(){
        $('#link_slider').slick('slickPlay');
        $('.xi-pause-circle-o, .xi-play-circle-o').toggleClass('active')
    });

    $('.xi-pause-circle-o').click(function(){
        $('#link_slider').slick('slickPause');
        $('.xi-pause-circle-o, .xi-play-circle-o').toggleClass('active')
    });

})



