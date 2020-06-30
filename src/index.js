import anime from 'animejs';

// Animation.
anime.timeline({ loop: false })
  .add({
    targets: '.develop',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: '.ba',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 400,
  })
  .add({
    targets: ['.ba'],
    translateX: [0, -30],
    opacity: [1, 0],
    display: ['none', 'block'],
    easing: 'easeInExpo',
    duration: 300,
    delay: (el, i) => 100 + 30 * i,
    complete() {
      document.querySelector('.ba').style.display = 'none';
    },
  })
  .add({
    targets: '.d',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: (el, i) => 500 + 30 * i,
  });
