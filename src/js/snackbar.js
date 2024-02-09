import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const createBtn = document.querySelector('button');
const formValue = document.querySelector('.form');

let radioState = true;
function onRadioBtnState() {
 
    const radioValue = formValue.elements.value;
    console.log(radioValue);
}
createBtn.addEventListener ('click', onRadioBtnState)