const boxs = ['box-white', 'box-black'];

newque();

function newque() {
    document.getElementById('result').innerText = 'できるかな．．．'
    document.querySelectorAll('.box').forEach(b => {
        b.classList.remove(...boxs);
        b.classList.add(boxs[parseInt(Math.random() * 2)]);
    });
}

document.querySelectorAll('.box').forEach(b => {
    b.addEventListener('click', () => {
        boxs.forEach(v => b.classList.toggle(v));
        boxs.forEach(v => document.getElementById(`${Number(b.id[0]) - 1}${b.id[1]}`)?.classList.toggle(v));
        boxs.forEach(v => document.getElementById(`${Number(b.id[0]) + 1}${b.id[1]}`)?.classList.toggle(v));
        boxs.forEach(v => document.getElementById(`${b.id[0]}${Number(b.id[1]) - 1}`)?.classList.toggle(v));
        boxs.forEach(v => document.getElementById(`${b.id[0]}${Number(b.id[1]) + 1}`)?.classList.toggle(v));
        if (![...document.querySelectorAll('.box')].map(b => b.classList).reduce((acl, cl) => [...acl, ...cl]).includes(boxs[1])) {
            document.getElementById('result').innerText = '全部、白！クリア！！！！！'
        } else {
            document.getElementById('result').innerText = 'できるかな．．．'
        }
    })
});
