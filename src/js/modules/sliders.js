import Swiper, { Navigation, Autoplay, FreeMode } from "swiper";

export function useSliders() {
  const productsSliders = document.querySelectorAll(".slider-products");
  productsSliders.forEach(slider => {
    if (slider) {
      new Swiper(slider, {
        modules: [Navigation, Autoplay],

        wrapperClass: "slider-products-wrapper",
        slideClass: "slider-products-slide",

        slidesPerView: 4,
        spaceBetween: 30,
        speed: 800,
        loop: true,

        autoplay: {
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },

        navigation: {
          prevEl: slider.querySelector(".prev-slide"),
          nextEl: slider.querySelector(".next-slide"),
        },

        breakpoints: {
          320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
    }
  });

  // slider-single-gallery
  const sliderSingleGallery = document.querySelector(".slider-single-gallery");
  if (sliderSingleGallery) {
    new Swiper(sliderSingleGallery, {
      modules: [Navigation, FreeMode],
      wrapperClass: "slider-single-gallery-wrapper",
      slideClass: "slider-single-gallery-slide",
      freeMode: true,
      slidesPerView: 5,
      spaceBetween: 10,
      speed: 800,

      navigation: {
        prevEl: ".single-prev-slide",
        nextEl: ".single-next-slide",
      },

      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });
  }

  /*
      slider-reviews
  */
  const sliderReviews = document.querySelector(".slider-reviews");

  if (sliderReviews) {
    new Swiper(sliderReviews, {
      modules: [Navigation, Autoplay],

      wrapperClass: "slider-reviews-wrapper",
      slideClass: "slider-reviews-slide",

      slidesPerView: 4,
      spaceBetween: 30,
      speed: 800,
      loop: true,

      autoplay: {
        delay: 3200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      navigation: {
        prevEl: sliderReviews.querySelector(".prev-slide"),
        nextEl: sliderReviews.querySelector(".next-slide"),
      },

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}
