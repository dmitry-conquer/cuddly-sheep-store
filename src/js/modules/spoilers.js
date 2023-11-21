const spoilers = {
   spoiler() {
      document.addEventListener("click", function(e) {
         const spoilerTrigger = e.target.closest("[data-spoiler]");
         if (spoilerTrigger) {
            const spoilerData = spoilerTrigger.dataset.spoiler;
            if (!spoilerData || window.innerWidth <= spoilerData) {
               spoilers.openSpoiler(spoilerTrigger);
            }
         }
      });
   },

   openSpoiler(spoilerTrigger) {
      spoilerTrigger.classList.toggle('_active-spoiler');
      spoilerTrigger.setAttribute('aria-expanded', spoilerTrigger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
      
      const spoilerContent = spoilerTrigger.nextElementSibling;
      spoilerContent.classList.toggle('_active-spoiler-content');
      spoilerContent.setAttribute('aria-hidden', spoilerContent.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
      spoilerContent.style.maxHeight = spoilerContent.style.maxHeight ? null : `${spoilerContent.scrollHeight}px`;
   }

}

export const initSpoiler = spoilers.spoiler;
export const initDdropdown = spoilers.dropdown;