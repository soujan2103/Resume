// Highlight the active navigation link based on the current page
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.parentElement.classList.add("active");
        }
    });
});

// Toggle dark mode
document.querySelector(".mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const modeToggleText = document.querySelector(".mode-toggle");
    modeToggleText.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "🌞";
});

// GSAP Animations for Hero Section
if (document.querySelector(".hero")) {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
}
