const pomodoroTime = document.querySelector('#pomodoro-time');
const btnStart = document.querySelector('#start');
const btnReset = document.querySelector('#reset');


let minutes = pomodoroTime.textContent.split(':')[0];
let seconds = pomodoroTime.textContent.split(':')[1];
let timerInterval;

function format(val) {
    if (val < 10) {
        return `0${val}`
    }
    return val
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes--;
    }

    pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`
}



function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes--;
        }

        pomodoroTime.textContent = `${format(minutes)}:${format(seconds)}`
    }, 1000);
}

btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', function() {
    clearInterval(timerInterval);
    pomodoroTime.textContent = `25:00`;
});