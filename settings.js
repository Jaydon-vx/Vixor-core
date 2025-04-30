// Vixor Core Settings Page JavaScript

// ================================
// Theme Toggle (Dark/Light Mode)
// ================================
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  } else {
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#ffffff";
  }
});

// ================================
// Clock Display Toggle
// ================================
const clockToggle = document.getElementById('clockToggle');

clockToggle.addEventListener('change', function () {
  const clock = document.getElementById('clock');
  if (clock) {
    clock.style.display = this.checked ? "block" : "none";
  }
});

// ================================
// Language Switcher
// ================================
const languageSelector = document.getElementById('languageSelector');

languageSelector.addEventListener('change', function () {
  const selectedLang = this.value;
  localStorage.setItem('selectedLanguage', selectedLang);
  alert('Language changed to: ' + selectedLang);
});

// ================================
// Notification Toggle
// ================================
const toggleNotification = document.getElementById('toggleNotification');

toggleNotification.addEventListener('click', function () {
  if (this.textContent.includes("Enable")) {
    this.textContent = "Disable Notifications";
    alert("Notifications Enabled");
  } else {
    this.textContent = "Enable Notifications";
    alert("Notifications Disabled");
  }
});

// ================================
// Change Password
// ================================
const changePasswordBtn = document.getElementById('changePasswordBtn');

changePasswordBtn.addEventListener('click', function () {
  const oldPassword = prompt("Enter your old password:");
  if (oldPassword === "admin123") {
    const newPassword = prompt("Enter new password:");
    alert("Password changed successfully!");
  } else {
    alert("Incorrect old password!");
  }
});

// ================================
// Data Usage
// ================================
const dataUsageBtn = document.getElementById('dataUsageBtn');

dataUsageBtn.addEventListener('click', function () {
  alert("Estimated Data Usage: 12MB/month");
});

// ================================
// Location Access
// ================================
const locationAccessBtn = document.getElementById('locationAccessBtn');

locationAccessBtn.addEventListener('click', function () {
  alert("Location access toggled!");
});

// ================================
// Timezone Selector
// ================================
const timezoneSelector = document.getElementById('timezoneSelector');

timezoneSelector.addEventListener('change', function () {
  alert('Timezone changed to: ' + this.value);
});

// ================================
// Connect Device Button
// ================================
const connectDeviceBtn = document.getElementById('connectDeviceBtn');

connectDeviceBtn.addEventListener('click', function () {
  alert('Connected devices loaded!\nDevice 1: VX Prime Drone\nDevice 2: VX Guardian Bot');
});

// ================================
// Avatar Change
// ================================
const changeAvatarBtn = document.getElementById('changeAvatarBtn');

changeAvatarBtn.addEventListener('click', function () {
  alert('Avatar change option loaded! (Upload / Generate)');
});

// ================================
// Backup Account
// ================================
const backupBtn = document.getElementById('backupBtn');

backupBtn.addEventListener('click', function () {
  alert('Backup started... Saving your account securely.');
});

// ================================
// Restore Account
// ================================
const restoreBtn = document.getElementById('restoreBtn');

restoreBtn.addEventListener('click', function () {
  alert('Restore process started...');
});

// ================================
// Terms and Policies
// ================================
const termsBtn = document.getElementById('termsBtn');

termsBtn.addEventListener('click', function () {
  window.location.href = "terms.html";
});

// ================================
// NEW: Drone Alias Name System
// ================================
function saveAliases() {
  const alias1 = document.getElementById("alias1").value.trim();
  const alias2 = document.getElementById("alias2").value.trim();
  const alias3 = document.getElementById("alias3").value.trim();

  const aliases = [alias1, alias2, alias3].filter(name => name !== "");

  if (aliases.length > 0) {
    document.getElementById("aliasConfirm").textContent =
      `✅ Your drone will now respond to: ${aliases.join(", ")}`;
  } else {
    document.getElementById("aliasConfirm").textContent =
      "⚠️ No name saved. Please enter at least one.";
  }
}

// ================================
// NEW: Drone Status Simulation
// ================================
function updateDroneStatus() {
  const statuses = ["🟢 Active", "🔴 Inactive", "⚠️ Error"];
  const dotClasses = ["green", "red", "orange"];
  const i = Math.floor(Math.random() * 3);

  const statusElement = document.getElementById("droneStatus");
  const timeElement = document.getElementById("lastSync");

  statusElement.innerHTML = statuses[i];
  statusElement.className = "status-dot " + dotClasses[i];
  timeElement.textContent = new Date().toLocaleTimeString();
}

setInterval(updateDroneStatus, 20000);
updateDroneStatus();
