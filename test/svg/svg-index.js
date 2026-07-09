import { animate, svg, utils, createTimeline } from "../../src/index.js";

// gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

// let tl = gsap
//   .timeline({
//     defaults: { duration: 2, ease: "expo.inOut" },
//     repeat: -1
//   })
//   .to("#morph", { morphSVG: "#speech" })
//   .to("#morph", { morphSVG: "#rocket" })
//   .to("#morph", { morphSVG: "#lightning" })
//   .to("#morph", { morphSVG: "#thumb" })
//   .to("#morph", { morphSVG: "#square" })
//   .to("#morph", { morphSVG: "#grid" })
//   .to("#morph", { morphSVG: "#bulb" })
//   .to("#morph", { morphSVG: "#morph" })

// GSDevTools.create({animation: tl, minimal: true});

const [speech, lightning, square, grid, bulb, rocket, thumb, morph] =
  utils.$("path");

// let t = createTimeline({
//   defaults: { duration: 2, ease: "inOutExpo" },
//   loop: true,
// });

// t.add(morph, {});

animate(morph, {
  points: svg.morphTo(speech),
  duration: 2000,
  easing: "easeInOutExpo",
  // loop: true,
  // direction: "alternate",
});

// function animateRandomPoints() {
//   // Update the points attribute on #path-2
//   utils.set($path2, { points: generatePoints() });
//   // Morph the points of #path-1 into #path-2
//   animate($path1, {
//     points: svg.morphTo($path2),
//     ease: 'inOutCirc',
//     duration: 500,
//     onComplete: animateRandomPoints
//   });
// }

// // Start the animation
// animateRandomPoints();

// // A function to generate random points on #path-2 on each iteration
// // For demo purpose only
// function generatePoints() {
//   const total = utils.random(4, 64);
//   const r1 = utils.random(4, 56);
//   const r2 = 56;
//   const isOdd = n => n % 2;
//   let points = '';
//   for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
//     const r = isOdd(i) ? r1 : r2;
//     const a = (2 * Math.PI * i / l) - Math.PI / 2;
//     const x = 152 + utils.round(r * Math.cos(a), 0);
//     const y = 56 + utils.round(r * Math.sin(a), 0);
//     points += `${x},${y} `;
//   }
//   return points;
// }
