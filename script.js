document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change icon for the toggle button
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
});
