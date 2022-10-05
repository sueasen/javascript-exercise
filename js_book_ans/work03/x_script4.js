'use strict';

let day = new Date();
const YEAR_END_DAY = new Date(2022, 11, 31);
while (day <= YEAR_END_DAY) {
    document.getElementById('work1').append(createDivElement(day.toLocaleDateString()));
    day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
}

/**
 * ボタンクリック時の処理です
 * @param {HTMLElement} DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    const DAY_FORMAT = new RegExp('^\\d{4}\/(\\d{1}|1[0-2])\/(\\d{1}|[1-2]\\d{1}|3[0-1])$');
    if (!DAY_FORMAT.test(input1)) {
        alert('yyyy/mm/dd で入力してください : ' + input1);
        return;
    }

    document.getElementById('work1').innerHTML = '';
    const inputArray = input1.split('/');
    let day = new Date(inputArray[0], inputArray[1] - 1, inputArray[2]);
    const YEAR_END_DAY = new Date(2022, 11, 31);
    while (day <= YEAR_END_DAY) {
        let divElement = createDivElement(day.toLocaleDateString());
        document.getElementById('work1').append(divElement);
        day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
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
    element.style.backgroundColor = '#' + 'ff'.padStart(6, parseInt(new Date().getUTCMilliseconds()) % 10);
    return element;
}
