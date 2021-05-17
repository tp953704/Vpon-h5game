(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgInit": () => (/* binding */ bgInit),
/* harmony export */   "bgUpdate": () => (/* binding */ bgUpdate)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 每個靜態資源編譯後路徑
var skyImgUrl = __webpack_require__(/*! ./assets/images/sky.jpg */ "./src/assets/images/sky.jpg");

var mountainImgUrl = __webpack_require__(/*! ./assets/images/mountain.png */ "./src/assets/images/mountain.png");

var groundImgUrl = __webpack_require__(/*! ./assets/images/ground.jpg */ "./src/assets/images/ground.jpg"); // 背景元素 包含 背景地板 背景山 背景天空


var BackgroundElement = /*#__PURE__*/function () {
  function BackgroundElement(imgUrl, initX, initY, width, height, canvas) {
    var mul = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

    _classCallCheck(this, BackgroundElement);

    this.image = "";
    this.imgUrl = imgUrl;
    this.initX = initX;
    this.initY = initY;
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.mul = mul;
  }

  _createClass(BackgroundElement, [{
    key: "init",
    value: function init() {
      // 下面有特別需求，要避免this跑掉
      var self = this; // 背景路徑

      var ImgUrl = self.imgUrl; // 背景圖片容器生成

      var BgGroundImg = new Image(this.width); // 圖片載入後才能成功繪製

      BgGroundImg.onload = function () {
        self.image = BgGroundImg; // 初次載入直接渲染

        self.render(0);
      }; // 把圖片裝進容器


      BgGroundImg.src = ImgUrl;
      self.image = BgGroundImg;
    } // 繪製背景 => 帶入當前遊戲時間軸

  }, {
    key: "render",
    value: function render(currentTimer) {
      // 如果 圖片成功載入 繪製成canvas
      if (this.image.complete) {
        // 三個背景連接 動起來不會斷
        if (this.mul > 1) {
          // 為了讓ground背景完整呈現，不被裁切
          // 因為一次只顯示一半清楚的背景 所以狀比較多背景元素
          this.canvas.drawImage(this.image, this.initX, 0, this.width, this.height * 1.35, this.initX - currentTimer, this.initY, this.width, this.height);
          this.canvas.drawImage(this.image, this.initX, 0, this.width, this.height * 1.35, this.initX - currentTimer + this.width / 2, this.initY, this.width, this.height);
          this.canvas.drawImage(this.image, this.initX, 0, this.width, this.height * 1.35, this.initX - currentTimer + this.width, this.initY, this.width, this.height);
          this.canvas.drawImage(this.image, this.initX, 0, this.width, this.height * 1.35, this.initX - currentTimer + this.width * 3 / 2, this.initY, this.width, this.height); // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer,this.initY,this.width,this.height)
          // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+this.width,this.initY,this.width,this.height)
          // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+2*this.width,this.initY,this.width,this.height)
        } else {
          this.canvas.drawImage(this.image, this.initX - currentTimer, this.initY, this.width, this.height);
          this.canvas.drawImage(this.image, this.initX - currentTimer + this.width, this.initY, this.width, this.height);
          this.canvas.drawImage(this.image, this.initX - currentTimer + 2 * this.width, this.initY, this.width, this.height);
        }
      }
    }
  }]);

  return BackgroundElement;
}(); // 天空的背景


var skyBg; // 山的背景

var mountainBg; // 地板的背景

var groundBg; // 參數 畫布高寬與 canvas上下文

function bgInit(cvs_width, cvs_height, gameBgCanvas) {
  // 定義背景元素
  skyBg = new BackgroundElement(skyImgUrl, 0, 0, cvs_width, cvs_height * 2 / 10, gameBgCanvas);
  mountainBg = new BackgroundElement(mountainImgUrl, 0, cvs_height * 1 / 20, cvs_width, cvs_height * 2 / 10, gameBgCanvas);
  groundBg = new BackgroundElement(groundImgUrl, 0, cvs_height * 5 / 20, cvs_width, cvs_height, gameBgCanvas, 2.7); // 初次繪製 

  skyBg.init();
  mountainBg.init();
  groundBg.init();
} // 參數 畫布高寬與 canvas上下文

function bgUpdate(cvs_width, cvs_height, gameBgCanvas, currentTimer) {
  // 每個背景元素的速度 備註：天空跑超慢  山有點慢  地板元素稍微快一點
  var skySpeed = currentTimer / 3;
  var mountainSpeed = currentTimer * 2 / 3;
  var groundSpeed = currentTimer; // 清除背景畫布

  gameBgCanvas.clearRect(0, 0, cvs_width, cvs_height); // 重新渲染 帶入的數字不能超過背景寬度 所以用餘數

  skyBg.render(skySpeed % cvs_width);
  mountainBg.render(mountainSpeed % cvs_width);
  groundBg.render(groundSpeed % cvs_width);
}

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerDieAdd": () => (/* binding */ playerDieAdd),
/* harmony export */   "playerMailAdd": () => (/* binding */ playerMailAdd),
/* harmony export */   "gameStatus": () => (/* binding */ gameStatus),
/* harmony export */   "gameStatusInit": () => (/* binding */ gameStatusInit),
/* harmony export */   "gameBoardLoop": () => (/* binding */ gameBoardLoop),
/* harmony export */   "gameTeach": () => (/* binding */ gameTeach),
/* harmony export */   "finallyDraw": () => (/* binding */ finallyDraw)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _obstacle_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle/mail */ "./src/obstacle/mail.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./until */ "./src/until.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
// 初始值
 // 信件繪製方法

 // 判斷是否行動裝置

 // 玩家

 // 信件數

var mailNums = 0; // 死亡數

var dieNums = 0; // 玩家死亡

function playerDieAdd() {
  dieNums += 1;
} // 玩家吃到信

function playerMailAdd() {
  mailNums += 1;
} // 取得目前分數狀態

function gameStatus() {
  return [mailNums, dieNums];
} // 遊戲分數初始化

function gameStatusInit() {
  dieNums = 0;
  mailNums = 0;
} // 繪製及時記分板

function gameBoardLoop() {
  // 以下設定會蓋過新圖
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "source-over"; // 字形 字大小

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.font = "bold 80px Arial"; // 字對齊底部

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.textBaseline = "bottom"; // 字顏色黑黑的

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillStyle = "black"; // 將Email的圖放到需要的地方

  (0,_obstacle_mail__WEBPACK_IMPORTED_MODULE_1__.drawMail)(1, 5.3, 1); // 字的內容，與位置

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText("x".concat(mailNums), _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 1 / 8, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth);
} // 繪製教學

function gameTeach() {
  // 以下設定會蓋過新圖
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "source-over"; // 字形 字大小

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.font = "bold 50px Arial";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.textBaseline = "bottom";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.textAlign = "left"; // 背景顏色粉粉的

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillStyle = "#f3b8c8";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillRect(_init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 29 / 60, 0, _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 3, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 3); // 字顏色黑黑的

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillStyle = "black";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('操空方式為', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 3 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 7); // 不同裝置顯示字不同

  if ((0,_until__WEBPACK_IMPORTED_MODULE_2__.isMobileDevice)()) {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('A鍵往上B鍵往下', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 3 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 2 / 7);
  } else {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('鍵盤的"上下左右"', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 3 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 2 / 7);
  }
}
function finallyDraw() {
  // 以下設定會蓋過新圖
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "source-over"; // 字形 字大小

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.font = "bold 60px Arial";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.textBaseline = "bottom"; // gameCanvas.textAlign = "left"
  // 字顏色黑黑的

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillStyle = "black";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.clearRect(0, 0, _init__WEBPACK_IMPORTED_MODULE_0__.ui_width, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth);
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText("\u62FF\u5230\u4FE1\u4EF6 x".concat(mailNums), _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 2 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 3 / 10);
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText("\u5FA9\u6D3B\u6B21\u6578 x".concat(dieNums), _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 2 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 5 / 10); // 字形 字大小

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.font = "bold 30px Arial";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText("Click me and replay", _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 2 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 7 / 10); // 繪製玩家

  (0,_player__WEBPACK_IMPORTED_MODULE_3__.updatePlayer)(99);
}

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Looping": () => (/* binding */ Looping),
/* harmony export */   "pause": () => (/* binding */ pause),
/* harmony export */   "startLoop": () => (/* binding */ startLoop),
/* harmony export */   "restart": () => (/* binding */ restart),
/* harmony export */   "isGameLoop": () => (/* binding */ isGameLoop)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle/gameMaps */ "./src/obstacle/gameMaps.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./until */ "./src/until.js");
// 遊戲資訊初始化
 // 背景初始化與更新

 // 玩家

 // 障礙物繪製、障礙物地圖 、障礙物速度

 // 遊戲分數紀錄 =>及時記分板方法

 // DOM window相關工具

 //  遊戲時間軸

var currentTimer = 0; //是否暫停

var isLooping = true; // 暫停幾秒

var pauseTimer = 0; // 暫停時間

var pauseTimeFn = function pauseTimeFn() {}; // 障礙物地圖總長


var obstacleLength = _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__.obstacleArray.length; // 無限迴圈

function Looping() {
  // 是否全體元素正常運作
  if (isLooping) {
    // 清空畫布
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.clearRect(0, 0, _init__WEBPACK_IMPORTED_MODULE_0__.ui_width, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth); // 遊戲進程加一

    currentTimer += 2; // 背景渲染更新

    (0,_background__WEBPACK_IMPORTED_MODULE_1__.bgUpdate)(_init__WEBPACK_IMPORTED_MODULE_0__.bg_width, _init__WEBPACK_IMPORTED_MODULE_0__.bg_height, _init__WEBPACK_IMPORTED_MODULE_0__.gameBgCanvas, currentTimer); // 更新玩家資訊

    (0,_player__WEBPACK_IMPORTED_MODULE_2__.updatePlayer)(currentTimer); // 新圖畫在舊圖下

    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "destination-over"; // 渲染 障礙物

    (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__.drawObstacleToMap)(currentTimer); // 及時記分板渲染

    (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.gameBoardLoop)();
  } else {
    // 暫停秒數更新
    pauseTimer++;
    pauseTimeFn(pauseTimer);
  } // 新手教學，在 150Frame前


  if (currentTimer < 150) {
    (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.gameTeach)();
  } // 當currentTimer > obstacleLength/obstacleSpeed 代表 地圖跑完了


  if (currentTimer > obstacleLength / _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__.obstacleSpeed) {
    // 玩家最後動作
    pause(_player__WEBPACK_IMPORTED_MODULE_2__.PlayerFinal); // restart()
  } // 持續更新觸發


  requestAnimationFrame(Looping);
} // 暫停遊戲，參數為 暫停時要做的事和暫停總時間

function pause(pauseFn) {
  isLooping = false;
  pauseTimeFn = pauseFn;
} // 繼續遊戲

function startLoop() {
  // 暫停秒數初始化
  pauseTimer = 0;

  pauseTimeFn = function pauseTimeFn() {};

  isLooping = true;
} // 遊戲重新開始

function restart() {
  currentTimer = 0;
  startLoop();
}
function isGameLoop() {
  return isLooping;
} // 玩家遊戲中移動事件監聽綁定

(0,_until__WEBPACK_IMPORTED_MODULE_5__.gameAction)();

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameInit": () => (/* binding */ gameInit),
/* harmony export */   "gameDom": () => (/* binding */ gameDom),
/* harmony export */   "gameCanvas": () => (/* binding */ gameCanvas),
/* harmony export */   "ui_width": () => (/* binding */ ui_width),
/* harmony export */   "ui_heigth": () => (/* binding */ ui_heigth),
/* harmony export */   "gameBgDom": () => (/* binding */ gameBgDom),
/* harmony export */   "gameBgCanvas": () => (/* binding */ gameBgCanvas),
/* harmony export */   "bg_width": () => (/* binding */ bg_width),
/* harmony export */   "bg_height": () => (/* binding */ bg_height)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/background.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 背景初始化
 // 利用canvas ID 取得 DOM 和 cavans

function getCanvasAndContextById(id) {
  var dom = document.querySelector('#' + id);

  if (dom.getContext) {
    var ctx = dom.getContext('2d');
    return [dom, ctx];
  } else {
    console.error("不支援canvas");
  }
} // UICanvas // 遊戲的人物障礙物ˋ信封 畫布


var _getCanvasAndContextB = getCanvasAndContextById('game-ui'),
    _getCanvasAndContextB2 = _slicedToArray(_getCanvasAndContextB, 2),
    gameDom = _getCanvasAndContextB2[0],
    gameCanvas = _getCanvasAndContextB2[1]; // 背景Canvas // 遊戲背景 畫布


var _getCanvasAndContextB3 = getCanvasAndContextById('game-bg'),
    _getCanvasAndContextB4 = _slicedToArray(_getCanvasAndContextB3, 2),
    gameBgDom = _getCanvasAndContextB4[0],
    gameBgCanvas = _getCanvasAndContextB4[1];

var ui_width = gameDom.width;
var ui_heigth = gameDom.height; // 背景畫布寬度高度

var bg_width = gameBgDom.width;
var bg_height = gameBgDom.height; // 遊戲初始化方法

function gameInit() {
  // 背景渲染
  (0,_background__WEBPACK_IMPORTED_MODULE_0__.bgInit)(bg_width, bg_height, gameBgCanvas);
} // 遊戲的所有資訊



/***/ }),

/***/ "./src/obstacle/gameMaps.js":
/*!**********************************!*\
  !*** ./src/obstacle/gameMaps.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "obstacleSpeed": () => (/* binding */ obstacleSpeed),
/* harmony export */   "obstacleArray": () => (/* binding */ obstacleArray),
/* harmony export */   "drawObstacleToMap": () => (/* binding */ drawObstacleToMap),
/* harmony export */   "getObstacleStatus": () => (/* binding */ getObstacleStatus)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init */ "./src/init.js");
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail */ "./src/obstacle/mail.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree */ "./src/obstacle/tree.js");
/* harmony import */ var _stone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stone */ "./src/obstacle/stone.js");
// 地圖 寬17個玩家的寬(0~16)  高6條小路(0~5)
// 玩家的位置
 // 信箱繪製方法



 // 障礙物數度慢十倍

var obstacleSpeed = 1 / 30; //障礙物Array 地圖
// 1是mail 2是tree 3是stone

var obstacleArray = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0], [1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3], [0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 2, 3, 0], [0, 0, 3, 0, 1, 0], [0, 3, 0, 0, 1, 0], [0, 0, 0, 0, 2, 0], [3, 0, 0, 2, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [3, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [2, 0, 1, 0, 0, 3], [0, 0, 0, 2, 0, 3], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 3], [3, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0], [3, 0, 0, 2, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 3], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [3, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [3, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 3, 0, 0], [3, 0, 0, 0, 0, 0], [0, 2, 0, 2, 0, 0], [0, 3, 0, 2, 0, 0], [2, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0], [0, 0, 0, 3, 3, 3], [0, 0, 0, 2, 1, 3], [0, 0, 0, 3, 2, 3], [0, 0, 0, 3, 0, 2], [0, 0, 3, 0, 0, 2], [0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0], [1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 1, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0], [0, 0, 0, 2, 0, 1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1], [0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1], [0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [0, 2, 0, 2, 0, 1], [2, 0, 0, 0, 2, 1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0], [0, 3, 0, 1, 2, 0], [0, 3, 1, 0, 2, 2], [0, 3, 1, 0, 2, 0], [0, 3, 1, 0, 2, 0], [0, 3, 1, 1, 2, 0], [0, 3, 1, 1, 2, 0], [0, 3, 1, 1, 2, 0], [0, 3, 1, 1, 2, 0], [0, 3, 1, 1, 2, 0], [3, 3, 1, 1, 2, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2], [2, 3, 0, 0, 3, 2]]; // 目前障礙物的初始列

var firstIndex; // 障礙物的最後列

var lastIndex; // 障礙物繪製

function drawObstacleToMap(currentTimer) {
  // 希望障礙物慢obstacleSpeed倍
  var obstacleTimer = Math.floor(currentTimer * obstacleSpeed); // obstacleArray的大小

  var obstacleLength = obstacleArray.length; // 如果跑完了 不用渲染

  if (obstacleTimer > obstacleLength) {
    return;
  } // obstacleArray在地圖的第一列


  firstIndex = obstacleTimer; // 地圖最後一列

  lastIndex = obstacleTimer + 17 > obstacleLength ? obstacleLength : obstacleTimer + 17;

  var _loop = function _loop(i) {
    // 每一列的障礙物
    var perObstacleArray = obstacleArray[i];
    perObstacleArray.forEach(function (type, index) {
      // type === 是信封 type === 2是樹 type === 3是石頭
      if (type === 1) {
        // 因為信是飄的，所以飄在最上面
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "source-over";
        (0,_mail__WEBPACK_IMPORTED_MODULE_1__.drawMail)(i - firstIndex, index, currentTimer);
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "destination-over";
      } else if (type === 2) {
        (0,_tree__WEBPACK_IMPORTED_MODULE_2__.drawTree)(i - firstIndex, index, currentTimer);
      } else if (type === 3) {
        (0,_stone__WEBPACK_IMPORTED_MODULE_3__.drawStone)(i - firstIndex, index, currentTimer);
      }
    });
  };

  for (var i = firstIndex; i < lastIndex; i++) {
    _loop(i);
  }
} // 取得障礙物渲染狀態

function getObstacleStatus() {
  return [firstIndex, lastIndex, obstacleArray];
}

/***/ }),

