document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingProgress = document.getElementById("loadingProgress");
  const loadingMessage = document.getElementById("loadingMessage");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const startButton = document.getElementById("startButton");
  const missionAudio = document.getElementById("missionAudio");
  
  let progress = 0;

  const loadingInterval = setInterval(function () {
    progress += 5;
    loadingProgress.style.width = progress + "%";

    if (progress < 35) {
      loadingMessage.textContent = "Preparando la misión";
    } else if (progress < 70) {
      loadingMessage.textContent = "Localizando agentes";
    } else if (progress < 100) {
      loadingMessage.textContent = "Activando sistema K-pop";
    }

    if (progress >= 100) {
      clearInterval(loadingInterval);
      loadingMessage.textContent = "Conexión establecida ✦";

      setTimeout(function () {
        loadingScreen.classList.add("hidden");
        intro.classList.remove("hidden");
      }, 500);
    }
  }, 100);

  startButton.addEventListener("click", () => {
    missionAudio.volume = 0.35;
    missionAudio.play().catch(() => {});
    
    intro.classList.add("hide-scene");

    setTimeout(() => {

        intro.classList.add("hidden");

        main.classList.remove("hidden");

        requestAnimationFrame(() => {
            main.classList.add("show-scene");
        });

    },700);

});

  const eventDate = new Date("2026-08-11T15:00:00-06:00");

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const countdown = document.getElementById("countdown");
  const countdownFinished = document.getElementById("countdownFinished");

  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  function updateCountdown() {
    const remainingTime = eventDate.getTime() - Date.now();

    if (remainingTime <= 0) {
      countdown.classList.add("hidden");
      countdownFinished.classList.remove("hidden");
      countdownFinished.textContent =
        "🎉 ¡La misión ha comenzado! Nos vemos en Empire Salón 🎉";
      return;
    }

    const days = Math.floor(remainingTime / 86400000);
    const hours = Math.floor((remainingTime / 3600000) % 24);
    const minutes = Math.floor((remainingTime / 60000) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    daysElement.textContent = formatNumber(days);
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
