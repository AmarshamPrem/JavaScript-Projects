let text = document.getElementById('text');
let result = document.getElementById('result');
let up = document.getElementById('up');
let down = document.getElementById('down');
let cap = document.getElementById('cap');
let clearBtn = document.getElementById('clear');
let removeComasBtn = document.getElementById('removeComas');
let removePointsBtn = document.getElementById('removePoints');
let clearSpacesBtn = document.getElementById('clearSpaces');
let clearAllSpacesBtn = document.getElementById('clearAllSpaces');

text.addEventListener('input', (e) => analyze(e));
up.addEventListener('click', (e) => toUpper(e));
down.addEventListener('click', (e) => toLower(e));
cap.addEventListener('click', (e) => captalize(e));
clearBtn.addEventListener('click', (e) => clear(e));
clearSpacesBtn.addEventListener('click', (e) => clearSpaces(e));
clearAllSpacesBtn.addEventListener('click', (e) => clearAllSpaces(e));
removeComasBtn.addEventListener('click', (e) => removeComas(e));
removePointsBtn.addEventListener('click', (e) => removePoints(e));

function analyze(e) {
    let chars = e.target.value.length;
    let words = e.target.value.split(' ').filter((val) => {
        if (val !== '') {
            return true;
        }
    }).length;
    let sent = e.target.value.split('.').filter((val) => {
        if (val !== '') {
            return true;
        }
    }).length;
    result.innerHTML = `
    <h1>Analized Data</h1>
    <div>
        <p>Chars: ${chars}</p>
        <p>Words: ${words}</p>
        <p>Sentence: ${sent}</p>
    </div>`;
}

function toUpper (e) {
    text.value = text.value.toUpperCase();
}

function toLower (e) {
    text.value = text.value.toLowerCase();
}

function captalize (e) {
    let arr = [];
    text.value.split(' ').filter(n => n!== '').forEach((word) => {
        arr.push(word[0].toUpperCase() + word.slice(1))
    })
    text.value = arr.join(' ');
}

function clear (e) {
    text.value = '';
}

function clearSpaces (e) {
    text.value = text.value.trim();
}

function clearAllSpaces (e) {
    text.value = text.value.split(' ').join('');
}

function removeComas (e) {
    text.value = text.value.split(',').join(' ');
}

function removePoints (e) {
    text.value = text.value.split('.').join(' ');
}



