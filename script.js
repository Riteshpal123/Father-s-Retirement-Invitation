
const countdown = document.getElementById('countdown');
const eventDate = new Date("2025-08-3T18:00:00+05:30").getTime();


setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "🎊 It's time to celebrate!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hrs}h ${mins}m ${secs}s left`;
}, 1000);
