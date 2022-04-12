'use strict';

let apiJsons = [apiCat, apiFox, apiPerson];
apiJsons[parseInt(Math.random() * 10) % 3]();
let intervalId = setInterval(() => {
    apiJsons[parseInt(Math.random() * 10) % 3]();
    if (document.getElementById('input1').value) {
        clearInterval(intervalId);
    }
}, 10000);

/**
 * ネコ情報取得 api を実行して json を処理します
 */
function apiCat() {
    apiJson('https://aws.random.cat/meow', (json) => {
        console.log(json);
        appendCreateImg(document.getElementById('work1'), 300, json.file);
    });
}

/**
 * キツネ情報取得 api を実行して json を処理します
 */
function apiFox() {
    apiJson('https://randomfox.ca/floof/', (json) => {
        console.log(json);
        appendCreateImg(document.getElementById('work1'), 300, json.image);
    });
}

/**
 * 人情報取得 api を実行して json を処理します
 */
function apiPerson() {
    apiJson('https://randomuser.me/api', (json) => {
        console.log(json);
        appendCreateImg(document.getElementById('work1'), 300, json.results[0].picture.large);
    });
}

/**
 * api を実行して json を処理します
 * @param {String} requestUrl リクエストURL
 * @param {function}} functionJson json に対する処理
 * @param {Array} options リクエストURL実行時のオプション
 */
async function apiJson(requestUrl, functionJson, options = {}) {
    fetch(requestUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ':' + response.statusText);
            }
            return response.json();
        })
        .then(json => functionJson(json))
        .catch((error) => {
            console.log(error);
            alert(error)
        });
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
        apiCat();
    } else if (input1 == 'fox') {
        apiFox();
    } else if (input1 == 'person') {
        apiPerson();
    } else {
        alert('cat か fox か person を入力してください');
    }
}

