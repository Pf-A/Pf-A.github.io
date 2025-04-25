function loadedLists() {
    console.log('Loaded Lists.js');
}

function toggleVisibility(activeSection) {
    const sections = ['benefits', 'drawbacks', 'FAQs'];
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (section === activeSection) {
            element.style.display = 'block'; // Show active section
        } else {
            element.style.display = 'none'; // Hide inactive sections
        }
    });
}

function showBenefits() {
    toggleVisibility('benefits');
}

function showDrawbacks() {
    toggleVisibility('drawbacks');
}

function showFAQs() {
    toggleVisibility('FAQs');
}
