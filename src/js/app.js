// import { consoleInfo, isWebp() } from './config/functions.js';
// import { hasErrors } from './modules/forms.js';
// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
// import { initSliders } from './modules/sliders.js';
// import { initHeader } from './modules/header.js';
// import { initModals, openModalIf } from './modules/modals.js';
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import './header.js';
// import AOS from 'aos';
// import Rellax from "rellax";
// import fslightbox from 'fslightbox';
// import noUiSlider from 'nouislider';
// import MicroModal from 'micromodal';

function app() {
  useDynamicAdapt("max");
}

document.addEventListener("DOMContentLoaded", app);
