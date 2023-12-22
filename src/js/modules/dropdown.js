const dropdownItems = document.querySelectorAll(".dd-trigger");

/**
 * Dropdown
 */
function dropdown() {
  this.classList.toggle("dd-is-active");
  if (this.closest("[data-mob-spoiler]") && window.innerWidth <= Number(this.dataset.mobSpoiler)) {
    const spolierContent = this.nextElementSibling;
    spolierContent.style.maxHeight = this.classList.contains("dd-is-active") ? `${spolierContent.scrollHeight}px` : 0;
  }
}

/**
 * Click outside
 */
function clickOutside(e) {
  if (!e.target.closest(".dd-trigger") && !e.target.closest(".sub-menu") && document.querySelector(".dd-is-active")) {
    dropdownItems.forEach(el => el.classList.remove("dd-is-active"));
  }
}

dropdownItems.forEach(item => item.addEventListener("click", dropdown));
document.addEventListener("click", e => {
  clickOutside(e);
});
