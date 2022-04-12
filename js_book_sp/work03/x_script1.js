'use strict';

/**
 * ボタンクリック時の処理です
 * @param {Element} DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    if (1 == input1) {
        document.getElementById('work1').innerText = '1と同じ == 入力値:' + input1;
    } else if (2 === parseInt(input1)) {
        document.getElementById('work1').innerText = '2と同じ === 入力値:' + input1;
    } else {
        document.getElementById('work1').innerText = '1, 2 ではない 入力値:' + input1;
    }
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
