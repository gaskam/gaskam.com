// Swup

//import Swup from 'swup';
//const swup = new Swup();

// Jquery

jQuery(document).ready(function ($) {

    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $("header").addClass("scroll");
            } else {
                $("header").removeClass("scroll");
            }
        });
    })

    $('.svg-menu').click(function(e){
        e.preventDefault();
        $('header').toggleClass('open');
        $('.navbar ul li').toggleClass('open');
        $('.navbar').toggleClass('open');
    });

    $('.ajax').live('click', function(event){
        event.preventDefault();
        });
    
});