// public/inject.js
function createButton() {
  const button = document.createElement("button");
  button.innerText = "Open Card";
  button.id = "myExtensionButton";
  button.style.position = "fixed";
  button.style.top = "10px";
  button.style.right = "10px";
  button.style.zIndex = "9999";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.border = "none";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  button.onclick = () => {
    const card = document.createElement("div");
    card.style.position = "fixed";
    card.style.top = "50px";
    card.style.right = "10px";
    card.style.zIndex = "10000";
    card.style.width = "300px";
    card.style.backgroundColor = "white";
    card.style.border = "1px solid #ddd";
    card.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)";
    card.style.padding = "10px";

    const text = document.createElement("p");
    text.innerText = "This is some static text in the card.";
    card.appendChild(text);

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    closeBtn.onclick = () => card.remove();
    card.appendChild(closeBtn);

    document.body.appendChild(card);
  };

  document.body.appendChild(button);
}

// Check if the button already exists to avoid duplicates
if (!document.getElementById("myExtensionButton")) {
  createButton();
}
