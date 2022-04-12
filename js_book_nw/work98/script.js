'use strict';

const openWeatherMapApiid = 'a49d8c8147901a87899311e888eaada8';

apiOpenweathermapToday('chiba');
apiOpenweathermapWeek('chiba');

/**
 * 今日の天気を表示する
 */
function apiOpenweathermapToday(cityName) {
    apiOpenweathermap(cityName, 'https://api.openweathermap.org/data/2.5/weather?', logWeatherToday);
}

/**
 * 週刊の天気を表示する
 */
function apiOpenweathermapWeek(cityName) {
    apiOpenweathermap(cityName, 'https://api.openweathermap.org/data/2.5/forecast?', showWeatherWeek);
}

/**
 * 天気を取得して処理する
 */
function apiOpenweathermap(cityName, url, functionJson) {
    let params = {
        appid: openWeatherMapApiid
        , units: 'metric'
        , lang: 'ja'
        , q: cityName
    }
    let requestUrl = url + new URLSearchParams(params);
    apiJson(requestUrl, functionJson);
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
 * 今日の天気をログ出力する
 */
function logWeatherToday(json) {

    console.log(json);

    let weather = json.weather[0].description;
    let city = json.name;
    let temp = json.main.temp;

    console.log("現在の" + city + "の天気は" + weather);
    console.log("気温は" + temp + "度です。");
}

/**
 * 週刊の天気を表示する
 */
function showWeatherWeek(json) {

    console.log(json);

    let work1 = document.getElementById('work1');

    let cityDiv = document.createElement('div')
    cityDiv.style.textAlign = 'center';
    work1.append(cityDiv);
    cityDiv.innerText = json.city.name;

    let table = document.createElement('table');
    table.style.margin = 'auto';
    work1.append(table);

    json.list.forEach(dayInfo => {
        let row = table.insertRow();

        let date = new Date(dayInfo.dt * 1000);
        row.insertCell().innerText = date.getFullYear() + '/'
            + String(date.getMonth() + 1).padStart(2, '0') + '/'
            + String(date.getDate()).padStart(2, '0') + ' '
            + String(date.getHours()).padStart(2, '0') + ':'
            + String(date.getMinutes()).padStart(2, '0');

        let iconWeather = document.createElement('img');
        iconWeather.src = 'http://openweathermap.org/img/w/' + dayInfo.weather[0].icon + '.png';
        row.insertCell().append(iconWeather);
        row.insertCell().innerText = dayInfo.weather[0].description;

        let iconTemp = document.createElement('img');
        iconTemp.src = '../assets/thermometer.png';
        row.insertCell().append(iconTemp);
        row.insertCell().innerText = parseInt(dayInfo.main.temp) + '℃';
    });
}

/**
 * ボタンクリック時の処理です
 * @param {Element} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    document.getElementById('work1').innerHTML = '';
    apiOpenweathermapToday(input1);
    apiOpenweathermapWeek(input1);
}
