const boxColorClass = ['box-white', 'box-black'];
newQuestion();
document.querySelectorAll('.box').forEach(b => b.addEventListener('click', () => changeBox(b)));

/**
 * 新規問題の設定します
 */
function newQuestion() {
    document.getElementById('result').innerText = 'できるかな．．．'
    document.querySelectorAll('.box').forEach(b => {
        b.classList.remove(...boxColorClass);
        b.classList.add(boxColorClass[parseInt(Math.random() * 2)]);
    });
}

/**
 * box と隣接する box を変更します
 * 変更後に全ての box が白になってるかを確認します
 * 
 * @param {HTMLElement} box 変更する中心のbox
 */
function changeBox(box) {
    let boxIds = [
        box.id
        , `${Number(box.id[0]) - 1}${box.id[1]}`
        , `${Number(box.id[0]) + 1}${box.id[1]}`
        , `${box.id[0]}${Number(box.id[1]) - 1}`
        , `${box.id[0]}${Number(box.id[1]) + 1}`
    ];
    boxIds.forEach(id => boxColorClass.forEach(v => document.getElementById(id)?.classList.toggle(v)));

    if ([...document.querySelectorAll('.box')].map(b => b.classList.contains(boxColorClass[0])).every(v => v)) {
        document.getElementById('result').innerText = '全部、白！クリア！！！！！'
    } else {
        document.getElementById('result').innerText = 'できるかな．．．'
    }
}
