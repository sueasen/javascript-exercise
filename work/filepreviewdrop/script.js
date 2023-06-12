/**
 * @param {HTMLInputElement} obj 入力ファイル
 * @param {String} previewId プレビュー表示DOMのID
 */
function preview(obj, previewId) {
    previewFile(obj.files, previewId);
}

/**
 * @param {File} obj 入力ファイル
 * @param {String} previewId プレビュー表示DOMのID
 */
function previewFile(files, previewId) {
    let fileReader = new FileReader();
    fileReader.onload = (function () {
        document.getElementById(previewId).src = fileReader.result;
        document.getElementById(`${previewId}-file`).innerText = files[0].name;
    });
    fileReader.readAsDataURL(files[0]);
}

/** 
 * @param {Event} event
 */
function dropHandler(event) {

    event.preventDefault();

    if (event.dataTransfer.files.length === 0) return false;
    const files = event.dataTransfer.files;
    const previewId = `preview-${event.currentTarget.id}`;
    previewFile(files, previewId);
}

/** 
 * @param {Event} event
 */
function dragOverHandler(event) {
    event.preventDefault();
}

