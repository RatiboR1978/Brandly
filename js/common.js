$(function () {
/*Slick http://kenwheeler.github.io/slick/
 ====================*/

    $('#slider-js').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.items__sliders').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 4000
    });

    $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4000
    });

    /*Wow.js https://github.com/matthieua/WOW
     ====================*/

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    /*typed.js https://github.com/mattboldt/typed.js
     ====================*/

    // Can also be included with a regular script tag


    var options = {
        strings: ["UP TO 60% DISCOUNT ON NEW ARRIVALS"],
        typeSpeed: 40,
        backSpeed: 10,
        backDelay: 3000,
        loop: true,
        loopCount: Infinity,
        showCursor: false
    };

    var typed = new Typed(".typed-js", options);

    /* Нажатие кнопок в items
     =========================*/

    $('.items__size').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('items__size--active')) {
            $this.removeClass('items__size--active')
        } 
        $this.toggleClass('items__size--active');

    })



});