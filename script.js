const body = document.body;
const colorModeToggle = document.getElementById('colorModeToggle');
const storyDiv = document.getElementById('story'); // Getting the div ID

// Function to set the color mode and save it to localStorage
function setColorMode(mode) {
    body.classList.remove('light-mode', 'dark-mode'); // Remove existing classes
    body.classList.add(mode);  // Add the new mode class
    localStorage.setItem('colorMode', mode); // Save to localStorage
}

// Function to get the saved color mode from localStorage
function getSavedColorMode() {
    return localStorage.getItem('colorMode');
}

// Check for a saved color mode on page load
const savedMode = getSavedColorMode();
if (savedMode) {
    setColorMode(savedMode);
} else {
    // Set default mode if none is saved (e.g. light-mode)
    setColorMode('light-mode'); // Or 'dark-mode' as your default
}

colorModeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        setColorMode('dark-mode');
    } else {
        setColorMode('light-mode');
    }
});

// Fetch the content from 'story.txt'
fetch('story.txt')
    .then(response => response.text())
    .then(storyContent => {
        storyDiv.innerHTML = storyContent; // Setting the content of the story
    })
    .catch(error => console.error('Error fetching story:', error));
