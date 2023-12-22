"use strict";

import { isMobile } from "./functions.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import "./modules/sliders.js";
import "./modules/imask.js";
import "./modules/tabs.js";
import "./modules/header.js";
import "./modules/load-more.js";
import "./modules/scroll.js";
import "./modules/spoiler.js";
import "./modules/custom-blanket-form.js";
import "./modules/dropdown.js";
import MicroModal from "micromodal";

function app() {
  const hoverClickTargets = document.querySelectorAll(".hover-click-target");

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
   * Separation of hover and click
   */
  hoverClickTargets.forEach(el => {
    el.addEventListener("click", e => {
      if (isMobile.any()) {
        e.preventDefault();
        const target = e.target.closest(".hover-click-target");
        target.classList.add("active");
        const nextEl = target.nextElementSibling;
        if (nextEl) {
          target.nextElementSibling.classList.add("active");
        }
      }
    });
  });

  /**
   * Prevent click on link
   */
  const preventLinks = document.querySelectorAll(".prevent-link");
  preventLinks.forEach(link => link.addEventListener("click", e => e.preventDefault()));

}

document.addEventListener("DOMContentLoaded", app);
