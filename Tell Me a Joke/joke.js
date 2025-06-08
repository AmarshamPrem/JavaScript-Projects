let button = document.getElementById('button');
let jokeNode = document.getElementById('joke');

button.addEventListener('click', () => {
    getJoke();
});

async function getJoke() {
    button.innerText = "Fetching jokes...";
    let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    let data = await response.json();
    jokeNode.innerHTML = data.setup;
    jokeNode.innerHTML += '<br>';
    jokeNode.innerHTML += data.punchline;
    jokeNode.innerHTML += '<br>';
    button.innerText = "Get New Joke";
}