// ============================================
// NAVIGATION: Click a link → scroll to section
// ============================================

// 1. Get all the nav links (the <a> tags inside the navbar)
const navLinks = document.querySelectorAll('.navbar nav a');

// 2. Loop through each link and add a click listener
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    // Get the href value, e.g. "#home" or "#contact"
    const href = this.getAttribute('href');

    // Only do our scroll if it's a section link (starts with #)
    if (href && href.startsWith('#')) {
      const sectionId = href.slice(1); // Remove "#" → "home", "contact", etc.
      const section = document.getElementById(sectionId);

      if (section) {
        // Optional: prevent default jump, we scroll ourselves (smooth)
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
