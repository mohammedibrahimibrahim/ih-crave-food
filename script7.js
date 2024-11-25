// GSAP Animations
gsap.from(".header h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".header p", { duration: 1, x: -50, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".header .btn", { duration: 1, scale: 0, opacity: 0, ease: "bounce.out", delay: 1 });

gsap.from(".booking-section h2", {
  scrollTrigger: {
    trigger: ".booking-section",
    start: "top 80%",
  },
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
});

gsap.from("#bookingForm", {
  scrollTrigger: {
    trigger: "#bookingForm",
    start: "top 80%",
  },
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
  ease: "elastic.out(1, 0.3)",
});

// Form Submission Handler
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your table has been successfully booked!");
});





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