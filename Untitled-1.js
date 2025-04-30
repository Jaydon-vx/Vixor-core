// Vixor Core Main JavaScript

// ===============================
// Sidebar Toggle Open/Close
// ===============================
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebarBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// ===============================
// Live Clock Display
// ===============================
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ===============================
// Color Theme Dragging
// ===============================
const handle = document.querySelector(".color-handle");
let isDragging = false;

handle.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  let slider = document.getElementById("color-theme-slider");
  let sliderRect = slider.getBoundingClientRect();
  let newLeft = e.clientX - sliderRect.left;
  if (newLeft < 0) newLeft = 0;
  if (newLeft > slider.offsetWidth - handle.offsetWidth) newLeft = slider.offsetWidth - handle.offsetWidth;
  handle.style.left = newLeft + "px";

  const percent = newLeft / (slider.offsetWidth - handle.offsetWidth);
  const hue = (percent * 360) % 360;
  document.body.style.backgroundColor = `hsl(${hue}, 20%, 10%)`;
  document.body.style.color = `hsl(${hue}, 80%, 80%)`;
});

// ===============================
// Rotating Banner Messages
// ===============================
const messages = [
  "🚀 Welcome to Vixor Core!",
  "💸 Would you like to deposit to your account?",
  "🧾 Complete your profile to access more features!",
  "🛰️ New drones launching weekly!",
  "🎁 Invite friends to earn rewards!",
  "🌍 Now supporting 20+ languages!",
  "🔐 Stay safe: enable 2FA in settings!",
  "🛠️ Join our AI Dev Program – coming soon!",
  "💡 Tip: Click 'More' to see all extra features.",
  "💬 VX AI bots now support voice response!"
];
let currentMessage = 1;

function rotateMessage() {
  const banner = document.getElementById("rotatingBanner");
  if (banner) {
    banner.textContent = messages[currentMessage];
    banner.style.opacity = 0;
    setTimeout(() => {
      banner.style.opacity = 5;
    }, 200);
    currentMessage = (currentMessage + 1) % messages.length;
  }
}
setInterval(rotateMessage, 4000);
rotateMessage();

// ===============================
// Product Data
// ===============================
const drones = [
  {
    name: "Vixor-X Drone",
    category: "nexus",
    img: "images/vixor-x-enhanced.jpg",
    description: "A highly capable AI-powered drone with advanced flying capabilities and superior stamina.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Titan Scout",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "Titan AI drone built for terrain mapping and long-range scouting missions.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Aero Ranger",
    category: "SkyBots",
    img: "images/vixor-x-enhanced.jpg",
    description: "AI-powered forest patrol drone with day/night sensors.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Sentinel Eye",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "Real-time surveillance drone with 360° vision and alert AI.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  
  {
    name: "VX Aero Ranger",
    category: "SkyBots",
    img: "images/vixor-x-enhanced.jpg",
    description: "AI-powered forest patrol drone with day/night sensors.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Prime X9",
    category: "nexus",
    img: "images/vixor-x-enhanced.jpg",
    description: "Flagship drone with speech recognition and AI task dispatching.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  
  {
    name: "VX Sentinel Eye",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "Real-time surveillance drone with 360° vision and alert AI.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Prime X9",
    category: "nexus",
    img: "images/vixor-x-enhanced.jpg",
    description: "Flagship drone with speech recognition and AI task dispatching.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  
  {
    name: "VX Sentinel Eye",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "Real-time surveillance drone with 360° vision and alert AI.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Prime X9",
    category: "nexus",
    img: "images/vixor-x-enhanced.jpg",
    description: "Flagship drone with speech recognition and AI task dispatching.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
];

// ===============================
// Display Products
// ===============================
const container = document.getElementById('content');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');

function displayDrones(data) {
  container.innerHTML = '';
  data.forEach((drone, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${drone.img}" alt="${drone.name}" />
      <h3>${drone.name}</h3>
      <p>${drone.description}</p>
      <div class="vote-buttons">
        <button onclick="vote(${index}, 'up')">👍 <span id="like-${index}">${drone.likes}</span></button>
        <button onclick="vote(${index}, 'down')">👎 <span id="dislike-${index}">${drone.dislikes}</span></button>
      </div>
    `;
    container.appendChild(card);
  });
}
displayDrones(drones);

// ===============================
// Search & Filter
// ===============================
function filterDrones() {
  const search = searchInput.value.toLowerCase();
  const category = filterSelect.value;
  const filtered = drones.filter(drone => {
    const matchesCategory = category === 'all' || drone.category === category;
    const matchesSearch = drone.name.toLowerCase().includes(search) || drone.description.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });
  displayDrones(filtered);
}
searchInput.addEventListener('input', filterDrones);
filterSelect.addEventListener('change', filterDrones);

// ===============================
// Voting System
// ===============================
function vote(index, type) {
  if (!drones[index].likes) drones[index].likes = 0;
  if (!drones[index].dislikes) drones[index].dislikes = 0;

  if (type === 'up') {
    drones[index].likes++;
    document.getElementById(`like-${index}`).textContent = drones[index].likes;
    alert(`You liked ${drones[index].name}`);
  } else if (type === 'down') {
    drones[index].dislikes++;
    const reason = prompt(`Why did you dislike ${drones[index].name}?
Optional: Provide feedback to help us improve.`);
    if (reason) drones[index].feedback.push(reason);
    document.getElementById(`dislike-${index}`).textContent = drones[index].dislikes;
    alert(`Thanks for your feedback!`);
  }
}
