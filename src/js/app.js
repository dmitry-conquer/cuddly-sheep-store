// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
import { useSliders } from "./modules/sliders.js";
import { inputMask } from "./modules/imask.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import { useTabs } from "./modules/tabs.js";
import { useHeader } from "./header.js";
// import AOS from 'aos';
// import MicroModal from 'micromodal';

function app() {
  useDynamicAdapt("max");
  useSliders();
  useHeader();
  inputMask();
  useTabs();


  const bigImage = document.querySelector('.big-img');
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      bigImage.src = img.src;
    })
  })
}

document.addEventListener("DOMContentLoaded", app);
