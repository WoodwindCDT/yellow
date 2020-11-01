// Parralax Scrolling Animation
var rellax = new Rellax('.rellax');

// Anime Animations
anime.timeline()
  .add({
    targets: '.fnt-1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    scale: [1.5, 1],
    rotateZ: [360, 330],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
});

anime.timeline()
  .add({
      targets: '.fnt-2',
      scale: [1.5, 1],
      opacity: [0,1],
      delay: (el, i) => 400 + 30 * i
}).add({
  targets: '.fnt-2',
  rotateZ: [-5],
    translateY: 8,
    translateZ: 1,
})

anime.timeline()
  .add({
    targets: '.fnt-3',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    rotateZ: [-360],
    scale: [1.5, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 500 + 30 * i
});