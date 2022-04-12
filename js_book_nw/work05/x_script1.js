'use strict';

/**
 * ボタンクリック時の処理です
 * @param {Element} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    document.getElementById('work1').innerHTML = '';
    document.getElementById('work1').append(createDivElement(input1));
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
 * ボタンクリック時の処理です
 */
function onClickBtn2() {
    document.getElementById('work1').append(createDivElement('put'));
}

/**
 * ボタンクリック時の処理です
 * @param {String} s 文字列
 */
function onClickBtn3(s) {
    document.getElementById('work1').append(createDivElement(s));
}

/**
 * ボタンクリック時の処理です
 * @param {String} s1 文字列
 * @param {String} s2 文字列
 */
function onClickBtn4(s1, s2 = 'not arg2') {
    document.getElementById('work1').append(createDivElement(s1 + ':' + s2));
}

/**
 * ボタンクリック時の処理です
 * @param {Array[Number]} nums 数値配列
 */
function onClickBtn4(...nums) {
    document.getElementById('work1').append(createDivElement(
        nums.reduce((sum, v) => (sum + v), 0)));
}
