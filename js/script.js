$(function() {

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $(".nav__link").removeClass("nav__link--active");
        $this.addClass("nav__link--active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


    // Mobile menu

    $(".nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("nav-toggle--active");
        $(".nav").toggleClass("nav--active");
    });

    // owlcarousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        autoplay:true,
        autoplaySpeed: 1500,
        autoplayTimeout:3000
    });


    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
});