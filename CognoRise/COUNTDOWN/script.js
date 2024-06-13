// Set the countdown time (in seconds)
let countdownTime = 3600; // Example: 1 hour

// Get the countdown display element
const countdownElement = document.getElementById('countdown');

// Update the countdown every second
const interval = setInterval(() => {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    // Display the countdown time
    countdownElement.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Check if the countdown is finished
    if (countdownTime <= 0) {
        clearInterval(interval);
        alert('Countdown finished!');
    }

    // Decrease the countdown time by 1 second
    countdownTime--;
}, 1000);
