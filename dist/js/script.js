$(function () {

    // Navbar Toggler
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("active");
    });

    //   Banner
    $('.banner-slide').slick({
        dots: true,
        arrows: false
    });

    // Card menu
    $('.card-menu .card-body').slimScroll({
        height: '300px',
        color: '#14ACE9',
        size: '1rem',
        alwaysVisible: true,
        railVisible: true,
        railColor: "white",
        wheelStep: 100
    });

    // Place images slide
    $('.place-images-slide').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                arrows: false,
            }
        }]
    });

    // Talk
    $(".btn-talk-toggler").click(function () {
        $(".card").removeClass("show");
        $(".list-talk").toggleClass("show");
    });
    $("#btnTalkMessenger").click(function () {
        $(".card").removeClass("show");
        $(".card-messeger").toggleClass("show");
    });
    $("#btnTalkLine").click(function () {
        $(".card").removeClass("show");
        $(".card-line").toggleClass("show");
    });
    $("#btnTalkChat").click(function () {
        $(".card").removeClass("show");
        $(".card-chat").toggleClass("show");
    });

    // Drapdown menu
    $('.dropdown-menu[aria-labelledby="navbarDropdownSearch"]').on('click', function (event) {
        event.stopPropagation();
    });

    // Popover
    $('[data-toggle="popover"]').popover();
    var listShare = "<ul class='list-share'>" +
        "<li><a href='#'><img src='./dist/images/icon-facebook.png' alt='icon-facebook' class='img-link'></a></li>" +
        "<li><a href='#'><img src='./dist/images/icon-twitter.png' alt='icon-twitter' class='img-link'></a></li>" +
        "<li><a href='#'><img src='./dist/images/icon-google-plus.png' alt='icon-google-plus' class='img-link'></a></li>" +
        "</ul>";
    $('.popover-share').popover({
        placement: "bottom",
        content: listShare,
        html: true,
        trigger: "focus"
    });
});