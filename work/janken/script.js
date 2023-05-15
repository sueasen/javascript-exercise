'use strict';

const janken = {
    'j_go': 'j_ch'
    , 'j_ch': 'j_pa'
    , 'j_pa': 'j_go'
}

const result = document.getElementById('result');

function playJanken() {
    document.getElementById('pc-hand').classList.add('rand');
    document.getElementById('result').innerText = '結果はいかに？？'
}

function selectHand(hand) {

    document.getElementById('pc-hand').classList.remove('rand');
    let pcHand = Object.keys(janken)[parseInt(Math.random() * 3)];
    document.getElementById('pc-hand').style.backgroundImage = `url(./${pcHand}.png)`;

    if (pcHand == hand) {
        document.getElementById('result').innerText = 'あいこ'
    } else if (pcHand == janken[hand]) {
        document.getElementById('result').innerText = 'かち'
    } else {
        document.getElementById('result').innerText = 'まけ'
    }
}