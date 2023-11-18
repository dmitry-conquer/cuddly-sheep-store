// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
import { useSliders } from "./modules/sliders.js";
import { inputMask } from "./modules/imask.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import { useHeader } from "./header.js";
// import AOS from 'aos';
// import MicroModal from 'micromodal';

function app() {
  useDynamicAdapt("max");
  useSliders();
  useHeader();
  inputMask();
}

document.addEventListener("DOMContentLoaded", app);
