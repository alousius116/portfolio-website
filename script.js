const typingText = [
  "IT Internship Candidate",
  "Full-Stack Web Developer",
  "Python Developer",
  "PHP & MySQL Developer",
  "Software Development Learner"
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
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingText.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();