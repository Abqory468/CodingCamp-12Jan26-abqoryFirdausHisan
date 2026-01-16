// Alert nama user
let userName = prompt("Masukkan nama kamu:");
if (!userName) userName = "Guest";

document.getElementById("welcomeText").textContent =
  `Welcome ${userName}!`;

// Hamburger menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Handle submit form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  document.getElementById("resultName").textContent = name;
  document.getElementById("resultEmail").textContent = email;
  document.getElementById("resultPhone").textContent = phone;
  document.getElementById("resultMessage").textContent = message;

  document.getElementById("contactForm").reset();
});
