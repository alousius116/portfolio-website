const typingText = [
  "Computer Science Student",
  "Data Analytics Enthusiast",
  "Business Intelligence Enthusiast",
  "Full-Stack Developer",
  "Power BI Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentText = typingText[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingText.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();
