// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Navbar & Hamburger Menu Variables ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navLinksList = document.querySelectorAll(".nav-links li");
    const navbar = document.querySelector(".navbar");

    // --- 2. Hamburger Menu Toggle ---
    if (hamburger) { // Check if hamburger exists
        hamburger.addEventListener("click", () => {
            // Toggle 'active' class to slide the menu in/out
            navLinks.classList.toggle("active");
            // Simple hamburger icon animation (optional)
            hamburger.classList.toggle("toggle");
        });
    }

    // --- 3. Close Menu When a Link is Clicked ---
    if (navLinksList) { // Check if nav links exist
        navLinksList.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("toggle");
            });
        });
    }

    // --- 4. Sticky Navigation Bar on Scroll ---
    if (navbar) { // Check if navbar exists
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                // Add 'sticky' class when user scrolls down
                navbar.classList.add("sticky");
            } else {
                // Remove 'sticky' class when at the top
                navbar.classList.remove("sticky");
            }
        });
    }

    // --- 5. Gallery Slider ---
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    if (slider) { // Check if the slider exists on the page
        let currentSlide = 0;
        const totalSlides = slides.length;

        // Function to move to a slide
        const goToSlide = (slideIndex) => {
            if (slideIndex < 0) {
                slideIndex = totalSlides - 1;
            } else if (slideIndex >= totalSlides) {
                slideIndex = 0;
            }
            
            // The 'translateX' moves the entire .slider strip left or right
            slider.style.transform = `translateX(-${slideIndex * 100}%)`;
            currentSlide = slideIndex;
        };

        // Event Listeners for buttons
        btnNext.addEventListener("click", () => { // <-- Fixed the typo here
            goToSlide(currentSlide + 1);
        });

        btnPrev.addEventListener("click", () => {
            goToSlide(currentSlide - 1);
        });

        // Initialize slider
        goToSlide(0);
    }
    
}); // <-- This is the only closing bracket for DOMContentLoaded