const qs = {
    r3m6: [
        ''
        , 'https://www.fe-siken.com/kakomon/26_haru/q1.html'
        , 'https://www.fe-siken.com/kakomon/01_aki/q4.html'
        , 'https://www.fe-siken.com/kakomon/19_haru/q6.html'
        , 'https://www.fe-siken.com/kakomon/26_haru/q4.html'
    ]
    , r3m7: [
        ''
        , 'https://www.fe-siken.com/kakomon/18_aki/q8.html'
        , 'https://www.fe-siken.com/kakomon/19_aki/q9.html'
        , 'https://www.fe-siken.com/kakomon/03_menjo/q3.html'
        , 'https://www.fe-siken.com/kakomon/28_aki/q2.html'
    ]
}

const iframe = document.querySelector('#ifcontainer');
const selectYM = document.querySelector('#selectYM');
const selectQ = document.querySelector('#selectQ');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

selectYM.addEventListener('change', (e) => {
    selectQ.value = 1;
    iframe.src = qs[selectYM.value][selectQ.value];
});
selectQ.addEventListener('change', (e) => {
    iframe.src = qs[selectYM.value][selectQ.value];
});
prev.addEventListener('click', (e) => {
    selectQ.value = selectQ.value <= 1 ? 1 : Number(selectQ.value) - 1;
    iframe.src = qs[selectYM.value][selectQ.value];
});
next.addEventListener('click', (e) => {
    selectQ.value = selectQ.value >= 80 ? 80 : Number(selectQ.value) + 1;
    iframe.src = qs[selectYM.value][selectQ.value];
});