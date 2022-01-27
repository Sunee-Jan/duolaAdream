import string from "./test-show.js";
const player = {
  n: 0,
  time: 10,
  id: undefined,
  elements: {
    show: document.querySelector("#show"),
    style: document.querySelector("#style"),
  },
  init: () => {
    player.bindEvents();
    player.play();
  },
  play: () => {
    clearInterval(player.id);
    player.id = setInterval(player.Run, player.time);
  },
  Run: () => {
    if (player.n < string.length) {
      player.n += 1;
      player.elements.show.innerText = string.substring(0, player.n);
      player.elements.style.innerHTML = string.substring(0, player.n);
      player.elements.show.scrollTop = player.elements.show.scrollHeight;
    } else {
      return;
    }
  },
  stop: () => {
    clearInterval(player.id);
  },
  slow: () => {
    player.time = 200;
    player.play();
  },
  normal: () => {
    player.time = 50;
    player.play();
  },
  fast: () => {
    player.time = 0;
    player.play();
  },
  replay: () => {
    player.time = 10;
    player.n = 0;
    player.play();
  },
  events: {
    "#slowBtn": "slow",
    "#stopBtn": "stop",
    "#playBtn": "play",
    "#normalBtn": "normal",
    "#fastBtn": "fast",
    "#replayBtn": "replay",
  },
  bindEvents: () => {
    for (let key in player.events) {
      let eventsValue = player.events[key];
      document.querySelector(key).onclick = player[eventsValue];
    }
  },
};
player.init();
//移动端事件
//1.禁止页面滑动，如果局部还是会滑动，可以配合CSS给滑动的区域加个透明边框
// document.body.addEventListener(
//   "touchmove",
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );
//2.滑动代码区展示可以上下滑动代码
function moveTouch(ev) {
  // 处理事件
}
// player.elements.show.ontouchmove = (e) => {};
