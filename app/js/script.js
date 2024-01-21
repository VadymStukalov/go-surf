$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/images/icons/arrow-left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/images/icons/arrow-right.svg" alt="arrow" />',
    asNavFor: ".slider-dots",
  });
  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });
});
