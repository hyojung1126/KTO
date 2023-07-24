$(function () {
    // load menu
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
    $('.page_header').load('../inc/page_header.html')

    // slide
    $('.slide').slick({
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear'
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
        $('.items .item').css('width', '150px')
        $(this).animate({width : '65%'},500)

        $(this).children('p').hide()
    })


})



