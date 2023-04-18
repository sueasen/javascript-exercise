const now = new Date();
document.querySelector("#now").textContent = dateFormat(now);

const toWeekEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (6 - now.getDay()));
if (diffDate(now, toWeekEnd) == 0) {
    document.querySelector("#weekend").textContent = 0;
} else {
    const diffTime = diffTimes(now, toWeekEnd);
    document.querySelector("#weekend").textContent = diffDate(now, toWeekEnd) + '日 : ' + diffTime.hour + '時間 : ' + diffTime.minute + '分';
}

const toYearEnd = new Date(now.getFullYear() + 1, 0, 1);
if (diffDate(now, toYearEnd) == 0) {
    document.querySelector("#yearend").textContent = 0;
} else {
    const diffTime = diffTimes(now, toYearEnd);
    document.querySelector("#yearend").textContent = diffDate(now, toYearEnd) + '日 : ' + diffTime.hour + '時間 : ' + diffTime.minute + '分';
}

// 日付フォーマット YYYY/MM/DD(a)HH:MI:SS
function dateFormat(date) {
    const formatOptions = {
        year: "numeric", month: "2-digit", day: "2-digit", weekday: 'short', hour: "2-digit", minute: "2-digit", second: "2-digit"
    }
    return date.toLocaleString("ja-JP", formatOptions);
}
// const weekend = ['日', '月', '火', '水', '木', '金', '土'];
// function dateFormat(date) {
//     return date.toLocaleString("sv-SE").replace(' ', `(${weekend[date.getDay()]})`);
// }
// const weekend = ['日', '月', '火', '水', '木', '金', '土'];
// function dateFormat(date) {
//     return date.getFullYear() + '/'
//         + String(date.getMonth() + 1).padStart(2, '0') + '/'
//         + String(date.getDate()).padStart(2, '0') + '('
//         + weekend[date.getDay()] + ')'
//         + String(date.getHours()).padStart(2, '0') + ':'
//         + String(date.getMinutes()).padStart(2, '0');
// }

// 日時の日数差
function diffDate(from, to) {
    const f = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const t = new Date(to.getFullYear(), to.getMonth(), to.getDate());
    return Math.floor((t.getTime() - f.getTime()) / (1000 * 60 * 60 * 24));
}

// 日時の時分秒差
function diffTimes(from, to) {
    const diffTime = to.getTime() - from.getTime();
    return {
        time: diffTime,
        day: Math.floor(diffTime / (1000 * 60 * 60 * 24)),
        hour: Math.floor(diffTime / (1000 * 60 * 60)),
        minute: Math.floor(diffTime / (1000 * 60)),
        Second: Math.floor(diffTime / 1000)
    }
}
