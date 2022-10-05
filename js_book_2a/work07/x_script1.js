'use strict';

let btn = document.createElement('button');
btn.innerText = 'btn';
btn.addEventListener('click', (e) => { btn.innerText = e.type });
btn.addEventListener('mouseover', (e) => { btn.innerText = e.type });
document.getElementById('work1').append(btn);

window.addEventListener('load', () => { document.getElementById('work').style.backgroundColor = 'red' });

window.addEventListener('load', () => {
    [...Array(10).keys()].forEach((v) => {
        let t = v + 1;
        let div = document.createElement('div');
        div.innerText = t;
        setTimeout(() => {
            document.getElementById('work1').append(div);
            let n = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
            document.getElementById('work').style.backgroundColor = 'rgb(' + n.join(',') + ')';
        }, t * 1000);
    });
});