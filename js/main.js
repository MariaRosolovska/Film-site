$(function(){

    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

    // $('[data-fancybox]').fancybox({
    //     youtube:{
    //         controls:0,
    //         showinfo:0
    //     }
    // });

    $('.heroes__slider-img').slick({
        slederToShow: 1,
        sliderToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slider/btn_prev.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slider/btn_next.png" alt="next"></button>',
        responsive:[
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.heroes__slider-text').slick({
        slederToShow: 1,
        sliderToScroll: 1,
        fade: true,
        asNavFor: '.heroes__slider-img ',
        arrows: false
    });
});