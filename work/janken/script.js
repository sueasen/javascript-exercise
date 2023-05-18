'use strict';

// const janken = {
//     'j_go': 'j_ch'
//     , 'j_ch': 'j_pa'
//     , 'j_pa': 'j_go'
// }
const janken = ['j_go', 'j_ch', 'j_pa'];

const result = document.getElementById('result');

function playJanken() {
    document.getElementById('pc-hand').classList.add('rand');
    document.getElementById('result').innerText = '結果はいかに？？'
}

function selectHand(hand) {

    document.getElementById('pc-hand').classList.remove('rand');
    let pcHand = janken[parseInt(Math.random() * janken.length)];
    document.getElementById('pc-hand').style.backgroundImage = `url(./${pcHand}.png)`;

    if (pcHand == hand) {
        document.getElementById('result').innerText = 'あいこ'
    } else if (pcHand == janken[(janken.length + janken.indexOf(hand) + 1) % janken.length]) {
        document.getElementById('result').innerText = 'かち'
    } else {
        document.getElementById('result').innerText = 'まけ'
    }
}