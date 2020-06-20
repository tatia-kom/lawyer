$(document).ready(function() {

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

    // services tabs

    $('.services-tabs__item').click(function() {
        $('.services-tabs__item--active').removeClass('services-tabs__item--active');
        $('.services__tab--active').removeClass('services__tab--active');
        $(this).addClass('services-tabs__item--active');
        $($(this).attr('data-tab')).addClass('services__tab--active');
    });

    // modal

    $('.open-modal').click(function(e) {
        e.preventDefault();
        $('#formModal').addClass('modal--opened');
        $('body').addClass('frozen');
    });

    $('.modal__close').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('frozen');
    });

    $('.modal').click(function() {
        $('.modal').removeClass('modal--opened');
        $('body').removeClass('frozen');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });
});

// функция для открытия модального окна Спасибо

function openThanksModal() {
    $('#thanksModal').addClass('modal--opened');
    $('body').addClass('frozen');
}

