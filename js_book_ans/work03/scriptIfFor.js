'use strict';

/***********************************************************************************************************************************************/
/** 振返 DOM追加 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加します
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // input1 を表示するDOMを生成
    let dom = createDivElement('scriptIfFor 実行!!' + input1);
    // work1 の DOM に input1 を表示する DOM を追加
    document.getElementById('work1').append(dom);
}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {HTMLElement} DOM属性(div)
 */
function createDivElement(text) {
    // div の DOM を生成
    let dom = document.createElement('div');
    // text を設定
    dom.innerText = text;
    // 生成した DOM を返す
    return dom;
}

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加で表示し
 * 追加する DOM の色, 文字サイズを変えてみよう
 * 
 * - DOM の色, 文字サイズを変える方法（dom は getElementById や createElement の取得/作った dom）
 * dom.style.backgroundColor = 'red' // red は black/blue など英語で指定
 * dom.style.fontSize = '20px' // 8px は 100px など数字に px つけて指定
 */
function onClickBtn2(element) {
    let input1 = document.getElementById('input1').value;
    let dom = createDivElement(input1);
    document.getElementById('work1').append(dom);
    dom.style.backgroundColor = 'red';
    dom.style.fontSize = '20px';
}

/***********************************************************************************************************************************************/
/** if文 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に input1 に入力した値が1の時に work1 に追加します
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn11(element) {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // == : 文字列と数字は気にしない
    if (input1 == 1) {
        document.getElementById('work1').append(createDivElement(' == 数字と比較しても true : ' + input1));
    }
    // === : 文字列と数字で結果が違う
    if (input1 === 1) {
        document.getElementById('work1').append(createDivElement(' === 数字と比較は false : ' + input1));
    } else if (input1 === '1') {
        document.getElementById('work1').append(createDivElement(' === 文字と比較は true : ' + input1));
    }
}

/**
 * ボタンクリック時に以下の条件で work1 に dom を追加する
 * - 入力値 が == で 2 と比較して true のとき, 入力値を表示する
 * - 入力値 が === で 5 と比較して true のとき, 入力値を表示しフォントサイズを 50 にする
 */
function onClickBtn12(element) {
    let input1 = document.getElementById('input1').value;
    if (input1 == 2) {
        let dom = createDivElement(input1);
        document.getElementById('work1').append(dom);
    } else if (input1 === '5') {
        let dom = createDivElement(input1);
        document.getElementById('work1').append(dom);
        dom.style.fontSize = '50px';
    }
}

/**
 * ボタンクリック時に以下の条件で work1 に DOM を追加する
 * - 入力値 が -20以上かつ20以下の時, 入力値を表示
 * - 入力値 が -20未満または20より大きい時, 入力値を表示しフォントサイズを入力値の絶対値にする
 * - 入力値 が 上記以外のとき, 入力値を表示し背景色をグレーにする
 * ※ 絶対値は Math.abs(値)
 */
function onClickBtn13(element) {
    let input1 = document.getElementById('input1').value;
    if (input1 >= -20 && input1 <= 20) {
        let dom = createDivElement(input1);
        document.getElementById('work1').append(dom);
    } else if (input1 < -20 || input1 > 20) {
        let dom = createDivElement(input1);
        document.getElementById('work1').append(dom);
        dom.style.fontSize = Math.abs(input1) + 'px';
    } else {
        let dom = createDivElement(input1);
        document.getElementById('work1').append(dom);
        dom.style.backgroundColor = 'gray';
    }
}

/***********************************************************************************************************************************************/
/** for文 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に work1 に10まで for, while 使ってカウントを表示
 */
function onClickBtn21(element) {
    for (let i1 = 1; i1 <= 10; i1++) {
        let divElement = createDivElement('for カウント i1 :' + i1);
        document.getElementById('work1').append(divElement);
    }
    let i2 = 0;
    while (++i2 <= 10) {
        let divElement = createDivElement('while カウント i2 :' + i2);
        document.getElementById('work1').append(divElement);
    }
}

/**
 * ボタンクリック時に work1 に input1 の数字まで for, while 使ってカウントを表示
 */
function onClickBtn22(element) {
    let input1 = document.getElementById('input1').value;
    for (let i1 = 1; i1 <= input1; i1++) {
        let divElement = createDivElement('for カウント i1 :' + i1);
        document.getElementById('work1').append(divElement);
    }
    let i2 = 0;
    while (++i2 <= input1) {
        let divElement = createDivElement('while カウント i2 :' + i2);
        document.getElementById('work1').append(divElement);
    }
}

/**
 * ボタンクリック時に work1 に今日から7日後までの日付を表示
 * 
 * - 日付の生成
 * let date1 = new Date(); // 現在日付
 * let date2 = new Date(年, 月 - 1, 日); // 年月日指定
 */
function onClickBtn23(element) {
    let date = new Date();
    let toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
    while (date <= toDate) {
        let divElement = createDivElement(date.toLocaleDateString());
        document.getElementById('work1').append(divElement);
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }
}

/**
 * ボタンクリック時に work1 に input1 の入力日付 から7日後までの日付を表示
 * 
 * - 文字列 yyyy/mm/dd から日付つくる方法（split(文字列) で 文字列で分割）
 * let dateArray = '2022/5/7'.split('/');
 * let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
 */
