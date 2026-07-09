import { animate, onScroll, splitText, utils } from "../../../src/index.js";

const { words, chars } = splitText("#hero-title", {
  words: true,
  // chars: true,
});

words.forEach((word, i) => {
  let y = i % 2 === 0 ? -10 : 10;

  const at = animate(word, {
    y: [{ from: y, to: 0 }],
    opacity: [{ from: 0, to: 1 }],
    duration: 500,
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          at.play();
        } else {
          at.reverse();
        }
      });
    },
    {
      root: null, // uses the browser viewport
      // Shrinks the bottom of the tracking zone by 50% of the element's height.
      // This forces the element to scroll an extra 50% into the screen.
      rootMargin: "0px 0px -10% 0px",
      // Requires the element to be 100% visible inside that adjusted zone.
      threshold: 1,
    },
  );
  observer.observe(document.querySelector("#hero-title"));
});

// animate("#services", {
//   play: scroll({
//     start: ["center", "top"],
//     end: ["top", "bottom"],
//     playbackCommands: ["play", "reverse", "play", "reverse"],
//     debug: true,
//   }),
//   x: -100,
//   opacity: 0,
//   from: true,
//   duration: 500,
// });

utils.$(".product-card").forEach((card) => {
  animate(card, {
    autoplay: onScroll({
      enter: "center -20px",
      leave: "min bottom",
      debug: true,
      onLeave: (a) => {
        console.log("onLeave ");
        a.linked.reverse();
        // a.reverse();
      },
      onEnterBackward: (a) => {
        console.log("onEnterBackward", a);
        a.linked.play();

        // a.play();
      },

      // playbackCommands: ["play", "reverse", "play", "reverse"],
      //   debug: true,
    }),
    duration: 500,
    opacity: 0,
    y: 100,
    from: true,
  });
});
