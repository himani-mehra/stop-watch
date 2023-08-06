const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timerDisplay");

let startInterval, intervalVal , running = false, elapsedTime=0;

function formatTime(timeInMilliseconds) {
  const hour = Math.floor(timeInMilliseconds / 60000).toString().padStart(2, '0');
  const minutes = Math.floor(timeInMilliseconds / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((timeInMilliseconds % 60000) / 1000).toString().padStart(2, '0');
  const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10).toString().padStart(2, '0');
  return `${hour}:${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
  const currentTime  = Date.now();
  const changeInTime =  currentTime - startTime + elapsedTime;
  timerDisplay.textContent =  formatTime(changeInTime);
}

startBtn.addEventListener('click', function() {
  if(!running) {
    startTime = Date.now() - elapsedTime
    intervalId = setInterval(updateDisplay, 10);
    running = true;
  }
})
stopBtn.addEventListener('click', function () {
  if (running) {
    clearInterval(intervalId);
    elapsedTime = Date.now() - startTime;
    running = false;
  }
});

resetBtn.addEventListener('click', function () {
  clearInterval(intervalId);
  timerDisplay.textContent = '00:00:00';
  elapsedTime = 0;
  running = false;
});