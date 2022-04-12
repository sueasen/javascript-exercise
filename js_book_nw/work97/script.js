'use strict';

function apiCat() {
    apiJson('https://aws.random.cat/meow', (json) => {
        console.log(json);

        let work1 = document.getElementById('work1');
        work1.innerHTML = '';

        let img = document.createElement('img')
        img.src = json.file;
        work1.append(img);
    });
}
function apiFox() {
    apiJson('https://randomfox.ca/floof/', (json) => {
        console.log(json);

        let work1 = document.getElementById('work1');
        work1.innerHTML = '';

        let img = document.createElement('img')
        img.src = json.image;
        work1.append(img);
    });
}
function apiPerson() {
    apiJson('https://randomuser.me/api', (json) => {
        console.log(json);

        let work1 = document.getElementById('work1');
        work1.innerHTML = '';

        let img = document.createElement('img')
        img.src = json.results[0].picture.large;
        work1.append(img);
    });
}

/**
 * api を実行して json を処理します
 */
function apiJson(requestUrl, functionJson, options = {}) {
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
