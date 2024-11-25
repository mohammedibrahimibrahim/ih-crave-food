 // Animate the navbar brand logo and title
 gsap.from(".navbar-brand h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power4.out",
  });

  // Animate the navbar items
  gsap.from(".navbar-nav .nav-item", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.2, // Delays between each nav-item animation
    ease: "power3.out",
  });

  // Animate the "Book Now" button
  gsap.from(".btn-primary", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    delay: 1,
    ease: "elastic.out(1, 0.3)",
  });





