'use strict';

document.querySelector('#work1').textContent = 'querySelector';
document.querySelectorAll('#work1')[0].textContent = 'querySelectorAll';

document.querySelectorAll('#work1')[0].textContent =
    document.querySelectorAll('div').length;
document.querySelectorAll('#work1')[0].textContent =
    document.getElementsByTagName('div').length;

let btn = document.createElement('button');
btn.innerText = 'btn-test';
document.querySelector('#work1').append(btn);

let clickEvent = (e) => {
    e.currentTarget.innerText = 'btn-test-' + e.type;
    e.currentTarget.style.backgroundColor = 'blue';
};
btn.addEventListener('click', clickEvent);

let mouseOverEvent = (e) => {
    e.currentTarget.innerText = 'btn-test-' + e.type;
    e.currentTarget.style.backgroundColor = 'red';
};
btn.addEventListener('mouseover', mouseOverEvent);
