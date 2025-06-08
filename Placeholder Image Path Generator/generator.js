let height = document.querySelector('#height');
let width = document.querySelector('#width');
let bgColor = document.querySelector('#bg-color');
let txtColor = document.querySelector('#txt-color');
let text = document.querySelector('#text');
let image = document.querySelector('#image');
let submit = document.querySelector('#submit');

submit.addEventListener('click', handleClick);

function handleClick(e) {
    let response = validate();
    if (response.val) {
        getImage();
    } else {
        console.error(response.err)
    }
}

function validate () {
    if (height.value === "") {
        return {
            val : 0, 
            err: "Invalid Height."
        };  
    } else if (width.value === "") {
        return {
            val : 0, 
            err: "Invalid Width."
        };
    } else {
        return {
            val : 1, 
            suc: "Validation Successfull."
        };
    }
}
// https://placehold.co/600x400/000000/FFFFFF/png?text=amar
async function getImage () {
    let URL = `https://placehold.co/${width.value}x${height.value}/${bgColor.value.slice(1)}/${txtColor.value.slice(1)}?text=${text.value.split(' ').join('+')}`;
    image.src = URL;
}