'use strict';

const dictionary = {};

/**
 * ボタンクリック時の処理です
 * @param {Element} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    if (input1 in dictionary) {
        document.getElementById('work1').append(createDivElement(dictionary[input1]));
    } else {
        document.getElementById('work1').append(createDivElement('not found : ' + input1));
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

Object.entries(dictionary).forEach(([k, v]) => {
    document.getElementById('work1').append(createDivElement(k + ':' + v));
});
