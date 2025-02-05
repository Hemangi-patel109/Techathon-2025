// timer.js

let countdownTime; // Variable to hold the countdown time in seconds
let interval; // Variable to hold the interval ID

// Function to start the countdown
function startCountdown() {
    const timerDisplay = document.getElementById('timer');
    const timeInput = document.getElementById('timeInput').value;

    // Convert user input to seconds
    countdownTime = timeInput * 60; // Convert minutes to seconds

    // Clear any existing interval
    clearInterval(interval);

    // Start the countdown
    interval = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;

        // Format the time as MM:SS
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Decrease the countdown time
        countdownTime--;

        // Check if the countdown has finished
        if (countdownTime < 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Time's up!";
            // Call the function to handle what happens when the timer ends
            onTimerEnd();
        }
    }, 1000);
}

// Function to handle what happens when the timer ends
function onTimerEnd() {
    // Add your logic here (e.g., notify the user, cancel the order, etc.)
    alert("The time for booking food has expired. Please take action!");
}

// Event listener for the start button
document.getElementById('startButton').addEventListener('click', startCountdown);


document.getElementById('startButton').addEventListener('click', function() {
    // Get the input value in minutes
    const timeInput = document.getElementById('timeInput').value;

    // Convert minutes to "MM:SS" format
    if (timeInput && timeInput > 0) {
        const minutes = Math.floor(timeInput);
        const seconds = 0;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Update the timer in Code1
        document.getElementById('timer').textContent = formattedTime;
    } else {
        alert('Please enter a valid number of minutes.');
    }
});