/***/ "./src/obstacle/mail.js":
/*!******************************!*\
  !*** ./src/obstacle/mail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mailTouch": () => (/* binding */ mailTouch),
/* harmony export */   "drawMail": () => (/* binding */ drawMail)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init */ "./src/init.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameloop */ "./src/gameloop.js");
/* harmony import */ var _gameMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameMaps */ "./src/obstacle/gameMaps.js");


 // 信封的素材路徑

var mailImgUrl = __webpack_require__(/*! ../assets/images/mail.png */ "./src/assets/images/mail.png"); // 圖片高寬度


var mailWidth;
var mailHeight; // 圖片剪裁高寬

var mailCutWidth;
var mailCutHeight; // 每次移動的間閣單位
// 背景圖片容器生成

var mailImg = new Image(500); // 把圖片裝進容器

mailImg.src = mailImgUrl; // 圖片要成功讀取後才能渲染

mailImg.decode().then(function () {
  mailWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 20;
  mailHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 2;
  mailCutWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 34;
  mailCutHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6; // gameCanvas.drawImage(mailImg,0,0,mailCutWidth,mailCutHeight,ui_width/17*3,0,mailWidth,mailHeight)
}); // 信件被碰到的特效  帶入碰到處的X座標,碰到處的Y座標

function mailTouch(x, y) {
  // 遊戲暫停
  (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.pause)(function (pauseTimer) {
    // 這次動畫的秒數
    var animateAllTime = 4; // 這個動畫的數度

    var animateSpeed = 2; // 這個動畫的Timer

    var animateTimer = Math.floor(pauseTimer * animateSpeed); // 動畫中心X座標

    var X = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17 * x; // 動畫中心Y座標 最低為mailCutHeight*y-70

    var Y = mailCutHeight * y + 30; // 半徑 10~15

    var r = 10; // 半徑外延伸，特效的長度

    var l = 15 + Math.floor(animateTimer % 50); // 畫n條線

    var nums = 8; // 每a度劃一條線 ，Math.PI*2是360度

    var angleUnit = Math.PI * 2 / nums; // 繪製開始時初始化，不然有可能被緩存之前的數據

    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.beginPath(); // 動畫在最上面

    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "source-over";
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.strokeStyle = "yellow";

    for (var i = 0; i < nums; i++) {
      // 這次要繪製的角度
      var currentAngle = angleUnit * i; // 座標移動過去

      _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.moveTo(X + r * Math.sin(currentAngle), Y + r * Math.cos(currentAngle)); // 從上一個座標開始繪製

      _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.lineTo(X + l * Math.sin(currentAngle), Y + l * Math.cos(currentAngle));
    } // 繪製線


    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.stroke(); // 時間到 所有動畫繼續

    if (pauseTimer > animateAllTime) {
      (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.startLoop)();
    }
  });
} // 繪製信件

function drawMail(x, y, currentTimer) {
  // 每個動作間格
  var unitVal = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 33.3; // 信件上下移動單位

  var mailVerticalUnit = 470 / 5; // 信件左右移動間格
  // const horizonPosUnit = ui_width/17;

  var horizonPosUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17;
  var mailActionIndex = currentTimer % 15;

  if (mailImg.complete) {
    // 遇到一個問題，原本是這樣
    // gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
    // 但是渲染出來的結果是背景一格一格走，所以 stonePosXUnit*x 改成 stonePosXUnit*(x-1)-stonePosXUnit*(a*obstacleSpeed)
    // 原本每30Frame才會換一次位置 ，改動每次慢慢換
    var changeEveryFrame = currentTimer % (1 / _gameMaps__WEBPACK_IMPORTED_MODULE_2__.obstacleSpeed) + 1; // y軸的誤差值

    var yErrorVal = 25;
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(mailImg, unitVal * mailActionIndex, 0, mailCutWidth, mailCutHeight, horizonPosUnit * (x - changeEveryFrame / 30), yErrorVal + mailVerticalUnit * y, mailWidth, mailHeight);
  }
}

/***/ }),

/***/ "./src/obstacle/stone.js":
/*!*******************************!*\
  !*** ./src/obstacle/stone.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawStone": () => (/* binding */ drawStone)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init */ "./src/init.js");
/* harmony import */ var _gameMaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMaps */ "./src/obstacle/gameMaps.js");
// 遊戲資訊初始化



var stoneImgUrl = __webpack_require__(/*! ../assets/images/stone.png */ "./src/assets/images/stone.png");

var stoneImgElement = new Image(600);
stoneImgElement.src = stoneImgUrl; // 圖片要成功讀取後才能渲染

stoneImgElement.decode().then(function () {});
function drawStone(x, y, currentTimer) {
  // 樹的寬
  var stoneWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17; // 樹的高

  var stoneHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 4; // 圖片X軸間隔
  // 圖片Y軸間隔

  var stonePosXUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17;
  var stonePosYUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 5;

  if (stoneImgElement.complete) {
    // 遇到一個問題，原本是這樣
    // gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
    // 但是渲染出來的結果是背景一格一格走，所以 stonePosXUnit*x 改成 stonePosXUnit*(x-1)-stonePosXUnit*(a*obstacleSpeed)
    // 原本每30Frame才會換一次位置 ，改動每次慢慢換
    var changeEveryFrame = currentTimer % (1 / _gameMaps__WEBPACK_IMPORTED_MODULE_1__.obstacleSpeed) + 1;
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(stoneImgElement, stonePosXUnit * (x - changeEveryFrame / 30), stonePosYUnit * y, stoneWidth, stoneHeight);
  }
}

/***/ }),

/***/ "./src/obstacle/tree.js":
/*!******************************!*\
  !*** ./src/obstacle/tree.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawTree": () => (/* binding */ drawTree)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init */ "./src/init.js");
/* harmony import */ var _gameMaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameMaps */ "./src/obstacle/gameMaps.js");
// 遊戲資訊初始化



var treeImgUrl = __webpack_require__(/*! ../assets/images/tree.png */ "./src/assets/images/tree.png");

var treeImgElement = new Image(600);
treeImgElement.src = treeImgUrl; // 圖片要成功讀取後才能渲染

treeImgElement.decode().then(function () {// gameCanvas.drawImage(treeImgElement,ui_width/17*4,ui_heigth/6*4-25,ui_width/18,ui_heigth/4)
})["catch"](function (err) {
  console.log(err);
});
function drawTree(x, y, currentTimer) {
  // 樹的寬
  var treeWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17; // 樹的高

  var treeHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 4; // 圖片X軸間隔
  // 圖片Y軸間隔

  var treePosXUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17;
  var treePosYUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 5;

  if (treeImgElement.complete) {
    // 遇到一個問題，原本是這樣
    // gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
    // 但是渲染出來的結果是背景一格一格走，所以 stonePosXUnit*x 改成 stonePosXUnit*(x-1)-stonePosXUnit*(a*obstacleSpeed)
    // 原本每30Frame才會換一次位置 ，改動每次慢慢換
    var changeEveryFrame = currentTimer % (1 / _gameMaps__WEBPACK_IMPORTED_MODULE_1__.obstacleSpeed) + 1;
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(treeImgElement, treePosXUnit * (x - changeEveryFrame / 30), treePosYUnit * y, treeWidth, treeHeight);
  }
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updatePlayer": () => (/* binding */ updatePlayer),
/* harmony export */   "MoveUp": () => (/* binding */ MoveUp),
/* harmony export */   "MoveDown": () => (/* binding */ MoveDown),
/* harmony export */   "PlayerJump": () => (/* binding */ PlayerJump),
/* harmony export */   "PlayerFinal": () => (/* binding */ PlayerFinal)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacle/gameMaps */ "./src/obstacle/gameMaps.js");
/* harmony import */ var _obstacle_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle/mail */ "./src/obstacle/mail.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./until */ "./src/until.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 初始值
 // 遊戲循環控制

 // 取得障礙物渲染狀態

 // 信件特效

 // 遊戲分數

 // 重玩遊戲的DOM監控

 // 玩家的素材路徑

var PlayerImgUrl = __webpack_require__(/*! ./assets/images/player.png */ "./src/assets/images/player.png"); // 人物圖片的寬度


var playerWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 10; // 人物的高度

var playerHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 2.5; // 垂直移動單位

var verticalUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * -0.06; // 目前的垂直移動量 範圍 0~5 初始為2

var currentVertical = 2; // 水平位置(固定)

var initPosX = 3;
var UnitWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17;
var horizonPos = UnitWidth * initPosX; // 圖片素材總共有17個動作，每次只顯示一個

var playerPerWidth = UnitWidth; // 每個動作間格

var unitVal = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 17.39; // 初始化圖片載入

var PlayerImgElement = new Image(600);
PlayerImgElement.src = PlayerImgUrl; // 圖片要成功讀取後才能渲染

PlayerImgElement.decode().then(function () {// gameCanvas.drawImage(PlayerImgElement,0,verticalUnit*currentVertical,playerPerWidth,ui_heigth,0,0,playerWidth,playerHeight)
}); // 檢查是否有撞到東西或超出邊界

function checkMove() {
  // 垂直大小限制
  var maxVal = 5;
  var minVal = 0;

  if (currentVertical > maxVal) {
    currentVertical = maxVal;
  } else if (currentVertical < minVal) {
    currentVertical = minVal;
  }

  collapse(1);
  collapse(2);
} // 玩家在X座標比目前位置多poxPlus 撞到東西的事件


function collapse(posXPlus) {
  var _getObstacleStatus = (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__.getObstacleStatus)(),
      _getObstacleStatus2 = _slicedToArray(_getObstacleStatus, 3),
      firstIndex = _getObstacleStatus2[0],
      lastIndex = _getObstacleStatus2[1],
      obstacleArray = _getObstacleStatus2[2]; // 最後一列


  var LastCollapseIndex = obstacleArray.length - 1; // 碰撞列的Index

  var collapseIndex = firstIndex + initPosX + posXPlus; // 如果不是NaN

  if (collapseIndex === collapseIndex && collapseIndex <= LastCollapseIndex) {
    var collapseType = obstacleArray[collapseIndex][currentVertical];

    if (collapseType > 1) {
      // 撞到音效
      (0,_until__WEBPACK_IMPORTED_MODULE_5__.dieMediaPlay)(); // 播放玩家撞到動畫

      (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.pause)(PlayerJump); // 玩家死亡紀錄

      (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.playerDieAdd)();
    } // 撞到信件遊戲暫停一下，信件消失


    if (collapseType === 1) {
      // mail碰到音效
      (0,_until__WEBPACK_IMPORTED_MODULE_5__.mailMediaPlay)(); // email碰到動畫

      (0,_obstacle_mail__WEBPACK_IMPORTED_MODULE_3__.mailTouch)(initPosX + posXPlus, currentVertical); // 玩家取得信件增加

      (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.playerMailAdd)(); // 背景消失

      obstacleArray[collapseIndex][currentVertical] = 0;
    }
  }
} // 在((posX,posY))座標是否撞到


function isCollapse(posX, posY) {
  var _getObstacleStatus3 = (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__.getObstacleStatus)(),
      _getObstacleStatus4 = _slicedToArray(_getObstacleStatus3, 3),
      firstIndex = _getObstacleStatus4[0],
      lastIndex = _getObstacleStatus4[1],
      obstacleArray = _getObstacleStatus4[2]; // 碰撞列的Index


  var collapseIndex = firstIndex + posX; //  如果之後都沒障礙物 則不會撞到東西

  if (collapseIndex >= obstacleArray.length) {
    return true;
  } //  大於1 代表不是信件


  return obstacleArray[collapseIndex] && obstacleArray[collapseIndex][posY] <= 1;
} // 初始化後回傳之後更新的方式


function updatePlayer(currentTimer) {
  checkMove(); // 當前動作剪裁
  // 動作部會超過17個(0~16)，跑步動作是第9個動作到17個動作(8~16)

  var currentActionIndex = 8 + Math.floor(currentTimer / 3) % 9;
  var cutActionVal = unitVal * currentActionIndex; // // 圖片有成功讀取，才理他

  if (PlayerImgElement.complete) {
    // 清除畫布
    // gameCanvas.clearRect(horizonPos,verticalUnit*currentVertical,playerWidth,playerHeight)
    // 重新繪製
    // gameCanvas.drawImage(PlayerImgElement,cutActionVal,verticalUnit*currentVertical,playerPerWidth,ui_heigth,horizonPos,0,playerWidth,playerHeight)
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(PlayerImgElement, cutActionVal, 0, playerPerWidth, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth, horizonPos, (_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 10) * currentVertical, playerWidth, playerHeight);
  }
} // 向上移動

function MoveUp() {
  // 遊戲循環中，才會移動
  // 如果當前是遊戲暫停狀態，return ;
  if (!(0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.isGameLoop)()) {
    return;
  } // 如果移動完是障礙物 不給他移動


  if (isCollapse(initPosX + 1, currentVertical - 1) && isCollapse(initPosX, currentVertical - 1)) {
    currentVertical -= 1;
  }
} // 向下移動

function MoveDown() {
  // 遊戲循環中，才會移動
  // 如果當前是遊戲暫停狀態，return ;
  if (!(0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.isGameLoop)()) {
    return;
  } // 如果移動完是障礙物 不給他移動


  if (isCollapse(initPosX + 1, currentVertical + 1) && isCollapse(initPosX, currentVertical + 1)) {
    currentVertical += 1;
  }
} // 開場時和撞到時，馬的前腳會跳起來

function PlayerJump(Timer) {
  // 動作部會超過17個(0~16)，馬的前腳會跳起來動作是第1個動作到8個動作(0~7)
  var currentActionIndex = Math.floor(Timer / 3) % 8;
  var cutActionVal = unitVal * currentActionIndex; // 目前的透明度

  var howTransparent = Math.floor(Timer / 3) % 10 + 1;
  var Alpha = 1 / howTransparent; // // 圖片有成功讀取，才理他

  if (PlayerImgElement.complete) {
    // 清除畫布
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.clearRect(horizonPos, (_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 10) * currentVertical, playerWidth, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 4.4);
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalAlpha = Alpha; // 重新繪製

    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(PlayerImgElement, cutActionVal, 0, playerPerWidth, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth, horizonPos, (_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 10) * currentVertical, playerWidth, playerHeight);
  } // 最多跑多久


  var maxTimer = 30;

  if (Timer > maxTimer) {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalAlpha = 1;
    currentVertical = safePosY();
    (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.startLoop)();
  }
} // 當前列哪裡是安全的

function safePosY() {
  var _getObstacleStatus5 = (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__.getObstacleStatus)(),
      _getObstacleStatus6 = _slicedToArray(_getObstacleStatus5, 3),
      firstIndex = _getObstacleStatus6[0],
      lastIndex = _getObstacleStatus6[1],
      obstacleArray = _getObstacleStatus6[2]; // 碰撞列的Index


  var collapseIndex = firstIndex + initPosX + 1;
  var collapseIndex2 = firstIndex + initPosX + 2; // 未來會遇到的兩列

  var futureCol = obstacleArray[collapseIndex];
  var futureCol2 = obstacleArray[collapseIndex2]; // 玩家撞完頭後可以去的地方

  var resultCol = -1;

  for (var i = futureCol.length - 1; i >= 0; i--) {
    // 判斷後面兩列的每一行是否是障礙物
    var futureType = futureCol[i];
    var futureType2 = futureCol2[i]; // 後面兩格如果都不是障礙物 存起來

    if (futureType <= 1 && futureType2 <= 1) {
      resultCol = i;
    }
  } // 沒有答案 的狀況


  if (resultCol === -1) {
    return futureCol.findIndex(function (e) {
      e <= 1;
    });
  }

  return resultCol;
} // 玩家結束動作


function PlayerFinal(Timer) {
  // 動作部會超過17個(0~16)，馬的前腳會跳起來動作是第1個動作到8個動作(0~7)
  var currentActionIndex = Math.floor(Timer / 3) % 8;
  var cutActionVal = unitVal * currentActionIndex;

  if (PlayerImgElement.complete) {
    // 清除畫布
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.clearRect(horizonPos, (_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 10) * currentVertical, playerWidth, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 4.4); // 重新繪製

    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(PlayerImgElement, cutActionVal, 0, playerPerWidth, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth, horizonPos, (_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 6 - 10) * currentVertical, playerWidth, playerHeight);
  }

  if (Timer > 50) {
    (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.finallyDraw)();
    (0,_until__WEBPACK_IMPORTED_MODULE_5__.restartDomAction)();
  }
}

/***/ }),

/***/ "./src/until.js":
/*!**********************!*\
  !*** ./src/until.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMobileDevice": () => (/* binding */ isMobileDevice),
/* harmony export */   "gameAction": () => (/* binding */ gameAction),
/* harmony export */   "restartDomAction": () => (/* binding */ restartDomAction),
/* harmony export */   "dieMediaPlay": () => (/* binding */ dieMediaPlay),
/* harmony export */   "mailMediaPlay": () => (/* binding */ mailMediaPlay)
/* harmony export */ });
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
// 遊戲循環控制
 // 玩家

 // 遊戲分數相關初始化

 // 判斷是否行動裝置

