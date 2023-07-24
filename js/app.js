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

    // 주요사업 items
    $('.items .item').click(function(){
        $('.item p').show()
        $('.item .text_group').hide()
        $('.items .item').css('width', '150px')
        $(this).animate({width : '65%'},500)

        $(this).children('p').hide()
        $(this).children('.text_group').show()
    })


})



