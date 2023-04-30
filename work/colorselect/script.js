const rgbTarget = [...Array(3)].map(i => Math.floor(Math.random() * 256));
document.querySelector('#main').style.backgroundColor = 'rgb(' + rgbTarget.join(',') + ')';

const colors = [...Array(9 * 10 - 1)].map((_, j) => {
    if (j % 6 == 0) {
        return [rgbTarget[0], Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    } else if (j % 6 == 1) {
        return [Math.floor(Math.random() * 256), rgbTarget[1], Math.floor(Math.random() * 256)];
    } else if (j % 6 == 2) {
        return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), rgbTarget[2]];
    } else if (j % 6 == 3) {
        return [rgbTarget[0], rgbTarget[1], Math.floor(Math.random() * 256)];
    } else if (j % 6 == 4) {
        return [rgbTarget[0], Math.floor(Math.random() * 256), rgbTarget[2]];
    } else if (j % 6 == 5) {
        return [Math.floor(Math.random() * 256), rgbTarget[1], rgbTarget[2]];
    }
});
colors.push(rgbTarget);

let count = 0;
let select = null;
while (colors.length) {
    if (count++ % 9 == 0) {
        select = document.createElement('div');
        select.classList.add('flex_center');
        document.querySelector('.select').append(select);
    }
    let i = Math.floor(Math.random() * colors.length);
    let b = colors.splice(i, 1);

    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = 'rgb(' + b.join(',') + ')';
    select.append(box);
    box.addEventListener('click', () => {
        isColor(box);
    });
}

document.querySelector('#red').addEventListener('click', hintRed);
document.querySelector('#green').addEventListener('click', hintGreen);
document.querySelector('#blue').addEventListener('click', hintBlue);

function hintRed() {
    document.querySelectorAll('.box').forEach(v => {
        let c = v.style.backgroundColor.match(/\d+/g);
        if (c[0] != rgbTarget[0]) {
            v.style.opacity = 0;
        }
    });
}
function hintGreen() {
    document.querySelectorAll('.box').forEach(v => {
        let c = v.style.backgroundColor.match(/\d+/g);
        if (c[1] != rgbTarget[1]) {
            v.style.opacity = 0;
        }
    });
}
function hintBlue() {
    document.querySelectorAll('.box').forEach(v => {
        let c = v.style.backgroundColor.match(/\d+/g);
        if (c[2] != rgbTarget[2]) {
            v.style.opacity = 0;
        }
    });
}

function isColor(box) {
    if (box.style.backgroundColor == document.querySelector('#main').style.backgroundColor) {
        alert('正解！');
    } else {
        alert('ちがうよ！');
    }
}
