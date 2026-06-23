import { createTimeline } from "../../src/index.js";
import { animate, stagger } from "../../src/index.js";

const start = document.getElementById("btn-start");
const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");
const seek = document.getElementById("btn-seek");

let t;

// t = createTimeline({ defaults: { duration: 750 } });
// t.add(".green", { x: "535px" })
//   .add(".yellow", { x: "535px" })
//   .add(".red", { x: "535px" }, "<-=1000");

t = animate(".green", {
  y: "335px",
  duration: 2000,
  ease: "inOutElastic(1,0.3)",
});
// animate(".yellow", { x: "535px", duration: 1000 });
// animate(".red", { x: "535px", duration: 1000 });

// t = createTimeline({ loop: 2, alternate: false });

// t.add(".green", {
//   x: "535px",
//   duration: 1000,
//   onComplete: () => console.log("Finished green"),
// })
//   .add(".yellow", {
//     x: "535px",
//     duration: 1000,
//     // loop: 3,
//     // alternate: true,
//     onComplete: () => console.log("Finished Yellow"),
//   })
//   .add(
//     ".red",
//     {
//       x: "535px",
//       duration: 1000,
//       onComplete: () => console.log("Finished red"),
//     },
//     // "<-=500",
//   );

// t = animate(".green", {
//   // x: 535,
//   // width: 300,
//   duration: 2000,
//   // x: [{ to: 0 }, { to: 535, duration: 1000 }, { to: 235, duration: 1500 }],
//   // x: [0, 535, 535, 0],
//   rotate: 180,

//   // y: [0, 0, 50, 50, 0],
//   // delay: stagger(100),
//   // duration: stagger(700, { start: 15 }),
//   loop: 2,
//   alternate: false,
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

// start.onclick = () => {
//   // t.animate(".yellow", "left", { duration: 1000, to: 420 });
// };
