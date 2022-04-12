'use strict';

/**
 * onClickWork1, 1_X は全部おなじこと
 */
function onClickWork1() {
    document.getElementById('work1').append(createDivElement('押した！'));
    console.log('onClickWork1');
}
let onClickWork1_1 = function () {
    document.getElementById('work1').append(createDivElement('押した！'));
    console.log('onClickWork1_1');
}
let onClickWork1_2 = () => {
    document.getElementById('work1').append(createDivElement('押した！'));
    console.log('onClickWork1_2');
}

/**
 * onClickWork2, 2_X は全部おなじこと
 * (変数1, 変数2, ・・) で引数を設定できる
 */
function onClickWork2(s) {
    document.getElementById('work1').append(createDivElement(s));
}
let onClickWork2_1 = function (s) {
    document.getElementById('work1').append(createDivElement(s));
}
let onClickWork2_2 = (s) => {
    document.getElementById('work1').append(createDivElement(s));
}

/**
 * onClickWork3, 3_X は全部おなじこと
 * 引数 = 初期値 で引数ない時の値を設定できる
 */
function onClickWork3(s1 = 'not1', s2 = 'not2') {
    document.getElementById('work1').append(createDivElement(s1 + s2));
}
let onClickWork3_1 = function (s1 = 'not1', s2 = 'not2') {
    document.getElementById('work1').append(createDivElement(s1 + s2));
}
let onClickWork3_2 = (s1 = 'not1', s2 = 'not2') => {
    document.getElementById('work1').append(createDivElement(s1 + s2));
}

/**
 * multipl, _X は全部おなじこと
 * return で戻り値を設定できる
 */
function multipl(i1 = 0, i2 = 0) {
    return i1 * i2;
}
let multipl_1 = function (i1 = 0, i2 = 0) {
    return i1 * i2;
}
let multipl_2 = (i1 = 0, i2 = 0) => {
    return i1 * i2;
}

/**
 * 変数に関数が設定できる
 * JavaScript だと結構、使うことがあります
 */
function onClickWork4() {
    document.querySelectorAll()
    let func1 = onClickWork1;
    func1();
    let func2 = onClickWork2_1;
    func2('work4 こんな実行方法もある2');
    let func3 = onClickWork3_2;
    func3('work4 ', 'こんな実行方法もある3');
}

/**
 * ボタンクリック時の処理です
 */
function onClickBtn1() {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // work1 の DOM を初期化
    document.getElementById('work1').innerHTML = '';
    // work1 の DOM に input1 を表示する DOM を追加
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
