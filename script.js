document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const terminal = document.getElementById('terminal');
    const flashingText = document.getElementById('flashing-text');
    const nowLoadingText = document.getElementById('now-loading-text');
    const filler = document.querySelector('.filler');
    const barEnd = document.querySelector('.bar-end');
    let progress = 0;
    let loadingFinished = false;

function updateLoadingBar() {
    progress += 1;

    if (progress > 100) {
        clearInterval(loadingInterval);
        flashingText.classList.remove('hidden'); // Show the flashing text
        nowLoadingText.classList.add('hidden'); // Hide the "Now Loading:" text
        loadingFinished = true; // Set loadingFinished to true
        splashScreen.addEventListener('click', hideSplashScreen); // Listen for click event to hide splash screen
        return;
      }

    const barWidth = Math.floor(progress * 1); // Adjust this value to change the number of '*' characters.
    filler.textContent = '*'.repeat(barWidth);
    barEnd.style.marginLeft = `${100 - progress}%`;
  }

const loadingInterval = setInterval(updateLoadingBar, 100); // Adjust the 100 value to change the speed of the loading bar.

        console.log('Script loaded');
        // Rest of your code...
        
        // Function to hide the splash screen
        const hideSplashScreen = () => {
            splashScreen.style.display = 'none';
            splashScreen.removeEventListener('click', hideSplashScreen);
            terminal.focus();
        };
    
        // Hide the splash screen when clicked
        splashScreen.addEventListener('click', hideSplashScreen);
    
    
        terminal.addEventListener('keydown', (e) => {
        // Remove initial text when the user starts typing
        if (!terminal.classList.contains('user-started-typing')) {
            terminal.textContent = '';
            terminal.classList.add('user-started-typing');
        }
    
        // Check for Ctrl + C key combination
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            e.stopPropagation();
            terminal.textContent = '';
            terminal.focus();
            // Move caret to the beginning
            const range = document.createRange();
            const selection = window.getSelection();
            range.setStart(terminal.firstChild, 0);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }
    
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = terminal.textContent.trim().split('\n').pop();
            processCommand(input);
        }
    });
     // Set focus to the terminal after hiding the splash screen
     splashScreen.addEventListener('transitionend', () => {
        terminal.focus();

    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 8500);
});
    });
    
    
       
    
    terminal.addEventListener('mousedown', (e) => {
        const terminalRect = terminal.getBoundingClientRect();
        const clickPosition = e.clientX - terminalRect.left;
    
        if (clickPosition > terminalRect.width / 2) {
            setCaretToTopLeft();
        }
    });
    
            
            terminal.addEventListener('keydown', (e) => {
        // Check for Ctrl + L key combination
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            e.stopPropagation(); // Add this line
            terminal.textContent = '';
            terminal.focus();
            // Move caret to the beginning
            const range = document.createRange();
            const selection = window.getSelection();
            range.setStart(terminal.firstChild, 0);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }
    
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = terminal.textContent.trim().split('\n').pop();
            processCommand(input);
        }
    });
    
    
    let currentDirectory = '/';
    
    function setCaretToTopLeft() {
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(terminal.firstChild, 0);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    
    function processCommand(input) {
        // ...
        // (The rest of the processCommand function)
        // ...
    
        terminal.textContent += `\n${output}\n`;
        preserveCaretPosition();
    }
    
    function processCommand(input) {
        const command = input.split(' ')[0];
        let output = '';
    
        switch (command) {
            case 'help':
                output = 'Available commands: help, echo, clear, pwd, ls, cd';
                break;
            case 'echo':
                output = input.substring(input.indexOf(' ') + 1);
                break;
        terminal.textContent = '';
        terminal.focus();
        // Move caret to the beginning
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(terminal.firstChild, 0);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        return;
                return;
            case 'pwd':
                output = currentDirectory;
                break;
            case 'ls':
                output = Object.keys(fileSystem[currentDirectory]).join(' ');
                break;
            case 'cd':
                const targetDirectory = input.split(' ')[1];
                if (fileSystem.hasOwnProperty(targetDirectory)) {
                    currentDirectory = targetDirectory;
                } else {
                    output = `cd: ${targetDirectory}: No such directory`;
                }
                break;
            default:
                output = `Unknown command: ${command}`;
        }
    
        terminal.textContent += `\n${output}\n`;
        terminal.focus();
    }
    
    terminal.focus();
    
// Other functions and event listeners
// script.js
const filler = document.querySelector('.filler');
let progress = 0;

function updateLoadingBar() {
    progress += 1;

    if (progress > 100) {
        clearInterval(loadingInterval);
        return;
    }

    const barWidth = Math.floor(progress * 1); // Adjust this value to change the number of '*' characters.
    filler.textContent = '*'.repeat(barWidth);
    filler.style.width = `${progress}%`;
}

const loadingInterval = setInterval(updateLoadingBar, 100); // Adjust the 100 value to change the speed of the loading bar.