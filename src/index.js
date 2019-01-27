import style from './scss/main.scss';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const inputs = document.querySelectorAll('.form__input');
const menuItem = document.querySelectorAll('.menu__item');
const formInfo = document.getElementById('formInfo');
const submitBtn = document.getElementById("submitBtn");

//form validation
inputs.forEach(input => {
    input.addEventListener('focusout', ()=> {
        if (!input.checkValidity() || input.value == '') {
            input.closest('.form__field').classList.add('warning')
        }
        else {
            input.closest('.form__field').classList.remove('warning')
        }
    })
})

const isFormValid = () => {
    for (let i = 0; i < inputs.length; i++ ) {
        if (!inputs[i].checkValidity() || inputs[i].value == '') {
            inputs[i].closest('.form__field').classList.add('warning')
        }
        else {
            inputs[i].closest('.form__field').classList.remove('warning')
        }
    }
    formInfo.classList.remove('show')
}

//closing menu after clicking on the link
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})

//menu open/close
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
})


document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault()
    inputs.forEach((input) => {
        input.value = ''
    })
    formInfo.classList.add('show')
})

submitBtn.addEventListener('click', isFormValid)

