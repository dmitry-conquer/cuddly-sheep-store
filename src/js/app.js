// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
import { useSliders } from "./modules/sliders.js";
import { inputMask } from "./modules/imask.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import { useTabs } from "./modules/tabs.js";
import { useHeader } from "./header.js";
import MicroModal from "micromodal";
// import AOS from 'aos';

function app() {
  useDynamicAdapt("max");
  useSliders();
  useHeader();
  inputMask();
  useTabs();

  const bigImage = document.querySelector(".big-img");
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(img => {
    img.addEventListener("click", () => {
      bigImage.src = img.src;
    });
  });

  /*
    feedback form
  */
  const sendFormButton = document.getElementById("send-feedback-form");

  if (sendFormButton) {
    sendFormButton.addEventListener("click", () => {
      MicroModal.show("success-message-modal", {
        disableScroll: true,
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", app);
