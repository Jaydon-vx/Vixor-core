// Vixor Core Reserve Page JavaScript

// ================================
// Reserve Form Handling
// ================================
const reserveForm = document.getElementById('reserveForm');

reserveForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const product = document.getElementById('product').value;
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!product || !fullName || !email || !phone) {
    alert("Please fill in all fields correctly!");
    return;
  }

  // Simulate successful reservation
  alert(`Reservation for ${product} received!\nThank you, ${fullName}! 🚀`);
  
  // Reset form
  reserveForm.reset();
});
