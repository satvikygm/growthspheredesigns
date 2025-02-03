document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('.nav-links a[href="index.html"]'); // Target Home link

    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll to the top
            });
        });
    }
});

// Ensure the script runs after the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    const skillsContent = document.querySelector(".skills-content");
    const toggleButton = document.querySelector(".expand-btn");

    // Ensure both elements exist before adding event listener
    if (toggleButton && skillsContent) {
        toggleButton.addEventListener("click", function () {
            // Toggle visibility
            if (skillsContent.style.display === "block") {
                skillsContent.style.display = "none";
                toggleButton.innerHTML = "Read More ▼"; // Change text back
            } else {
                skillsContent.style.display = "block";
                toggleButton.innerHTML = "Read Less ▲"; // Change text when expanded
            }
        });
    }
	function toggleSkills() {
    const skillsContent = document.querySelector('.skills-content');
    const button = document.querySelector('.expand-btn');
    
    if (skillsContent.classList.contains('hidden')) {
        skillsContent.classList.remove('hidden');
        button.textContent = "Read Less ▲";
    } else {
        skillsContent.classList.add('hidden');
        button.textContent = "Read More ▼";
    }
}

});
