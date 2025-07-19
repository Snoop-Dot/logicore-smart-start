// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileToggle.addEventListener('click', function() {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Hero text animation
  const animatedTexts = [
    "Transform Your Business",
    "Streamline Operations", 
    "Boost Productivity",
    "Scale with Confidence"
  ];
  
  let textIndex = 0;
  const animatedTextElement = document.getElementById('animated-text');
  
  function changeText() {
    if (animatedTextElement) {
      animatedTextElement.style.opacity = '0';
      
      setTimeout(() => {
        textIndex = (textIndex + 1) % animatedTexts.length;
        animatedTextElement.textContent = animatedTexts[textIndex];
        animatedTextElement.style.opacity = '1';
      }, 300);
    }
  }
  
  // Change text every 3 seconds
  setInterval(changeText, 3000);

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.feature-card, .about-paragraph, .section-header');
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Add scroll effect to navbar
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollY = currentScrollY;
  });
});

// Utility functions
function scrollToDemo() {
  const demoSection = document.getElementById('request-demo');
  if (demoSection) {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = demoSection.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

function scrollToContact() {
  // Scroll to footer or contact section
  const footer = document.querySelector('.footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleWhatsAppClick() {
  window.open('https://wa.me/923229990078', '_blank', 'noopener,noreferrer');
}

function handleInstagramClick() {
  window.open('https://www.instagram.com/logicore.erp.pk', '_blank', 'noopener,noreferrer');
}

// Preload animations and optimize performance
function preloadAnimations() {
  // Force reflow to ensure all elements are ready for animation
  document.body.offsetHeight;
  
  // Add loaded class to body for CSS animations
  document.body.classList.add('loaded');
}

// Call preload when page is fully loaded
window.addEventListener('load', preloadAnimations);

// Add smooth reveal animations for elements entering viewport
function addScrollReveal() {
  const revealElements = document.querySelectorAll('.feature-card, .about-paragraph');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(el);
  });
}

// Initialize scroll reveal when DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollReveal);

// Add parallax effect to floating elements
function addParallaxEffect() {
  const floatingElements = document.querySelectorAll('.floating-element, .floating-dot');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    floatingElements.forEach((element, index) => {
      const speed = (index + 1) * 0.2;
      element.style.transform = `translateY(${rate * speed}px)`;
    });
  });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', addParallaxEffect);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll-heavy functions
const throttledScroll = throttle(() => {
  // Your scroll-dependent code here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);