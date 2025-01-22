document.querySelectorAll('.link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.error(`Target section with ID "${targetId}" not found.`);
    }
  });
});

const home = document.querySelector('.home');
const count = 5;

const createLight = () => {
  const lighting = document.createElement('div');
  lighting.classList.add('lighting');

  const size = `${Math.random() * 100 + 100}px`;
  lighting.style.width = size;
  lighting.style.height = size;

  lighting.style.top = `${Math.random() * 100}%`;
  lighting.style.left = `${Math.random() * 100}%`;

  lighting.style.animationDelay = `${Math.random() * 5}s`;
  lighting.style.animationDuration = `${Math.random() * 10 + 2}s`;

  return lighting;
};

if (home) {
  for (let i = 0; i < count; i++) {
    home.appendChild(createLight());
  }
} else {
  console.error("Element with class 'home' not found.");
}

document.addEventListener("DOMContentLoaded", function () {
  
  const hamburger = document.querySelector('.hamburger');
  const middleSide = document.querySelector('.middle-side');
  const navLinks = document.querySelectorAll('.link');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    middleSide.classList.toggle('active');
    document.body.style.overflow = middleSide.classList.contains('active') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);

  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      middleSide.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Dynamic text animation code
  const dynamicText = document.querySelector(".dynamic-text");
  if (dynamicText) {
    const words = [
      "Front-end Developer",
      "Bot Developer",
      "UI/UX Designer",
      "Web Architect",
      "Creative Coder"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    

    function typeText() {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
    
      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeText, Math.random() * 100 + 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeText, 50);
      } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeText, 1200);
        } else {
          setTimeout(typeText, 500);
        }
      }
    }
    
    typeText();
  } else {
    console.error("Element with class 'dynamic-text' not found.");
  }

  
  document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      const linkRect = e.target.getBoundingClientRect();
      const moveDistance = 5; 
      
      e.target.style.transform = `translateY(-${moveDistance}px)`;
    });
    
    link.addEventListener('mouseleave', (e) => {
      e.target.style.transform = 'translateY(0)';
    });
  });

  
  const stats = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCount(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  stats.forEach(stat => observer.observe(stat));

  function animateCount(element, target) {
    let current = 0;
    const duration = 1000; 
    const step = target / (duration / 16); 

    function update() {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    }

    update();
  }
});
