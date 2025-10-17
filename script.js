/* =========================================
   JavaScript for DDZ Clothing Website
   Author: Oliveros, Michael Francis Noel M.
   Section: CS - 202
   Date: October 2025
========================================= */

window.onload = function() {
  const message = document.createElement('div');
  message.textContent = "WELCOME TO DDZ!";
  message.style.position = "fixed";
  message.style.top = "10px";
  message.style.left = "50%";
  message.style.transform = "translateX(-50%)";
  message.style.background = "#710c0c";
  message.style.color = "#fff";
  message.style.padding = "10px 20px";
  message.style.borderRadius = "8px";
  message.style.fontWeight = "bold";
  message.style.opacity = "1"; 
  message.style.transition = "opacity 0.8s"; 
  message.style.zIndex = "9999";

  document.body.appendChild(message);


  setTimeout(() => {
    message.style.opacity = "0";
    setTimeout(() => message.remove(), 800);
  }, 1000);
};
