import { createTimeline } from "../../src/index.js";
import { animate, stagger } from "../../src/index.js";

const start = document.getElementById("btn-start");
const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");

let t;

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

// const t = animate(".yellow", {
//   // x: 535,
//   // rotate: 180,
//   // duration: 1000,
//   x: ["0px", "100px", "50px", "200px", "0px"],
//   // delay: stagger(100),
//   // duration: stagger(700, { start: 15 }),
//   // loop: 4,
//   // alternate: true,
// });

// t = animate(".yellow", {
//   keyframes: [
//     { translateY: -50, opacity: 0.5 }, // Scene 1
//     { translateX: 100, opacity: 0.7 }, // Scene 2
//     { translateY: 0, scale: 1, duration: 1000 }, // Scene 3
//     { translateX: 0, scale: 1, duration: 3000 }, // Scene 3
//   ],
//   duration: 2000,
//   ease: "outExpo",
// });

t = animate(".yellow", {
  x: [150, 300],
  duration: 2000,
  ease: "outExpo",
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
