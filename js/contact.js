// CONTACT FORM JS

const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const comment = document.querySelector("#comment");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#invalidEmailError");
const phoneError = document.querySelector("#phoneError");
const commentError = document.querySelector("#commentError");


form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    const nameValue = name.value;


    if (validateLength(nameValue, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }


    const emailValue = email.value;

    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    const phoneValue = phone.value;

    if (validateLength(phoneValue, 6) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }



    const commentValue = comment.value;

    if (validateLength(commentValue, 1) === true) {
        commentError.style.display = "none";
    } else {
        commentError.style.display = "block";
    }
}

function validateLength(value, lengthCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthCheck) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(email)) {
        return true;
    } else {
        return false;
    }
}




// LOADING ICON JS

var containerLoading = document.getElementById("container_loading");

function loading() {
    containerLoading.style.display = "none";
    var contentBody = document.getElementById("contentBody");
    contentBody.style.display = "";
}

setTimeout(() => loading(), 1000);