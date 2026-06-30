fetch('/nav.html')
    .then(response => response.text())
    .then(html => {

        document.getElementById('nav-placeholder').innerHTML = html;
        
        document.dispatchEvent(new Event("navLoaded"));
    });

document.addEventListener("navLoaded", () => {
    const button = document.querySelector(".mobile-nav-button");
    const panel = document.querySelector(".mobile-nav-panel");

    if (!button || !panel) return;

    // Toggle panel when clicking hamburger
    button.addEventListener("click", () => {
        panel.classList.toggle("open");
        button.classList.toggle("open");
    });

    // Close when clicking outside panel
    document.addEventListener("click", (e) => {
        const clickedInsidePanel = panel.contains(e.target);
        const clickedHamburger = button.contains(e.target);

        if (!clickedInsidePanel && !clickedHamburger) {
            panel.classList.remove("open");
            button.classList.remove("open");
        }
    });

    // Close panel when switching back to desktop layout
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            panel.classList.remove("open");
            button.classList.remove("open");
        }
    });
});
