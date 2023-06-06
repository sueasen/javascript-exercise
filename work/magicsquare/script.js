const magicsqs = {};

document.querySelectorAll(".box").forEach((element) => {
    element.addEventListener("drop", onDrop);
    element.addEventListener("dragover", onDragover);
    element.addEventListener("dragenter", onDragenter);
    element.addEventListener("dragleave", onDragleave);
    magicsqs[element.id] = { box: element, number: undefined };
});

document.querySelectorAll('.number[id^="num"]').forEach((element) => {
    element.draggable = true;
    element.addEventListener("dragstart", onDragStart);
});

document.querySelector("#reset").addEventListener("click", reset);

reset();

/**
 * リセット処理
 */
function reset() {
    document.querySelectorAll(`.anser[id^="ans"]`).forEach((element, i) => element.innerText = 0);
    document.querySelectorAll('.box').forEach(element => {
        element.classList.remove('allmatch');
        element.innerText = '';
        magicsqs[element.id].number = undefined;
    });
    document.querySelectorAll('.number.selected').forEach(element => element.classList.remove('selected'));
}

/**
 * ドラッグ処理
 * @param {Event} event 
 */
function onDragStart(event) {
    if (event.currentTarget.classList.contains('selected')) event.preventDefault();
    event.dataTransfer.setData("text", event.currentTarget.innerText);
}

/**
 * ドロップ処理
 * @param {Event} event 
 */
function onDrop(event) {
    event.preventDefault();
    magicsqs[event.currentTarget.id].number?.classList.remove("selected");
    event.currentTarget.classList.remove("dragging");
    if (event.dataTransfer.getData("text") == '×') {
        magicsqs[event.currentTarget.id].number = undefined;
        event.currentTarget.innerText = '';
    } else {
        magicsqs[event.currentTarget.id].number = document.querySelector(`#num${event.dataTransfer.getData("text")}`);
        magicsqs[event.currentTarget.id].number.classList.add("selected");
        event.currentTarget.innerText = magicsqs[event.currentTarget.id].number.innerText;
    }
    isSame()
}

/**
 * 操作が要素上へ進入
 * @param {Event} event 
 */
function onDragenter(event) {
    event.currentTarget.classList.toggle("dragging");
}

/**
 * 操作が要素上を通過中
 * @param {Event} event 
 */
function onDragover(event) {
    event.preventDefault();
}

/**
 * 操作が要素上から退出
 * @param {Event} event 
 */
function onDragleave(event) {
    event.currentTarget.classList.toggle("dragging");
}

/**
 * 合計計算
 */
function sum() {
    let boxs = [
        [...document.querySelectorAll('.box[id$="0"]')]
        , [...document.querySelectorAll('.box[id$="1"]')]
        , [...document.querySelectorAll('.box[id$="2"]')]
        , [...Array(3).keys()].map(i => document.querySelector(`.box[id="${(2 - i) + '' + i}"]`))
        , [...document.querySelectorAll('.box[id^="0"]')]
        , [...document.querySelectorAll('.box[id^="1"]')]
        , [...document.querySelectorAll('.box[id^="2"]')]
        , [...Array(3).keys()].map(i => document.querySelector(`.box[id="${''.padEnd(2, i)}"]`))
    ];
    let valuse = boxs.map((bs) => bs.map(b => Number(b.innerText)).reduce((s, v) => s += v));
    document.querySelectorAll(`.anser[id^="ans"]`).forEach((element, i) => element.innerText = valuse[i]);

    if (valuse.every((v) => v === valuse[0] && valuse[0] !== "0")) {
        document.querySelectorAll('.box').forEach(element => element.classList.add('allmatch'));
    }
}

function isSame() {
    sum();
}
