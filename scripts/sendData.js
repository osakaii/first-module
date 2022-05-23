
const modalWindow = document.getElementById('modalWindow')
const modalForm = document.getElementById('modal-form')

const inputs = modalForm.querySelectorAll('.modal-info__input')
const radioButtons = modalForm.querySelectorAll('.modal__radio')
const checkBoxes = modalForm.querySelectorAll('.modal__checkbox')

const sendButton = modalForm.querySelector('.modal-button')
const sendPlaceHolder = modalForm.querySelector('.modal-sending')

const closeModal = (formData) =>{
    console.log(formData)

    sendButton.style.display = "block"
    sendPlaceHolder.style.display = "none"

    modalWindow.style.display = "none"
}

const submitForm = (formData) =>{
    setTimeout(()=>closeModal(formData), 5000)

    sendButton.style.display = "none"
    sendPlaceHolder.style.display = "flex"
}

export  const initFormHandler = () =>{
    const submitHandler = (event) =>{
        event.preventDefault()

        const formData = {
            name : inputs[0].value,
            email : inputs[1].value,
            info : [],
            plan : null
        }
        radioButtons.forEach((radio)=>{
            if(radio.checked === true) formData.plan = radio.value
        })
        checkBoxes.forEach((checkBox) =>{
            if(checkBox.checked === true) formData.info.push(checkBox.value)
        })

        submitForm(formData)
    }
    
    modalForm.addEventListener('submit', (e)=> submitHandler(e))
}
