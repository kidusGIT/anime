import { animate, svg, utils, createTimeline } from "../../../src/index.js";

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

let t = createTimeline({
  defaults: { duration: 1000, ease: "inOutExpo" },
  // loop: true,
});

t.add(morph, {
  d: svg.morphTo(speech),
})
  .add(morph, {
    d: svg.morphTo(rocket),
  })
  .add(morph, {
    d: svg.morphTo(lightning),
  })
  .add(morph, {
    d: svg.morphTo(square),
  })
  .add(morph, {
    d: svg.morphTo(grid),
  })
  .add(morph, {
    d: svg.morphTo(bulb),
  })
  .add(morph, {
    d: svg.morphTo(thumb),
  })
  .add(morph, {
    d: svg.morphTo(morph),
  });

// animate(morph, {
//   d: svg.morphTo(speech),
//   duration: 2000,
//   easing: "easeInOutExpo",
// });
