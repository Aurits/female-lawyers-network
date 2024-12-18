document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // FAQ Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Gallery filter
  const filterButtons = document.querySelectorAll('.filter-button');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox for gallery images
  const galleryImages = document.querySelectorAll('.gallery-item img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);

      const lightboxImg = document.createElement('img');
      lightboxImg.src = img.src;
      lightbox.appendChild(lightboxImg);

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });

  // Form validation
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      form.querySelectorAll('input, select, textarea').forEach(field => {
        if (field.hasAttribute('required') && !field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      if (isValid) {
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementById('navbar');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');

    if (scrollPosition > 50) {
      navbar.classList.add('navbar-scrolled');
      mobileNavToggle.style.display = 'block';
    } else {
      navbar.classList.remove('navbar-scrolled');
      if (window.innerWidth > 1023) {
        mobileNavToggle.style.display = 'none';
      }
    }
  });

  animateOnScroll(); // Initial check on page load


  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  mobileNavToggle.addEventListener('click', () => {
    mobileSidebar.style.transform = 'translateX(0)';
  });

  closeSidebar.addEventListener('click', () => {
    mobileSidebar.style.transform = 'translateX(-100%)';
  });


  // Add a resize event listener to handle the mobile nav toggle visibility
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
      mobileNavToggle.style.display = 'none';
      navbar.classList.remove('show-mobile-nav');
    } else {
      mobileNavToggle.style.display = 'block';
    }
  });
});

