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
// Products Data (You Can Add More)
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
    name: "Vixor-X Security Bot",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "AI-powered security bot equipped with advanced sensors and AI for superior surveillance.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "Vixor-X Home Assistant",
    category: "Nexus",
    img: "images/vixor-x-enhanced.jpg",
    description: "Smart home assistant with speech recognition and task automation capabilities.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "Vixor-X Enhanced Model",
    category: "SkyBots",
    img: "images/vixor-x-enhanced.jpg",
    description: "An upgraded version of the Vixor-X Drone with enhanced flight range and more advanced AI capabilities.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Titan Scout",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "AI-powered titan drone built for terrain mapping and long-range scouting.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  // ✅ New 5 drones added manually below:
  {
    name: "VX Phantom Stealth",
    category: "SkyBots",
    img: "images/vixor-x-enhanced.jpg",
    description: "Stealth drone equipped with ultra-quiet motors and thermal sensors for covert operations.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Nova Flame",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "AI-controlled rescue drone that operates under extreme heat and emergency conditions.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Aero Ranger",
    category: "SkyBots",
    img: "images/vixor-x-enhanced.jpg",
    description: "Long-range survey drone built for forest and wildlife scanning missions.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Sentinel Eye",
    category: "PulseAI",
    img: "images/vixor-x-enhanced.jpg",
    description: "Real-time AI surveillance bot with 360-degree camera and intruder alert system.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  {
    name: "VX Prime X9",
    category: "Nexus",
    img: "images/vixor-x-enhanced.jpg",
    description: "The flagship drone with speech recognition, facial scanning, and task dispatch AI core.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  
  {
    name: "VX Prime X9",
    category: "pulseai",
    img: "images/vixor-x-enhanced.jpg",
    description: "The flagship drone with speech recognition, facial scanning, and task dispatch AI core.",
    likes: 0,
    dislikes: 0,
    feedback: []
  },
  
  {
    name: "VX Prime X9",
    category: "space tech",
    img: "images/vixor-x-enhanced.jpg",
    description: "The flagship drone with speech recognition, facial scanning, and task dispatch AI core.",
    likes: 0,
    dislikes: 0,
    feedback: []
  }
];

// ===============================
// Display Products Dynamically
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

displayDrones(drones); // Always call this after modifying the product list

// ===============================
// Search and Filter Logic
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
// Voting (Thumbs Up / Down + Feedback)
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
Please provide feedback to help us improve.`);
    if (reason) drones[index].feedback.push(reason);
    document.getElementById(`dislike-${index}`).textContent = drones[index].dislikes;
    alert(`Thanks for your feedback!`);
  }
}

// ===============================
// Language Switching Controller
// ⚡ Full deep language switching (20+ Languages) built separately
// ✅ Language Switcher attached to profile/settings later
// ===============================
