 function updateTimer() {
      const timerElement = document.getElementById('timer');
      const currentTime = new Date();
      const dateTimeString = currentTime.toLocaleString();
      timerElement.textContent = dateTimeString;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);
