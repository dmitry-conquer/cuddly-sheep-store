import IMask from "imask";

  const maskOptions = {
    mask: "+{38}(000)000-00-00",
    lazy: true,
  };
  const telInputs = document.querySelectorAll("input[type=tel]");
  telInputs.forEach(input => {
    if (input) {
      IMask(input, maskOptions);
    }
  });
