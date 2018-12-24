$(function () {
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
        wheelStep: 100,
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
});