let form = document.querySelector('form');
let resultDiv = document.querySelector('.result');
let wordAPI = "https://random-word-api.herokuapp.com/word?number=1";
let data;

(async function() {
    let response = await fetch(wordAPI);
    data = await response.json();
    getWordInfo(data[0]);
})()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultDiv.classList.remove("container");
    if (form.elements[0].value !== '') {
        getWordInfo(form.elements[0].value);
    } else {
        alert("Enter the word");
    }
    form.elements[0].focus();
});

async function getWordInfo (word) {
    resultDiv.innerHTML = `
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    `;
    let responce = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    data = await responce.json();

    resultDiv.classList.add("container");

    if (data.hasOwnProperty("title")) {
        resultDiv.innerHTML = `
            <h3 class="warning"><strong>Word Not Found!!</strong></h3>
            <h3 class="compliment"><strong>${data.message.replace("pal", "Amar")}</strong></h3>
            <h3><strong>Solution:</strong>${data.resolution}</h3>
        `;
    } else {
        let n = 1;
        resultDiv.innerHTML = `<h2><strong>Word:</strong> ${data[0].word[0].toUpperCase()+data[0].word.substr(1)}</h2>`;
        
        for (let i = 0; i < data[0].meanings.length; i++) {
            for (let j = 0; j < data[0].meanings[i].definitions.length; j++) {
                let definations = data[0].meanings[i].definitions;
    
                resultDiv.innerHTML += `
                    <br>
                    <h3>${n}. </h3>
                    <p>${data[0].meanings[i].partOfSpeech}</p>
                    <p><strong>Meaning:</strong> ${definations[j].definition === undefined ? "Not Found" : definations[j].definition}</p>
                    <p><strong>Example:</strong> ${definations[j].example === undefined ? "Not Found" : definations[j].example}</p>
                    ${definations[j].antonyms.length !== 0 ?
                    '<p><strong>Antonyms:</strong></p>': ''}`;

                let ul = document.createElement('ul');
                ul.classList.add('ul');
                for (let k = 0; k < definations[j].antonyms.length; k++) {
                    console.log(j, k);
                    ul.innerHTML += `<li>${definations[j].antonyms[k]}</li>`;
                }
                n++;
                resultDiv.append(ul);
            }
        }
        resultDiv.innerHTML += `<br><br><a class="read" href="https://en.wiktionary.org/wiki/${data[0].word}" target="_blank">Read More</a> <br>` 
    }
}