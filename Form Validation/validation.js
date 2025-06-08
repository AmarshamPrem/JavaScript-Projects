const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const emailBox = document.getElementById("email");
const passwordBox = document.getElementById("password");
const nameBox = document.getElementById("name");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (validateName()) {
        if (validateEmail()) {
            if(validatePassword()){
                alert("Form Submited Successfully");
            }
        }
    }
});

nameBox.addEventListener('input', () => {
    if (validateName()) {
        nameError.previousElementSibling.classList.remove('fa-xmark');
        nameError.previousElementSibling.classList.add('fa-check');
    } else {
        nameError.previousElementSibling.classList.add('fa-xmark');
        nameError.previousElementSibling.classList.remove('fa-check');
    }
});

emailBox.addEventListener('input', () => {
    if (validateEmail()) {
        emailError.previousElementSibling.classList.remove('fa-xmark');
        emailError.previousElementSibling.classList.add('fa-check');
    } else {
        emailError.previousElementSibling.classList.add('fa-xmark');
        emailError.previousElementSibling.classList.remove('fa-check');
    }
});

passwordBox.addEventListener('input', () => {
    if (validatePassword()) {
        passError.previousElementSibling.classList.remove('fa-xmark');
        passError.previousElementSibling.classList.add('fa-check');
    } else {
        passError.previousElementSibling.classList.add('fa-xmark');
        passError.previousElementSibling.classList.remove('fa-check');
    }
});

function validateName () {
    let name = document.getElementById("name").value;

    if (name.length == 0) {
        nameError.previousElementSibling.classList.add('fa-xmark');
        nameError.innerHTML = "Name is required";
        return false;
    }else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.previousElementSibling.classList.add('fa-xmark');
        nameError.innerHTML = "Write Full Name";
        return false;
    } else {
        nameError.innerHTML = "";
        nameError.previousElementSibling.classList.remove('fa-xmark');
        nameError.previousElementSibling.classList.add('fa-check');
        return true; 
    }
}

function validateEmail () {
    let email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.previousElementSibling.classList.add('fa-xmark');
        emailError.innerHTML = "Email is required";
        return false;
    }else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.previousElementSibling.classList.add('fa-xmark');
        emailError.innerHTML = "Write Valid Email";
        return false;
} else {
        emailError.innerHTML = "";
        emailError.previousElementSibling.classList.remove('fa-xmark');
        emailError.previousElementSibling.classList.add('fa-check');
        return true; 
    }
}

// function validatePassword () {
//     let password = document.getElementById("password").value;
//     
// if (password.length == 0) {
//         passError.previousElementSibling.classList.add('fa-xmark');
//         passError.innerHTML = "Password is required";
//         return false;
//
// } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/){
//         passError.previousElementSibling.classList.add('fa-xmark');
//         passError.innerHTML = "Password should atlest contain 1 Uppercase, 1 Lowercase, 1 Digit and 1 Character";
//         return false;
//     } else {
//         passError.innerHTML = "";  
//         passError.previousElementSibling.classList.remove('fa-xmark');
//         passError.previousElementSibling.classList.add('fa-check');
//         return true;
//     }
// }

function validatePassword () {
    let password = document.getElementById("password").value;

    if (password.length == 0) {
        passError.previousElementSibling.classList.add("fa-xmark");
        passError.innerHTML = "Password is required";
        return false;
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
            passError.previousElementSibling.classList.add("fa-xmark");
            passError.innerHTML= "Password should contain atlest 1 Uppercase, 1 Lowercase, 1 Digit and 1 Character";
            return false;
    } else {
            passError.previousElementSibling.classList.remove("fa-xmark");
            passError.previousElementSibling.classList.add("fa-check");
            passError.innerHTML = "";
            return true;
    }
}