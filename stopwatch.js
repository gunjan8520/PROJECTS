let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startPause() {
  const startPauseButton = document.getElementById("startPause");

  if (!isRunning) {
    startTime = new Date().getTime() - (lapCount === 1 ? 0 : lapCount - 1) * timer;
    startPauseButton.textContent = "Pause";
    timer = setInterval(updateDisplay, 1000);
  } else {
    startPauseButton.textContent = "Resume";
    clearInterval(timer);
  }

  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  lapCount = 1;
  document.getElementById("startPause").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = new Date().getTime() - startTime;
    const formattedTime = formatTime(lapTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${formattedTime}`;
    document.getElementById("laps").appendChild(lapItem);
    lapCount++;
  }
}

function updateDisplay() {
  const currentTime = new Date().getTime() - startTime;
  const formattedTime = formatTime(currentTime);
  document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Reset on page load to handle refresh scenarios
reset();