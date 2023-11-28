$(window).scroll(function(){
    if ($(window).scrollTop() > 200) {
        $('header').addClass('scroll');
    }
    else if($(window).scrollTop() <= 0){
        $('header').removeClass('scroll');
    }
});

var swiper = new Swiper(".mainSwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    loop:true,
});

var swiper = new Swiper(".videoSwiper", {
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    loop:true,
});

var swiper = new Swiper(".navi", {
    slidesPerView: "auto",
});

var swiper = new Swiper(".prd_wrap", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

$('.best_new .tit p').on('click', function(){
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
    if($('.best_new .tit .best').hasClass('on')){
        $('.new_wrap').hide();
        $('.best_wrap').show();
    } else if($('.best_new .tit .new').hasClass('on')){
        $('.best_wrap').hide();
        $('.new_wrap').show();
    }
});

$('.btn_close').click(function(){
    $('.popup').hide();
});


var random = Math.floor(Math.random() * $('.wrap').length);
$('.wrap').hide().eq(random).show();



