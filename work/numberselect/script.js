const numTarget = Math.floor(Math.random() * 90);
document.querySelector('#main').innerText = '？？？';
const numbers = [...Array(9 * 10).keys()];

let count = 0;
let select = null;
while (numbers.length) {
    if (count++ % 9 == 0) {
        select = document.createElement('div');
        select.classList.add('flex_center');
        document.querySelector('.select').append(select);
    }
    let i = Math.floor(Math.random() * numbers.length);
    let num = numbers.splice(i, 1);

    const box = document.createElement('div');
    box.classList.add('box');
    box.innerText = num;
    select.append(box);
    box.addEventListener('click', () => isNumber(box));
}

document.querySelector('#odd').addEventListener('click', () => {
    document.querySelector('.select').querySelectorAll('.box').forEach(v => {
        if (v.innerText % 2 != numTarget % 2) {
            v.style.opacity = 0;
        }
    });
});
document.querySelector('#herf').addEventListener('click', () => {
    document.querySelector('.select').querySelectorAll('.box').forEach(v => {
        if (parseInt(v.innerText / 45) != parseInt(numTarget / 45)) {
            v.style.opacity = 0;
        }
    });
});

function isNumber(box) {
    if (box.innerText == numTarget) {
        document.querySelector('#main').innerText = '正解！！';
    } else if (box.innerText > numTarget){
        document.querySelector('#main').innerText = `？ ${box.innerText}より小さいよ ？`;
    } else {
        document.querySelector('#main').innerText = `？ ${box.innerText}より大きいよ ？`;
    }
}
