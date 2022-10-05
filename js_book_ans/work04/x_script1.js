'use strict';

let array1 = [...Array(9).keys()].map(i => ++i);
let result = [...Array(9)].map(i => new Array(9));
for (const i1 of array1) {
    array1.forEach(i2 => {
        result[i1 - 1][i2 - 1] = '' + i1 + '×' + i2 + '=' + (i1 * i2);
    });
}
console.table(result);
result.forEach(e => {
    document.getElementById('work1').append(createDivElement(e.join('　')));
});

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {HTMLElement} DOM属性(div)
 */
function createDivElement(text) {
    let element = document.createElement('div');
    element.innerText = text;
    return element;
}
