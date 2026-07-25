document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingProgress = document.getElementById("loadingProgress");
  const loadingMessage = document.getElementById("loadingMessage");

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const startButton = document.getElementById("startButton");
  const missionPanel = document.querySelector(".mission-panel");

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const countdown = document.getElementById("countdown");
  const countdownFinished = document.getElementById("countdownFinished");

  /* ==========================================
     PANTALLA DE CARGA
  ========================================== */

  let progress = 0;

  const loadingInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 9) + 4;

    if (progress >= 100) {
      progress = 100;
      clearInterval(loadingInterval);

      loadingProgress.style.width = "100%";
      loadingMessage.textContent = "Conexión establecida ✦";

      setTimeout(() => {
        loadingScreen.classList.add("fade-out");

        setTimeout(() => {
          loadingScreen.classList.add("hidden");
          intro.classList.remove("hidden");
          intro.classList.add("reveal-screen");
        }, 600);
      }, 500);

      return;
    }

    loadingProgress.style.width = ${progress}%;

    if (progress < 35) {
      loadingMessage.textContent = "Preparando la misión";
    } else if (progress < 70) {
      loadingMessage.textContent = "Localizando agentes";
    } else {
      loadingMessage.textContent = "Activando sistema K-pop";
    }
  }, 120);


  /* ==========================================
     BOTÓN ACTIVAR MISIÓN
  ========================================== */

  startButton.addEventListener("click", () => {
    startButton.disabled = true;
    intro.classList.add("fade-out");

    setTimeout(() => {
      intro.classList.add("hidden");
      intro.classList.remove("fade-out");

      main.classList.remove("hidden");
      main.classList.add("reveal-screen");

      if (missionPanel) {
        missionPanel.classList.add("panel-enter");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 600);
  });


  /* ==========================================
     CUENTA REGRESIVA
     11 DE AGOSTO DE 2026 · 3:00 PM
  ========================================== */

  const eventDate = new Date("2026-08-11T15:00:00-06:00");

  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  function updateCountdown() {
    const now = new Date();
    const remainingTime = eventDate.getTime() - now.getTime();

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);

      countdown.classList.add("hidden");
      countdownFinished.classList.remove("hidden");
      countdownFinished.textContent =
        "🎉 ¡La misión ha comenzado! Nos vemos en Empire Salón 🎉";

      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (remainingTime / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (remainingTime / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (remainingTime / 1000) % 60
    );

    daysElement.textContent = formatNumber(days);
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);
  }

  updateCountdown();

  const countdownInterval = setInterval(
    updateCountdown,
    1000
  );
});
