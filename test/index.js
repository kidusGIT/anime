import { createTimeline } from "../src/index.js";

const start = document.getElementById("btn-start");
const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");

const t = createTimeline({ defaults: { duration: 750 } });

t.label("start")
  .add(".green", { x: "535px" }, 500)
  .add(".yellow", { x: "535px" }, "start")
  .add(".red", { x: "535px" }, "<-=500");

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

// start.onclick = () => {
//   // t.animate(".yellow", "left", { duration: 1000, to: 420 });
// };
