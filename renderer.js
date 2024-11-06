const body = document.body;
const container = document.createElement("div");

const closeImg = document.createElement("img");
closeImg.src = "assets/images/close.png"; 
closeImg.alt = "Close";
closeImg.id = "closeBtn";
closeImg.style.padding = "10px"; 
closeImg.style.cursor = "pointer"; 

container.appendChild(closeImg);
body.appendChild(container);

closeImg.addEventListener("click", () => {
    window.electron.closeApp(); 
});
