'use strict';

function onClickBtn1(event, element) {
    let a = '変数aを宣言';
    const A = '定数Aを宣言'
    document.getElementById('work1').innerText = a + '\n' + A;
}

function onClickBtn2(event, element) {
    let a = 500;
    const A = '定数Aを宣言'
    document.getElementById('work1').innerText = a + '\n' + A;
    A = 'エラーになる．．．';
}

function onClickBtn3(event, element) {
    let x = 'aaaaa';
    let x1 = '999';
    let x2 = 200;
    document.getElementById('work1').innerText = '変数xの型:' + typeof(x) 
        + '\n' + 'String型 x1, Number型 x2 を足し算：' + (parseInt(x1) + x2);
}

function onClickBtn4(event, element) {
    let x1 = '999';
    let x2 = 200;
    let x3 = false;
    document.getElementById('work1').innerText = 
        '変数x1:' + typeof(x1) + ':' + x1
        + '\n' + '変数x2:' + typeof(x2) + ':' + x2
        + '\n' + '変数x3:' + typeof(x3) + ':' + x3;
}

function onClickBtn5(event, element) {
    let a1 = 7;
    let a2 = 3;
    document.getElementById('work1').innerText = 
        '足し算:' + (a1 + a2)
        + '\n' + '引き算:' + (a1 - a2)
        + '\n' + '掛け算:' + (a1 * a2)
        + '\n' + '割り算:' + (a1 / a2)
        + '\n' + '余り:' + (a1 % a2);
}

function onClickBtn6(event, element) {
    let a1 = 7;
    let a2 = 3;
    document.getElementById('work1').innerText = 
        '足し算:' + a1 + ' + ' + a2 + ' = ' + (a1 + a2)
        + '\n' + '引き算:' + a1 + ' - ' + a2 + ' = ' + (a1 - a2)
        + '\n' + '掛け算:' + a1 + ' × ' + a2 + ' = ' + (a1 * a2)
        + '\n' + '割り算:' + a1 + ' ÷ ' + a2 + ' = ' +  parseInt(a1 / a2) + ' 余り ' + (a1 % a2);
}
