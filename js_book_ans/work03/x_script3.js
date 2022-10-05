'use strict';

/**
 * ボタンクリック時の処理です
 * @param {HTMLElement} DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = parseInt(document.getElementById('input1').value);
    document.getElementById('work1').innerHTML = '';
    for (let index = 0; index < input1; index++) {
        let divElement = createDivElement(index);
        document.getElementById('work1').append(divElement);
    }
    let index = 0;
    while (index < input1) {
        let divElement = createDivElement(index);
        document.getElementById('work1').append(divElement);
        index++;
    }
}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {HTMLElement} DOM属性(div)
 */
function createDivElement(text) {
    let element = document.createElement('div');
    element.innerText = text;
    element.style.backgroundColor = '#' + 'ff'.padStart(6, parseInt(text) % 10);
    return element;
}
