import gsap from 'gsap';

export const initCursorAnimation = (cursor) => {
  // Track cursor movement and apply animation
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      ease: 'power1.out(1.7)',
    });
  });
};
