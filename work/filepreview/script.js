/**
 * slide の prev, next を押下時の処理します
 * @param {HTMLInputElement} obj 入力ファイル
 * @param {String} previewId プレビュー表示DOMのID
 */
function preview(obj, previewId) {
    let fileReader = new FileReader();
    fileReader.onload = (function () {
        document.getElementById(previewId).src = fileReader.result;
    });
    fileReader.readAsDataURL(obj.files[0]);
}
