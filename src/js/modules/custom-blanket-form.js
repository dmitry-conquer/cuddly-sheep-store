const formWrapper = document.getElementById("create-blanket-form-wrapper");
const blanketTypeResult = document.getElementById("blanket-type-result");
const blanketColorResult = document.getElementById("blanket-color-result");
const blanketSizeResult = document.getElementById("blanket-size-result");
const blanketPriceResult = document.getElementById("blanket-price-result");
const colors = document.getElementsByName("color-pick");
const blanketWidth = document.getElementById("blanket-width");
const blanketLength = document.getElementById("blanket-length");
const yarnPrice = formWrapper.dataset.yarnPrice;
const workPrices = formWrapper.dataset.workPrices.split(",");
const workPriceSteps = formWrapper.dataset.priceSteps.split(",");
const yarnSquare = formWrapper.dataset.yarnSquare;
const overYarn = formWrapper.dataset.overYarn;


function updateSize() {
  const width = blanketWidth.value || 0;
  const length = blanketLength.value || 0;
  blanketSizeResult.textContent = `${width} см x ${length} см`;
  
  updatePrice(width, length);
}
function updateColor() {
  blanketColorResult.textContent = this ? this.value : [...colors].find(color => color.checked)?.value || null;
}
function updatePrice(width, length) {
  let result;
  if (width * length !== 0) {
    const yarnsAmount = Math.ceil((width * length) / +yarnSquare) + +overYarn;
    for (let i = 0; i < workPriceSteps.length; i++) {
      if (yarnsAmount <= +workPriceSteps[i]) {
        result = +yarnsAmount * +yarnPrice + +workPrices[i];
        break;
      }
    }
    if (yarnsAmount > +workPriceSteps[workPriceSteps.length - 1]) {
      result = +yarnsAmount * +yarnPrice + +workPrices[workPrices.length - 1];
    }
  }
  blanketPriceResult.textContent = width * length !== 0 ? `${result} ₴` : `${0} ₴`;
}

updateSize();
updateColor();

blanketWidth.addEventListener("input", updateSize);
blanketLength.addEventListener("input", updateSize);
colors.forEach(color => {
  color.addEventListener("change", () => updateColor());
});
