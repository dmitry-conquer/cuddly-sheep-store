import Swiper, { Navigation, Autoplay } from "swiper";

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
}
