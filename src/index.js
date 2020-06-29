import anime from 'animejs'

anime.timeline({loop: false})
  .add({
    targets: '.develop',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 1500 + 30 * i
  })
  .add({
    targets: '.a',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 400,
  })
  .add({
    targets: ['.b'],
    translateX: [0,-30],
    opacity: [1,0],
    display: ['none', 'block'],
    easing: "easeInExpo",
    duration: 400,
    delay: (el, i) => 100 + 30 * i,
    complete: function() {
      document.querySelector('.a').style.display = 'none';
    },
  })
  .add({
    targets: '.d',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 500 + 30 * i,
    begin: function() {
      document.querySelector('.d').style.display = 'inline-block';
    },
  });