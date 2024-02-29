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
    responsive: [
      {
        breakpoint: 961,
        settings: "unslick",
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./app/images/icons/arrow-left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./app/images/icons/arrow-right.svg" alt="arrow" />',
    asNavFor: ".surf-map",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          centerMode: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          centerMode: false,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".surf-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
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

  $(".shop__slider").slick({
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

  // shop section circle

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });
});
