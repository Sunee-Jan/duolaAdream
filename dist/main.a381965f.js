// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"REUQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n \n  .background {\n    background-color: #1facec;\n  }\n \n  .hairOut {\n    width: 91%;\n    height: 112%;\n    border-radius: 65% 50% 0 50%;\n    background-color: #00a0e8;\n  }\n  .hairInner {\n    width: 80%;\n    height: 80%;\n    border-radius: 68% 50% 0 50%;\n    background-color: #ffffff;\n  }\n  .eye-left,\n  .eye-right {\n    position: absolute;\n    width: 51%;\n    height: 87%;\n    border: 2px solid;\n    background-color: #ffffff;\n    border-radius: 60% 60% 60% 60% / 70% 70% 50% 50%;\n  }\n\n  .blackLeft,\n  .blackRight {\n    width: 22%;\n    height: 25%;\n    border: 2px solid;\n    background-color: #000;\n    border-radius: 60% 60% 60% 60% / 70% 70% 50% 50%;\n  }\n  .blackLeft::before,\n  .blackRight::before {\n    width: 55%;\n    height: 60%;\n  }\n  .nose {\n    width: 9%;\n    height: 11%;\n    background-color: #e00026;\n  }\n  .nose::before {\n    border: 2px solid;\n    width: 35%;\n    height: 35%;\n    background-color: #fdfcfa;\n    border: none;\n  }\n  .faceLeft,\n  .faceRight {\n    width: 9%;\n    height: 11%;\n  }\n  .beard {\n    width: 51%;\n    height: 25%;\n    border: none;\n  }\n  .beard > li {\n    width: 39%;\n    height: 2px;\n    border: 1px solid;\n  }\n   .mouthA {\n    width: 2px;\n    height: 38%;\n    border: 1px solid;\n  }\n  .mouthB {\n    top: 58%;\n    left: 50%;\n    border: solid 2px;\n    transform: translateX(-50%);\n    width: 58%;\n    height: 25%;\n    border-top: none;\n    border-radius: 0 0 50% 50%/0 0 100% 100%;\n  }\n  .scarf {\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 47%;\n    height: 5%;\n    border-radius: 13px;\n    background-color: #db012a;\n  }\n  .scarf .ringBelow,\n  .scarf .ringTop,\n  .scarf .bar,\n  .scarf .circle {\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #fce439;\n  }\n  .scarf .ringTop {\n    top: 34%;\n    width: 12%;\n    height: 77%;\n    border-radius: 50% 50% 0 0/100% 100% 0 0;\n    border-bottom: none;\n  }\n  .scarf .ringBelow {\n    top: 136%;\n    width: 14%;\n    height: 130%;\n    border-radius: 0 0 50% 50%/0 0 100% 100%;\n    border-top: none;\n  }\n  @media (max-width: 500px) {\n    .scarf .ringBelow {\n      height: 120%;\n    }\n  }\n  .scarf .bar {\n    top: 110%;\n    width: 15%;\n    height: 27%;\n    border-radius: 3px;\n    background-color: #edd102;\n  }\n  .scarf .circle {\n    top: 160%;\n    width: 5%;\n    height: 80%;\n    border-radius: 50%;\n    background-color: #edd102;\n  }\n  ";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _testShow = _interopRequireDefault(require("./test-show.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 0,
  time: 10,
  id: undefined,
  elements: {
    show: document.querySelector("#show"),
    style: document.querySelector("#style")
  },
  init: function init() {
    player.bindEvents();
    player.play();
  },
  play: function play() {
    clearInterval(player.id);
    player.id = setInterval(player.Run, player.time);
  },
  Run: function Run() {
    if (player.n < _testShow.default.length) {
      player.n += 1;
      player.elements.show.innerText = _testShow.default.substring(0, player.n);
      player.elements.style.innerHTML = _testShow.default.substring(0, player.n);
      player.elements.show.scrollTop = player.elements.show.scrollHeight;
    } else {
      return;
    }
  },
  stop: function stop() {
    clearInterval(player.id);
  },
  slow: function slow() {
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.time = 0;
    player.play();
  },
  replay: function replay() {
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
    "#replayBtn": "replay"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var eventsValue = player.events[key];
      document.querySelector(key).onclick = player[eventsValue];
    }
  }
};
player.init(); //移动端事件
//1.禁止页面滑动，如果局部还是会滑动，可以配合CSS给滑动的区域加个透明边框
// document.body.addEventListener(
//   "touchmove",
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );
//2.滑动代码区展示可以上下滑动代码

function moveTouch(ev) {// 处理事件
} // player.elements.show.ontouchmove = (e) => {};
},{"./test-show.js":"REUQ"}]},{},["epB2"], null)
//# sourceMappingURL=main.a381965f.js.map