"use strict";

import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/sliders.js";
import "./modules/imask.js";
import "./modules/tabs.js";
import "./modules/header.js";
// import "./modules/load-more.js";
import "./modules/scroll.js"; 
import "./modules/spoiler.js";
import "./modules/custom-blanket-form.js";
import "./modules/dropdown.js";
import MicroModal from "micromodal";

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

  /**
   * Prevent click on link
   */
  const preventLinks = document.querySelectorAll(".prevent-link");
  preventLinks.forEach(link => link.addEventListener("click", e => e.preventDefault()));
}
document.addEventListener("DOMContentLoaded", app);
