// Vixor Core Deposit Page JavaScript

// Get form element
const depositForm = document.getElementById('depositForm');

// Add submit event
depositForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values from form
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;
  const currency = document.getElementById('currency').value;

  // Simple confirmation alert
  alert(`Thank you, ${fullName}!\n\nYou have successfully submitted a deposit of ${currency} ${amount}.\n\nWe will email you instructions shortly at ${email}.`);

  // Reset form
  depositForm.reset();
});






























































// // Vixor Core Deposit Page JavaScript

// // ================================
// // Deposit Form Handling
// // ================================
// const depositForm = document.getElementById('depositForm');

// depositForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const amount = document.getElementById('amount').value;
//   const currency = document.getElementById('currency').value;

//   if (!amount || amount <= 0) {
//     alert("Please enter a valid deposit amount.");
//     return;
//   }

//   if (!currency) {
//     alert("Please select a currency.");
//     return;
//   }

//   // Simulate successful deposit
//   alert(`Deposit of ${amount} ${currency} received! 🚀\nProcessing into your wallet...`);

//   // ⚡ Later, connect to real payment system or crypto wallet APIs
//   depositForm.reset();
// });
