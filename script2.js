document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Thank you for your message! We'll get back to you soon.");
    this.reset();
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  




// Add animations on page load for each icon
window.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon-wrapper');
    icons.forEach((icon, index) => {
      icon.style.animationDelay = `${index * 0.2}s`;
    });
  });
  






window.addEventListener("scroll", function() {
    const aboutSection = document.querySelector(".about-section");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (sectionPosition < screenPosition) {
      aboutSection.classList.add("active");
    }
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