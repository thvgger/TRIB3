// script.js

// Initialize ScrollReveal with default settings
const sr = ScrollReveal({
    origin: 'top',       // Default reveal direction
    distance: '20px',    // Default distance of reveal
    duration: 800,       // Default animation duration in milliseconds
    delay: 200,          // Default delay before the animation starts in milliseconds
    rotate: { x: 0, y: 0, z: 0 }, // Default rotation
    opacity: 0,          // Elements start as fully transparent
    scale: 1,            // Elements start at their normal scale
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Default easing function for smoother animation
    reset: false         // Whether to reset the animation if the element is scrolled out of view
});

// --- Applying Reveals to Elements ---

// Example 1: Basic reveal from the bottom
sr.reveal('.about-section .section-title', {
    origin: 'bottom'
});

sr.reveal('.about-section .section-divider:nth-child(1)', {
    delay: 400,
    origin: 'left',
    distance: '50px'
});

sr.reveal('.about-section .about-text', {
    delay: 600
});

sr.reveal('.about-section .section-divider:nth-child(3)', {
    delay: 800,
    origin: 'right',
    distance: '50px'
});

// Example 2: Reveal from the left with custom distance and delay
sr.reveal('.upcoming-text', {
    origin: 'left',
    distance: '80px',
    delay: 500
});

// Example 3: Reveal the image from the right
sr.reveal('.upcoming-image-wrapper', {
    origin: 'right',
    distance: '80px',
    delay: 700
});

// Example 4: Reveal all elements with the class 'reveal' with default settings
sr.reveal('.reveal');

// Example 5: Reveal elements with specific origins and delays
sr.reveal('.reveal-left', { origin: 'left', distance: '30px', delay: 300 });
sr.reveal('.reveal-right', { origin: 'right', distance: '30px', delay: 500 });

// You can apply reveals to more elements as needed, targeting them with CSS selectors.
// For instance, to reveal all team members with a class 'team-member':
// sr.reveal('.team-member', { interval: 200 }); // 'interval' staggers the animation

// To reveal the contact section title:
// sr.reveal('.contact-section .section-title', { origin: 'bottom', delay: 400 });

// To reveal the footer elements:
sr.reveal('.site-footer .footer-logo', { origin: 'bottom', delay: 400 });
sr.reveal('.site-footer .footer-links-column', { origin: 'bottom', delay: 600, interval: 200 });
sr.reveal('.site-footer .footer-community', { origin: 'bottom', delay: 800 });
sr.reveal('.site-footer .footer-divider', { delay: 1000 });
sr.reveal('.site-footer .footer-bottom', { delay: 1200 });

// --- Explanation of ScrollReveal Options ---

/*
  - origin: The direction from which the element will appear ('top', 'bottom', 'left', 'right'). Default is 'bottom'.
  - distance: The distance the element travels during the reveal animation (e.g., '20px', '5%'). Default is '20px'.
  - duration: The length of the animation in milliseconds. Default is 500.
  - delay: The time in milliseconds to wait before the animation starts when the element comes into view. Default is 0.
  - rotate: Allows you to rotate the element during the reveal. You can specify x, y, and z axes in degrees (e.g., { x: 0, y: 10, z: 0 }).
  - opacity: The starting opacity of the element (0 for fully transparent, 1 for fully opaque). Default is 0.
  - scale: The starting scale of the element (0 shrinks it to nothing, 1 is the normal size). Default is 0.95.
  - easing: A CSS easing function to control the acceleration curve of the animation (e.g., 'ease', 'ease-in-out', 'cubic-bezier(...)'). Default is 'cubic-bezier(0.5, 0, 0, 1)'.
  - reset: A boolean value. If true, the animation will play again every time the element enters the viewport. If false (default), the animation plays only once.
  - interval: Only used when revealing multiple elements at once (e.g., a list). It specifies the delay between the reveal of each element in milliseconds.
*/