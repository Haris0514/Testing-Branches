$(document).ready(function() {
    $(".top-bar button").click(function() {
        $(".top-bar").hide();
    });
    $(".left-grid-wrapper .em-head").click(function() {
        $(this).children().toggleClass("active");
        $(this).siblings(".em-content").slideToggle();
    });

    $(".add").click(function() {
        if ($(this).parent().siblings("input").val() < 99) {
            $(this)
                .parent()
                .siblings("input")
                .val(+$(this).parent().siblings("input").val() + 1);
        }
    });
    $(".sub").click(function() {
        if ($(this).parent().siblings("input").val() > 1) {
            if ($(this).parent().siblings("input").val() > 1)
                $(this)
                .parent()
                .siblings("input")
                .val(+$(this).parent().siblings("input").val() - 1);
        }
    });
    $('.readmore-down').click(function() {
        $(".prod-acc").removeClass("active");
        $("#toggle-less-more").addClass("active");
    });
    $('.reviews-more').click(function() {
        $(".prod-acc").removeClass("active");
        $("#readmore-down").addClass("active");
    });
    $(".prod-acc strong").click(function() {
        $(this).parent().toggleClass("active");
        $(this).siblings("p").toggleClass("active");
        $(this).parent().siblings().removeClass("active");
    });
    $(function() {
        $(".cart-h > button").on("click", function(e) {
            $(this).siblings('.cart-products').toggleClass("active");
            e.stopPropagation()
            $(document).on("click", function(e) {
                if ($(e.target).is(".cart-products ,.cart-products *") === false) {
                    $(".cart-products").removeClass("active");
                }
            });
        });
        $(".double-use").on("click", function(e) {
            $(this).siblings(".dealers-dropdown").toggleClass("active");
            $(this).parent().siblings().children(".dealers-dropdown").removeClass("active");

            e.stopPropagation()
            $(document).on("click", function(e) {
                if ($(e.target).is(".dealers-dropdown,.dealers-dropdown *") === false) {
                    $(".dealers-dropdown").removeClass("active");
                }
            });
        });
    });
    $("button.delete").click(function() {
        $(this).parent().parent().parent().remove();
    });
    $(".main-down-head > ul > li").hover(function() {
        $(this).children().toggleClass("active");

    });
    let a = document.querySelector(".btn-nav");
    a.addEventListener("click", (b) => {
        a.classList.toggle("open");
    });
    $(".btn-nav").click(function() {
        $(".mob-side-menu").toggleClass("active");
        $('body').toggleClass("overflow-hidden");
    });

    $(".mob-side-menu .mega-list li:nth-child(1)").click(function() {
        $(this).parent().toggleClass("active");
    });

    $(".btn-nav").click(function() {
        if (screen.width > 767.98) {
            $(".main-down-head .logo-h").toggleClass("active");
        }
    });
});

$(".product-slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".small-slider-main",
    dots: false,
    mobileFirst: true,
    arrows: false,
    fade: true,
});
$(".small-slider-main").slick({
    slidesToShow: 3,
    arrows: false,
    mobileFirst: true,
    dots: false,
    asNavFor: ".product-slider-main",
    focusOnSelect: true,
    adaptiveHeight: true,
});
$(".home-collection-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    mobileFirst: true,
    arrows: false,
    autoplay: true,
    responsive: [{
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        },
    }, ],
});