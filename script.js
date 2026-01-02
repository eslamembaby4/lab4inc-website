// ============================================
// INITIALIZATION & CONSTANTS
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// MOBILE MENU
// ============================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuText = document.getElementById('menu-text');

if (mobileMenuBtn && mobileMenu && menuText) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuText.textContent = isOpen ? 'Close' : 'Menu';
    mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close mobile menu when clicking a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuText.textContent = 'Menu';
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// STICKY HEADER WITH SCROLL EFFECT
// ============================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function highlightNav() {
  let current = '';
  const scrollPosition = window.pageYOffset + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

if (!prefersReducedMotion) {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    observer.observe(el);
  });
} else {
  // If reduced motion is preferred, show all elements immediately
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    el.classList.add('revealed');
  });
}

// ============================================
// FORM VALIDATION AND SUBMISSION
// ============================================

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const successMessage = document.getElementById('success-message');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation function
function validateField(field) {
  const value = field.value.trim();
  const errorDiv = document.getElementById(`${field.name}-error`);

  let isValid = true;

  if (value === '') {
    isValid = false;
  } else if (field.type === 'email' && !emailRegex.test(value)) {
    isValid = false;
  }

  if (isValid) {
    field.classList.remove('error');
    errorDiv?.classList.remove('show');
  } else {
    field.classList.add('error');
    errorDiv?.classList.add('show');
  }

  return isValid;
}

if (contactForm) {
  // Real-time validation on blur
  const formFields = contactForm.querySelectorAll('input, textarea');
  formFields.forEach(field => {
    field.addEventListener('blur', () => {
      validateField(field);
    });

    // Clear error on input
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        field.classList.remove('error');
        const errorDiv = document.getElementById(`${field.name}-error`);
        errorDiv?.classList.remove('show');
      }
    });
  });

  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    const fields = contactForm.querySelectorAll('input, textarea');
    let isFormValid = true;

    fields.forEach(field => {
      if (!validateField(field)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      // Focus first error field
      const firstError = contactForm.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Disable button and show loading state
    if (submitBtn && submitText) {
      submitBtn.disabled = true;
      submitText.innerHTML = '<span class="spinner"></span>Sending...';
    }

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      if (successMessage) {
        successMessage.classList.add('show');
        contactForm.reset();

        // Scroll to success message
        successMessage.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'center'
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 5000);
      }

    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      // Re-enable button
      if (submitBtn && submitText) {
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
      }
    }
  });
}

// ============================================
// INITIALIZE ON LOAD
// ============================================

window.addEventListener('load', () => {
  highlightNav();
});
