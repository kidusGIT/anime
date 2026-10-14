import { animate, svg } from "../../../src/index.js";

const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");
const seek = document.getElementById("btn-seek");

// Animate the transforms properties of .car the motion path values
// const t = animate(".car", {
//   ease: "linear",
//   duration: 5000,
//   loop: true,
//   ...svg.createMotionPath("path"),
// });

// Line drawing animation following the motion path values
// For demo aesthetic only
// animate(svg.createDrawable("path"), {
//   draw: "0 1",
//   ease: "linear",
//   duration: 5000,
//   loop: true,
// });

pause.onclick = () => {
  t.pause();
};

reverse.onclick = () => {
  console.log("-----------------------------------");
  t.reverse();
};

play.onclick = () => {
  t.play();
};

resume.onclick = () => {
  t.resume();
};

seek.onclick = () => {
  t.seek(2500);
};
