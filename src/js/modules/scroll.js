import Lenis from "@studio-freight/lenis";
import AOS from 'aos';

const toTopButton = document.getElementById("to-top-btn");
const offset = 900;

/**
 * Lenis smooth scroll
 */
let lenis;
lenis = new Lenis({
  duration: 1.5,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

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
  lenis.scrollTo("top", {
    duration: 2.5,
  });
}

/**
 * AOS scroll
 */
AOS.init({
  duration: 600,
  once: true
});


toTopButton.addEventListener("click", toTop);
window.addEventListener("scroll", scroll);

scroll();
