import { animate, stagger, svg } from "../../../../src/index.js";

const start = document.getElementById("btn-start");
const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");
const seek = document.getElementById("btn-seek");

let t;

const text = document.getElementById("current");
let drawPercentage = ["0 0", "0 1", "1 1"]; // [ "offset, dash array" ] it offset will be multiplied by -1 internally by DrawSVGPlugin

drawPercentage = ["0.1 0.75", "0 1"];

let index = 0;
function draw() {
  index = (index + 1) % drawPercentage.length;
  console.log("index ", index);

  animate(svg.createDrawable("#rocket"), {
    // draw: ["0 0", "0 1", "1 1"],
    draw: drawPercentage[index],
    ease: "inOutQuad",
    duration: 2000,
    // delay: stagger(100),
    // loop: true,
  });

  text.textContent = drawPercentage[index];
}

// draw()
document.querySelector("#next").addEventListener("click", draw);
