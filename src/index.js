import style from './scss/main.scss';
import flatpickr from "../node_modules/flatpickr";

flatpickr("#datepicker", {});

const button1 = Dropbox.createChooseButton(options);
document.getElementById("container1").appendChild(button1);