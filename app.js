
const inputElement = document.querySelector(".input");
const typedTextElement = document.querySelector(".typed-text");
const pipeElement = document.querySelector(".pipe");

inputElement.addEventListener("click", () => {
  togglePipeVisibility();
  window.addEventListener("keydown", handleKeyPress);
});

function handleKeyPress(event) {
  if (event.key === "Enter") {
    // Handle the Enter key press here.
  } else if (event.key === "Backspace") {
    typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);
  } else if (event.key.length === 1) {
    typedTextElement.textContent += event.key;
  }
}

function togglePipeVisibility() {
  pipeElement.classList.toggle("pipe");
  setTimeout(togglePipeVisibility, 500);
}