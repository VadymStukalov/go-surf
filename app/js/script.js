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
    asNavFor: ".surf-map",
  });
  $(".surf-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });

  $(".travel__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/images/icons/arrow-left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/images/icons/arrow-right.svg" alt="arrow" />',
    asNavFor: ".surf-map",
  });

  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
});
