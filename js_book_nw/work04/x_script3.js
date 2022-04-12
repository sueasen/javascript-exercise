'use strict';

const colors = {};

/**
 * ボタンクリック時の処理です
 * @param {Element} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    if (input1 in colors) {
        document.getElementById('work').style.backgroundColor = colors[input1];
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

/**
 * colors の key, value を表示して色を設定する DOM属性(div) を生成します
 * @param {String} key colors の キー
 * @return {Element} DOM属性(div)
 */
function createDivElementColors(key) {
    let element = createDivElement(key + ':' + colors[key]);
    element.style.backgroundColor = colors[key];
    return element;
}

Object.keys(colors).forEach(k => {
    document.getElementById('work1').append(createDivElementColors(k));
});
