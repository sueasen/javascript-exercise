'use strict';

document.cookie = 'key1=値1';
document.cookie.split(';').forEach(c => {
    let [key, value] = c.split('=');
    if (key.trim() === 'key1') {
        document.getElementById('work1').append(createDivElement(value));
    }
});

localStorage.setItem('key1', '値1');
document.getElementById('work1').append(createDivElement(localStorage.getItem('key1')));

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
