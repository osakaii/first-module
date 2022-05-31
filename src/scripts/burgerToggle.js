
const burgerButton = document.getElementById('burger-button')
const navbar = document.querySelector('.navbar-mobile')
const anchors = navbar.querySelectorAll('.navbar__item')

const toggleBurger = () =>{
    navbar.classList.toggle('show')
}


export const initButtonToggling = () =>{
    burgerButton.addEventListener('click', toggleBurger)
    anchors.forEach((el)=>{
        el.addEventListener('click', toggleBurger)
    })
}