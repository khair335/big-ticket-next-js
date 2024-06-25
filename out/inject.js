// inject.js
(() => {
  // Create and style the button
  const button = document.createElement("button");
  button.innerText = "Open Card";
  button.id = "open-card-button";
  document.body.appendChild(button);

  // Add CSS styles
  const style = document.createElement("style");
  style.innerHTML = `
      #open-card-button {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9998;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
      }
      #open-card-button:hover {
        background-color: #0056b3;
      }
    `;
  document.head.appendChild(style);

  // Change button text on hover
  button.addEventListener("mouseenter", () => {
    button.innerText = "Save to Big Ticket";
  });

  // Revert button text when mouse leaves
  button.addEventListener("mouseleave", () => {
    button.innerText = "Open Card";
  });
})();
