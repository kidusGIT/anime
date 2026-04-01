import { createTimeline } from "../../src/index.js";
import { animate, stagger } from "../../src/index.js";

const start = document.getElementById("btn-start");
const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");

// const t = createTimeline({ defaults: { duration: 750 } });
// t.add(".green", { x: "535px" })
//   .add(".yellow", { x: "535px" })
//   .add(".red", { x: "535px" }, "<-=1000");

// const t = animate(".green", { x: "535px", duration: 2000 });
// animate(".yellow", { x: "535px", duration: 1000 });
// animate(".red", { x: "535px", duration: 1000 });

// t.add(".green", { x: "535px" })
//   .add(".yellow", { x: "535px" })
//   .add(".red", { x: "535px" });

const t = animate(".green", {
  // x: 535,
  // rotate: 180,
  width: 200,
  duration: 1000,
  // x: [{ to: 0 }, { to: 535, duration: 1000 }, { to: 235, duration: 1500 }],
  // x: [0, 535, 0, 335],
  // y: [0, 0, 50, 50, 0],
  // delay: stagger(100),
  // duration: stagger(700, { start: 15 }),
  // loop: 4,
  // alternate: true,
});

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
