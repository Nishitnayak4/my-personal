/* ================= 🔐 PASSWORD + MUSIC ================= */

const SECRET_PASSWORD = "240725";
const unlockBtn = document.getElementById("unlockBtn");
const passInput = document.getElementById("passInput");
const lockScreen = document.getElementById("lockScreen");
const music = document.getElementById("bgMusic");

unlockBtn.addEventListener("click", () => {
  if (passInput.value !== SECRET_PASSWORD) {
    alert("💔 Better luck next time");
    return;
  }

  // ✅ USER GESTURE — AUDIO IS NOW ALLOWED
  music.volume = 0;
  music.play();

  // fade in
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 100);

  lockScreen.remove();
  startExperience();
});

/* ================= ❤️ MAIN EXPERIENCE ================= */

function startExperience() {

  const messages = [
    "Hey Vanshuu my darling … ❤️",
    "You are the most beautiful part of my life ✨",
    "I know I hurt you 😔",
    "And I am truly sorry 💔",
    "Your smile means everything to me 🌸",
    "I never want to lose you 🥺",
    "Please forgive me, Vanshuu 🙏",
    "I love you. Always. ♾️❤️"
  ];

  const text = document.getElementById("loveText");
  let index = 0;

  function showMessage() {
    text.innerText = messages[index];
    index = (index + 1) % messages.length;
  }

  showMessage();
  setInterval(showMessage, 3500);

  startParticles();
}

/* ================= ✨ PARTICLES ================= */

function startParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    s: Math.random() * 0.6 + 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff8fff";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y -= p.s;
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ================= 🌙 DELAYED REDIRECT ================= */

let canRedirect = false;
let redirected = false;

// allow redirect ONLY after 12 seconds
setTimeout(() => {
  canRedirect = true;
}, 12000); // ⏳ change this to 15000 if you want even longer

document.addEventListener("click", () => {
  if (!canRedirect || redirected) return;

  redirected = true;

  document.body.style.transition = "opacity 1.2s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "gallery.html";
  }, 1200);
});
