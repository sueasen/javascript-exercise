'use strict';

let apiJsons = [apiCatAsync, apiFoxAsync, apiPersonAsync];
apiJsons[parseInt(Math.random() * 10) % 3]();
let intervalId = setInterval(() => {
    console.log("execute apiJsons !");
    apiJsons[parseInt(Math.random() * 10) % 3]();
    if (document.getElementById('input1').value) {
        clearInterval(intervalId);
        console.log("clear apiJsons !");
    }
}, 10000);

/**
 * ネコ情報取得 api を実行して json を処理します
 */
async function apiCatAsync() {
    let json = await apiJsonAsync('https://aws.random.cat/meow');
    console.log(json);
    appendCreateImg(document.getElementById('work1'), 300, json.file);
}

/**
 * キツネ情報取得 api を実行して json を処理します
 */
async function apiFoxAsync() {
    let json = await apiJsonAsync('https://randomfox.ca/floof/');
    console.log(json);
    appendCreateImg(document.getElementById('work1'), 300, json.image);
}

/**
 * 人情報取得 api を実行して json を処理します
 */
async function apiPersonAsync() {
    let json = await apiJsonAsync('https://randomuser.me/api');
    console.log(json);
    appendCreateImg(document.getElementById('work1'), 300, json.results[0].picture.large);
}

/**
 * api を実行して json を処理します
 * @param {String} requestUrl リクエストURL
 * @param {Array} options リクエストURL実行時のオプション
 * @returns json結果
 */
async function apiJsonAsync(requestUrl, options = {}) {
    const json = await fetch(requestUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ':' + response.statusText);
            }
            return response.json();
        })
        .catch((error) => {
            console.log(error);
            alert(error)
        });
    return json;
}

/**
 * img を作成します
 * @param {Number} height 高さ
 * @param {String} src イメージ
 * @returns img
 */
function createImg(height, src) {
    let img = document.createElement('img')
    img.height = height;
    img.src = src;
    return img;
}

/**
 * img を作成して element に追加します
 * @param {Element} element img を追加するDOM
 * @param {Number} width 幅
 * @param {String} src イメージ
 */
function appendCreateImg(element, width, src) {
    element.innerHTML = '';
    element.append(createImg(width, src));
}

/**
 * ボタンクリック時の処理です
 * @param {Element} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    document.getElementById('work1').innerHTML = '';
    if (input1 == 'cat') {
        apiCatAsync();
    } else if (input1 == 'fox') {
        apiFoxAsync();
    } else if (input1 == 'person') {
        apiPersonAsync();
    } else {
        alert('cat か fox か person を入力してください');
    }
}