function isMobileDevice() {
  var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'macos', 'BlackBerry', 'Windows Phone'];
  var isMobile = mobileDevice.some(function (e) {
    return navigator.userAgent.match(e);
  }); // // 新iPad的平台为 MacIntel，其他方法測步道

  return isMobile || navigator.platform.match('MacIntel');
} // 移動裝置按鈕DOM

var topButtonDom = document.querySelector(".js-moveTopBtn");
var bottomButtonDom = document.querySelector(".js-moveBottomBtn"); // 玩家移動監聽

function gameAction() {
  // 如果當前裝置是手機
  if (isMobileDevice()) {
    // 向上移動Btn監聽
    topButtonDom.addEventListener("click", function () {
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.MoveUp)();
    }, false); // 向下移動Btn監聽

    bottomButtonDom.addEventListener("click", function () {
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.MoveDown)();
    }, false);
  } else {
    // 電腦端 不需要AB按鈕
    topButtonDom.remove();
    bottomButtonDom.remove(); // 監聽鍵盤

    document.onkeyup = function (e) {
      // 上
      if (e.keyCode === 38) {
        (0,_player__WEBPACK_IMPORTED_MODULE_1__.MoveUp)();
      } // 下


      if (e.keyCode === 40) {
        (0,_player__WEBPACK_IMPORTED_MODULE_1__.MoveDown)();
      }
    };
  }
} // 結尾時，點擊遊戲可以重玩
// 觸發重新開始的DOM監聽

function restartDomAction() {
  // 整個遊戲的DOM監聽
  var gameDom = document.querySelector(".js-game-touch");

  var gamereStartFn = function gamereStartFn() {
    // 遊戲分數相關初始化
    (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__.gameStatusInit)(); // 遊戲時間軸初始化

    (0,_gameloop__WEBPACK_IMPORTED_MODULE_0__.restart)();
    gameDom.removeEventListener("click", gamereStartFn, false);
  }; // 點擊遊戲可以重玩


  gameDom.addEventListener("click", gamereStartFn, false);
}
var audioDieDom = document.querySelector("#dieMedia");
audioDieDom.pause(); // 撞到石頭或樹時會有音效   

function dieMediaPlay() {
  audioDieDom.currentTime = 0;
  audioDieDom.play();
}
var audioMailDom = document.querySelector("#mailMedia"); // 碰到MAIL到時會有音效   

function mailMediaPlay() {
  audioMailDom.currentTime = 0;
  audioMailDom.play();
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/app.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/app.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n}\n\n.app {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #f7d986;\n}\n\n.game-wrapper {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(50vw);\n  max-width: 992px;\n  max-height: 496px;\n  border: 9px #5fa6ab solid;\n  border-radius: 10px;\n  cursor: pointer;\n}\n@media (max-height: 496px) and (min-width: 992px) {\n  .game-wrapper {\n    max-width: 200vh;\n    max-height: 100vh;\n  }\n}\n@media (max-width: 50vh) {\n  .game-wrapper {\n    max-width: 80vw;\n    max-height: 40vw;\n  }\n}\n@media (max-height: 50vw) {\n  .game-wrapper {\n    max-width: 160vh;\n    max-height: 78vh;\n  }\n}\n.game-wrapper .game-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.game-wrapper .game-container .game-top-size {\n  height: 100%;\n}\n.game-wrapper .game-container .game-bottom-size {\n  height: 78%;\n}\n.game-wrapper .game-container .game-item {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.game-wrapper .game-container #game-ui {\n  z-index: 1;\n  top: 22%;\n}\n.game-wrapper .game-container #game-bg {\n  z-index: 0;\n  top: 0;\n}\n.game-wrapper .before-container {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #afa4c9;\n}\n.game-wrapper .before-container .container__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\n.game-wrapper .before-container .container__content .content__title {\n  font-size: 30px;\n  color: #026269;\n  text-align: center;\n  font-weight: bolder;\n}\n.game-wrapper .before-container .container__content .content__btn {\n  padding: 10px;\n  background-color: #aad0eb;\n  color: #602cda;\n  font-weight: bolder;\n  border-radius: 5px;\n}\n.game-wrapper .game-btn {\n  position: absolute;\n  z-index: 4;\n  bottom: 4%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n  height: 20%;\n  border-radius: 50%;\n  background-color: rgba(95, 158, 160, 0.43);\n}\n.game-wrapper .game-btn:active {\n  background-color: rgba(95, 158, 160, 0.8);\n}\n.game-wrapper .game-btn .game-btn__text {\n  font-size: calc((100vw - 320px)/60 + 20px);\n  font-weight: bolder;\n  color: rgba(96, 44, 218, 0.29);\n}\n.game-wrapper .top-btn {\n  right: 18%;\n}\n.game-wrapper .bottom-btn {\n  right: 4%;\n}\n.game-wrapper .transition-none {\n  opacity: 0;\n  transition: all 1s;\n}\n.game-wrapper .transition-none .content__btn {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/_reset.scss","webpack://./src/assets/scss/app.scss"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}","@import './reset.scss';\r\n\r\nhtml,body{\r\n    width:100%;\r\n    height: 100%;\r\n    // overflow: hidden;\r\n}\r\n\r\n.app{\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width:100%;\r\n    height: 100%;\r\n    background-color: #f7d986;\r\n}\r\n\r\n.game-wrapper{\r\n    position: relative;\r\n    top:0;\r\n    left: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    height: calc(50vw);\r\n    max-width: 992px;\r\n    max-height: 496px;\r\n    border: 9px #5fa6ab solid;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    @media(max-height:496px)and(min-width:992px){\r\n        max-width: 200vh;\r\n        max-height: 100vh;\r\n    }\r\n    @media(max-width:50vh){\r\n        max-width: 80vw;\r\n        max-height: 40vw;\r\n    }\r\n    @media(max-height:50vw){\r\n        max-width: 160vh;\r\n        max-height: 78vh;\r\n    }\r\n    .game-container{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        .game-top-size{\r\n            height: 100%;\r\n        }\r\n        .game-bottom-size{\r\n            height: 78%;\r\n        }\r\n        .game-item{\r\n            width: 100%;\r\n            position: absolute;\r\n            top: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n        }\r\n        #game-ui{\r\n            z-index: 1;\r\n            top:22%;\r\n        }\r\n        #game-bg{\r\n            z-index: 0;\r\n            top:0;\r\n        }\r\n    }\r\n    .before-container{\r\n        position: absolute;\r\n        z-index: 3;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #afa4c9;\r\n        .container__content{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            align-items:center;\r\n            height: 100%;\r\n            .content__title{\r\n                font-size: 30px;\r\n                color: #026269;\r\n                text-align: center;\r\n                font-weight: bolder;\r\n            }\r\n            .content__btn{\r\n                \r\n                padding: 10px;\r\n                background-color: #aad0eb;\r\n                color: #602cda;\r\n                font-weight: bolder;\r\n                border-radius: 5px;\r\n            }\r\n        }\r\n    }\r\n    .game-btn{\r\n        position: absolute;\r\n        z-index: 4;\r\n        bottom: 4%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 10%;\r\n        height: 20%;\r\n        border-radius: 50%;\r\n        background-color: rgb(95,158,160,0.43);\r\n        &:active{\r\n            background-color: rgb(95,158,160,0.8);\r\n        }\r\n        .game-btn__text{\r\n            //螢幕 320 字體 20px 1200 字體 80\r\n            font-size: calc((100vw - 320px)/60 + 20px);\r\n            font-weight: bolder;\r\n            color: rgb(96,44,218,29%);\r\n        }\r\n    }\r\n    .top-btn{\r\n        right: 18%;\r\n    }\r\n    .bottom-btn{\r\n        right: 4%;\r\n    }\r\n    // 慢慢消失\r\n    .transition-none{\r\n        opacity: 0;\r\n        transition: all 1s;\r\n        .content__btn{\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n    \r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/app.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/images/ground.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/ground.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/6b0e5f352c95d8a9b5ab.jpg";

/***/ }),

/***/ "./src/assets/images/mail.png":
/*!************************************!*\
  !*** ./src/assets/images/mail.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/a907e4703c4cf4eab505.png";

/***/ }),

/***/ "./src/assets/images/mountain.png":
/*!****************************************!*\
  !*** ./src/assets/images/mountain.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/3c525cd610662e12bcae.png";

/***/ }),

/***/ "./src/assets/images/player.png":
/*!**************************************!*\
  !*** ./src/assets/images/player.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/a54e08c5b8a0768c66c7.png";

/***/ }),

/***/ "./src/assets/images/sky.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/sky.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/7253121e4ecaf37e94a3.jpg";

/***/ }),

/***/ "./src/assets/images/stone.png":
/*!*************************************!*\
  !*** ./src/assets/images/stone.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/b51df76055b9c61eac7e.png";

/***/ }),

/***/ "./src/assets/images/tree.png":
/*!************************************!*\
  !*** ./src/assets/images/tree.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/3d743d0a2b06ad52dc0a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/app.scss */ "./src/assets/scss/app.scss");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./until */ "./src/until.js");
// 倒出靜態資源檔
 // 遊戲資訊初始化



 // 初始化

window.onload = function () {
  // // 先判斷當前裝置
  if ((0,_until__WEBPACK_IMPORTED_MODULE_3__.isMobileDevice)()) {} // 遊戲開始的按鈕


  var startBtnDom = document.querySelector("#startGameBtn"); // 遊戲開始前的封面

  var beforeContainerDom = document.querySelector(".js-beforeGame");
  startBtnDom.addEventListener("click", function () {
    beforeContainerDom.classList.add("transition-none");
    StartToPlayGame();
  }, false);
};

