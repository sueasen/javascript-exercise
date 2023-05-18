const boxCount = 90;
const numbers = {
    target: null
    , list: null
};

let count = 0;
let select = null;
for (let index = 0; index < boxCount; index++) {
    if (index % (boxCount / 10) == 0) {
        select = document.createElement('div');
        select.classList.add('flex_center');
        document.querySelector('.select').append(select);
    }
    const box = document.createElement('div');
    box.classList.add('box');
    select.append(box);
    box.addEventListener('click', () => isNumber(box));
}
setNumbers();
document.querySelector('#main').addEventListener('click', setNumbers)

function setNumbers() {
    numbers.target = Math.floor(Math.random() * boxCount);
    numbers.list = [...Array(boxCount).keys()];
    document.querySelectorAll('.select .box').forEach(v => {
        let i = Math.floor(Math.random() * numbers.list.length);
        let num = numbers.list.splice(i, 1);
        v.innerText = num;
        v.style.opacity = 1;
    });
    document.querySelector('#odd').addEventListener('click', () => addEventHint((t) => t % 2 != numbers.target % 2));
    document.querySelector('#herf').addEventListener('click', () => addEventHint((t) => parseInt(t / (boxCount / 2)) != parseInt(numbers.target / (boxCount / 2))));
    document.querySelector('#main').innerText = '？？？';
}

function addEventHint(isIgnore) {
    document.querySelectorAll('.select .box').forEach(v => {
        if (isIgnore(v.innerText)) {
            v.style.opacity = 0;
        }
    });
}

function isNumber(box) {
    if (box.innerText == numbers.target) {
        document.querySelector('#main').innerText = '正解！！またやる？';
    } else if (box.innerText > numbers.target) {
        document.querySelector('#main').innerText = `？ ${box.innerText}より小さいよ ？`;
    } else {
        document.querySelector('#main').innerText = `？ ${box.innerText}より大きいよ ？`;
    }
}
