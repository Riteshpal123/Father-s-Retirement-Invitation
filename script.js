const countdown = document.getElementById("countdown");
const eventDate = new Date("August 3, 2025 19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft < 0) {
    countdown.textContent = "🎉 The celebration has begun!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.textContent = `${days}d ${hrs}h ${mins}m ${secs}s left`;
}

setInterval(updateCountdown, 1000);
