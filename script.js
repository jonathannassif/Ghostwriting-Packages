// Package selection functionality
let selectedPackage = null;

function selectPackage(packageElement, packageName) {
    // Remove selected class from all packages
    document.querySelectorAll('.pack').forEach(pack => {
        pack.classList.remove('selected');
    });

    // Add selected class to clicked package
    packageElement.classList.add('selected');

    // Store selected package
    selectedPackage = packageName;

    // Update CTA button text
    updateCTAButton();
}

function updateCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (selectedPackage) {
        ctaButton.innerHTML = `🔥 DM Me on X for ${selectedPackage} Pack`;
    } else {
        ctaButton.innerHTML = '🔥 DM Me on X to Start Today';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to all packages
    document.querySelectorAll('.pack').forEach((pack, index) => {
        const packageNames = ['Starter', 'Growth', 'Authority'];
        pack.addEventListener('click', function() {
            selectPackage(this, packageNames[index]);
        });
    });
});
