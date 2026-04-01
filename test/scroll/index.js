import { animate, onScroll, utils } from "../../src/index.js";

const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");

utils.$(".card").forEach(($square) => {
  console.log("$square ", $square);

  animate($square, {
    x: 400,
    duration: 3000,
    // rotate: "1turn",
    // alternate: true,
    ease: "inOutQuad",
    autoplay: onScroll({
      container: ".scroll-container",
      sync: 1,
      enter: "max bottom",
      leave: "min top",
      debug: true,
    }),
  });
});
