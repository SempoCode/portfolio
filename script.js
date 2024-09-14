// JavaScript for Greeting and Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const texts = [
        'AI Enthusiast',
        'Web Developer',
        'Innovator',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    
    let currentTextIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let typingSpeed = 100; // Typing speed in milliseconds

    // No need to hide the greeting, start the typewriter effect after a delay
    setTimeout(() => {
        type(); // Start the typewriter effect
    }, 2000); // Adjust the delay (in milliseconds) before starting the typewriter effect

    // Typewriter effect function
    function type() {
        if (charIndex < texts[currentTextIndex].length) {
            currentText += texts[currentTextIndex].charAt(charIndex);
            typewriterElement.innerHTML = currentText;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, 2000); // Wait before erasing
        }
    }

    // Erase function
    function erase() {
        if (charIndex >= 0) {
            currentText = currentText.slice(0, charIndex);
            typewriterElement.innerHTML = currentText;
            charIndex--;
            setTimeout(erase, typingSpeed / 2); // Faster erase speed
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop to the next text
            setTimeout(type, typingSpeed);
        }
    }
});
