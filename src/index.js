import anime from 'animejs';

// Animation.
anime
  .timeline({ loop: false })
  .add({
    targets: '.develop',
    translateY: [-20, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: (_, i) => 500 + 30 * i,
  })
  .add({
    targets: '.ba',
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 400,
    delay: (_, i) => 350 + 30 * i,
  })
  .add({
    targets: ['.ba'],
    opacity: [1, 0],
    easing: 'easeInExpo',
    duration: 250,
    delay: (_, i) => 100 + 30 * i,
    complete() {
      document.querySelector('.ba').style.display = 'none';
    },
  })
  .add({
    targets: '.d',
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: (_, i) => 500 + 30 * i,
  });
