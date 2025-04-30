// === CONFIGURATION (Set accountType manually or from DB) ===
// You can later auto-load from backend or database.
const isSeller = true;  // Set to true for seller account, false for user
const userID = isSeller ? "VX-SLR-990012" : "VX-USER-20251234";
const username = "Jaydon-VX";
const phone = "+2347012345678";
const email = "jaydonvx@example.com";

// === DOM Population ===
document.getElementById("userID").textContent = userID;
document.getElementById("username").value = username;
document.getElementById("phone").value = phone;
document.getElementById("email").value = email;

document.getElementById("accountTag").textContent = isSeller ? "Official Seller" : "Standard User";
document.getElementById("accountLevel").textContent = isSeller ? "Silver 🥈" : "N/A";

// === PROFILE PROGRESS BAR CALCULATION ===
let progress = 0;
if (username) progress += 25;
if (phone) progress += 25;
if (email) progress += 25;
if (isSeller) progress += 25;

document.getElementById("progressFill").style.width = `${progress}%`;
document.getElementById("progressPercent").textContent = `${progress}%`;

// === SECURE EDIT SYSTEM ===
let wrongAttempts = 0;

document.getElementById("editProfileBtn").addEventListener("click", () => {
  const password = prompt("Enter your account password to unlock:");

  if (!password) return;

  if (password === "admin123") {
    document.getElementById("username").removeAttribute("readonly");
    document.getElementById("phone").removeAttribute("readonly");
    alert("✅ You may now edit your Username or Phone Number.");
    wrongAttempts = 0;
  } else {
    wrongAttempts++;
    if (wrongAttempts === 4) {
      alert("❌ Too many wrong attempts. Try again in 1 hour.");
    } else if (wrongAttempts > 4) {
      alert("⛔️ Try again in 2 hours.");
    } else {
      alert("❌ Incorrect password.");
    }
  }
});

// === Change Avatar (Simulated) ===
document.getElementById("changeAvatarBtn").addEventListener("click", () => {
  alert("Upload / generate avatar coming soon.");
});
