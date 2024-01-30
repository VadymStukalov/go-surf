$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/images/icons/arrow-left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/images/icons/arrow-right.svg" alt="arrow" />',
    asNavFor: ".slider-dotshead",
  });
  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/images/icons/arrow-left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/images/icons/arrow-right.svg" alt="arrow" />',
    // asNavFor: ".slider-dots",
  });
});
