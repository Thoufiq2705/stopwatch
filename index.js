const timerStopWatch = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButtton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startFunction() {
    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerStopWatch.textContent = formateTime(elapsedTime);
    }, 10)

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButtton.disabled = false;
}
function formateTime(elapsedTime) {
    let milliSeconds = Math.floor((elapsedTime % 1000) / 10);
    let seConds = Math.floor(elapsedTime % (1000 *60) / 1000);
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seConds ? (seConds > 9 ? seConds : "0" + seConds) : "00") + "." +
        (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
    )
}

function stopFunction() {
    clearInterval(timeInterval);

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButtton.disabled = false;
}

function resetFunction() {
    clearInterval(timeInterval);

    elapsedTime = 0;
    timerStopWatch.textContent = "00:00:00";

    startButton.disabled = false;
    stopButton.disabled = false;
    resetButtton.disabled = true;
}


startButton.addEventListener("click", startFunction);

stopButton.addEventListener("click", stopFunction);

resetButtton.addEventListener("click", resetFunction);


/**
  
    To find millisecond = anynumber % 1000 / 10;
    To find second = anynumber % 1000 * 60 / 1000;
    To find minutes = anynumber % 1000 * 60 *60  / 1000 * 60;
    To find hours = anynumber / 1000 * 60 * 60;

 **/