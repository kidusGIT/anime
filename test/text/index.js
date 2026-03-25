import { animate, stagger, splitText } from "../../src/index.js";

const pause = document.getElementById("btn-pause");
const reverse = document.getElementById("btn-reverse");
const play = document.getElementById("btn-play");
const resume = document.getElementById("btn-resume");

const { chars, words } = splitText(".animate-text", {
  // words: true,
  chars: true,
});
console.log("chars ", chars);

let t;

t = animate(chars, {
  // Property keyframes
  y: [
    { to: "-2.75rem", ease: "outExpo", duration: 600 },
    { to: 0, ease: "outBounce", duration: 800, delay: 100 },
  ],
  // Property specific parameters
  rotate: {
    from: "-1turn",
    delay: 0,
  },
  delay: stagger(60),
  ease: "inOutCirc",
  // loopDelay: 1000,
  // loop: true,
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
