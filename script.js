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
  const dynamicText = document.querySelector(".dynamic-text");
  const cursor = document.querySelector(".cursor");

  const texts = [
    "Front-End Developer",
    "AI Developer",
    "Creative Developer",
    "UI/UX Desginer",
  ];

  let index = 0;
  let textIndex = 0;
  let currentText = texts[index];
  let typingSpeed = 150;
  let delayBetweenTexts = 1000;
  let deleteSpeed = 60;

  function typeText() {
    if (textIndex < currentText.length) {
      dynamicText.textContent += currentText.charAt(textIndex);
      textIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(deleteText, delayBetweenTexts);
    }
  }

  function deleteText() {
    if (textIndex > 0) {
      dynamicText.textContent = currentText.substring(0, textIndex - 1);
      textIndex--;
      setTimeout(deleteText, deleteSpeed);
    } else {
      index = (index + 1) % texts.length;
      currentText = texts[index];
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText();
});
