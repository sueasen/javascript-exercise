let count = 5;
let score;
let time;
let intervalId;
let animate;
let isGameStart = false;

document.querySelector('h3').innerText = `${count}回クリックがんばろ`;

document.querySelector('#target').addEventListener('click', () => {
    if (!isGameStart) {
        return;
    } else if (incrementScore() >= count) {
        endGame();
    } else {
        moveTarget();
    }
});

function startGame() {
    document.querySelector('#result').innerText = 'できるかな．．．';
    document.querySelector('#target').innerText = '押して～';
    document.querySelector('#target').classList.remove('end');
    score = 0;
    time = new Date();
    isGameStart = true;
    document.querySelector('#target').style.display = 'block';
    moveTarget();
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        document.querySelector('#result').innerText = `${progressTime()} 秒経過．．．`;
    }, 50);
}

function endGame() {
    clearInterval(intervalId);
    isGameStart = false;
    animate.pause();
    document.querySelector('#result').innerText = `お疲れ！時間は...${progressTime()} 秒`;
    document.querySelector('#target').textContent = `終了！`;
    document.querySelector('#target').classList.add('end');
}

function incrementScore() {
    score++;
    document.querySelector('#target').textContent = `${score} 回目`;
    return score;
}

function progressTime() {
    return (new Date().getTime() - time.getTime()) / 1000;
}

function moveTarget() {
    const maxX = document.querySelector('#clickspace').offsetWidth - document.querySelector('#target').offsetWidth;
    const maxY = document.querySelector('#clickspace').offsetHeight - document.querySelector('#target').offsetHeight;

    animate = document.querySelector('#target').animate(
        {
            left: [`${Math.floor(Math.random() * maxX)}px`, `${Math.floor(Math.random() * maxX)}px`]
            , top: [`${Math.floor(Math.random() * maxY)}px`, `${Math.floor(Math.random() * maxY)}px`]
        }
        , {
            duration: 3000
            , iterations: Infinity
        }
    );
}
