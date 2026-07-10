import { animate, svg, utils, createTimeline } from "../../../src/index.js";

const [diamond, lightning] = utils.$("path");

animate(diamond, {
  d: svg.morphTo(lightning),
  duration: 1000,
  easing: "easeInOutSine",
});
