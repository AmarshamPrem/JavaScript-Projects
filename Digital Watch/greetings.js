let p = document.getElementById('msg');
let time_p = document.getElementById('time');

setMsg();
getTime();
function setMsg() {
    let hour = new Date().getHours();
    
    if (hour >= 6 && hour <= 12) {
        p.innerText = "Good Morning Bro!";
        p.classList.remove("js-night");
        p.classList.add("js-morn");
        time_p.classList.remove("js-night");
        time_p.classList.add("js-morn");
    } else if (hour >= 12 && hour <= 14) {
        p.innerText = "Good Noon Bro!";
        p.classList.remove("js-morn");
        time_p.classList.remove("js-morn");
        p.classList.add("js-noon");
        time_p.classList.add("js-noon");
    } else if (hour >= 14 && hour <= 16) {
        p.innerText = "Good After Noon Bro!";
    } else if (hour >= 16 && hour <= 19) {
        p.innerText = "Good Evening Bro!";
        p.classList.remove("js-noon");
        time_p.classList.remove("js-noon");
        time_p.classList.add("js-even");
        p.classList.add("js-even");
    } else if (hour >= 19 && hour <= 24) {
        p.innerText = "Good Night Bro!";
        p.classList.remove("js-even");
        time_p.classList.remove("js-even");
        p.classList.add("js-night");
        time_p.classList.add("js-night");
    } else if (hour >= 0 && hour <= 6) {
        p.innerText = "Good Mid Night Bro!";
        time_p.classList.add("js-night");
        p.classList.add("js-night");
    }
}

setInterval(() => {
    getTime();
}, 1000);


function getTime() {
    let hh = new Date().getHours();
    let ss = new Date().getSeconds();
    let mm = new Date().getMinutes();

    if (ss < 10) {
        ss = `0${ss}`;
    }

    if (mm < 10) {
        mm = `0${mm}`;
    }
    
    if (hh < 10) {
        hh = `0${hh}`;
    }
    time_p.innerText = `${hh} : ${mm} : ${ss}`;

    if (mm == "00") {
        setMsg();
    }
}   

    








