Fancybox.bind("[data-fancybox]", {
    // Your custom options
    });


$(function() {

    var mixer = mixitup('.directions__list');

$('.directions__filter-bth').on('click', function () {
    $('.directions__filter-bth').removeClass('directions__filter-bth--active')
    $(this).addClass('directions__filter-bth--active')
})

$('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    dots: true,
})

$('.team__slider-prew').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
})

})