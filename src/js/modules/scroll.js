import AOS from "aos";

const toTopButton = document.getElementById("to-top-btn");
const offset = 900;

/**
 * Top top button appear
 */
function scroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > offset && !toTopButton.classList.contains("is-visible")) {
    toTopButton.classList.add("is-visible");
  } else if (scrollTop < offset && toTopButton.classList.contains("is-visible")) {
    toTopButton.classList.remove("is-visible");
  }
}

/**
 * Scroll to top
 */
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * AOS scroll
 */
AOS.init({
  duration: 600,
  once: true,
});

toTopButton.addEventListener("click", toTop);
window.addEventListener("scroll", scroll);

scroll();
