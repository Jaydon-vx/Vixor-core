document.getElementById("sellerRequestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const shopName = document.getElementById("shopName").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const idFile = document.getElementById("uploadID").files[0];
  const selfieFile = document.getElementById("uploadSelfie").files[0];
  const agreed = document.getElementById("agreeTerms").checked;
  const statusMsg = document.getElementById("statusMsg");

  // Clear status message
  statusMsg.textContent = "";
  statusMsg.style.color = "#00ffcc";

  // Validate input
  if (!shopName || !reason || !idFile || !selfieFile || !agreed) {
    statusMsg.textContent = "❌ Please fill all fields and accept the terms before submitting.";
    statusMsg.style.color = "red";
    return;
  }

  // Simulate sending to company Gmail
  statusMsg.textContent = "✅ Request sent successfully! Your data will be reviewed by Vixor Core team.";

  // OPTIONAL: Log to console for now (simulate Gmail integration)
  console.log("=== Seller Request Sent ===");
  console.log("To: jesutofunmiisaac09@gmail.com");
  console.log("From: " + email);
  console.log("Shop Name:", shopName);
  console.log("Reason:", reason);
  console.log("Attached Files:", idFile.name, selfieFile.name);
  console.log("===========================");

  // Disable form
  this.querySelector("button[type='submit']").disabled = true;
  this.querySelector("button[type='submit']").textContent = "Submitted";
});
