// renderer.js
const body = document.body;
const container = document.createElement("div");

// Create the close button image
const closeImg = document.createElement("img");
closeImg.src = "assets/images/close.png"; // Use your close image here
closeImg.alt = "Close";
closeImg.id = "closeBtn"; // Set the ID to match the event listener
closeImg.style.padding = "10px"; // Add padding
closeImg.style.cursor = "pointer"; // Change cursor on hover

// Append the close image to the container
container.appendChild(closeImg);
body.appendChild(container);

// Add click event listener to close the window
closeImg.addEventListener("click", () => {
    window.electron.closeApp(); // Call the exposed closeApp method from preload
});
