let letters = [];

function generateGame() {
    let word = document.getElementById('word').value;
    for (let i = 0; i < word.length; ++i) {
        letters.push(word[i]);
        let letter = document.createElement("input");
        letter.setAttribute('type', 'text');
        letter.setAttribute('class', 'letter');
        letter.setAttribute('id', i);
        letter.setAttribute('size', '2');
        let game = document.getElementById('game');
        game.appendChild(letter);
    }
}

function checkLetter() {
    let unCheckedLetter = document.getElementById('unCheckedLetter').value;
    if (letters.includes(unCheckedLetter)) {
        let index = letters.indexOf(unCheckedLetter);
        let letter = document.getElementById(index);
        console.log(letter);
        letter.value = unCheckedLetter;
        letters[index] = "";
    } else {
        let lifesNr = document.getElementById('lifesNr').value; 
        if (lifesNr > 1) {
            document.getElementById('lifesNr').stepDown(1);
        } else {
            alert("ai murit");
        }
    }
}

