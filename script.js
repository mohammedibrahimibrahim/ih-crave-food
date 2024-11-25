



window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax-section');
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
});
















document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper with autoplay and loop
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      on: {
        slideChangeTransitionStart: function() {
          document.querySelectorAll('.swiper-slide').forEach((slide) => {
            slide.style.opacity = '0';
          });
          document.querySelector('.swiper-slide-active').style.opacity = '1';
        }
      },
    });

    // Start Swiper autoplay
    swiper.autoplay.start();
  });











  function animateCounter(id, target, duration) {
    let count = 0;
    const intervalTime = duration / target; // Time per increment
    const element = document.getElementById(id);
  
    const interval = setInterval(() => {
      count++;
      element.textContent = count;
      if (count >= target) {
        clearInterval(interval);
      }
    }, intervalTime);
  }
  
  // Animate each counter on page load with slower animation
  window.onload = function () {
    animateCounter("count1", 1287, 3000); // 3 seconds for 1287
    animateCounter("count2", 5786, 4000); // 4 seconds for 5786
    animateCounter("count3", 1440, 3500); // 3.5 seconds for 1440
    animateCounter("count4", 7110, 4500); // 4.5 seconds for 7110
  };
  




     // Animate Hero Section Title
     gsap.from("#headline", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power4.out"
  });

  // Animate Menu Section Items
  gsap.from(".col-lg-4", {
      scrollTrigger: {
          trigger: ".container marketing",
          start: "top 80%",
          toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out"
  });

  // Parallax Effect (for background scrolling)
  gsap.to(".parallax-section", {
      scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
      },
      backgroundPosition: "center center"
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





  

