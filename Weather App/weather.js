getUpdate('Mithi');

alert("This app is made by Amar Sham.");

let inputBox = document.querySelector(".input-box");
let weatherImg = document.querySelector(".weather-img");
let weatherBody = document.querySelector(".weather-body");
let temperature = document.querySelector(".temperature");
let discription = document.querySelector(".discription");
let humidity = document.querySelector("#humidity");
let wind_speed = document.querySelector("#wind-speed");
let err404 = document.querySelector(".location-not-found");
let searchBtn = document.getElementById("search");
let city;
    
document.addEventListener('keydown', (e) => {
    inputBox.focus();
    if (e.key == 'Enter') {
        getUpdate(inputBox.value);
    } 
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getUpdate(inputBox.value);
});

async function getUpdate(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=215bf32dc6e343c14913dacdd388227e`;
    let data = await fetch(URL).then(response => response.json());

    if (data.cod == '404') {
        handleError(data.message)
        return;
    } else {
        err404.style.display = 'none';
        weatherBody.style.display = 'flex';
        temperature.innerHTML = `${(data.main.feels_like - 273.15).toFixed(2)}<sup>°</sup> C`;
        discription.innerText = `${data.weather[0].description}`;
        humidity.innerText = `${data.main.humidity}%`;
        wind_speed.innerText = `${data.wind.speed}Km/H`;
        let caseDics = data.weather[0].main;
    
        switch (caseDics) {
            case "clear":
                weatherImg.src = "sun.svg";
                break;
            case "clouds":
                weatherImg.src = "clouds.svg";
                break;
            case "rain":
                weatherImg.src = "rain.svg";
                break;
            case "mist":
                weatherImg.src = "mist.svg";
                break;
            case "haze":
                weatherImg.src = "fog.svg";
                break;
        }
    }
}

function handleError(err){
    weatherBody.style.display = 'none';
    err404.style.display = 'flex';
    console.error('Something went wrong. Try again!', err);
    return;
}

// setTimeout(() => {
//     let conf = confirm("Guys please share your little experience of this usage of WeatherMe.");   
//     if (conf) {
//         let div = document.createElement('div');
//         div.classList.add('google');
//     }
// }, 12000);


// let obj = {
//         Host: "smtp.gmail.com",
//         Username: "sender@email_address.com",
//         Password: "Enter your password",
//         To: 'shamamar027@gmail.com',
//         From: "sender@email_address.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//     }

// function sendEmail() {
//     Email.send(obj).then(result => msgSent(result));
// }