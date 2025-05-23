const sr = ScrollReveal({
    origin: 'top',      
    distance: '20px',  
    duration: 800,      
    delay: 200,          
    rotate: { x: 0, y: 0, z: 0 }, 
    opacity: 0,          
    scale: 1,            
    easing: 'cubic-bezier(0.5, 0, 0, 1)', 
    reset: false       
});

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

sr.reveal('.upcoming-text', {
    origin: 'left',
    distance: '80px',
    delay: 500
});

sr.reveal('.upcoming-image-wrapper', {
    origin: 'right',
    distance: '80px',
    delay: 700
});

sr.reveal('.reveal');
sr.reveal('.reveal-left', { origin: 'left', distance: '30px', delay: 300 });
sr.reveal('.reveal-right', { origin: 'right', distance: '30px', delay: 500 });
sr.reveal('.site-footer .footer-logo', { origin: 'bottom', delay: 400 });
sr.reveal('.site-footer .footer-links-column', { origin: 'bottom', delay: 600, interval: 200 });
sr.reveal('.site-footer .footer-community', { origin: 'bottom', delay: 800 });
sr.reveal('.site-footer .footer-divider', { delay: 1000 });
sr.reveal('.site-footer .footer-bottom', { delay: 1200 });

