// Smooth Scroll for "Back to Top" Button
const topButton = document.getElementById('topButton');
window.onscroll = function() {
  topButton.style.display = window.scrollY > 100 ? 'block' : 'none';
};

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter Effect
const typewriter = (text, element, delay = 150) => {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
};

document.addEventListener('DOMContentLoaded', () => {
  const taglineElement = document.querySelector('.tagline');
  typewriter("Pushing the boundaries of technology and creativity.", taglineElement);
});
