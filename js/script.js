$(function () {
    "use strict";




    //Add Class is to Button Which Open menu in Mobile
    $(".navbar_button").on('click', function () {
        $(".navbar_menu").slideToggle();

    });



    //Slider Of Haeder
    $('.header_slider').slick({
        //      dots: true,
        //        rtl: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

    });



    //Branding Slider
    $('.branding_slider').slick({
        //      dots: true,
        //        rtl: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });




    //Branding Slider
    $('.testmonial_slider').slick({
        //      dots: true,
        //        rtl: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    /*=12=Start About Section*/
    $(".about_content-title").on('click', function () {

        $(".about_content-article").slideToggle(1000);
    });


    //Button Go to Top Hidden and Show
    $(window).scroll(function () {

        var buttonUp = $("#button-go-up");

        if ($(window).scrollTop() >= 400) {
            buttonUp.fadeIn(1000);
        } else {
            buttonUp.fadeOut(1000);

        }


    });

    //Button Click To Scroll to top
    $("#button-go-up").on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })


});
