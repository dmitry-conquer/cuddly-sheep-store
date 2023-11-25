import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/sliders.js";
import  "./modules/imask.js";
import  "./modules/tabs.js";
import "./modules/header.js";
import "./modules/load-more.js";
import "./modules/scroll.js";
import "./modules/spoiler.js";
import "./modules/custom-blanket-form.js";
import MicroModal from "micromodal";
// import AOS from 'aos';

function app() {
  useDynamicAdapt("max");

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
