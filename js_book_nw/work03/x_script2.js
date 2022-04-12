'use strict';

/**
 * ボタンクリック時の処理です
 * @param {Element} DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    let inputFloat = parseFloat(input1);
    if (!inputFloat && inputFloat != 0) {
        document.getElementById('work1').innerText = '数字以外 入力値:' + input1;
    } else if (inputFloat % 2 == 0 && inputFloat != 0) {
        document.getElementById('work1').innerText = '偶数 入力値:' + input1;
    } else if (inputFloat % 2 == 1) {
        document.getElementById('work1').innerText = '奇数 入力値:' + input1;
    } else {
        document.getElementById('work1').innerText = '整数以外 入力値:' + input1;
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
