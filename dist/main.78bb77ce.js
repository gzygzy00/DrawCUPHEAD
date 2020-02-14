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
var style = "/*\n* \u753B\u4E00\u4E2Acuphead\u7684\u89D2\u8272\uFF1A\n* \u5148\u94FA\u4E0A\u80CC\u666F\uFF0C\u753B\u4E0A\u8336\u676F\u7684\u8F6E\u5ED3\uFF1B\n* \u4E0A\u534A\u90E8\u5206\u6682\u505C\u6216\u8005\u7ED3\u675F\u540E\u53EF\u4EE5\u4E0A\u4E0B\u6EDA\u52A8\uFF1B\n* \u4E0B\u534A\u90E8\u5206\u79FB\u52A8\u7AEF\u663E\u793A\u4E0D\u4E0B\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52A8\uFF1B\n*/\n\n.cuphead {\n  position: relative;\n  height: 320px;\n  width: 640px;\n}\n\n.face {\n  border: 5px solid #1d1b1d;\n  border-radius: 0px 30px 350px 320px;\n  width: 350px;\n  height: 230px;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-3deg);\n  background-color: #e1e1e1;\n  z-index: 1;\n  overflow: hidden;\n}\n\n/*\n* \u8138\u5DF2\u7ECF\u753B\u597D\uFF0C\u52A0\u4E0A\u4E94\u5B98\uD83D\uDC40\uFF1B\n*/\n\n.nose {\n  border: 3px solid #1d1b1d;\n  border-radius: 17px 30px 17px 30px;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  top: 58%;\n  left: 60%;\n  transform: translateY(-50%) rotate(-50deg);\n  background-color: #db4227;\n  z-index: 3;\n}\n\n.ear {\n  border: 5px solid #1d1b1d;\n  border-radius: 50%;\n  position: absolute;\n  top: 59%;\n  left: 22%;\n  width: 150px;\n  height: 150px;\n  transform: translate(-50%, -50%) rotate(-3deg);\n  background-color: #e1e1e1;\n}\n\n.ear::before {\n  content: '';\n  display: block;\n  border: 5px solid #1d1b1d;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  width: 100px;\n  height: 100px;\n  transform: translate(-50%, -50%) rotate(-3deg);\n  background-color: #fecf34;\n  overflow: hidden;\n}\n\n.eye {\n  border: 5px solid #1d1b1d;\n  border-radius: 100px / 90px;\n  width: 160px;\n  height: 180px;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-55%, -105%);\n  background-color: #FFFFFF;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.eye.right {\n  width: 140px;\n  border-radius: 100px / 90px;\n  transform: translate(40%, -105%) rotate(-11deg);\n  z-index: 1;\n}\n\n.eyeball {\n  border: 5px solid #1d1b1d;\n  border-radius: 50%;\n  width: 55px;\n  height: 100px;\n  transform: translate(47%, 72%);\n  background-color: #1d1b1d;\n}\n\n.eyeball:before {\n  content: '';\n  display: block;\n  border: 15px solid transparent;\n  border-right: 20px solid #ffffff;\n  position: absolute;\n  top: 30%;\n  left: 35%;\n  transform: rotate(-9deg);\n\n}\n\n.eyeball.right {\n  width: 50px;\n  height: 90px;\n  transform: translate(31%, 74%) rotate(11deg);\n}\n\n/*\n* \u5634\u5DF4\u505A\u7684\u6709\u70B9\u590D\u6742\uFF0C\u8FD8\u53EF\u4EE5\u6539\u7684\u66F4\u597D\uFF1B\n*/\n.mouth {\n  /*border: 3px solid rosybrown;*/\n  height: 140px;\n  width: 200px;\n  position: absolute;\n  top: 50%;\n  left: 25%;\n  z-index: 3;\n}\n\n.mouth-bottom-left {\n  border: 4px solid #1d1b1d;\n  border-radius: 0px 0px 0px 50px;\n  position: absolute;\n  top: 50%;\n  left: 30%;\n  width: 50px;\n  height: 50px;\n  background-color: #1d1b1d;\n  overflow: hidden;\n}\n\n.mouth-bottom {\n  border: 3px solid #1d1b1d;\n  position: absolute;\n  top: 50%;\n  left: 54%;\n  width: 50px;\n  height: 50px;\n  background-color: #1d1b1d;\n}\n\n.mouth-bottom-right {\n  border: 3px solid #1d1b1d;\n  border-radius: 0px 25px 25px 0px;\n  position: absolute;\n  top: 50%;\n  left: 71%;\n  width: 50px;\n  height: 50px;\n  background-color: #1d1b1d;\n}\n\n.mouth-top-left {\n  border: 1px solid #1d1b1d;\n  border-radius: 50px 10px 0px 0px;\n  position: absolute;\n  top: 33%;\n  left: 30%;\n  width: 40px;\n  height: 25px;\n  background-color: #1d1b1d;\n}\n\n.mouth-top-right {\n  border: 1px solid #1d1b1d;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-14%, -87.5%);\n  width: 200px;\n  height: 200px;\n  background-color: #e1e1e1;\n  z-index: 2;\n}\n\n.mouth-wrap {\n  /*border: 1px solid green;*/\n  border-top-left-radius: 5px;\n  position: absolute;\n  top: 34%;\n  left: 45%;\n  width: 77px;\n  height: 30px;\n  overflow: hidden;\n}\n\n.mouth-space {\n  /*border: 1px solid red;*/\n  position: absolute;\n  top: -3%;\n  width: 60px;\n  height: 30px;\n  background-color: #1d1b1d;\n  z-index: 1;\n}\n\n.mouth-bottom-left:after {\n  content: '';\n  display: block;\n  border: 3px solid #1d1b1d;\n  border-radius: 0px 35px 0 0;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 15%;\n  background-color: #db4227;\n  z-index: 2;\n}\n\n.tongue {\n  border: 3px solid #1d1b1d;\n  border-radius: 0px 40px 0 0;\n  width: 40px;\n  height: 35px;\n  position: absolute;\n  top: 27%;\n  left: -35%;\n  background-color: #db4227;\n  z-index: 1;\n}\n\n/*\n* \u6700\u540E\u63D2\u4E0A\u5438\u7BA1\uFF1B\n*/\n.straw-bottom {\n  border: 5px solid #1d1b1d;\n  width: 50px;\n  height: 100px;\n  position: absolute;\n  top: 7%;\n  left: 25%;\n  transform: rotate(-20deg);\n  background-color: #FFFFFF;\n}\n.straw-bottom:after {\n  content: '';\n  display: block;\n  border-top: 5px solid #1d1b1d;\n  border-bottom: 5px solid #1d1b1d;\n  margin-top: 20px;\n  width: 40px;\n  height: 35px;\n  background-color: #db4227;\n}\n\n.straw-top {\n  border: 5px solid #1d1b1d;\n  border-radius: 10px 0px 0 10px;\n  width: 90px;\n  height: 50px;\n  position: absolute;\n  top: 3%;\n  left: 15%;\n  transform: translate(1%, 2%) rotate(8deg);\n  background-color: #db4227;\n}\n\n.straw-top-cover1 {\n  border-left: 5px solid #1d1b1d;\n  border-right: 5px solid #1d1b1d;\n  border-radius: 10px 0px 0 10px;\n  width: 25px;\n  height: 41px;\n  position: absolute;\n  top: 3%;\n  left: 15%;\n  transform: translate(1%, 2%) rotate(8deg);\n  background-color: #FFFFFF;\n  z-index: 1;\n}\n\n.straw-top-cover2 {\n  /*border-left: 5px solid #1d1b1d;*/\n  border-right: 5px solid #1d1b1d;\n  width: 45px;\n  height: 60px;\n  position: absolute;\n  top: -42%;\n  left: 12%;\n  transform: translate(-64%, 2%) rotate(33deg);\n  background-color: #FFFFFF;\n  z-index: 1;\n}\n\n.straw-top-wrap {\n  /*border: 1px solid green;*/\n  border-left: 5px solid #1d1b1d;\n  margin-left: 40px;\n  margin-top: 10px;\n  width: 35px;\n  height: 40px;\n  position: absolute;\n  top: 1%;\n  left: 16%;\n  transform: translate(0%, 14%) rotate(8deg);\n  z-index: 1;\n  overflow: hidden;\n}\n/*\n* \u5927\u529F\u544A\u6210\uFF01\n*/";
var _default = style;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    html: document.querySelector('#html'),
    css: document.querySelector('#css')
  },
  events: {
    ".button.pause": "pause",
    ".button.play": "play",
    ".button.slow": "slow",
    ".button.normal": "normal",
    ".button.fast": "fast"
  },
  init: function init() {
    player.ui.html.innerText = _css.default.substring(0, player.n);
    player.ui.css.innerHTML = _css.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      // 是否不在链上
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  start: function start() {
    player.ui.html.innerText = _css.default.substring(0, player.n);
    player.ui.css.innerHTML = _css.default.substring(0, player.n);
    player.ui.html.scrollTop = player.ui.html.scrollHeight; // 如果元素滚动到底，下面等式返回true，没有则返回false.
    // element.scrollHeight - element.scrollTop === element.clientHeight

    player.n += 1;

    if (player.n >= _css.default.length + 1) {
      window.clearInterval(player.id);
    }
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.start, player.time);
  },
  pause: function pause() {
    // console.log("pause")
    window.clearInterval(player.id);
  },
  normal: function normal() {
    // console.log("normal")
    player.pause();
    player.time = 100;
    player.play();
  },
  slow: function slow() {
    // console.log("slow")
    player.pause();
    player.time = 300;
    player.play();
  },
  fast: function fast() {
    // console.log("fast")
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.78bb77ce.js.map