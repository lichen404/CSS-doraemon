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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: #93b8ca;\n    min-height: 100vh;\n}\n\n.face1 {\n    position: relative;\n    width: 420px;\n    height: 400px;\n    background-color: #1e90ff;\n    border: 2px solid #000;\n    border-radius: 50% 50% 44% 44%;\n    left: 50%;\n    margin-left: -210px;\n    top: 40px;\n}\n\n.face1 .face2 {\n    position: absolute;\n    width: 360px;\n    height: 300px;\n    border: 2px solid black;\n    background-color: #fff;\n    left: 50%;\n    margin-left: -180px;\n    border-radius: 50% 50% 45% 45%;\n    bottom: 0;\n}\n\n.collar {\n    width: 320px;\n    height: 50px;\n    position: relative;\n    border: 2px solid black;\n\n    margin-left: -160px;\n    left: 50%;\n    border-radius: 30px;\n    background-color: #FF0000;\n}\n\n.bell1 {\n    border-radius: 50%;\n    height: 50px;\n    width: 50px;\n    border: 2px solid black;\n    background-color: #FFFF00;\n    position: absolute;\n    margin-left: -25px;\n    top: 15px;\n    left: 50%;\n    overflow: hidden;\n}\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    33% {\n        transform: rotate(-5deg);\n    }\n\n    66% {\n        transform: rotate(5deg);\n    }\n\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.bell1:hover {\n    animation: wave 300ms infinite linear;\n\n}\n\n\n\n.bell1 .bell2 {\n    width: 60px;\n    height: 6px;\n    border: 2px solid black;\n    top: 15px;\n    position: inherit;\n    margin-left: -30px;\n    left: 50%;\n}\n\n.bell1 .bell3 {\n    width: 16px;\n    height: 10px;\n\n    position: absolute;\n    top: 25px;\n    left: 50%;\n    margin-left: -8px;\n    border-radius: 50%;\n    background-color: black;\n}\n\n.bell1 .bell3::after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 30px;\n    background-color: black;\n    left: 50%;\n    margin-left: -1px;\n    position: absolute;\n}\n\n.eye {\n    width: 90px;\n    height: 110px;\n    background-color: #fff;\n    border: 2px solid black;\n    border-radius: 46%;\n    position: absolute;\n    margin-left: -45px;\n    left: 50%;\n    top: -54px;\n\n}\n\n.eye.left {\n    transform: translateX(-45px);\n}\n\n.eye.right {\n    transform: translateX(45px);\n}\n\n.eye::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: black;\n    top: 60px;\n}\n\n.eye.left::after {\n    left: 60px;\n}\n\n.eye.right::after {\n    right: 60px;\n}\n\n.nose {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: #ff0000;\n    border: 2px solid #000;\n    position: absolute;\n    left: 50%;\n    margin-left: -25px;\n    top: 38px;\n}\n\n.nose .shadow {\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    background-color: #fff;\n    border-radius: 50%;\n    left: 25px;\n    top: 10px;\n    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, .4);\n}\n\n.whisker {\n    height: 2px;\n    width: 100px;\n    background-color: black;\n    position: absolute;\n    margin-left: -50px;\n    left: 50%;\n\n}\n\n.whisker.top {\n    top: 100px;\n}\n\n.whisker.top.left {\n    transform: translateX(-100px) rotate(20deg);\n}\n\n.whisker.top.right {\n    transform: translateX(100px) rotate(-20deg);\n}\n\n.whisker.mid {\n    top: 130px;\n}\n\n.whisker.mid.left {\n    transform: translateX(-100px);\n}\n\n.whisker.mid.right {\n    transform: translateX(100px);\n}\n\n.whisker.bottom {\n    top: 160px;\n}\n\n.whisker.bottom.left {\n    transform: translateX(-100px) rotate(-20deg);\n}\n\n.whisker.bottom.right {\n    transform: translateX(100px) rotate(20deg);\n}\n\n.mouth1 {\n    width: 2px;\n    height: 140px;\n    position: absolute;\n    background-color: black;\n    margin-left: -1px;\n    left: 50%;\n    top: 88px;\n}\n\n.mouth2 {\n    position: absolute;\n    border-radius: 0 0 45% 45%;\n    border-bottom: 2px solid black;\n    height: 200px;\n    width: 240px;\n    margin-left: -120px;\n    left: 50%;\n    top: 30px;\n}";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    this.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.b2b7f21c.js.map