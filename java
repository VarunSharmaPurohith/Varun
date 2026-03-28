// Add floating flowers
function createFloatingElement() {
    const element = document.createElement('div');
    element.innerHTML = '🌸';
    element.style.position = 'fixed';
    element.style.left = Math.random() * 100 + '%';
    element.style.animation = 'floatUp 8s linear';
    element.style.fontSize = '20px';
    element.style.opacity = '0.3';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '9999';
    document.body.appendChild(element);
    
    setTimeout(() => element.remove(), 8000);
}

// Uncomment to enable floating flowers
// setInterval(createFloatingElement, 10000);