function onClickBtn24(element) {
    let input1 = document.getElementById('input1').value;
    let dateArray = input1.split('/');
    let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    let toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
    while (date <= toDate) {
        let divElement = createDivElement(date.toLocaleDateString());
        document.getElementById('work1').append(divElement);
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }
}

/**
 * ボタンクリック時に work1 に input1 の入力日付 から50日後までの日付を
 * 1日ごとにフォントサイズ(初期値10px)を 1px ずつ大きくし背景色を変えながら表示
 * ただし入力日付が yyyy/mm/dd 以外の場合は alert でメッセージ表示して処理を終了する
 * 
 * - 日付を使って色(カラーコード)を適当に生成する方法('#1' の数字部分は適当に変えてOK)
 * '#1'.padEnd(7, parseInt(date.getDate()))
 * 
 * - 入力日付のフォーマットチェック方法  ^：文頭 $：文末 \d：数字(0-9) {1,2}：文字数 [0-2]：対応する値
 * const DAY_FORMAT = new RegExp('^\\d{4}\/(\\d{1}|1[0-2])\/(\\d{1}|[1-2]\\d{1}|3[0-1])$');
 * DAY_FORMAT.test(値); 
 * 
 */
function onClickBtn25(element) {
    const DAY_FORMAT = new RegExp('^\\d{4}\/(\\d{1}|1[0-2])\/(\\d{1}|[1-2]\\d{1}|3[0-1])$')
    let input1 = document.getElementById('input1').value;
    if (!DAY_FORMAT.test(input1)) {
        alert('yyyy/mm/dd の形式で入力してください');
        return;
    }

    let dateArray = input1.split('/');
    let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    let toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 50);
    let fontSize = 10;
    while (date <= toDate) {
        let divElement = createDivElement(date.toLocaleDateString());
        document.getElementById('work1').append(divElement);
        divElement.style.fontSize = fontSize++ + 'px';
        divElement.style.backgroundColor = '#1'.padEnd(7, parseInt(date.getDate()));

        date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }
}

/**
 * onClickBtn25 の処理に加えて偶数の時にフォントサイズと同じ値の角度を変えながら表示
 * 
 * - DOMの角度を変える方法
 * dom.style.transform = 'rotate(45deg)' // 45度傾く
 */
function onClickBtnXX1(element) {
    let input1 = document.getElementById('input1').value;
    const DAY_FORMAT = new RegExp('^\\d{4}\/(\\d{1}|1[0-2]|0[1-9])\/(\\d{1}|0[1-9]|[1-2]\\d{1}|3[0-1])$');
    if (!DAY_FORMAT.test(input1)) {
        alert('yyyy/mm/dd で入力してください　入力：' + input1);
        return;
    }

    let dateArray = input1.split('/');
    let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    let toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 50);
    let fontSize = 10;
    while (date <= toDate) {
        let dom = createDivElement(date.toLocaleDateString());
        document.getElementById('work1').append(dom);
        dom.style.fontSize = fontSize++ + 'px';
        dom.style.backgroundColor = '#6'.padEnd(7, date.getDate());
        if (fontSize % 2 === 0) {
            dom.style.transform = 'rotate(' + fontSize * 7 + 'deg)';
        }
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }
}

/**
 * onClickBtn25 の処理に加えて偶数の時に角度に対してアニメーションを設定
 * 
 * - DOMにアニメーションを設定する方法
 * dom.animate(キーフレーム, タイミングプロパティ)
 * （例）
 * dom.animate(
 *     // 変化させるスタイルを指定(キーフレーム)  スタイル名: [値1, 値2...]  #値1～2～...と徐々に変化
 *     {
 *         transform: ['rotate(0deg)', 'rotate(360deg)']  // 1回転する(0度～360度に変化)
 *     }
 *     // 変化の仕方を指定(タイミングプロパティ)　タイミング名: 値
 *     , {
 *         duration: 5000           // 変化の間隔（ms）
 *         iterations: Infinity     // 繰り返し回数, Infinityは無限
 *     }
 * )
 */
function onClickBtnXX2(element) {
    let input1 = document.getElementById('input1').value;
    const DAY_FORMAT = new RegExp('^\\d{4}\/(\\d{1}|1[0-2]|0[1-9])\/(\\d{1}|0[1-9]|[1-2]\\d{1}|3[0-1])$');
    if (!DAY_FORMAT.test(input1)) {
        alert('yyyy/mm/dd で入力してください　入力：' + input1);
        return;
    }

    let dateArray = input1.split('/');
    let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    let toDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 50);
    let fontSize = 10;
    while (date <= toDate) {
        let dom = createDivElement(date.toLocaleDateString());
        document.getElementById('work1').append(dom);
        dom.style.fontSize = fontSize++ + 'px';
        dom.style.backgroundColor = '#6'.padEnd(7, date.getDate());
        if (fontSize % 2 === 0) {
            dom.style.transform = 'rotate(' + fontSize * 7 + 'deg)';
            dom.animate(
                {
                    transform: ['rotate(0deg)', 'rotate(' + fontSize * 7 + 'deg)', 'rotate(360deg)']
                }
                , {
                    duration: 5000,
                    iterations: Infinity
                }
            );
        }
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }
}
