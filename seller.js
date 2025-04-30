// === Seller ID + Status Logic ===
const sellerID = "VX-SLR-000148";
const approved = true;
const sellerLevel = "Silver";
const productsListed = 27;
const totalSales = 134;
const averageRating = 4.6;

document.getElementById("sellerID").textContent = sellerID;
document.getElementById("approvalStatus").textContent = approved ? "✅ Approved" : "❌ Pending Approval";
document.getElementById("sellerLevel").textContent = sellerLevel;
document.getElementById("productCount").textContent = productsListed;
document.getElementById("salesCount").textContent = totalSales;
document.getElementById("ratingScore").textContent = `${averageRating} / 5 ⭐`;

// === File Upload Simulation ===
const submitDocsBtn = document.getElementById("submitDocsBtn");
const uploadStatus = document.getElementById("uploadStatus");

submitDocsBtn.addEventListener("click", () => {
  const idFile = document.getElementById("uploadID").files[0];
  const selfieFile = document.getElementById("uploadSelfie").files[0];

  if (!idFile || !selfieFile) {
    uploadStatus.textContent = "❌ Please upload both ID and Selfie to proceed.";
    uploadStatus.style.color = "red";
    return;
  }

  // Simulate sending to company Gmail
  uploadStatus.textContent = "✅ Documents submitted. Our team will verify and email you shortly.";
  uploadStatus.style.color = "#00ffcc";

  // TODO: Integrate with Gmail API later or internal review system
});

// === Switch to Normal User View ===
document.getElementById("switchToUserBtn").addEventListener("click", () => {
  alert("✅ Switching to Normal User View...");
  window.location.href = "profile.html";
});
