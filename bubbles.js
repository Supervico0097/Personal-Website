const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  // Start within 10–80% of width/height
  const randomLeft = Math.random() * 70 + 10;
  const randomTop  = Math.random() * 70 + 10;

  // Subtle motion, ±20–40px range
  const randomX1 = Math.random() * 120 - 20;
  const randomY1 = Math.random() * 120 - 20;
  const randomX2 = Math.random() * 120 - 20;
  const randomY2 = Math.random() * 120 - 20;

  // Animation timing
  const randomDelay = Math.random() * 5;
  const randomDuration = Math.random() * 5 + 5;

  bubble.style.left = `${randomLeft}%`;
  bubble.style.top  = `${randomTop}%`;

  // Unique animation name
  const animationName = `float-${Math.random().toString(36).substring(2, 9)}`;

  // Generate keyframes dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ${animationName} {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(${randomX1}px, ${randomY1}px); }
      50%  { transform: translate(${randomX2}px, ${randomY2}px); }
      75%  { transform: translate(${-randomX1 / 2}px, ${-randomY1 / 2}px); }
      100% { transform: translate(0, 0); }
    }
  `;
  document.head.appendChild(style);

  bubble.style.animation = `${animationName} ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
});
