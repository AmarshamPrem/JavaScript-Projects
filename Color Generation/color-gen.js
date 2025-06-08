let rnddivs = document.querySelectorAll(".box");
let grydivs = document.querySelectorAll(".dba");
let reddivs = document.querySelectorAll(".red");
let greendivs = document.querySelectorAll(".green");
let bluedivs = document.querySelectorAll(".blue");
let darkdivs = document.querySelectorAll(".dark");
let lightdivs = document.querySelectorAll(".light");

rnddivs.forEach((box) => {
    let rndrgb = `(${random(255)},${random(255)},${random(255)})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

grydivs.forEach((box) => {
    let no = random(255);
    let rndrgb = `(${no},${no},${no})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

reddivs.forEach((box) => {
    let rndrgb = `(${random(155) + 100},${random(100)},${random(100)})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

greendivs.forEach((box) => {
    let rndrgb = `(${random(100)},${random(155) + 100},${random(100)})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

bluedivs.forEach((box) => {
    let rndrgb = `(${random(100)},${random(100)},${random(155) + 100})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

darkdivs.forEach((box) => {
    let rndrgb = `(${random(130)},${random(130)},${random(130)})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

lightdivs.forEach((box) => {
    let rndrgb = `(${random(165) + 90},${random(165) + 90},${random(165) + 90})`;
    box.style.background = `rgb${rndrgb}`;
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(`rgb${rndrgb}`);
    });
    box.addEventListener('mouseover', () => {
        box.title = `rgb${rndrgb}`;
    });
});

function random (no) {
    return Math.floor(Math.random() * no);
}