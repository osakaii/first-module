const modalWindow = document.getElementById("modalWindow");
const modalContent = document.getElementById("modal-content");
const body = document.body;

let isModalOpen = false;

const addCheckToRadio = (e) =>{
    document.querySelectorAll(".modal__radio").forEach((radio) => {
        if (e.target.value === radio.value) {
          radio.checked = true;
        }
      });
}

const openModal = (e) => {
  modalWindow.style.display = "flex";
  body.style.overflow = "hidden";

  addCheckToRadio(e)

  modalWindow.addEventListener("click", (e) => closeModal(e));
  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

const closeModal = (event) => {
  event.stopPropagation();
  modalWindow.style.display = "none";
  body.style.overflow = "scroll";
};

export const initModalToggling = () => {
  const buttons = document.querySelectorAll(".buy-button");

  if (!isModalOpen) {
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => openModal(e));
    });
  }
};
