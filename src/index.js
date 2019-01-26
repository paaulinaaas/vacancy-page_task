import style from './scss/main.scss';
import flatpickr from "flatpickr";

flatpickr("#datepicker", {});

// const button1 = Dropbox.createChooseButton(options);
// document.getElementById("container1").appendChild(button1);

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        menu.classList.toggle('active')

    })

console.log('a')
