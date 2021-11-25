(function($) {
    "use strict";

    // Smooth scrolling 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });


    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });


    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);

    $('#devis').change(function() {
        $('#order-input').removeClass('hidden');
    });
    
    $('#informations').change(function() {
        $('#order-input').addClass('hidden');
    });
})(jQuery);

document.addEventListener('DOMContentLoaded', function (){
    // var elements = document.querySelectorAll('.title, .logo, .logo-header, .navbar-nav')
    // // console.log(title)
    // for(i=0; i <= elements.length; i++){
    //     elements[i].classList.add('fadeIn')
    // }
    // console.log(title.classList)
    var header = document.querySelector('body')
    header.classList.add('fadeIn')
    // console.log(header.classList)

/*on scroll event */
    // let timeline = document.querySelector('.timeline')
    // timeline.addEventListener('scroll', function() {
    //     alert('ttt')
    // })
    // window.onscroll = function() {
    //     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    //         alert('test')
    //     }else {
    //         alert('elese')
    //     }
    // }
})

on