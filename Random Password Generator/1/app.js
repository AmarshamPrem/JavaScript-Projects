//Accessing All Elements
let textBox = document.getElementById("textBox");
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let form = document.querySelector("#form");
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*_-|";
let index = 0;

// Adding Event Listeners
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    password = genPassword();
    textBox.innerText = password;
});
                        
//Generating Password
function genPassword () {
    let password = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars === "" || allChars.length < 1) {
        return password;
    }
    
    for (let i = 0; i <= inputSlider.value ; i++) {
        index = Math.floor(Math.random() * allChars.length);
        password += allChars[index];
    }
    return password;
}