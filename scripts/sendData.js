import { validateForm } from "./validateForm.js";

const modalWindow = document.getElementById("modalWindow");
const modalForm = document.getElementById("modal-form");

// const inputs = modalForm.querySelectorAll(".modal-info__input");
const nameInput = modalForm.querySelector('#name-input');
const emailInput = modalForm.querySelector('#email-input');

const radioButtons = modalForm.querySelectorAll(".modal__radio");
const checkBoxes = modalForm.querySelectorAll(".modal__checkbox");

const sendButton = modalForm.querySelector(".modal-button");
const sendPlaceHolder = modalForm.querySelector(".modal-sending");

const closeModal = (formData) => {
  console.log(formData);
  sendButton.style.display = "block";
  sendPlaceHolder.style.display = "none";
  modalWindow.style.display = "none";
};

const submitForm = (formData) => {
  setTimeout(() => closeModal(formData), 5000);

  sendButton.style.display = "none";
  sendPlaceHolder.style.display = "flex";
};


  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      info: [],
      plan: null,
    };

    radioButtons.forEach((radio) => {
      if (radio.checked === true) formData.plan = radio.value;
    });
    checkBoxes.forEach((checkBox) => {
      if (checkBox.checked === true) formData.info.push(checkBox.value);
    });


    if (validateForm([nameInput,emailInput], checkBoxes)) {
      submitForm(formData);
    }
};

export const initFormHandler = () => {
  modalForm.addEventListener("submit", (e) => submitHandler(e));
};
