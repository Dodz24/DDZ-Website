// =========================================
// DDZ Clothing - Homepage Script
// Author: Oliveros, Michael Francis Noel M.
// Section: CS - 202
// Date: October 2025
// =========================================

// Show a simple welcome message when user visits the site
window.addEventListener("load", () => {
  alert("Welcome to DDZ Clothing! Elevate your streetwear style with us.");
});

// (Optional) Highlight the current page in the nav
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#710c0c"; 
  }
});
