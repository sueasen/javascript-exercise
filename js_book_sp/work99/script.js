'use strict';

let btn = document.createElement('button');
btn.innerText = 'さいしょです';
btn.addEventListener('click', aa);
document.getElementById('work1').before(btn);

function aa(event, bt = this) {
    // btn.addEventListener('mouseover', (event) => alert(event.target.innerText));
    console.log(event);
    console.log(bt);

    setTimeout
    alert(event.type);
    alert(event.name);
    alert(bt.innerText);
}

/**
 * ボタンクリック時の処理です
 * @param {Element} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // work1 の DOM を初期化
    document.getElementById('work1').innerHTML = '';
    // work1 の DOM に input1 を表示する DOM を追加
    // document.getElementById('work1').append(createDivElement(input1));
    document.getElementById('work1').before(createDivElement('before'));
    document.getElementById('work1').after(createDivElement('after'));

    let btn = document.createElement('button');
    btn.innerText = 'さいしょ';
    //btn.addEventListener('click', () => btn.innerText = 'おした');
    btn.addEventListener('mouseover', () => btn.innerText = 'まうすのった');
    // btn.addEventListener('mouseover', (event) => alert(event.target.innerText));
    btn.addEventListener('mouseout', () => btn.innerText = 'まうすはずれた');
    document.getElementById('work1').after(btn);
    btn.addEventListener('keypress',);

}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {Element} DOM属性(div)
 */
function createDivElement(text) {
    let element = document.createElement('div');
    element.innerText = text;
    return element;
}

//
// window.addEventListener('load', () => document.getElementById('work').style.backgroundColor = '#000000');
// localStorage.setItem('ttt', 'tttvalue');

// 参考
document.cookie.split(';').map(el => el.split('=')).filter(ell => ell[0] === 'qiitausr')

localStorage.setItem()