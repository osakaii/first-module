const checkBoxDiv = document.querySelectorAll(".checkbox-view");
const inputError = document.querySelectorAll(".error-text")
const checkboxError = document.getElementById('checkbox-error-text')

const removeErrorCheckBox = () => {
  checkboxError.style.visibility = 'hidden'
  checkBoxDiv.forEach((checkBox) => {
    checkBox.classList.remove("error-checkbox");
  });
};

const removeErrorInput = (e, i) =>{
  console.log(e)
  console.log(i)
  e.target.classList.remove('error-input')
  inputError[i].style.visibility = "hidden";
}


export const validateForm = (inputs, checkBoxes) => {

  let result = true;

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input',(e)=>removeErrorInput(e, i))
    if (inputs[i].value.length < 4) {
      if(inputs[i].value.length === 0){
        inputs[i].classList.add("error-input");
        inputError[i].style.visibility = "visible";

        result = false
        continue
      }
      inputs[i].classList.add("error-input");
      inputError[i].style.visibility = "visible";
      inputError[i].textContent = 'should be more then 3 symbols'

      result = false 
    } else {
      inputs[i].classList.remove("error-input");
      inputError[i].style.visibility = "hidden";
    }
  }

  let checkBoxesValue = false;

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].checked === true ? (checkBoxesValue = true) : null;
    checkBoxes[i].addEventListener("change", removeErrorCheckBox);
  }

  if (!checkBoxesValue) {
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxDiv[i].classList.add("error-checkbox");
      checkboxError.style.visibility = 'visible'

      result = false;
    }
  }
  return result;
};
