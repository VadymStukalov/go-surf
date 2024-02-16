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

  $(".sleep__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/images/icons/arrow-left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/images/icons/arrow-right.svg" alt="arrow" />',
    // asNavFor: ".surf-map",
  });

  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"> <img src="app/images/icons/plus.svg" alt="" /> </div><div class="quantity-button quantity-down"><img src="app/images/icons/minus.svg" alt="" /></div></div>'
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

  // calculation Sleep section

  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights").val() * $(".summ").data("nights") +
      $(".guests").val() * $(".summ").data("guests") -
      $(".summ").data("guests");

    $(".summ").html("$" + summ);
  });
  let summ =
    $(".nights").val() * $(".summ").data("nights") +
    $(".guests").val() * $(".summ").data("guests") -
    $(".summ").data("guests");

  $(".summ").html("$" + summ);
});
