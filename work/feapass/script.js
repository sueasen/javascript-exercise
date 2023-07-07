const qs = {
    r03m06: [
        ''
        , 'https://www.fe-siken.com/kakomon/26_haru/q1.html'
        , 'https://www.fe-siken.com/kakomon/01_aki/q4.html'
        , 'https://www.fe-siken.com/kakomon/19_haru/q6.html'
        , 'https://www.fe-siken.com/kakomon/26_haru/q4.html'
    ]
    , r03m07: [
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
    applyIFrame(qs[selectYM.value][selectQ.value]);
});
selectQ.addEventListener('change', (e) => {
    applyIFrame(qs[selectYM.value][selectQ.value]);
});
prev.addEventListener('click', (e) => {
    if (selectQ.value <= 1) return;
    selectQ.value = Number(selectQ.value) - 1;
    applyIFrame(qs[selectYM.value][selectQ.value]);
});
next.addEventListener('click', (e) => {
    if (selectQ.value >= qs[selectYM.value].length - 1) return;
    selectQ.value = Number(selectQ.value) + 1;
    applyIFrame(qs[selectYM.value][selectQ.value]);
});

function applyIFrame(url) {
    if (iframe.src == url) return;
    iframe.src = url;
}