function StartToPlayGame() {
  // 遊戲初始化
  (0,_init__WEBPACK_IMPORTED_MODULE_1__.gameInit)(); // 循環觸發

  (0,_gameloop__WEBPACK_IMPORTED_MODULE_2__.Looping)();
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9nYW1lTWFwcy5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9tYWlsLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL29ic3RhY2xlL3N0b25lLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL29ic3RhY2xlL3RyZWUuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL3VudGlsLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2ViNGUiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInNreUltZ1VybCIsInJlcXVpcmUiLCJtb3VudGFpbkltZ1VybCIsImdyb3VuZEltZ1VybCIsIkJhY2tncm91bmRFbGVtZW50IiwiaW1nVXJsIiwiaW5pdFgiLCJpbml0WSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwibXVsIiwiaW1hZ2UiLCJzZWxmIiwiSW1nVXJsIiwiQmdHcm91bmRJbWciLCJJbWFnZSIsIm9ubG9hZCIsInJlbmRlciIsInNyYyIsImN1cnJlbnRUaW1lciIsImNvbXBsZXRlIiwiZHJhd0ltYWdlIiwic2t5QmciLCJtb3VudGFpbkJnIiwiZ3JvdW5kQmciLCJiZ0luaXQiLCJjdnNfd2lkdGgiLCJjdnNfaGVpZ2h0IiwiZ2FtZUJnQ2FudmFzIiwiaW5pdCIsImJnVXBkYXRlIiwic2t5U3BlZWQiLCJtb3VudGFpblNwZWVkIiwiZ3JvdW5kU3BlZWQiLCJjbGVhclJlY3QiLCJtYWlsTnVtcyIsImRpZU51bXMiLCJwbGF5ZXJEaWVBZGQiLCJwbGF5ZXJNYWlsQWRkIiwiZ2FtZVN0YXR1cyIsImdhbWVTdGF0dXNJbml0IiwiZ2FtZUJvYXJkTG9vcCIsImdhbWVDYW52YXMiLCJkcmF3TWFpbCIsInVpX3dpZHRoIiwidWlfaGVpZ3RoIiwiZ2FtZVRlYWNoIiwiaXNNb2JpbGVEZXZpY2UiLCJmaW5hbGx5RHJhdyIsInVwZGF0ZVBsYXllciIsImlzTG9vcGluZyIsInBhdXNlVGltZXIiLCJwYXVzZVRpbWVGbiIsIm9ic3RhY2xlTGVuZ3RoIiwib2JzdGFjbGVBcnJheSIsIkxvb3BpbmciLCJiZ193aWR0aCIsImJnX2hlaWdodCIsImRyYXdPYnN0YWNsZVRvTWFwIiwib2JzdGFjbGVTcGVlZCIsInBhdXNlIiwiUGxheWVyRmluYWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZUZuIiwic3RhcnRMb29wIiwicmVzdGFydCIsImlzR2FtZUxvb3AiLCJnYW1lQWN0aW9uIiwiZ2V0Q2FudmFzQW5kQ29udGV4dEJ5SWQiLCJpZCIsImRvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJjdHgiLCJjb25zb2xlIiwiZXJyb3IiLCJnYW1lRG9tIiwiZ2FtZUJnRG9tIiwiZ2FtZUluaXQiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4Iiwib2JzdGFjbGVUaW1lciIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImkiLCJwZXJPYnN0YWNsZUFycmF5IiwiZm9yRWFjaCIsInR5cGUiLCJpbmRleCIsImRyYXdUcmVlIiwiZHJhd1N0b25lIiwiZ2V0T2JzdGFjbGVTdGF0dXMiLCJtYWlsSW1nVXJsIiwibWFpbFdpZHRoIiwibWFpbEhlaWdodCIsIm1haWxDdXRXaWR0aCIsIm1haWxDdXRIZWlnaHQiLCJtYWlsSW1nIiwiZGVjb2RlIiwidGhlbiIsIm1haWxUb3VjaCIsIngiLCJ5IiwiYW5pbWF0ZUFsbFRpbWUiLCJhbmltYXRlU3BlZWQiLCJhbmltYXRlVGltZXIiLCJYIiwiWSIsInIiLCJsIiwibnVtcyIsImFuZ2xlVW5pdCIsIlBJIiwiY3VycmVudEFuZ2xlIiwic2luIiwiY29zIiwidW5pdFZhbCIsIm1haWxWZXJ0aWNhbFVuaXQiLCJob3Jpem9uUG9zVW5pdCIsIm1haWxBY3Rpb25JbmRleCIsImNoYW5nZUV2ZXJ5RnJhbWUiLCJ5RXJyb3JWYWwiLCJzdG9uZUltZ1VybCIsInN0b25lSW1nRWxlbWVudCIsInN0b25lV2lkdGgiLCJzdG9uZUhlaWdodCIsInN0b25lUG9zWFVuaXQiLCJzdG9uZVBvc1lVbml0IiwidHJlZUltZ1VybCIsInRyZWVJbWdFbGVtZW50IiwiZXJyIiwibG9nIiwidHJlZVdpZHRoIiwidHJlZUhlaWdodCIsInRyZWVQb3NYVW5pdCIsInRyZWVQb3NZVW5pdCIsIlBsYXllckltZ1VybCIsInBsYXllcldpZHRoIiwicGxheWVySGVpZ2h0IiwidmVydGljYWxVbml0IiwiY3VycmVudFZlcnRpY2FsIiwiaW5pdFBvc1giLCJVbml0V2lkdGgiLCJob3Jpem9uUG9zIiwicGxheWVyUGVyV2lkdGgiLCJQbGF5ZXJJbWdFbGVtZW50IiwiY2hlY2tNb3ZlIiwibWF4VmFsIiwibWluVmFsIiwiY29sbGFwc2UiLCJwb3NYUGx1cyIsIkxhc3RDb2xsYXBzZUluZGV4IiwiY29sbGFwc2VJbmRleCIsImNvbGxhcHNlVHlwZSIsImRpZU1lZGlhUGxheSIsIlBsYXllckp1bXAiLCJtYWlsTWVkaWFQbGF5IiwiaXNDb2xsYXBzZSIsInBvc1giLCJwb3NZIiwiY3VycmVudEFjdGlvbkluZGV4IiwiY3V0QWN0aW9uVmFsIiwiTW92ZVVwIiwiTW92ZURvd24iLCJUaW1lciIsImhvd1RyYW5zcGFyZW50IiwiQWxwaGEiLCJtYXhUaW1lciIsInNhZmVQb3NZIiwiY29sbGFwc2VJbmRleDIiLCJmdXR1cmVDb2wiLCJmdXR1cmVDb2wyIiwicmVzdWx0Q29sIiwiZnV0dXJlVHlwZSIsImZ1dHVyZVR5cGUyIiwiZmluZEluZGV4IiwiZSIsInJlc3RhcnREb21BY3Rpb24iLCJtb2JpbGVEZXZpY2UiLCJpc01vYmlsZSIsInNvbWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInBsYXRmb3JtIiwidG9wQnV0dG9uRG9tIiwiYm90dG9tQnV0dG9uRG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIm9ua2V5dXAiLCJrZXlDb2RlIiwiZ2FtZXJlU3RhcnRGbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhdWRpb0RpZURvbSIsImN1cnJlbnRUaW1lIiwicGxheSIsImF1ZGlvTWFpbERvbSIsIndpbmRvdyIsInN0YXJ0QnRuRG9tIiwiYmVmb3JlQ29udGFpbmVyRG9tIiwiY2xhc3NMaXN0IiwiYWRkIiwiU3RhcnRUb1BsYXlHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHRCxtQkFBTyxDQUFDLHNFQUFELENBQTlCOztBQUNBLElBQU1FLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyxrRUFBRCxDQUE1QixDLENBSUE7OztJQUNNRyxpQjtBQUNGLDZCQUFZQyxNQUFaLEVBQW1CQyxLQUFuQixFQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUE4Q0MsTUFBOUMsRUFBMkQ7QUFBQSxRQUFOQyxHQUFNLHVFQUFGLENBQUU7O0FBQUE7O0FBQ3ZELFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS1AsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFZQSxLQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFTQSxHQUFUO0FBQ0g7Ozs7V0FDRCxnQkFBTTtBQUNGO0FBQ0EsVUFBTUUsSUFBSSxHQUFHLElBQWIsQ0FGRSxDQUdGOztBQUNB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LENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBSHlCLEVBSXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBSnlCLEVBS3pCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBTHlCLEVBTXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBTnlCLEVBT3pCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBUHlCLEVBUXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBUnlCLEVBU3pCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBVHlCLEVBVXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBVnlCLEVBV3pCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBWHlCLEVBWXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBWnlCLEVBYXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBYnlCLEVBY3pCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBZHlCLEVBZXpCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8s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QUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxRQUFRLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sU0FBUyxLQUFLLFFBQVEsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxLQUFLLE1BQU0sV0FBVyxNQUFNLFNBQVMsS0FBSyxNQUFNLFdBQVcsTUFBTSxZQUFZLEtBQUssUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxTQUFTLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxNQUFNLE9BQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sU0FBUyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxV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RytCLHNEQUFjLEVBQWpCLEVBQW9CLENBQ25CLENBSGlCLENBSWxCOzs7QUFDQSxNQUFNeUosV0FBVyxHQUFHakksUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCLENBTGtCLENBTWxCOztBQUNBLE1BQU1pSSxrQkFBa0IsR0FBR2xJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBM0I7QUFDQWdJLGFBQVcsQ0FBQ1gsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBcUMsWUFBSTtBQUNyQ1ksc0JBQWtCLENBQUNDLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxpQkFBakM7QUFDQUMsbUJBQWU7QUFDbEIsR0FIRCxFQUdFLEtBSEY7QUFNSCxDQWREOztBQWdCQSxTQUFTQSxlQUFULEdBQTBCO0FBQ3RCO0FBQ0E3SCxpREFBUSxHQUZjLENBR3RCOztBQUNBeEIsb0RBQU87QUFDVixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyDmr4/lgIvpnZzmhYvos4fmupDnt6jora/lvozot6/lvpFcclxuY29uc3Qgc2t5SW1nVXJsID0gcmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzL3NreS5qcGcnKVxyXG5jb25zdCBtb3VudGFpbkltZ1VybCA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbi5wbmcnKVxyXG5jb25zdCBncm91bmRJbWdVcmwgPSByZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvZ3JvdW5kLmpwZycpXHJcblxyXG5cclxuXHJcbi8vIOiDjOaZr+WFg+e0oCDljIXlkKsg6IOM5pmv5Zyw5p2/IOiDjOaZr+WxsSDog4zmma/lpKnnqbpcclxuY2xhc3MgQmFja2dyb3VuZEVsZW1lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWdVcmwsaW5pdFgsaW5pdFksIHdpZHRoLCBoZWlnaHQsY2FudmFzLG11bD0xKXtcclxuICAgICAgICB0aGlzLmltYWdlID0gXCJcIlxyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsXHJcbiAgICAgICAgdGhpcy5pbml0WCA9IGluaXRYO1xyXG4gICAgICAgIHRoaXMuaW5pdFkgPSBpbml0WTtcclxuICAgICAgICB0aGlzLndpZHRoID13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xyXG4gICAgICAgIHRoaXMubXVsPW11bFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIOS4i+mdouacieeJueWIpemcgOaxgu+8jOimgemBv+WFjXRoaXPot5HmjolcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyDog4zmma/ot6/lvpFcclxuICAgICAgICBjb25zdCBJbWdVcmwgPSBzZWxmLmltZ1VybFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8g6IOM5pmv5ZyW54mH5a655Zmo55Sf5oiQXHJcbiAgICAgICAgY29uc3QgQmdHcm91bmRJbWcgPSBuZXcgSW1hZ2UodGhpcy53aWR0aCk7XHJcbiAgICAgICAgLy8g5ZyW54mH6LyJ5YWl5b6M5omN6IO95oiQ5Yqf57mq6KO9XHJcbiAgICAgICAgQmdHcm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICAgICAgICAgIC8vIOWIneasoei8ieWFpeebtOaOpea4suafk1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmiorlnJbniYfoo53pgLLlrrnlmahcclxuICAgICAgICBCZ0dyb3VuZEltZy5zcmMgPSBJbWdVcmwgXHJcbiAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICB9XHJcbiAgICAvLyDnuaroo73og4zmma8gPT4g5bi25YWl55W25YmN6YGK5oiy5pmC6ZaT6Lu4XHJcbiAgICByZW5kZXIoY3VycmVudFRpbWVyKXtcclxuICAgICAgICAvLyDlpoLmnpwg5ZyW54mH5oiQ5Yqf6LyJ5YWlIOe5quijveaIkGNhbnZhc1xyXG4gICAgICAgIGlmKHRoaXMuaW1hZ2UuY29tcGxldGUpe1xyXG4gICAgICAgICAgICAvLyDkuInlgIvog4zmma/pgKPmjqUg5YuV6LW35L6G5LiN5pyD5pa3XHJcbiAgICAgICAgICAgIGlmKHRoaXMubXVsID4xKXtcclxuICAgICAgICAgICAgICAgIC8vIOeCuuS6huiuk2dyb3VuZOiDjOaZr+WujOaVtOWRiOePvu+8jOS4jeiiq+ijgeWIh1xyXG4gICAgICAgICAgICAgICAgLy8g5Zug54K65LiA5qyh5Y+q6aGv56S65LiA5Y2K5riF5qWa55qE6IOM5pmvIOaJgOS7peeLgOavlOi8g+WkmuiDjOaZr+WFg+e0oFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCoxLjM1LHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgvMix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCoxLjM1LHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoKjMvMix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KnRoaXMubXVsLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyKzIqdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrMip0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8g5aSp56m655qE6IOM5pmvXHJcbmxldCBza3lCZztcclxuLy8g5bGx55qE6IOM5pmvXHJcbmxldCBtb3VudGFpbkJnO1xyXG4vLyDlnLDmnb/nmoTog4zmma9cclxubGV0IGdyb3VuZEJnO1xyXG5cclxuLy8g5Y+D5pW4IOeVq+W4g+mrmOWvrOiIhyBjYW52YXPkuIrkuIvmlodcclxuZXhwb3J0IGZ1bmN0aW9uIGJnSW5pdChjdnNfd2lkdGgsY3ZzX2hlaWdodCxnYW1lQmdDYW52YXMpe1xyXG5cclxuICAgIC8vIOWumue+qeiDjOaZr+WFg+e0oFxyXG4gICAgc2t5QmcgPSBuZXcgQmFja2dyb3VuZEVsZW1lbnQoc2t5SW1nVXJsLDAsMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQqMi8xMCxnYW1lQmdDYW52YXMpXHJcbiAgICBtb3VudGFpbkJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KG1vdW50YWluSW1nVXJsLDAsY3ZzX2hlaWdodCoxLzIwLGN2c193aWR0aCwgY3ZzX2hlaWdodCoyLzEwLGdhbWVCZ0NhbnZhcylcclxuICAgIGdyb3VuZEJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KGdyb3VuZEltZ1VybCwwLGN2c19oZWlnaHQqNS8yMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLDIuNylcclxuICAgIC8vIOWIneasoee5quijvSBcclxuICAgIHNreUJnLmluaXQoKVxyXG4gICAgbW91bnRhaW5CZy5pbml0KClcclxuICAgIGdyb3VuZEJnLmluaXQoKVxyXG59XHJcblxyXG4vLyDlj4Pmlbgg55Wr5biD6auY5a+s6IiHIGNhbnZhc+S4iuS4i+aWh1xyXG5leHBvcnQgZnVuY3Rpb24gYmdVcGRhdGUoY3ZzX3dpZHRoLGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmr4/lgIvog4zmma/lhYPntKDnmoTpgJ/luqYg5YKZ6Ki777ya5aSp56m66LeR6LaF5oWiICDlsbHmnInpu57mhaIgIOWcsOadv+WFg+e0oOeojeW+ruW/q+S4gOm7nlxyXG4gICAgY29uc3Qgc2t5U3BlZWQgPSBjdXJyZW50VGltZXIvMztcclxuICAgIGNvbnN0IG1vdW50YWluU3BlZWQgPSBjdXJyZW50VGltZXIqMi8zO1xyXG4gICAgY29uc3QgZ3JvdW5kU3BlZWQgPSBjdXJyZW50VGltZXI7XHJcbiAgICAvLyDmuIXpmaTog4zmma/nlavluINcclxuICAgIGdhbWVCZ0NhbnZhcy5jbGVhclJlY3QoMCwwLGN2c193aWR0aCwgY3ZzX2hlaWdodClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyDph43mlrDmuLLmn5Mg5bi25YWl55qE5pW45a2X5LiN6IO96LaF6YGO6IOM5pmv5a+s5bqmIOaJgOS7peeUqOmkmOaVuFxyXG4gICAgc2t5QmcucmVuZGVyKHNreVNwZWVkJWN2c193aWR0aClcclxuICAgIG1vdW50YWluQmcucmVuZGVyKG1vdW50YWluU3BlZWQlY3ZzX3dpZHRoKVxyXG4gICAgZ3JvdW5kQmcucmVuZGVyKGdyb3VuZFNwZWVkJWN2c193aWR0aClcclxufSIsIi8vIOWIneWni+WAvFxyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RofSBmcm9tICcuL2luaXQnXHJcbi8vIOS/oeS7tue5quijveaWueazlVxyXG5pbXBvcnQge2RyYXdNYWlsfSBmcm9tICcuL29ic3RhY2xlL21haWwnXHJcbi8vIOWIpOaWt+aYr+WQpuihjOWLleijnee9rlxyXG5pbXBvcnQge2lzTW9iaWxlRGV2aWNlfSBmcm9tICcuL3VudGlsJ1xyXG5cclxuLy8g546p5a62XHJcbmltcG9ydCB7dXBkYXRlUGxheWVyfSBmcm9tICcuL3BsYXllcidcclxuLy8g5L+h5Lu25pW4XHJcbmxldCBtYWlsTnVtcyA9IDA7XHJcblxyXG4vLyDmrbvkuqHmlbhcclxubGV0IGRpZU51bXMgPSAwO1xyXG5cclxuLy8g546p5a625q275LqhXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEaWVBZGQoKXtcclxuICAgIGRpZU51bXMrPTE7XHJcbn1cclxuXHJcbi8vIOeOqeWutuWQg+WIsOS/oVxyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTWFpbEFkZCgpe1xyXG4gICAgbWFpbE51bXMgKz0xO1xyXG59XHJcblxyXG4vLyDlj5blvpfnm67liY3liIbmlbjni4DmhYtcclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVTdGF0dXMoKXtcclxuICAgIHJldHVybiBbbWFpbE51bXMsZGllTnVtc11cclxufVxyXG4vLyDpgYrmiLLliIbmlbjliJ3lp4vljJZcclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVTdGF0dXNJbml0KCl7XHJcbiAgICBkaWVOdW1zID0gMDtcclxuICAgIG1haWxOdW1zID0gMDtcclxufVxyXG5cclxuLy8g57mq6KO95Y+K5pmC6KiY5YiG5p2/XHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lQm9hcmRMb29wKCl7XHJcbiAgICAvLyDku6XkuIvoqK3lrprmnIPok4vpgY7mlrDlnJZcclxuICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAvLyDlrZflvaIg5a2X5aSn5bCPXHJcbiAgICBnYW1lQ2FudmFzLmZvbnQgPSBcImJvbGQgODBweCBBcmlhbFwiXHJcbiAgICAvLyDlrZflsI3pvYrlupXpg6hcclxuICAgIGdhbWVDYW52YXMudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIlxyXG4gICAgLy8g5a2X6aGP6Imy6buR6buR55qEXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxTdHlsZT1cImJsYWNrXCJcclxuICAgIC8vIOWwh0VtYWls55qE5ZyW5pS+5Yiw6ZyA6KaB55qE5Zyw5pa5XHJcbiAgICBkcmF3TWFpbCgxLDUuMywxKVxyXG4gICAgLy8g5a2X55qE5YWn5a6577yM6IiH5L2N572uXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KGB4JHttYWlsTnVtc31gLHVpX3dpZHRoKjEvOCx1aV9oZWlndGgpXHJcbiAgICBcclxufVxyXG5cclxuLy8g57mq6KO95pWZ5a24XHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lVGVhY2goKXtcclxuICAgIC8vIOS7peS4i+ioreWumuacg+iTi+mBjuaWsOWcllxyXG4gICAgZ2FtZUNhbnZhcy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCJcclxuICAgIC8vIOWtl+W9oiDlrZflpKflsI9cclxuICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCA1MHB4IEFyaWFsXCJcclxuICAgIGdhbWVDYW52YXMudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIlxyXG4gICAgZ2FtZUNhbnZhcy50ZXh0QWxpZ24gPSBcImxlZnRcIlxyXG4gICAgLy8g6IOM5pmv6aGP6Imy57KJ57KJ55qEXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxTdHlsZT1cIiNmM2I4YzhcIlxyXG4gICAgZ2FtZUNhbnZhcy5maWxsUmVjdCh1aV93aWR0aCoyOS82MCwwLHVpX3dpZHRoLzMsdWlfaGVpZ3RoLzMpXHJcbiAgICAgLy8g5a2X6aGP6Imy6buR6buR55qEXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxTdHlsZT1cImJsYWNrXCJcclxuICAgIGdhbWVDYW52YXMuZmlsbFRleHQoJ+aTjeepuuaWueW8j+eCuicsdWlfd2lkdGgqMy82LHVpX2hlaWd0aC83KVxyXG4gICAgLy8g5LiN5ZCM6KOd572u6aGv56S65a2X5LiN5ZCMXHJcbiAgICBpZihpc01vYmlsZURldmljZSgpKXtcclxuICAgICAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KCdB6Y215b6A5LiKQumNteW+gOS4iycsdWlfd2lkdGgqMy82LHVpX2hlaWd0aCoyLzcpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KCfpjbXnm6TnmoRcIuS4iuS4i+W3puWPs1wiJyx1aV93aWR0aCozLzYsdWlfaGVpZ3RoKjIvNylcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5hbGx5RHJhdygpe1xyXG4gICAgIC8vIOS7peS4i+ioreWumuacg+iTi+mBjuaWsOWcllxyXG4gICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAgLy8g5a2X5b2iIOWtl+Wkp+Wwj1xyXG4gICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCA2MHB4IEFyaWFsXCJcclxuICAgICBnYW1lQ2FudmFzLnRleHRCYXNlbGluZSA9IFwiYm90dG9tXCJcclxuICAgICAvLyBnYW1lQ2FudmFzLnRleHRBbGlnbiA9IFwibGVmdFwiXHJcbiAgICAgIC8vIOWtl+mhj+iJsum7kem7keeahFxyXG4gICAgZ2FtZUNhbnZhcy5maWxsU3R5bGU9XCJibGFja1wiXHJcbiAgICAgXHJcbiAgICAgZ2FtZUNhbnZhcy5jbGVhclJlY3QoMCwwLHVpX3dpZHRoLHVpX2hlaWd0aClcclxuICAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KGDmi7/liLDkv6Hku7YgeCR7bWFpbE51bXN9YCx1aV93aWR0aCoyLzYsdWlfaGVpZ3RoKjMvMTApXHJcbiAgICAgZ2FtZUNhbnZhcy5maWxsVGV4dChg5b6p5rS75qyh5pW4IHgke2RpZU51bXN9YCx1aV93aWR0aCoyLzYsdWlfaGVpZ3RoKjUvMTApXHJcbiAgICAgLy8g5a2X5b2iIOWtl+Wkp+Wwj1xyXG4gICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCAzMHB4IEFyaWFsXCJcclxuICAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KFwiQ2xpY2sgbWUgYW5kIHJlcGxheVwiLHVpX3dpZHRoKjIvNix1aV9oZWlndGgqNy8xMClcclxuICAgIC8vIOe5quijveeOqeWutlxyXG4gICAgdXBkYXRlUGxheWVyKDk5KVxyXG59IiwiXHJcbi8vIOmBiuaIsuizh+ioiuWIneWni+WMllxyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RoLGdhbWVCZ0NhbnZhcyxiZ193aWR0aCxiZ19oZWlnaHR9IGZyb20gJy4vaW5pdCdcclxuLy8g6IOM5pmv5Yid5aeL5YyW6IiH5pu05pawXHJcbmltcG9ydCB7YmdVcGRhdGV9IGZyb20gJy4vYmFja2dyb3VuZCdcclxuLy8g546p5a62XHJcbmltcG9ydCB7dXBkYXRlUGxheWVyLFBsYXllckZpbmFsfSBmcm9tICcuL3BsYXllcidcclxuLy8g6Zqc56SZ54mp57mq6KO944CB6Zqc56SZ54mp5Zyw5ZyWIOOAgemanOekmeeJqemAn+W6plxyXG5pbXBvcnQge2RyYXdPYnN0YWNsZVRvTWFwLG9ic3RhY2xlQXJyYXksb2JzdGFjbGVTcGVlZH0gZnJvbSAnLi9vYnN0YWNsZS9nYW1lTWFwcyc7XHJcbi8vIOmBiuaIsuWIhuaVuOe0gOmMhCA9PuWPiuaZguiomOWIhuadv+aWueazlVxyXG5pbXBvcnQge2dhbWVCb2FyZExvb3AsZ2FtZVRlYWNofSBmcm9tICcuL2dhbWVCb2FyZCdcclxuLy8gRE9NIHdpbmRvd+ebuOmXnOW3peWFt1xyXG5pbXBvcnQge2dhbWVBY3Rpb259IGZyb20gJy4vdW50aWwnXHJcblxyXG4vLyAg6YGK5oiy5pmC6ZaT6Lu4XHJcbmxldCBjdXJyZW50VGltZXIgPSAwOyBcclxuXHJcbi8v5piv5ZCm5pqr5YGcXHJcbmxldCBpc0xvb3BpbmcgPSB0cnVlO1xyXG5cclxuLy8g5pqr5YGc5bm+56eSXHJcbmxldCBwYXVzZVRpbWVyID0gMDtcclxuXHJcblxyXG4vLyDmmqvlgZzmmYLplpNcclxubGV0IHBhdXNlVGltZUZuID0gKCk9Pnt9XHJcblxyXG4vLyDpmpznpJnnianlnLDlnJbnuL3plbdcclxubGV0IG9ic3RhY2xlTGVuZ3RoID0gb2JzdGFjbGVBcnJheS5sZW5ndGhcclxuLy8g54Sh6ZmQ6L+05ZyIXHJcbmV4cG9ydCBmdW5jdGlvbiBMb29waW5nKCl7XHJcbiAgICAvLyDmmK/lkKblhajpq5TlhYPntKDmraPluLjpgYvkvZxcclxuICAgIGlmKGlzTG9vcGluZyl7XHJcbiAgICAgICAgLy8g5riF56m655Wr5biDXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5jbGVhclJlY3QoMCwwLHVpX3dpZHRoLHVpX2hlaWd0aClcclxuICAgICAgICAvLyDpgYrmiLLpgLLnqIvliqDkuIBcclxuICAgICAgICBjdXJyZW50VGltZXIrPTI7XHJcbiAgICAgICAgLy8g6IOM5pmv5riy5p+T5pu05pawXHJcbiAgICAgICAgYmdVcGRhdGUoYmdfd2lkdGgsYmdfaGVpZ2h0LGdhbWVCZ0NhbnZhcyxjdXJyZW50VGltZXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5pu05paw546p5a626LOH6KiKXHJcbiAgICAgICAgdXBkYXRlUGxheWVyKGN1cnJlbnRUaW1lcilcclxuICAgICAgICAvLyDmlrDlnJbnlavlnKjoiIrlnJbkuItcclxuICAgICAgICBnYW1lQ2FudmFzLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tb3ZlclwiXHJcbiAgICAgICAgICAvLyDmuLLmn5Mg6Zqc56SZ54mpXHJcbiAgICAgICAgZHJhd09ic3RhY2xlVG9NYXAoY3VycmVudFRpbWVyKVxyXG4gICAgICAgIC8vIOWPiuaZguiomOWIhuadv+a4suafk1xyXG4gICAgICAgIGdhbWVCb2FyZExvb3AoKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgLy8g5pqr5YGc56eS5pW45pu05pawXHJcbiAgICAgICAgcGF1c2VUaW1lcisrO1xyXG4gICAgICAgIHBhdXNlVGltZUZuKHBhdXNlVGltZXIpXHJcbiAgICB9XHJcbiAgICAvLyDmlrDmiYvmlZnlrbjvvIzlnKggMTUwRnJhbWXliY1cclxuICAgIGlmKGN1cnJlbnRUaW1lcjwxNTApe1xyXG4gICAgICAgIGdhbWVUZWFjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55W2Y3VycmVudFRpbWVyID4gb2JzdGFjbGVMZW5ndGgvb2JzdGFjbGVTcGVlZCDku6Pooagg5Zyw5ZyW6LeR5a6M5LqGXHJcbiAgICBpZihjdXJyZW50VGltZXI+b2JzdGFjbGVMZW5ndGgvb2JzdGFjbGVTcGVlZCl7XHJcbiAgICAgICAgLy8g546p5a625pyA5b6M5YuV5L2cXHJcbiAgICAgICAgcGF1c2UoUGxheWVyRmluYWwpXHJcbiAgICAgICAgLy8gcmVzdGFydCgpXHJcbiAgICB9XHJcbiAgICAvLyDmjIHnuozmm7TmlrDop7jnmbxcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShMb29waW5nKVxyXG59XHJcbi8vIOaaq+WBnOmBiuaIsu+8jOWPg+aVuOeCuiDmmqvlgZzmmYLopoHlgZrnmoTkuovlkozmmqvlgZznuL3mmYLplpNcclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlKHBhdXNlRm4pe1xyXG4gICAgaXNMb29waW5nID0gZmFsc2U7XHJcbiAgICBwYXVzZVRpbWVGbiA9IHBhdXNlRm5cclxufVxyXG4vLyDnubznuozpgYrmiLJcclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0TG9vcCgpe1xyXG4gICAgLy8g5pqr5YGc56eS5pW45Yid5aeL5YyWXHJcbiAgICBwYXVzZVRpbWVyPTA7XHJcbiAgICBwYXVzZVRpbWVGbj0oKT0+e31cclxuICAgIGlzTG9vcGluZyA9IHRydWVcclxufVxyXG4vLyDpgYrmiLLph43mlrDplovlp4tcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RhcnQoKXtcclxuICAgIGN1cnJlbnRUaW1lciA9IDA7XHJcbiAgICBzdGFydExvb3AoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNHYW1lTG9vcCgpe1xyXG4gICAgcmV0dXJuIGlzTG9vcGluZztcclxufVxyXG5cclxuXHJcbi8vIOeOqeWutumBiuaIsuS4reenu+WLleS6i+S7tuebo+iBvee2geWumlxyXG5nYW1lQWN0aW9uKClcclxuXHJcblxyXG4iLCJcclxuLy8g6IOM5pmv5Yid5aeL5YyWXHJcbmltcG9ydCB7YmdJbml0fSBmcm9tICcuL2JhY2tncm91bmQnXHJcbi8vIOWIqeeUqGNhbnZhcyBJRCDlj5blvpcgRE9NIOWSjCBjYXZhbnNcclxuZnVuY3Rpb24gZ2V0Q2FudmFzQW5kQ29udGV4dEJ5SWQoaWQpe1xyXG4gICAgY29uc3QgZG9tID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJysgaWQpO1xyXG4gICAgaWYoZG9tLmdldENvbnRleHQpe1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGRvbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHJldHVybltkb20sIGN0eF07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5LiN5pSv5o+0Y2FudmFzXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBVSUNhbnZhcyAvLyDpgYrmiLLnmoTkurrnianpmpznpJnnianLi+S/oeWwgSDnlavluINcclxuY29uc3QgW2dhbWVEb20sZ2FtZUNhbnZhc10gPSBnZXRDYW52YXNBbmRDb250ZXh0QnlJZCgnZ2FtZS11aScpXHJcbi8vIOiDjOaZr0NhbnZhcyAvLyDpgYrmiLLog4zmma8g55Wr5biDXHJcbmNvbnN0IFtnYW1lQmdEb20sZ2FtZUJnQ2FudmFzXSA9IGdldENhbnZhc0FuZENvbnRleHRCeUlkKCdnYW1lLWJnJylcclxuXHJcbmNvbnN0IHVpX3dpZHRoID0gZ2FtZURvbS53aWR0aDtcclxuY29uc3QgdWlfaGVpZ3RoID0gZ2FtZURvbS5oZWlnaHQ7XHJcblxyXG4vLyDog4zmma/nlavluIPlr6zluqbpq5jluqZcclxuY29uc3QgYmdfd2lkdGggPSBnYW1lQmdEb20ud2lkdGg7XHJcbmNvbnN0IGJnX2hlaWdodCA9IGdhbWVCZ0RvbS5oZWlnaHQ7XHJcblxyXG4vLyDpgYrmiLLliJ3lp4vljJbmlrnms5VcclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVJbml0KCl7XHJcbiAgICAvLyDog4zmma/muLLmn5NcclxuICAgIGJnSW5pdChiZ193aWR0aCxiZ19oZWlnaHQsZ2FtZUJnQ2FudmFzKVxyXG59XHJcblxyXG4vLyDpgYrmiLLnmoTmiYDmnInos4foqIpcclxuZXhwb3J0IHtnYW1lRG9tLGdhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RoLGdhbWVCZ0RvbSxnYW1lQmdDYW52YXMsYmdfd2lkdGgsYmdfaGVpZ2h0fVxyXG5cclxuIiwiLy8g5Zyw5ZyWIOWvrDE35YCL546p5a6255qE5a+sKDB+MTYpICDpq5g25qKd5bCP6LevKDB+NSlcclxuLy8g546p5a6255qE5L2N572uXHJcbmltcG9ydCB7Z2FtZUNhbnZhc30gZnJvbSAnLi4vaW5pdCdcclxuXHJcbi8vIOS/oeeusee5quijveaWueazlVxyXG5pbXBvcnQge2RyYXdNYWlsfSBmcm9tICcuL21haWwnXHJcbmltcG9ydCB7ZHJhd1RyZWV9IGZyb20gJy4vdHJlZSdcclxuaW1wb3J0IHtkcmF3U3RvbmV9IGZyb20gJy4vc3RvbmUnXHJcblxyXG4vLyDpmpznpJnnianmlbjluqbmhaLljYHlgI1cclxuZXhwb3J0IGNvbnN0IG9ic3RhY2xlU3BlZWQgPSAxLzMwXHJcblxyXG4vL+manOekmeeJqUFycmF5IOWcsOWcllxyXG4vLyAx5pivbWFpbCAy5pivdHJlZSAz5pivc3RvbmVcclxuZXhwb3J0IGNvbnN0IG9ic3RhY2xlQXJyYXkgPSBbXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMSwxLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMSwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwzLDAsMCwwXSxcclxuICAgIFsxLDEsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwzXSxcclxuICAgIFswLDAsMiwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDIsMywwXSxcclxuICAgIFswLDAsMywwLDEsMF0sXHJcbiAgICBbMCwzLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDAsMiwwXSwgXHJcbiAgICBbMywwLDAsMiwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMywwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFsyLDAsMSwwLDAsM10sICBcclxuICAgIFswLDAsMCwyLDAsM10sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwzXSxcclxuICAgIFszLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDAsMSwwXSwgIFxyXG4gICAgWzMsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLCAgXHJcbiAgICBbMCwwLDAsMiwwLDNdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMywwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sICBcclxuICAgIFszLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwyLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSwgIFxyXG4gICAgWzMsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMywwLDBdLCAgXHJcbiAgICBbMywwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDIsMCwwXSxcclxuICAgIFswLDMsMCwyLDAsMF0sXHJcbiAgICBbMiwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwzLDMsM10sICBcclxuICAgIFswLDAsMCwyLDEsM10sXHJcbiAgICBbMCwwLDAsMywyLDNdLFxyXG4gICAgWzAsMCwwLDMsMCwyXSxcclxuICAgIFswLDAsMywwLDAsMl0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwwXSwgIFxyXG4gICAgWzEsMCwwLDAsMCwxXSxcclxuICAgIFswLDEsMCwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMSwwLDBdLFxyXG4gICAgWzAsMCwxLDEsMCwwXSxcclxuICAgIFswLDAsMSwxLDAsMF0sXHJcbiAgICBbMCwxLDAsMSwwLDBdLCAgXHJcbiAgICBbMSwwLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwxXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwyLDEsMF0sICBcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDEsMF0sXHJcbiAgICBbMCwxLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFsxLDAsMCwwLDEsMV0sXHJcbiAgICBbMCwwLDIsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMV0sXHJcbiAgICBbMCwwLDIsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMiwwLDAsMCwyLDBdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzIsMCwwLDAsMiwxXSxcclxuICAgIFswLDAsMCwwLDAsMV0sXHJcbiAgICBbMCwwLDAsMCwwLDFdLFxyXG4gICAgWzAsMCwwLDAsMCwxXSxcclxuICAgIFswLDAsMCwxLDAsMV0sXHJcbiAgICBbMCwwLDAsMSwwLDFdLFxyXG4gICAgWzAsMCwwLDEsMCwxXSxcclxuICAgIFswLDAsMCwxLDAsMV0sXHJcbiAgICBbMCwwLDAsMSwwLDFdLFxyXG4gICAgWzAsMCwwLDEsMCwwXSxcclxuICAgIFswLDAsMCwxLDAsMF0sXHJcbiAgICBbMCwzLDAsMSwyLDBdLFxyXG4gICAgWzAsMywxLDAsMiwyXSxcclxuICAgIFswLDMsMSwwLDIsMF0sXHJcbiAgICBbMCwzLDEsMCwyLDBdLFxyXG4gICAgWzAsMywxLDEsMiwwXSxcclxuICAgIFswLDMsMSwxLDIsMF0sXHJcbiAgICBbMCwzLDEsMSwyLDBdLFxyXG4gICAgWzAsMywxLDEsMiwwXSxcclxuICAgIFswLDMsMSwxLDIsMF0sXHJcbiAgICBbMywzLDEsMSwyLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSwgICBcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG5dXHJcblxyXG4vLyDnm67liY3pmpznpJnniannmoTliJ3lp4vliJdcclxubGV0IGZpcnN0SW5kZXg7XHJcbi8vIOmanOekmeeJqeeahOacgOW+jOWIl1xyXG5sZXQgbGFzdEluZGV4O1xyXG5cclxuXHJcbi8vIOmanOekmeeJqee5quijvVxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd09ic3RhY2xlVG9NYXAoY3VycmVudFRpbWVyKXtcclxuICAgIC8vIOW4jOacm+manOekmeeJqeaFom9ic3RhY2xlU3BlZWTlgI1cclxuICAgIGNvbnN0IG9ic3RhY2xlVGltZXIgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lcipvYnN0YWNsZVNwZWVkKVxyXG4gICAgLy8gb2JzdGFjbGVBcnJheeeahOWkp+Wwj1xyXG4gICAgbGV0IG9ic3RhY2xlTGVuZ3RoID0gb2JzdGFjbGVBcnJheS5sZW5ndGhcclxuICAgIC8vIOWmguaenOi3keWujOS6hiDkuI3nlKjmuLLmn5NcclxuICAgIGlmKG9ic3RhY2xlVGltZXI+b2JzdGFjbGVMZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcbiAgICAvLyBvYnN0YWNsZUFycmF55Zyo5Zyw5ZyW55qE56ys5LiA5YiXXHJcbiAgICBmaXJzdEluZGV4ID0gb2JzdGFjbGVUaW1lclxyXG4gICAgLy8g5Zyw5ZyW5pyA5b6M5LiA5YiXXHJcbiAgICBsYXN0SW5kZXggPSAob2JzdGFjbGVUaW1lcisxNz5vYnN0YWNsZUxlbmd0aCk/b2JzdGFjbGVMZW5ndGg6b2JzdGFjbGVUaW1lcisxN1xyXG5cclxuICAgIGZvcihsZXQgaT1maXJzdEluZGV4OyBpPGxhc3RJbmRleDsgaSsrKXtcclxuICAgICAgICAvLyDmr4/kuIDliJfnmoTpmpznpJnnialcclxuICAgICAgICBjb25zdCBwZXJPYnN0YWNsZUFycmF5ID0gb2JzdGFjbGVBcnJheVtpXVxyXG4gICAgICAgIHBlck9ic3RhY2xlQXJyYXkuZm9yRWFjaCgodHlwZSxpbmRleCk9PntcclxuICAgICAgICAgICAgLy8gdHlwZSA9PT0g5piv5L+h5bCBIHR5cGUgPT09IDLmmK/mqLkgdHlwZSA9PT0gM+aYr+efs+mgrVxyXG4gICAgICAgICAgICBpZih0eXBlPT09MSl7XHJcbiAgICAgICAgICAgICAgICAvLyDlm6Dngrrkv6HmmK/po4TnmoTvvIzmiYDku6Xpo4TlnKjmnIDkuIrpnaJcclxuICAgICAgICAgICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAgICAgICAgICAgICBkcmF3TWFpbChpLWZpcnN0SW5kZXgsaW5kZXgsY3VycmVudFRpbWVyKVxyXG4gICAgICAgICAgICAgICAgZ2FtZUNhbnZhcy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLW92ZXJcIlxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlPT09Mil7XHJcbiAgICAgICAgICAgICAgICBkcmF3VHJlZShpLWZpcnN0SW5kZXgsaW5kZXgsY3VycmVudFRpbWVyKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlPT09Myl7XHJcbiAgICAgICAgICAgICAgICBkcmF3U3RvbmUoaS1maXJzdEluZGV4LGluZGV4LGN1cnJlbnRUaW1lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWPluW+l+manOekmeeJqea4suafk+eLgOaFi1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzdGFjbGVTdGF0dXMoKXtcclxuICAgIHJldHVybiBbZmlyc3RJbmRleCxsYXN0SW5kZXgsb2JzdGFjbGVBcnJheV1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuXHJcbmltcG9ydCB7cGF1c2Usc3RhcnRMb29wfSBmcm9tICcuLi9nYW1lbG9vcCdcclxuaW1wb3J0IHtvYnN0YWNsZVNwZWVkfSBmcm9tICcuL2dhbWVNYXBzJ1xyXG4vLyDkv6HlsIHnmoTntKDmnZDot6/lvpFcclxuY29uc3QgbWFpbEltZ1VybCA9IHJlcXVpcmUoJy4uL2Fzc2V0cy9pbWFnZXMvbWFpbC5wbmcnKVxyXG5cclxuLy8g5ZyW54mH6auY5a+s5bqmXHJcbmxldCBtYWlsV2lkdGg7XHJcbmxldCBtYWlsSGVpZ2h0O1xyXG4vLyDlnJbniYfliaroo4Hpq5jlr6xcclxubGV0IG1haWxDdXRXaWR0aDtcclxubGV0IG1haWxDdXRIZWlnaHRcclxuXHJcbi8vIOavj+asoeenu+WLleeahOmWk+mWo+WWruS9jVxyXG5cclxuLy8g6IOM5pmv5ZyW54mH5a655Zmo55Sf5oiQXHJcbmNvbnN0IG1haWxJbWcgPSBuZXcgSW1hZ2UoNTAwKTtcclxuLy8g5oqK5ZyW54mH6KOd6YCy5a655ZmoXHJcbm1haWxJbWcuc3JjID0gbWFpbEltZ1VybCBcclxuXHJcbi8vIOWclueJh+imgeaIkOWKn+iugOWPluW+jOaJjeiDvea4suafk1xyXG5tYWlsSW1nLmRlY29kZSgpXHJcbi50aGVuKCgpID0+IHtcclxuICAgIG1haWxXaWR0aCA9IHVpX3dpZHRoLzIwO1xyXG4gICAgbWFpbEhlaWdodCA9IHVpX2hlaWd0aC8yO1xyXG4gICAgbWFpbEN1dFdpZHRoID0gdWlfd2lkdGgvMzQ7XHJcbiAgICBtYWlsQ3V0SGVpZ2h0ID0gdWlfaGVpZ3RoLzY7XHJcbiAgICBcclxuICAgIC8vIGdhbWVDYW52YXMuZHJhd0ltYWdlKG1haWxJbWcsMCwwLG1haWxDdXRXaWR0aCxtYWlsQ3V0SGVpZ2h0LHVpX3dpZHRoLzE3KjMsMCxtYWlsV2lkdGgsbWFpbEhlaWdodClcclxufSlcclxuXHJcblxyXG4vLyDkv6Hku7booqvnorDliLDnmoTnibnmlYggIOW4tuWFpeeisOWIsOiZleeahFjluqfmqJks56Kw5Yiw6JmV55qEWeW6p+aomVxyXG5leHBvcnQgZnVuY3Rpb24gbWFpbFRvdWNoKHgseSl7XHJcbiAgICAvLyDpgYrmiLLmmqvlgZxcclxuICAgIHBhdXNlKChwYXVzZVRpbWVyKT0+e1xyXG4gICAgICAgIC8vIOmAmeasoeWLleeVq+eahOenkuaVuFxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGVBbGxUaW1lID0gNFxyXG4gICAgICAgIC8vIOmAmeWAi+WLleeVq+eahOaVuOW6plxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGVTcGVlZCA9IDJcclxuICAgICAgICAvLyDpgJnlgIvli5XnlavnmoRUaW1lclxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGVUaW1lciA9IE1hdGguZmxvb3IocGF1c2VUaW1lciphbmltYXRlU3BlZWQpXHJcbiAgICAgICAgLy8g5YuV55Wr5Lit5b+DWOW6p+aomVxyXG4gICAgICAgIGxldCBYPSh1aV93aWR0aC8xNykqeFxyXG4gICAgICAgIC8vIOWLleeVq+S4reW/g1nluqfmqJkg5pyA5L2O54K6bWFpbEN1dEhlaWdodCp5LTcwXHJcbiAgICAgICAgbGV0IFk9KG1haWxDdXRIZWlnaHQpKnkrMzBcclxuICAgICAgICAvLyDljYrlvpEgMTB+MTVcclxuICAgICAgICBsZXQgcj0xMFxyXG4gICAgICAgIC8vIOWNiuW+keWkluW7tuS8uO+8jOeJueaViOeahOmVt+W6plxyXG4gICAgICAgIGxldCBsPTE1KyhNYXRoLmZsb29yKGFuaW1hdGVUaW1lciU1MCkpXHJcbiAgICAgICAgLy8g55Wrbuainee3mlxyXG4gICAgICAgIGxldCBudW1zID0gODtcclxuICAgICAgICAvLyDmr49h5bqm5YqD5LiA5qKd57eaIO+8jE1hdGguUEkqMuaYrzM2MOW6plxyXG4gICAgICAgIGxldCBhbmdsZVVuaXQgPU1hdGguUEkqMi9udW1zXHJcbiAgICAgICAgLy8g57mq6KO96ZaL5aeL5pmC5Yid5aeL5YyW77yM5LiN54S25pyJ5Y+v6IO96KKr57ep5a2Y5LmL5YmN55qE5pW45pOaXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5iZWdpblBhdGgoKVxyXG4gICAgICAgIC8vIOWLleeVq+WcqOacgOS4iumdolxyXG4gICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5zdHJva2VTdHlsZT1cInllbGxvd1wiXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxudW1zO2krKyl7XHJcbiAgICAgICAgICAgIC8vIOmAmeasoeimgee5quijveeahOinkuW6plxyXG4gICAgICAgICAgICBsZXQgY3VycmVudEFuZ2xlID0gYW5nbGVVbml0KmlcclxuICAgICAgICAgICAgLy8g5bqn5qiZ56e75YuV6YGO5Y67XHJcbiAgICAgICAgICAgIGdhbWVDYW52YXMubW92ZVRvKFgrcipNYXRoLnNpbihjdXJyZW50QW5nbGUpLFkrcipNYXRoLmNvcyhjdXJyZW50QW5nbGUpKVxyXG4gICAgICAgICAgICAvLyDlvp7kuIrkuIDlgIvluqfmqJnplovlp4vnuaroo71cclxuICAgICAgICAgICAgZ2FtZUNhbnZhcy5saW5lVG8oWCtsKk1hdGguc2luKGN1cnJlbnRBbmdsZSksWStsKk1hdGguY29zKGN1cnJlbnRBbmdsZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe5quijvee3mlxyXG4gICAgICAgIGdhbWVDYW52YXMuc3Ryb2tlKClcclxuICAgICAgICAvLyDmmYLplpPliLAg5omA5pyJ5YuV55Wr57m857qMXHJcbiAgICAgICAgaWYocGF1c2VUaW1lcj5hbmltYXRlQWxsVGltZSl7XHJcbiAgICAgICAgICAgIHN0YXJ0TG9vcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vLyDnuaroo73kv6Hku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdNYWlsKHgseSxjdXJyZW50VGltZXIpe1xyXG4gICAgLy8g5q+P5YCL5YuV5L2c6ZaT5qC8XHJcbiAgICBjb25zdCB1bml0VmFsID0gdWlfd2lkdGgvMzMuMztcclxuICAgIC8vIOS/oeS7tuS4iuS4i+enu+WLleWWruS9jVxyXG4gICAgY29uc3QgbWFpbFZlcnRpY2FsVW5pdCA9IDQ3MC81XHJcbiAgICAvLyDkv6Hku7blt6blj7Pnp7vli5XplpPmoLxcclxuICAgIC8vIGNvbnN0IGhvcml6b25Qb3NVbml0ID0gdWlfd2lkdGgvMTc7XHJcbiAgICBjb25zdCBob3Jpem9uUG9zVW5pdCA9IHVpX3dpZHRoLzE3XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbEFjdGlvbkluZGV4ID0gKGN1cnJlbnRUaW1lciklMTU7XHJcbiAgICBcclxuICAgIGlmKG1haWxJbWcuY29tcGxldGUpe1xyXG4gICAgICAgIC8vIOmBh+WIsOS4gOWAi+WVj+mhjO+8jOWOn+acrOaYr+mAmeaoo1xyXG4gICAgICAgIC8vIGdhbWVDYW52YXMuZHJhd0ltYWdlKHN0b25lSW1nRWxlbWVudCxzdG9uZVBvc1hVbml0Kngsc3RvbmVQb3NZVW5pdCp5LHN0b25lV2lkdGgsc3RvbmVIZWlnaHQpXHJcbiAgICAgICAgLy8g5L2G5piv5riy5p+T5Ye65L6G55qE57WQ5p6c5piv6IOM5pmv5LiA5qC85LiA5qC86LWw77yM5omA5LulIHN0b25lUG9zWFVuaXQqeCDmlLnmiJAgc3RvbmVQb3NYVW5pdCooeC0xKS1zdG9uZVBvc1hVbml0KihhKm9ic3RhY2xlU3BlZWQpXHJcbiAgICAgICAgIC8vIOWOn+acrOavjzMwRnJhbWXmiY3mnIPmj5vkuIDmrKHkvY3nva4g77yM5pS55YuV5q+P5qyh5oWi5oWi5o+bXHJcbiAgICAgICAgY29uc3QgY2hhbmdlRXZlcnlGcmFtZSA9IGN1cnJlbnRUaW1lciUoMS9vYnN0YWNsZVNwZWVkKSsxXHJcbiAgICAgICAgLy8geei7uOeahOiqpOW3ruWAvFxyXG4gICAgICAgIGNvbnN0IHlFcnJvclZhbCA9IDI1XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2UobWFpbEltZyx1bml0VmFsKm1haWxBY3Rpb25JbmRleCwwLG1haWxDdXRXaWR0aCxtYWlsQ3V0SGVpZ2h0LGhvcml6b25Qb3NVbml0Kih4LWNoYW5nZUV2ZXJ5RnJhbWUvMzApLHlFcnJvclZhbCttYWlsVmVydGljYWxVbml0KnksbWFpbFdpZHRoLG1haWxIZWlnaHQpXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIOmBiuaIsuizh+ioiuWIneWni+WMllxyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RofSBmcm9tICcuLi9pbml0J1xyXG5pbXBvcnQge29ic3RhY2xlU3BlZWR9IGZyb20gJy4vZ2FtZU1hcHMnXHJcbmNvbnN0IHN0b25lSW1nVXJsID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvc3RvbmUucG5nXCIpXHJcblxyXG5jb25zdCBzdG9uZUltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoNjAwKTtcclxuc3RvbmVJbWdFbGVtZW50LnNyYz1zdG9uZUltZ1VybFxyXG4vLyDlnJbniYfopoHmiJDlip/oroDlj5blvozmiY3og73muLLmn5Ncclxuc3RvbmVJbWdFbGVtZW50LmRlY29kZSgpLnRoZW4oKCk9PntcclxuICAgIFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RvbmUoeCx5LGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmqLnnmoTlr6xcclxuICAgIGNvbnN0IHN0b25lV2lkdGggPSB1aV93aWR0aC8xNztcclxuICAgIC8vIOaoueeahOmrmFxyXG4gICAgY29uc3Qgc3RvbmVIZWlnaHQgPSB1aV9oZWlndGgvNDtcclxuXHJcbiAgICAvLyDlnJbniYdY6Lu46ZaT6ZqUXHJcbiAgICAvLyDlnJbniYdZ6Lu46ZaT6ZqUXHJcbiAgICBjb25zdCBzdG9uZVBvc1hVbml0ID0gdWlfd2lkdGgvMTc7ICBcclxuICAgIGNvbnN0IHN0b25lUG9zWVVuaXQgPSB1aV9oZWlndGgvNi01O1xyXG4gICAgaWYoc3RvbmVJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDpgYfliLDkuIDlgIvllY/poYzvvIzljp/mnKzmmK/pgJnmqKNcclxuICAgICAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShzdG9uZUltZ0VsZW1lbnQsc3RvbmVQb3NYVW5pdCp4LHN0b25lUG9zWVVuaXQqeSxzdG9uZVdpZHRoLHN0b25lSGVpZ2h0KVxyXG4gICAgICAgIC8vIOS9huaYr+a4suafk+WHuuS+hueahOe1kOaenOaYr+iDjOaZr+S4gOagvOS4gOagvOi1sO+8jOaJgOS7pSBzdG9uZVBvc1hVbml0Kngg5pS55oiQIHN0b25lUG9zWFVuaXQqKHgtMSktc3RvbmVQb3NYVW5pdCooYSpvYnN0YWNsZVNwZWVkKVxyXG4gICAgICAgICAvLyDljp/mnKzmr48zMEZyYW1l5omN5pyD5o+b5LiA5qyh5L2N572uIO+8jOaUueWLleavj+asoeaFouaFouaPm1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUV2ZXJ5RnJhbWUgPSBjdXJyZW50VGltZXIlKDEvb2JzdGFjbGVTcGVlZCkrMVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKHN0b25lSW1nRWxlbWVudCwoc3RvbmVQb3NYVW5pdCkqKHgtY2hhbmdlRXZlcnlGcmFtZS8zMCksc3RvbmVQb3NZVW5pdCp5LHN0b25lV2lkdGgsc3RvbmVIZWlnaHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuaW1wb3J0IHtvYnN0YWNsZVNwZWVkfSBmcm9tICcuL2dhbWVNYXBzJ1xyXG5jb25zdCB0cmVlSW1nVXJsID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvdHJlZS5wbmdcIilcclxuXHJcbmNvbnN0IHRyZWVJbWdFbGVtZW50ID0gbmV3IEltYWdlKDYwMCk7XHJcbnRyZWVJbWdFbGVtZW50LnNyYz10cmVlSW1nVXJsXHJcbi8vIOWclueJh+imgeaIkOWKn+iugOWPluW+jOaJjeiDvea4suafk1xyXG50cmVlSW1nRWxlbWVudC5kZWNvZGUoKVxyXG4udGhlbigoKSA9PiB7XHJcbiAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZSh0cmVlSW1nRWxlbWVudCx1aV93aWR0aC8xNyo0LHVpX2hlaWd0aC82KjQtMjUsdWlfd2lkdGgvMTgsdWlfaGVpZ3RoLzQpXHJcbn0pLmNhdGNoKChlcnIpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RyZWUoeCx5LGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmqLnnmoTlr6xcclxuICAgIGNvbnN0IHRyZWVXaWR0aCA9IHVpX3dpZHRoLzE3O1xyXG4gICAgLy8g5qi555qE6auYXHJcbiAgICBjb25zdCB0cmVlSGVpZ2h0ID0gdWlfaGVpZ3RoLzQ7XHJcblxyXG4gICAgLy8g5ZyW54mHWOi7uOmWk+malFxyXG4gICAgLy8g5ZyW54mHWei7uOmWk+malFxyXG4gICAgY29uc3QgdHJlZVBvc1hVbml0ID0gdWlfd2lkdGgvMTc7ICBcclxuICAgIGNvbnN0IHRyZWVQb3NZVW5pdCA9IHVpX2hlaWd0aC82LTU7XHJcbiAgICBpZih0cmVlSW1nRWxlbWVudC5jb21wbGV0ZSl7XHJcbiAgICAgICAgLy8g6YGH5Yiw5LiA5YCL5ZWP6aGM77yM5Y6f5pys5piv6YCZ5qijXHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2Uoc3RvbmVJbWdFbGVtZW50LHN0b25lUG9zWFVuaXQqeCxzdG9uZVBvc1lVbml0Knksc3RvbmVXaWR0aCxzdG9uZUhlaWdodClcclxuICAgICAgICAvLyDkvYbmmK/muLLmn5Plh7rkvobnmoTntZDmnpzmmK/og4zmma/kuIDmoLzkuIDmoLzotbDvvIzmiYDku6Ugc3RvbmVQb3NYVW5pdCp4IOaUueaIkCBzdG9uZVBvc1hVbml0Kih4LTEpLXN0b25lUG9zWFVuaXQqKGEqb2JzdGFjbGVTcGVlZClcclxuICAgICAgICAgLy8g5Y6f5pys5q+PMzBGcmFtZeaJjeacg+aPm+S4gOasoeS9jee9riDvvIzmlLnli5Xmr4/mrKHmhaLmhaLmj5tcclxuICAgICAgICAgY29uc3QgY2hhbmdlRXZlcnlGcmFtZSA9IGN1cnJlbnRUaW1lciUoMS9vYnN0YWNsZVNwZWVkKSsxXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2UodHJlZUltZ0VsZW1lbnQsdHJlZVBvc1hVbml0Kih4LWNoYW5nZUV2ZXJ5RnJhbWUvMzApLHRyZWVQb3NZVW5pdCp5LHRyZWVXaWR0aCx0cmVlSGVpZ2h0KVxyXG4gICAgfVxyXG59IiwiLy8g5Yid5aeL5YC8XHJcbmltcG9ydCB7Z2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGh9IGZyb20gJy4vaW5pdCdcclxuLy8g6YGK5oiy5b6q55Kw5o6n5Yi2XHJcbmltcG9ydCB7cGF1c2Usc3RhcnRMb29wLGlzR2FtZUxvb3B9IGZyb20gJy4vZ2FtZWxvb3AnXHJcbi8vIOWPluW+l+manOekmeeJqea4suafk+eLgOaFi1xyXG5pbXBvcnQge2dldE9ic3RhY2xlU3RhdHVzfSBmcm9tICcuL29ic3RhY2xlL2dhbWVNYXBzJ1xyXG4vLyDkv6Hku7bnibnmlYhcclxuaW1wb3J0IHttYWlsVG91Y2h9IGZyb20gJy4vb2JzdGFjbGUvbWFpbCdcclxuXHJcbi8vIOmBiuaIsuWIhuaVuFxyXG5pbXBvcnQge3BsYXllckRpZUFkZCxwbGF5ZXJNYWlsQWRkLGZpbmFsbHlEcmF3fSBmcm9tICcuL2dhbWVCb2FyZCdcclxuXHJcbi8vIOmHjeeOqemBiuaIsueahERPTeebo+aOp1xyXG5pbXBvcnQge3Jlc3RhcnREb21BY3Rpb24sZGllTWVkaWFQbGF5LCBtYWlsTWVkaWFQbGF5fSBmcm9tICcuL3VudGlsJ1xyXG5cclxuLy8g546p5a6255qE57Sg5p2Q6Lev5b6RXHJcbmNvbnN0IFBsYXllckltZ1VybCA9IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWFnZXMvcGxheWVyLnBuZ1wiKVxyXG5cclxuLy8g5Lq654mp5ZyW54mH55qE5a+s5bqmXHJcbmNvbnN0IHBsYXllcldpZHRoID0gdWlfd2lkdGgvMTA7XHJcbi8vIOS6uueJqeeahOmrmOW6plxyXG5jb25zdCBwbGF5ZXJIZWlnaHQgPSB1aV9oZWlndGgqMi41XHJcblxyXG4vLyDlnoLnm7Tnp7vli5Xllq7kvY1cclxuY29uc3QgdmVydGljYWxVbml0ID0gdWlfaGVpZ3RoKi0wLjA2XHJcbi8vIOebruWJjeeahOWeguebtOenu+WLlemHjyDnr4TlnI0gMH41IOWIneWni+eCujJcclxubGV0IGN1cnJlbnRWZXJ0aWNhbCA9IDI7XHJcbi8vIOawtOW5s+S9jee9rijlm7rlrpopXHJcbmNvbnN0IGluaXRQb3NYID0gMztcclxuY29uc3QgVW5pdFdpZHRoID0gdWlfd2lkdGgvMTc7XHJcbmNvbnN0IGhvcml6b25Qb3MgPSBVbml0V2lkdGgqaW5pdFBvc1g7XHJcblxyXG4vLyDlnJbniYfntKDmnZDnuL3lhbHmnIkxN+WAi+WLleS9nO+8jOavj+asoeWPqumhr+ekuuS4gOWAi1xyXG5jb25zdCBwbGF5ZXJQZXJXaWR0aCA9IFVuaXRXaWR0aCAgXHJcbi8vIOavj+WAi+WLleS9nOmWk+agvFxyXG5jb25zdCB1bml0VmFsID0gdWlfd2lkdGgvMTcuMzk7XHJcblxyXG4vLyDliJ3lp4vljJblnJbniYfovInlhaVcclxuY29uc3QgUGxheWVySW1nRWxlbWVudCA9IG5ldyBJbWFnZSg2MDApO1xyXG5QbGF5ZXJJbWdFbGVtZW50LnNyYz1QbGF5ZXJJbWdVcmxcclxuLy8g5ZyW54mH6KaB5oiQ5Yqf6K6A5Y+W5b6M5omN6IO95riy5p+TXHJcblBsYXllckltZ0VsZW1lbnQuZGVjb2RlKClcclxuLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCwwLHZlcnRpY2FsVW5pdCpjdXJyZW50VmVydGljYWwscGxheWVyUGVyV2lkdGgsdWlfaGVpZ3RoLDAsMCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbn0pXHJcblxyXG5cclxuLy8g5qqi5p+l5piv5ZCm5pyJ5pKe5Yiw5p2x6KW/5oiW6LaF5Ye66YKK55WMXHJcbmZ1bmN0aW9uIGNoZWNrTW92ZSgpe1xyXG4gICAgLy8g5Z6C55u05aSn5bCP6ZmQ5Yi2XHJcbiAgICBsZXQgbWF4VmFsID0gNVxyXG4gICAgbGV0IG1pblZhbCA9IDBcclxuICAgIGlmKGN1cnJlbnRWZXJ0aWNhbD5tYXhWYWwpe1xyXG4gICAgICAgIGN1cnJlbnRWZXJ0aWNhbCA9IG1heFZhbFxyXG4gICAgfWVsc2UgaWYoY3VycmVudFZlcnRpY2FsPG1pblZhbCl7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsID0gbWluVmFsXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2UoMSlcclxuICAgIGNvbGxhcHNlKDIpXHJcbn1cclxuXHJcbi8vIOeOqeWutuWcqFjluqfmqJnmr5Tnm67liY3kvY3nva7lpJpwb3hQbHVzIOaSnuWIsOadseilv+eahOS6i+S7tlxyXG5mdW5jdGlvbiBjb2xsYXBzZShwb3NYUGx1cyl7XHJcbiAgICBsZXQgW2ZpcnN0SW5kZXgsbGFzdEluZGV4LG9ic3RhY2xlQXJyYXldID0gZ2V0T2JzdGFjbGVTdGF0dXMoKVxyXG4gICAgLy8g5pyA5b6M5LiA5YiXXHJcbiAgICBjb25zdCBMYXN0Q29sbGFwc2VJbmRleCA9IG9ic3RhY2xlQXJyYXkubGVuZ3RoLTE7XHJcbiAgICAvLyDnorDmkp7liJfnmoRJbmRleFxyXG4gICAgY29uc3QgY29sbGFwc2VJbmRleCA9IGZpcnN0SW5kZXgraW5pdFBvc1grcG9zWFBsdXNcclxuICAgIC8vIOWmguaenOS4jeaYr05hTlxyXG4gICAgaWYoY29sbGFwc2VJbmRleCA9PT0gY29sbGFwc2VJbmRleCAmJiBjb2xsYXBzZUluZGV4PD1MYXN0Q29sbGFwc2VJbmRleCl7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2VUeXBlID0gb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVtjdXJyZW50VmVydGljYWxdXHJcbiAgICAgICBcclxuICAgICAgICBpZihjb2xsYXBzZVR5cGU+MSl7XHJcbiAgICAgICAgICAgIC8vIOaSnuWIsOmfs+aViFxyXG4gICAgICAgICAgICBkaWVNZWRpYVBsYXkoKVxyXG4gICAgICAgICAgICAvLyDmkq3mlL7njqnlrrbmkp7liLDli5XnlatcclxuICAgICAgICAgICAgcGF1c2UoUGxheWVySnVtcClcclxuICAgICAgICAgICAgLy8g546p5a625q275Lqh57SA6YyEXHJcbiAgICAgICAgICAgIHBsYXllckRpZUFkZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAvLyDmkp7liLDkv6Hku7bpgYrmiLLmmqvlgZzkuIDkuIvvvIzkv6Hku7bmtojlpLFcclxuICAgICAgICBpZihjb2xsYXBzZVR5cGU9PT0xKXtcclxuICAgICAgICAgICAgLy8gbWFpbOeisOWIsOmfs+aViFxyXG4gICAgICAgICAgICBtYWlsTWVkaWFQbGF5KClcclxuICAgICAgICAgICAgLy8gZW1haWznorDliLDli5XnlatcclxuICAgICAgICAgICAgbWFpbFRvdWNoKGluaXRQb3NYK3Bvc1hQbHVzLGN1cnJlbnRWZXJ0aWNhbClcclxuICAgICAgICAgICAgLy8g546p5a625Y+W5b6X5L+h5Lu25aKe5YqgXHJcbiAgICAgICAgICAgIHBsYXllck1haWxBZGQoKVxyXG4gICAgICAgICAgICAvLyDog4zmma/mtojlpLFcclxuICAgICAgICAgICAgb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVtjdXJyZW50VmVydGljYWxdID0gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyDlnKgoKHBvc1gscG9zWSkp5bqn5qiZ5piv5ZCm5pKe5YiwXHJcbmZ1bmN0aW9uIGlzQ29sbGFwc2UocG9zWCxwb3NZKXtcclxuICAgIGxldCBbZmlyc3RJbmRleCxsYXN0SW5kZXgsb2JzdGFjbGVBcnJheV0gPSBnZXRPYnN0YWNsZVN0YXR1cygpXHJcbiAgICAgLy8g56Kw5pKe5YiX55qESW5kZXhcclxuICAgICBjb25zdCBjb2xsYXBzZUluZGV4ID0gZmlyc3RJbmRleCtwb3NYXHJcbiAgICAvLyAg5aaC5p6c5LmL5b6M6YO95rKS6Zqc56SZ54mpIOWJh+S4jeacg+aSnuWIsOadseilv1xyXG4gICAgIGlmKGNvbGxhcHNlSW5kZXg+PW9ic3RhY2xlQXJyYXkubGVuZ3RoKXtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgfVxyXG4gICAgLy8gIOWkp+aWvDEg5Luj6KGo5LiN5piv5L+h5Lu2XHJcbiAgICByZXR1cm4gb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XSYmb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVtwb3NZXTw9MVxyXG59XHJcblxyXG4vLyDliJ3lp4vljJblvozlm57lgrPkuYvlvozmm7TmlrDnmoTmlrnlvI9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcihjdXJyZW50VGltZXIpe1xyXG4gICAgY2hlY2tNb3ZlKClcclxuICAgIC8vIOeVtuWJjeWLleS9nOWJquijgVxyXG4gICAgLy8g5YuV5L2c6YOo5pyD6LaF6YGOMTflgIsoMH4xNinvvIzot5HmraXli5XkvZzmmK/nrKw55YCL5YuV5L2c5YiwMTflgIvli5XkvZwoOH4xNilcclxuICAgIGNvbnN0IGN1cnJlbnRBY3Rpb25JbmRleCA9IDgrTWF0aC5mbG9vcihjdXJyZW50VGltZXIvMyklOVxyXG4gICAgY29uc3QgY3V0QWN0aW9uVmFsID0gdW5pdFZhbCpjdXJyZW50QWN0aW9uSW5kZXhcclxuXHJcbiAgICAvLyAvLyDlnJbniYfmnInmiJDlip/oroDlj5bvvIzmiY3nkIbku5ZcclxuICAgIGlmKFBsYXllckltZ0VsZW1lbnQuY29tcGxldGUpe1xyXG4gICAgICAgIC8vIOa4hemZpOeVq+W4g1xyXG4gICAgICAgIC8vIGdhbWVDYW52YXMuY2xlYXJSZWN0KGhvcml6b25Qb3MsdmVydGljYWxVbml0KmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICAgICAgLy8g6YeN5paw57mq6KO9XHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCxjdXRBY3Rpb25WYWwsdmVydGljYWxVbml0KmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsaG9yaXpvblBvcywwLHBsYXllcldpZHRoLHBsYXllckhlaWdodClcclxuICAgICAgICBnYW1lQ2FudmFzLmRyYXdJbWFnZShQbGF5ZXJJbWdFbGVtZW50LGN1dEFjdGlvblZhbCwwLHBsYXllclBlcldpZHRoLHVpX2hlaWd0aCxob3Jpem9uUG9zLCh1aV9oZWlndGgvNi0xMCkqY3VycmVudFZlcnRpY2FsLHBsYXllcldpZHRoLHBsYXllckhlaWdodClcclxuICAgIH1cclxufVxyXG4vLyDlkJHkuIrnp7vli5VcclxuZXhwb3J0IGZ1bmN0aW9uIE1vdmVVcCgpe1xyXG4gICAgLy8g6YGK5oiy5b6q55Kw5Lit77yM5omN5pyD56e75YuVXHJcbiAgICAvLyDlpoLmnpznlbbliY3mmK/pgYrmiLLmmqvlgZzni4DmhYvvvIxyZXR1cm4gO1xyXG4gICAgaWYoIWlzR2FtZUxvb3AoKSl7XHJcbiAgICAgICAgcmV0dXJuIDtcclxuICAgIH1cclxuICAgIC8vIOWmguaenOenu+WLleWujOaYr+manOekmeeJqSDkuI3ntabku5bnp7vli5VcclxuICAgIGlmKGlzQ29sbGFwc2UoaW5pdFBvc1grMSxjdXJyZW50VmVydGljYWwtMSkmJmlzQ29sbGFwc2UoaW5pdFBvc1gsY3VycmVudFZlcnRpY2FsLTEpKXtcclxuICAgICAgICBjdXJyZW50VmVydGljYWwgLT0gMVxyXG4gICAgfVxyXG59XHJcbi8vIOWQkeS4i+enu+WLlVxyXG5leHBvcnQgZnVuY3Rpb24gTW92ZURvd24oKXtcclxuICAgIC8vIOmBiuaIsuW+queSsOS4re+8jOaJjeacg+enu+WLlVxyXG4gICAgLy8g5aaC5p6c55W25YmN5piv6YGK5oiy5pqr5YGc54uA5oWL77yMcmV0dXJuIDtcclxuICAgIGlmKCFpc0dhbWVMb29wKCkpe1xyXG4gICAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcbiAgICAvLyDlpoLmnpznp7vli5XlrozmmK/pmpznpJnniakg5LiN57Wm5LuW56e75YuVXHJcbiAgICBpZihpc0NvbGxhcHNlKGluaXRQb3NYKzEsY3VycmVudFZlcnRpY2FsKzEpJiZpc0NvbGxhcHNlKGluaXRQb3NYLGN1cnJlbnRWZXJ0aWNhbCsxKSl7XHJcbiAgICAgICBcclxuICAgICAgICBjdXJyZW50VmVydGljYWwgKz0gMVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyDplovloLTmmYLlkozmkp7liLDmmYLvvIzppqznmoTliY3ohbPmnIPot7PotbfkvoZcclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckp1bXAoVGltZXIpe1xyXG4gICAgIC8vIOWLleS9nOmDqOacg+i2hemBjjE35YCLKDB+MTYp77yM6aas55qE5YmN6IWz5pyD6Lez6LW35L6G5YuV5L2c5piv56ysMeWAi+WLleS9nOWIsDjlgIvli5XkvZwoMH43KVxyXG4gICAgY29uc3QgY3VycmVudEFjdGlvbkluZGV4ID0gTWF0aC5mbG9vcihUaW1lci8zKSU4XHJcbiAgICBjb25zdCBjdXRBY3Rpb25WYWwgPSB1bml0VmFsKmN1cnJlbnRBY3Rpb25JbmRleFxyXG4gICAgXHJcbiAgICAvLyDnm67liY3nmoTpgI/mmI7luqZcclxuICAgIGNvbnN0IGhvd1RyYW5zcGFyZW50ID0gTWF0aC5mbG9vcihUaW1lci8zKSUxMCsxO1xyXG4gICAgY29uc3QgQWxwaGEgPSAxL2hvd1RyYW5zcGFyZW50XHJcbiAgICAvLyAvLyDlnJbniYfmnInmiJDlip/oroDlj5bvvIzmiY3nkIbku5ZcclxuICAgIGlmKFBsYXllckltZ0VsZW1lbnQuY29tcGxldGUpe1xyXG4gICAgICAgIC8vIOa4hemZpOeVq+W4g1xyXG4gICAgICAgIGdhbWVDYW52YXMuY2xlYXJSZWN0KGhvcml6b25Qb3MsKHVpX2hlaWd0aC82LTEwKSpjdXJyZW50VmVydGljYWwscGxheWVyV2lkdGgsdWlfaGVpZ3RoLzQuNClcclxuICAgICAgICBnYW1lQ2FudmFzLmdsb2JhbEFscGhhID0gQWxwaGE7XHJcbiAgICAgICAgLy8g6YeN5paw57mq6KO9XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCxjdXRBY3Rpb25WYWwsMCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsaG9yaXpvblBvcywodWlfaGVpZ3RoLzYtMTApKmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICB9XHJcbiAgICAvLyDmnIDlpJrot5HlpJrkuYVcclxuICAgIGxldCBtYXhUaW1lciA9IDMwXHJcbiAgICBpZihUaW1lcj5tYXhUaW1lcil7XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsID0gc2FmZVBvc1koKVxyXG4gICAgICAgIHN0YXJ0TG9vcCgpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIOeVtuWJjeWIl+WTquijoeaYr+WuieWFqOeahFxyXG5mdW5jdGlvbiBzYWZlUG9zWSgpe1xyXG4gICAgbGV0IFtmaXJzdEluZGV4LGxhc3RJbmRleCxvYnN0YWNsZUFycmF5XSA9IGdldE9ic3RhY2xlU3RhdHVzKClcclxuICAgIC8vIOeisOaSnuWIl+eahEluZGV4XHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4ID0gZmlyc3RJbmRleCtpbml0UG9zWCsxXHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4MiA9IGZpcnN0SW5kZXgraW5pdFBvc1grMlxyXG5cclxuICAgIC8vIOacquS+huacg+mBh+WIsOeahOWFqeWIl1xyXG4gICAgY29uc3QgZnV0dXJlQ29sID0gb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVxyXG4gICAgY29uc3QgZnV0dXJlQ29sMiA9IG9ic3RhY2xlQXJyYXlbY29sbGFwc2VJbmRleDJdXHJcbiAgICAvLyDnjqnlrrbmkp7lrozpoK3lvozlj6/ku6XljrvnmoTlnLDmlrlcclxuICAgIGxldCByZXN1bHRDb2wgPSAtMTtcclxuICAgIGZvcihsZXQgaT1mdXR1cmVDb2wubGVuZ3RoLTE7aT49MDtpLS0pe1xyXG4gICAgICAgIC8vIOWIpOaWt+W+jOmdouWFqeWIl+eahOavj+S4gOihjOaYr+WQpuaYr+manOekmeeJqVxyXG4gICAgICAgIGNvbnN0IGZ1dHVyZVR5cGUgPSBmdXR1cmVDb2xbaV1cclxuICAgICAgICBjb25zdCBmdXR1cmVUeXBlMiA9IGZ1dHVyZUNvbDJbaV1cclxuICAgICAgICAvLyDlvozpnaLlhanmoLzlpoLmnpzpg73kuI3mmK/pmpznpJnniakg5a2Y6LW35L6GXHJcbiAgICAgICAgaWYoZnV0dXJlVHlwZTw9MSAmJiBmdXR1cmVUeXBlMjw9MSl7XHJcbiAgICAgICAgICAgIHJlc3VsdENvbCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5rKS5pyJ562U5qGIIOeahOeLgOazgVxyXG4gICAgaWYocmVzdWx0Q29sID09PSAtMSl7XHJcbiAgICAgICAgcmV0dXJuIGZ1dHVyZUNvbC5maW5kSW5kZXgoKGUpPT57ZTw9MX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0Q29sXHJcbn1cclxuLy8g546p5a6257WQ5p2f5YuV5L2cXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJGaW5hbChUaW1lcil7XHJcbiAgICAgLy8g5YuV5L2c6YOo5pyD6LaF6YGOMTflgIsoMH4xNinvvIzppqznmoTliY3ohbPmnIPot7Potbfkvobli5XkvZzmmK/nrKwx5YCL5YuV5L2c5YiwOOWAi+WLleS9nCgwfjcpXHJcbiAgICAgY29uc3QgY3VycmVudEFjdGlvbkluZGV4ID0gTWF0aC5mbG9vcihUaW1lci8zKSU4XHJcbiAgICAgY29uc3QgY3V0QWN0aW9uVmFsID0gdW5pdFZhbCpjdXJyZW50QWN0aW9uSW5kZXhcclxuICAgICBpZihQbGF5ZXJJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDmuIXpmaTnlavluINcclxuICAgICAgICBnYW1lQ2FudmFzLmNsZWFyUmVjdChob3Jpem9uUG9zLCh1aV9oZWlndGgvNi0xMCkqY3VycmVudFZlcnRpY2FsLHBsYXllcldpZHRoLHVpX2hlaWd0aC80LjQpXHJcbiAgICAgICAgLy8g6YeN5paw57mq6KO9XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCxjdXRBY3Rpb25WYWwsMCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsaG9yaXpvblBvcywodWlfaGVpZ3RoLzYtMTApKmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoVGltZXI+NTApe1xyXG4gICAgICAgIGZpbmFsbHlEcmF3KClcclxuICAgICAgICByZXN0YXJ0RG9tQWN0aW9uKClcclxuICAgIH1cclxufSIsIi8vIOmBiuaIsuW+queSsOaOp+WItlxyXG5pbXBvcnQge3Jlc3RhcnR9IGZyb20gJy4vZ2FtZWxvb3AnXHJcbi8vIOeOqeWutlxyXG5pbXBvcnQge01vdmVEb3duLE1vdmVVcH0gZnJvbSAnLi9wbGF5ZXInXHJcbi8vIOmBiuaIsuWIhuaVuOebuOmXnOWIneWni+WMllxyXG5pbXBvcnQge2dhbWVTdGF0dXNJbml0fSBmcm9tICcuL2dhbWVCb2FyZCdcclxuXHJcbi8vIOWIpOaWt+aYr+WQpuihjOWLleijnee9rlxyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XHJcbiAgICBjb25zdCBtb2JpbGVEZXZpY2UgPSBbJ0FuZHJvaWQnLCAnd2ViT1MnLCAnaVBob25lJywgJ2lQYWQnLCAnaVBvZCcsJ21hY29zJywgJ0JsYWNrQmVycnknLCAnV2luZG93cyBQaG9uZSddXHJcbiAgICBsZXQgaXNNb2JpbGUgPSBtb2JpbGVEZXZpY2Uuc29tZShlID0+IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goZSkpXHJcbiAgICAvLyAvLyDmlrBpUGFk55qE5bmz5Y+w5Li6IE1hY0ludGVs77yM5YW25LuW5pa55rOV5ris5q2l6YGTXHJcbiAgICByZXR1cm4gaXNNb2JpbGUgfHwgbmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKCdNYWNJbnRlbCcpXHJcbn1cclxuXHJcbi8vIOenu+WLleijnee9ruaMiemIlURPTVxyXG5jb25zdCB0b3BCdXR0b25Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vdmVUb3BCdG5cIilcclxuY29uc3QgYm90dG9tQnV0dG9uRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb3ZlQm90dG9tQnRuXCIpXHJcbi8vIOeOqeWutuenu+WLleebo+iBvVxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUFjdGlvbigpe1xyXG4gICAgLy8g5aaC5p6c55W25YmN6KOd572u5piv5omL5qmfXHJcbiAgICBpZihpc01vYmlsZURldmljZSgpKXtcclxuICAgICAgICAvLyDlkJHkuIrnp7vli5VCdG7nm6Pogb1cclxuICAgICAgICB0b3BCdXR0b25Eb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgTW92ZVVwKClcclxuICAgICAgICB9LGZhbHNlKVxyXG4gICAgICAgIC8vIOWQkeS4i+enu+WLlUJ0buebo+iBvVxyXG4gICAgICAgIGJvdHRvbUJ1dHRvbkRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICBNb3ZlRG93bigpXHJcbiAgICAgICAgfSxmYWxzZSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIC8vIOmbu+iFpuerryDkuI3pnIDopoFBQuaMiemIlVxyXG4gICAgICAgIHRvcEJ1dHRvbkRvbS5yZW1vdmUoKTtcclxuICAgICAgICBib3R0b21CdXR0b25Eb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8g55uj6IG96Y2155ukXHJcbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAzOCl7XHJcbiAgICAgICAgICAgICAgICBNb3ZlVXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDQwKXtcclxuICAgICAgICAgICAgICAgIE1vdmVEb3duKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4vLyDntZDlsL7mmYLvvIzpu57mk4rpgYrmiLLlj6/ku6Xph43njqlcclxuLy8g6Ke455m86YeN5paw6ZaL5aeL55qERE9N55uj6IG9XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0YXJ0RG9tQWN0aW9uKCl7XHJcbiAgICAvLyDmlbTlgIvpgYrmiLLnmoRET03nm6Pogb1cclxuICAgIGNvbnN0IGdhbWVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdhbWUtdG91Y2hcIilcclxuICAgIGNvbnN0IGdhbWVyZVN0YXJ0Rm4gPSAoKT0+e1xyXG4gICAgICAgIC8vIOmBiuaIsuWIhuaVuOebuOmXnOWIneWni+WMllxyXG4gICAgICAgIGdhbWVTdGF0dXNJbml0KClcclxuICAgICAgICAvLyDpgYrmiLLmmYLplpPou7jliJ3lp4vljJZcclxuICAgICAgICByZXN0YXJ0KClcclxuICAgICAgICBnYW1lRG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVyZVN0YXJ0Rm4sZmFsc2UpXHJcbiAgICB9XHJcbiAgICAvLyDpu57mk4rpgYrmiLLlj6/ku6Xph43njqlcclxuICAgIGdhbWVEb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZ2FtZXJlU3RhcnRGbixmYWxzZSlcclxufVxyXG5cclxuY29uc3QgYXVkaW9EaWVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpZU1lZGlhXCIpXHJcbmF1ZGlvRGllRG9tLnBhdXNlKClcclxuLy8g5pKe5Yiw55+z6aCt5oiW5qi55pmC5pyD5pyJ6Z+z5pWIICAgXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWVNZWRpYVBsYXkoKXtcclxuICAgIGF1ZGlvRGllRG9tLmN1cnJlbnRUaW1lID0gMFxyXG4gICAgYXVkaW9EaWVEb20ucGxheSgpXHJcbn1cclxuXHJcbmNvbnN0IGF1ZGlvTWFpbERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbE1lZGlhXCIpXHJcbi8vIOeisOWIsE1BSUzliLDmmYLmnIPmnInpn7PmlYggICBcclxuZXhwb3J0IGZ1bmN0aW9uIG1haWxNZWRpYVBsYXkoKXtcclxuICAgIGF1ZGlvTWFpbERvbS5jdXJyZW50VGltZSA9IDBcclxuICAgIGF1ZGlvTWFpbERvbS5wbGF5KClcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcbiAqICAgIGBlbWAgdW5pdHMuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcbmE6Zm9jdXMge1xcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxuICovXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXG4gKi9cXG5mb3JtIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDIgKi9cXG4gICptYXJnaW4tbGVmdDogLTdweDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcbiAqICAgIGFuZCBDaHJvbWUuXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAvKiAzICovXFxuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXFxuICovXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxcbmlucHV0W3R5cGU9cmVzZXRdLFxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIDMgKi9cXG4gICpvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDQgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcbiAqL1xcbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbiAgKmhlaWdodDogMTNweDtcXG4gIC8qIDMgKi9cXG4gICp3aWR0aDogMTNweDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqIG9uIE9TIFguXFxuICovXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi5jaHJvbWVmcmFtZSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Q5ODY7XFxufVxcblxcbi5nYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogY2FsYyg1MHZ3KTtcXG4gIG1heC13aWR0aDogOTkycHg7XFxuICBtYXgtaGVpZ2h0OiA0OTZweDtcXG4gIGJvcmRlcjogOXB4ICM1ZmE2YWIgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ5NnB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5nYW1lLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDIwMHZoO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwdmgpIHtcXG4gIC5nYW1lLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDgwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDQwdnc7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LWhlaWdodDogNTB2dykge1xcbiAgLmdhbWUtd3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogMTYwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDc4dmg7XFxuICB9XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS10b3Atc2l6ZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIC5nYW1lLWJvdHRvbS1zaXplIHtcXG4gIGhlaWdodDogNzglO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAjZ2FtZS11aSB7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAyMiU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyICNnYW1lLWJnIHtcXG4gIHotaW5kZXg6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmE0Yzk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIgLmNvbnRhaW5lcl9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmdhbWUtd3JhcHBlciAuYmVmb3JlLWNvbnRhaW5lciAuY29udGFpbmVyX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogIzAyNjI2OTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIgLmNvbnRhaW5lcl9fY29udGVudCAuY29udGVudF9fYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkMGViO1xcbiAgY29sb3I6ICM2MDJjZGE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA0O1xcbiAgYm90dG9tOiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC40Myk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC44KTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1idG4gLmdhbWUtYnRuX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygoMTAwdncgLSAzMjBweCkvNjAgKyAyMHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogcmdiYSg5NiwgNDQsIDIxOCwgMC4yOSk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRvcC1idG4ge1xcbiAgcmlnaHQ6IDE4JTtcXG59XFxuLmdhbWUtd3JhcHBlciAuYm90dG9tLWJ0biB7XFxuICByaWdodDogNCU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRyYW5zaXRpb24tbm9uZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50cmFuc2l0aW9uLW5vbmUgLmNvbnRlbnRfX2J0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDRCxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURFQSx5REFBQTtBQUNBO0VBQ0ksVUFBQTtBQ0NKOztBREVBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBOzs7O0VBSUksd0JBQUE7RUFDQSxxQkFB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OFdaO0FBM1dJO0VBQ0ksVUFBQTtBQTZXUjtBQTNXSTtFQUNJLFNBQUE7QUE2V1I7QUExV0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUE0V1I7QUEzV1E7RUFDSSxhQUFBO0FBNldaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcclxcbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvLFxcclxcbmNhbnZhcyxcXHJcXG52aWRlbyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgKnpvb206IDE7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXHJcXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXHJcXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxyXFxuICogICAgYGVtYCB1bml0cy5cXHJcXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXHJcXG4gKiAgICB1c2VyIHpvb20uXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxyXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxyXFxuICovXFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXHJcXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAyICovXFxyXFxuICAgICptYXJnaW4tbGVmdDogLTdweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxyXFxuICogICAgYW5kIENocm9tZS5cXHJcXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDMgKi9cXHJcXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcclxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXHJcXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcclxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXHJcXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXHJcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXHJcXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxyXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXHJcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxyXFxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcclxcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxyXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXHJcXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXFxyXFxuICAgICp3aWR0aDogMTNweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcclxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcclxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiBvbiBPUyBYLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxyXFxuICovXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbjo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb21lZnJhbWUge1xcclxcbiAgICBtYXJnaW46IDAuMmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xcclxcbn1cIixcIkBpbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XFxyXFxuXFxyXFxuaHRtbCxib2R5e1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5hcHB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDk4NjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtd3JhcHBlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogY2FsYyg1MHZ3KTtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OTJweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNDk2cHg7XFxyXFxuICAgIGJvcmRlcjogOXB4ICM1ZmE2YWIgc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgQG1lZGlhKG1heC1oZWlnaHQ6NDk2cHgpYW5kKG1pbi13aWR0aDo5OTJweCl7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHZoO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhKG1heC13aWR0aDo1MHZoKXtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODB2dztcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhKG1heC1oZWlnaHQ6NTB2dyl7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE2MHZoO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogNzh2aDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FtZS1jb250YWluZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIC5nYW1lLXRvcC1zaXple1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lLWJvdHRvbS1zaXple1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNzglO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWUtaXRlbXtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2dhbWUtdWl7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgICAgICB0b3A6MjIlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2dhbWUtYmd7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMDtcXHJcXG4gICAgICAgICAgICB0b3A6MDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuYmVmb3JlLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDM7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhNGM5O1xcclxcbiAgICAgICAgLmNvbnRhaW5lcl9fY29udGVudHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAuY29udGVudF9fdGl0bGV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMjYyNjk7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmNvbnRlbnRfX2J0bntcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQwZWI7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjAyY2RhO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5nYW1lLWJ0bntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgICAgICBib3R0b206IDQlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwxNTgsMTYwLDAuNDMpO1xcclxcbiAgICAgICAgJjphY3RpdmV7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LDE1OCwxNjAsMC44KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lLWJ0bl9fdGV4dHtcXHJcXG4gICAgICAgICAgICAvL+ieouW5lSAzMjAg5a2X6auUIDIwcHggMTIwMCDlrZfpq5QgODBcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoKDEwMHZ3IC0gMzIwcHgpLzYwICsgMjBweCk7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDk2LDQ0LDIxOCwyOSUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC50b3AtYnRue1xcclxcbiAgICAgICAgcmlnaHQ6IDE4JTtcXHJcXG4gICAgfVxcclxcbiAgICAuYm90dG9tLWJ0bntcXHJcXG4gICAgICAgIHJpZ2h0OiA0JTtcXHJcXG4gICAgfVxcclxcbiAgICAvLyDmhaLmhaLmtojlpLFcXHJcXG4gICAgLnRyYW5zaXRpb24tbm9uZXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgICAgICAuY29udGVudF9fYnRue1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyDlgJLlh7rpnZzmhYvos4fmupDmqpRcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJ1xyXG5cclxuLy8g6YGK5oiy6LOH6KiK5Yid5aeL5YyWXHJcbmltcG9ydCB7Z2FtZUluaXR9IGZyb20gJy4vaW5pdCdcclxuaW1wb3J0IHtMb29waW5nfSBmcm9tICcuL2dhbWVsb29wJ1xyXG5pbXBvcnQge2lzTW9iaWxlRGV2aWNlfSBmcm9tICcuL3VudGlsJ1xyXG4vLyDliJ3lp4vljJZcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIC8vIC8vIOWFiOWIpOaWt+eVtuWJjeijnee9rlxyXG4gICAgaWYoaXNNb2JpbGVEZXZpY2UoKSl7XHJcbiAgICB9XHJcbiAgICAvLyDpgYrmiLLplovlp4vnmoTmjInpiJVcclxuICAgIGNvbnN0IHN0YXJ0QnRuRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEdhbWVCdG5cIilcclxuICAgIC8vIOmBiuaIsumWi+Wni+WJjeeahOWwgemdolxyXG4gICAgY29uc3QgYmVmb3JlQ29udGFpbmVyRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1iZWZvcmVHYW1lXCIpXHJcbiAgICBzdGFydEJ0bkRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgIGJlZm9yZUNvbnRhaW5lckRvbS5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvbi1ub25lXCIpXHJcbiAgICAgICAgU3RhcnRUb1BsYXlHYW1lKClcclxuICAgIH0sZmFsc2UpXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydFRvUGxheUdhbWUoKXtcclxuICAgIC8vIOmBiuaIsuWIneWni+WMllxyXG4gICAgZ2FtZUluaXQoKVxyXG4gICAgLy8g5b6q55Kw6Ke455m8XHJcbiAgICBMb29waW5nKClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=