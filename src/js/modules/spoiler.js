const spoilerTriggers = document.querySelectorAll(".spoiler-trigger");

spoilerTriggers.forEach(trigger => {
  if (trigger) {
    const spoilerContent = trigger.nextElementSibling;
    if (spoilerContent.classList.contains("active-spoiler-content")) {
      spoilerContent.style.maxHeight = `${trigger.nextElementSibling.scrollHeight}px`;
    }
    trigger.addEventListener("click", showSpoiler);
  }
});

function showSpoiler() {
  // spoilerTriggers.forEach(trigger => {
  //   trigger.classList.remove("active-spoiler");
  //   trigger.setAttribute("aria-expanded", trigger.getAttribute("aria-expanded") === "true" ? "false" : "true");
  //   const spoilerContent = trigger.nextElementSibling;
  //   spoilerContent.setAttribute("aria-hidden", spoilerContent.getAttribute("aria-hidden") === "true" ? "false" : "true");
  //   spoilerContent.style.maxHeight = null;
  // });

  this.classList.toggle("active-spoiler");

  const spoilerContent = this.nextElementSibling;
  spoilerContent.classList.toggle("active-spoiler-content");

  const isExpanded = spoilerContent.classList.contains("active-spoiler-content");
  spoilerContent.style.maxHeight = isExpanded ? `${spoilerContent.scrollHeight}px` : "0px";
}

window.addEventListener('resize', () => {
  const activeSpoilerContects = document.querySelectorAll('.active-spoiler-content');
  activeSpoilerContects.forEach(content => {
    content.style.maxHeight = `${content.scrollHeight}px`;
  })
});