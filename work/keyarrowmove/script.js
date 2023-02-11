
// 枠クラスリスト取得
const getGridClassList = (pos) => document.querySelectorAll('.flex-row')[pos.y]?.children[pos.x]?.classList;

// 最初の枠
const now = {x: 1, y: 1};
const nowGrid = {pos: now, classList: getGridClassList(now)};
nowGrid.classList.add('box-now');

// 矢印キー
const keyArrows = {
    ArrowUp   : {y: -1, x:  0},
    ArrowDown : {y:  1, x:  0},
    ArrowLeft : {y:  0, x: -1},
    ArrowRight: {y:  0, x:  1},
};


// キーイベントで矢印キーの操作
document.querySelector('body').addEventListener('keydown', (e) => {

    console.log(e);
    document.querySelector('.keyret').textContent = e.keyCode + ':' + e.key;

    const keyArrow = keyArrows[e.key];
    if (!keyArrow) return;

    const after = {x: nowGrid.pos.x + keyArrow.x, y: nowGrid.pos.y + keyArrow.y};
    const afterGridClassList = getGridClassList(after);
    if (!afterGridClassList) return;

    nowGrid.classList.remove('box-now');
    nowGrid.pos = after;
    nowGrid.classList = afterGridClassList;
    nowGrid.classList.add('box-now');
});
