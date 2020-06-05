$(document).ready(function() {
    $('.header-submenu').click(function(e) {
        e.stopPropagation();

        if ($(this).hasClass('header-submenu--opened')) {
            $(this).removeClass('header-submenu--opened');
        }
        else {
            $('.header-submenu').removeClass('header-submenu--opened');
            $(this).addClass('header-submenu--opened');
        }
    });

    $('body').click(function() {
        $('.header-submenu').removeClass('header-submenu--opened');
    });

    // mobile menu

    $('.header__mobile-menu').click(function(e) {
        e.preventDefault();
        $('.header-menu').slideToggle();
    });

    // results slider

    $('.results-slider').addClass('owl-carousel');
    $('.results-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        animateOut: 'fadeOut'
    });

    // problems slider

    $('.problems-slider').addClass('owl-carousel');
    $('.problems-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        animateOut: 'fadeOut'
    });

    // video slider

    $('.video-slider').addClass('owl-carousel');
    $('.video-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        animateOut: 'fadeOut'
    });

    // modal

    $('.open-modal').click(function(e) {
        e.preventDefault();
        $('.modal').addClass('modal--opened');
        $('body').addClass('frozen');
    });

    $('.modal').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('frozen');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });
});

