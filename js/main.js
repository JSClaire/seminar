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

var swiper = new Swiper(".navi", {
    slidesPerView: "auto",
});



