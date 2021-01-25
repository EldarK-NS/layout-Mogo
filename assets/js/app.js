$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),

        scrollOffset = $(window).scrollTop();
    console.log(scrollOffset);
    // !Fixed Header
    checkScroll(scrollOffset);
    console.log(introH)
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    //!Menu backlight
    $(window).on("scroll", function () {
        var $sections = $('section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100,
                bottom = top + $(el).height(),
                scroll = $(window).scrollTop(),
                id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.nav__link.active').removeClass('active');
                $('[data-scroll="#' + id + '"]').addClass('active');
            };
        })
    });

    // !Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffsetTop = $(blockId).offset().top - 25;


        $("#nav a").removeClass("active");
        $this.addClass("active");
        console.log(blockOffsetTop);

        $("html, body").animate({
            scrollTop: blockOffsetTop
        }, 500)

        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active")
    });
    //! Menu nav toggle (бургер)

    $("#nav_toggle").on("click", function (event) {

        event.preventDefault();
        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });

    // ! Accordion - collapse

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");
        $this.toggleClass("active")
    });


    // Slider-reviews

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
});
