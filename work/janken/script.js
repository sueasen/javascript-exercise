'use strict';

const janken = ['j_go', 'j_ch', 'j_pa'];

const result = document.getElementById('result');

function playJanken() {
    document.getElementById('pc-hand').classList.add('rand');
    document.getElementById('result').innerText = '結果はいかに？？'
}

function selectHand(hand) {

    // pcHand を乱数使用して設定
    // document.getElementById('pc-hand').classList.remove('rand');
    // let pcHand = janken[parseInt(Math.random() * janken.length)];

    //　pcHand アニメーションに合わせて設定 
    let pcHandNowImage = getComputedStyle(document.getElementById("pc-hand")).backgroundImage.split(',')[1];
    let pcHand = pcHandNowImage.substring(pcHandNowImage.indexOf('.png') - 4, pcHandNowImage.indexOf('.png'));
    document.getElementById('pc-hand').classList.remove('rand');
    
    document.getElementById('pc-hand').style.backgroundImage = `url(./${pcHand}.png)`;

    if (pcHand == hand) {
        document.getElementById('result').innerText = 'あいこ'
    } else if (pcHand == janken[(janken.indexOf(hand) + 1) % janken.length]) {
        document.getElementById('result').innerText = 'かち'
    } else {
        document.getElementById('result').innerText = 'まけ'
    }
}
