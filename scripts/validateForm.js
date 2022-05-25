const checkBoxDiv = document.querySelectorAll(".checkbox-view");

const removeErrorCheckBox = () => {
  checkBoxDiv.forEach((checkBox) => {
    checkBox.classList.remove("error-checkbox");
  });
};

export const validateForm = (inputs, checkBoxes) => {
  let result = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length < 3) {
      result = false;
      inputs[i].classList.add("error-input");
      document.querySelectorAll(".error-text")[i].style.visibility = "visible";
    } else {
      inputs[i].classList.remove("error-input");
      document.querySelectorAll(".error-text")[i].style.visibility = "hidden";
    }
    
  }

  let checkBoxesValue = false;

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].checked === true ? (checkBoxesValue = true) : null;
    checkBoxes[i].addEventListener("change", removeErrorCheckBox);
  }

  if (!checkBoxesValue) {
    for (let i = 0; i < checkBoxes.length; i++) {
      result = false;
      checkBoxDiv[i].classList.add("error-checkbox");
    }
  }
  return result;
};
