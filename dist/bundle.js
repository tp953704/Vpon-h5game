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

  (0,_obstacle_mail__WEBPACK_IMPORTED_MODULE_1__.drawMail)(13, 5.3, 1); // 字的內容，與位置

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText("x ".concat(mailNums), _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 5 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth);
} // 繪製教學

function gameTeach() {
  // 以下設定會蓋過新圖
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "source-over"; // 字形 字大小

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.font = "bold 30px Arial";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.textBaseline = "bottom"; // gameCanvas.textAlign = "left"
  // 背景顏色粉粉的

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillStyle = "#f3b8c8";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillRect(_init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, 0, _init__WEBPACK_IMPORTED_MODULE_0__.ui_width / 5, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 7); // 字顏色黑黑的

  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillStyle = "black";
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('操空方式為', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 14); // 不同裝置顯示字不同

  if ((0,_until__WEBPACK_IMPORTED_MODULE_2__.isMobileDevice)()) {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('手勢"上滑與下滑"', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 7);
  } else {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('鍵盤的"上下左右"', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 7);
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
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText("點我重玩", _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 2 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth * 7 / 10); // 繪製玩家

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
/* harmony export */   "restart": () => (/* binding */ restart)
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
}
function restart() {
  currentTimer = 0;
  startLoop();
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
    var changeEveryFrame = currentTimer % 30 + 1; // y軸的誤差值

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
    var changeEveryFrame = currentTimer % 30 + 1;
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
    var changeEveryFrame = currentTimer % 30 + 1;
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
  // 如果移動完是障礙物 不給他移動
  if (isCollapse(initPosX + 1, currentVertical - 1) && isCollapse(initPosX, currentVertical - 1)) {
    currentVertical -= 1;
  }
} // 向下移動

function MoveDown() {
  // 如果移動完是障礙物 不給他移動
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
} // 玩家移動監聽

function gameAction() {
  // 整個遊戲的DOM監聽
  var gameDom = document.querySelector(".js-game-touch"); // 目前遊戲的width

  var width = document.documentElement.clientWidth; // 目前遊戲的height

  var height = document.documentElement.clientHeight; //如果是手機板 觸控紀錄 

  var touchStartX = 0;
  var touchStartY = 0; // 如果當前裝置是手機

  if (isMobileDevice()) {
    // touchStart 手按下
    gameDom.addEventListener("touchstart", function (e) {
      // 記錄手一開始的地方
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }); // touchStart 手放開

    gameDom.addEventListener("touchend", function (e) {
      // 放開的XY座標
      var moveEndX = e.changedTouches[0].clientX;
      var moveEndY = e.changedTouches[0].clientY; // 放開的XY座標與按下的座標差

      var X = moveEndX - touchStartX;
      var Y = moveEndY - touchStartY; // 判斷玩家是向上還是向下值

      var testVal; // width 和 height的差距，如果寬度大 testVal 看的是Y座標

      if (width >= height) {
        testVal = Y;
      } else {
        testVal = X;
      } // 手勢往上 並且手指移動距離大於10


      if (testVal > 0 && Math.abs(testVal) > 10) {
        (0,_player__WEBPACK_IMPORTED_MODULE_1__.MoveDown)();
      } else if (Math.abs(testVal) > 10) {
        (0,_player__WEBPACK_IMPORTED_MODULE_1__.MoveUp)();
      }
    });
  } else {
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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n}\n\n.app {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #f7d986;\n}\n\n.game-wrapper {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  height: calc(50vw);\n  max-width: 992px;\n  max-height: 496px;\n  border: 9px #5fa6ab solid;\n  border-radius: 10px;\n  cursor: pointer;\n}\n@media (max-height: 496px) and (min-width: 992px) {\n  .game-wrapper {\n    max-width: 200vh;\n    max-height: 100vh;\n  }\n}\n@media (max-width: 50vh) {\n  .game-wrapper {\n    max-width: 80vw;\n    max-height: 40vw;\n  }\n}\n@media (max-height: 50vw) {\n  .game-wrapper {\n    max-width: 160vh;\n    max-height: 78vh;\n  }\n}\n.game-wrapper .game-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.game-wrapper .game-container .game-top-size {\n  height: 100%;\n}\n.game-wrapper .game-container .game-bottom-size {\n  height: 78%;\n}\n.game-wrapper .game-container .game-item {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.game-wrapper .game-container #game-ui {\n  z-index: 1;\n  top: 22%;\n}\n.game-wrapper .game-container #game-bg {\n  z-index: 0;\n  top: 0;\n}\n.game-wrapper .before-container {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #afa4c9;\n}\n.game-wrapper .before-container .container__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\n.game-wrapper .before-container .container__content .content__title {\n  font-size: 30px;\n  color: #026269;\n  text-align: center;\n  font-weight: bolder;\n}\n.game-wrapper .before-container .container__content .content__btn {\n  padding: 10px;\n  background-color: #aad0eb;\n  color: #602cda;\n  font-weight: bolder;\n  border-radius: 5px;\n}\n.game-wrapper .transition-none {\n  opacity: 0;\n  transition: all 1s;\n}\n.game-wrapper .transition-none .content__btn {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/_reset.scss","webpack://./src/assets/scss/app.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaE,SAAA;EACD,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACCD;;ADEA,yDAAA;AACA;EACI,UAAA;ACCJ;;ADEA,gDAAA;AACA;;EAEC,cAAA;ACCD;;ADEA;EACC,cAAA;ACCD;;ADEA;EACC,gBAAA;ACCD;;ADEA;EACC,YAAA;ACCD;;ADEA;;EAEC,WAAA;EACA,aAAA;ACCD;;ADEA;EACC,yBAAA;EACA,iBAAA;ACCD;;ADEA;;;;EAII,wBAAA;EACA,qBAAA;ACCJ;;ADEA;EACI,wBAAA;EACA,qBAAA;EACA,+BAAA;EACA,4BAAA;EACA,uBAAA;ACCJ;;ADEA;EACI,cAAA;EACA,mBAAA;EACA,gBAAA;ACCJ;;ADEA;;EAAA;AAIA;;;EAGI,qBAAA;GACA,eAAA;GACA,OAAA;EACA,eAAA;ACAJ;;ADGA;;;EAAA;AAKA;EACI,aAAA;EACA,SAAA;ACDJ;;ADIA;;;EAAA;AAKA;EACI,aAAA;ACFJ;;ADKA;;;;;EAAA;AAOA;EACI,eAAA;EAAiB,MAAA;EACjB,8BAAA;EAAgC,MAAA;EAChC,0BAAA;EAA4B,MAAA;ACAhC;;ADGA;;EAAA;AAIA;EACI,oBAAA;ACDJ;;ADIA;;EAAA;AAIA;;EAEI,UAAA;ACFJ;;ADKA;;;EAAA;AAKA;EACI,SAAA;EAAW,MAAA;EACX,+BAAA;EAAiC,MAAA;ACDrC;;ADIA;;EAAA;AAIA;EACI,SAAA;ACFJ;;ADKA;;EAAA;AAIA;EACI,SAAA;ACHJ;;ADMA;;EAAA;AAIA;EACI,yBAAA;EACA,aAAA;EACA,8BAAA;ACJJ;;ADOA;;;;EAAA;AAMA;EACI,SAAA;EAAW,MAAA;EACX,UAAA;EACA,mBAAA;EAAqB,MAAA;GACrB,iBAAA;EAAoB,MAAA;ACFxB;;ADKA;;;;;EAAA;AAOA;;;;EAII,eAAA;EAAiB,MAAA;EACjB,SAAA;EAAW,MAAA;EACX,wBAAA;EAA0B,MAAA;GAC1B,sBAAA;EAAyB,MAAA;ACC7B;;ADEA;;;EAAA;AAKA;;EAEI,mBAAA;ACAJ;;ADGA;;;;;EAAA;AAOA;;EAEI,oBAAA;ACDJ;;ADIA;;;;;;;;EAAA;AAUA;;;;EAII,0BAAA;EAA4B,MAAA;EAC5B,eAAA;EAAiB,MAAA;GACjB,iBAAA;EAAqB,MAAA;ACCzB;;ADEA;;EAAA;AAIA;;EAEI,eAAA;ACAJ;;ADGA;;;;;EAAA;AAOA;;EAEI,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;GACZ,YAAA;EAAe,MAAA;GACf,WAAA;EAAc,MAAA;ACGlB;;ADAA;;;;EAAA;AAMA;EACI,6BAAA;EAA+B,MAAA;EAC/B,4BAAA;EACA,+BAAA;EAAiC,MAAA;EACjC,uBAAA;ACIJ;;ADDA;;;EAAA;AAKA;;EAEI,wBAAA;ACGJ;;ADAA;;EAAA;AAIA;;EAEI,SAAA;EACA,UAAA;ACEJ;;ADCA;;;EAAA;AAKA;EACI,cAAA;EAAgB,MAAA;EAChB,mBAAA;EAAqB,MAAA;ACGzB;;ADAA;;EAAA;AAIA;EACI,yBAAA;EACA,iBAAA;ACEJ;;ADCA;;;;;EAKI,WAAA;ACEJ;;ADEA;EACI,mBAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,mBAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,sBAAA;ACCJ;;ADEA;EACI,SAAA;EACA,SAAA;EACA,UAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;ACCJ;;AAtWA;EACI,WAAA;EACA,YAAA;AAyWJ;;AArWA;EACI,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAwWJ;;AArWA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;AAwWJ;AAvWI;EAZJ;IAaQ,gBAAA;IACA,iBAAA;EA0WN;AACF;AAzWI;EAhBJ;IAiBQ,eAAA;IACA,gBAAA;EA4WN;AACF;AA3WI;EApBJ;IAqBQ,gBAAA;IACA,gBAAA;EA8WN;AACF;AA7WI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;AA+WR;AA9WQ;EACI,YAAA;AAgXZ;AA9WQ;EACI,WAAA;AAgXZ;AA9WQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;AAgXZ;AA9WQ;EACI,UAAA;EACA,QAAA;AAgXZ;AA9WQ;EACI,UAAA;EACA,MAAA;AAgXZ;AA7WI;EACI,kBAAA;EACA,UAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,yBAAA;AA+WR;AA9WQ;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,YAAA;AAgXZ;AA/WY;EACI,eAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;AAiXhB;AA/WY;EAEI,aAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;AAgXhB;AA3WI;EACI,UAAA;EACA,kBAAA;AA6WR;AA5WQ;EACI,aAAA;AA8WZ","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}","@import './reset.scss';\r\n\r\nhtml,body{\r\n    width:100%;\r\n    height: 100%;\r\n    // overflow: hidden;\r\n}\r\n\r\n.app{\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width:100%;\r\n    height: 100%;\r\n    background-color: #f7d986;\r\n}\r\n\r\n.game-wrapper{\r\n    position: relative;\r\n    top:0;\r\n    left: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    height: calc(50vw);\r\n    max-width: 992px;\r\n    max-height: 496px;\r\n    border: 9px #5fa6ab solid;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    @media(max-height:496px)and(min-width:992px){\r\n        max-width: 200vh;\r\n        max-height: 100vh;\r\n    }\r\n    @media(max-width:50vh){\r\n        max-width: 80vw;\r\n        max-height: 40vw;\r\n    }\r\n    @media(max-height:50vw){\r\n        max-width: 160vh;\r\n        max-height: 78vh;\r\n    }\r\n    .game-container{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        .game-top-size{\r\n            height: 100%;\r\n        }\r\n        .game-bottom-size{\r\n            height: 78%;\r\n        }\r\n        .game-item{\r\n            width: 100%;\r\n            position: absolute;\r\n            top: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n        }\r\n        #game-ui{\r\n            z-index: 1;\r\n            top:22%;\r\n        }\r\n        #game-bg{\r\n            z-index: 0;\r\n            top:0;\r\n        }\r\n    }\r\n    .before-container{\r\n        position: absolute;\r\n        z-index: 3;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #afa4c9;\r\n        .container__content{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            align-items:center;\r\n            height: 100%;\r\n            .content__title{\r\n                font-size: 30px;\r\n                color: #026269;\r\n                text-align: center;\r\n                font-weight: bolder;\r\n            }\r\n            .content__btn{\r\n                \r\n                padding: 10px;\r\n                background-color: #aad0eb;\r\n                color: #602cda;\r\n                font-weight: bolder;\r\n                border-radius: 5px;\r\n            }\r\n        }\r\n    }\r\n    // 慢慢消失\r\n    .transition-none{\r\n        opacity: 0;\r\n        transition: all 1s;\r\n        .content__btn{\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n    \r\n\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9nYW1lTWFwcy5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9tYWlsLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL29ic3RhY2xlL3N0b25lLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL29ic3RhY2xlL3RyZWUuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL3VudGlsLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2ViNGUiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInNreUltZ1VybCIsInJlcXVpcmUiLCJtb3VudGFpbkltZ1VybCIsImdyb3VuZEltZ1VybCIsIkJhY2tncm91bmRFbGVtZW50IiwiaW1nVXJsIiwiaW5pdFgiLCJpbml0WSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwibXVsIiwiaW1hZ2UiLCJzZWxmIiwiSW1nVXJsIiwiQmdHcm91bmRJbWciLCJJbWFnZSIsIm9ubG9hZCIsInJlbmRlciIsInNyYyIsImN1cnJlbnRUaW1lciIsImNvbXBsZXRlIiwiZHJhd0ltYWdlIiwic2t5QmciLCJtb3VudGFpbkJnIiwiZ3JvdW5kQmciLCJiZ0luaXQiLCJjdnNfd2lkdGgiLCJjdnNfaGVpZ2h0IiwiZ2FtZUJnQ2FudmFzIiwiaW5pdCIsImJnVXBkYXRlIiwic2t5U3BlZWQiLCJtb3VudGFpblNwZWVkIiwiZ3JvdW5kU3BlZWQiLCJjbGVhclJlY3QiLCJtYWlsTnVtcyIsImRpZU51bXMiLCJwbGF5ZXJEaWVBZGQiLCJwbGF5ZXJNYWlsQWRkIiwiZ2FtZVN0YXR1cyIsImdhbWVTdGF0dXNJbml0IiwiZ2FtZUJvYXJkTG9vcCIsImdhbWVDYW52YXMiLCJkcmF3TWFpbCIsInVpX3dpZHRoIiwidWlfaGVpZ3RoIiwiZ2FtZVRlYWNoIiwiaXNNb2JpbGVEZXZpY2UiLCJmaW5hbGx5RHJhdyIsInVwZGF0ZVBsYXllciIsImlzTG9vcGluZyIsInBhdXNlVGltZXIiLCJwYXVzZVRpbWVGbiIsIm9ic3RhY2xlTGVuZ3RoIiwib2JzdGFjbGVBcnJheSIsIkxvb3BpbmciLCJiZ193aWR0aCIsImJnX2hlaWdodCIsImRyYXdPYnN0YWNsZVRvTWFwIiwib2JzdGFjbGVTcGVlZCIsInBhdXNlIiwiUGxheWVyRmluYWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZUZuIiwic3RhcnRMb29wIiwicmVzdGFydCIsImdhbWVBY3Rpb24iLCJnZXRDYW52YXNBbmRDb250ZXh0QnlJZCIsImlkIiwiZG9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImN0eCIsImNvbnNvbGUiLCJlcnJvciIsImdhbWVEb20iLCJnYW1lQmdEb20iLCJnYW1lSW5pdCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJvYnN0YWNsZVRpbWVyIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwiaSIsInBlck9ic3RhY2xlQXJyYXkiLCJmb3JFYWNoIiwidHlwZSIsImluZGV4IiwiZHJhd1RyZWUiLCJkcmF3U3RvbmUiLCJnZXRPYnN0YWNsZVN0YXR1cyIsIm1haWxJbWdVcmwiLCJtYWlsV2lkdGgiLCJtYWlsSGVpZ2h0IiwibWFpbEN1dFdpZHRoIiwibWFpbEN1dEhlaWdodCIsIm1haWxJbWciLCJkZWNvZGUiLCJ0aGVuIiwibWFpbFRvdWNoIiwieCIsInkiLCJhbmltYXRlQWxsVGltZSIsImFuaW1hdGVTcGVlZCIsImFuaW1hdGVUaW1lciIsIlgiLCJZIiwiciIsImwiLCJudW1zIiwiYW5nbGVVbml0IiwiUEkiLCJjdXJyZW50QW5nbGUiLCJzaW4iLCJjb3MiLCJ1bml0VmFsIiwibWFpbFZlcnRpY2FsVW5pdCIsImhvcml6b25Qb3NVbml0IiwibWFpbEFjdGlvbkluZGV4IiwiY2hhbmdlRXZlcnlGcmFtZSIsInlFcnJvclZhbCIsInN0b25lSW1nVXJsIiwic3RvbmVJbWdFbGVtZW50Iiwic3RvbmVXaWR0aCIsInN0b25lSGVpZ2h0Iiwic3RvbmVQb3NYVW5pdCIsInN0b25lUG9zWVVuaXQiLCJ0cmVlSW1nVXJsIiwidHJlZUltZ0VsZW1lbnQiLCJlcnIiLCJsb2ciLCJ0cmVlV2lkdGgiLCJ0cmVlSGVpZ2h0IiwidHJlZVBvc1hVbml0IiwidHJlZVBvc1lVbml0IiwiUGxheWVySW1nVXJsIiwicGxheWVyV2lkdGgiLCJwbGF5ZXJIZWlnaHQiLCJ2ZXJ0aWNhbFVuaXQiLCJjdXJyZW50VmVydGljYWwiLCJpbml0UG9zWCIsIlVuaXRXaWR0aCIsImhvcml6b25Qb3MiLCJwbGF5ZXJQZXJXaWR0aCIsIlBsYXllckltZ0VsZW1lbnQiLCJjaGVja01vdmUiLCJtYXhWYWwiLCJtaW5WYWwiLCJjb2xsYXBzZSIsInBvc1hQbHVzIiwiTGFzdENvbGxhcHNlSW5kZXgiLCJjb2xsYXBzZUluZGV4IiwiY29sbGFwc2VUeXBlIiwiZGllTWVkaWFQbGF5IiwiUGxheWVySnVtcCIsIm1haWxNZWRpYVBsYXkiLCJpc0NvbGxhcHNlIiwicG9zWCIsInBvc1kiLCJjdXJyZW50QWN0aW9uSW5kZXgiLCJjdXRBY3Rpb25WYWwiLCJNb3ZlVXAiLCJNb3ZlRG93biIsIlRpbWVyIiwiaG93VHJhbnNwYXJlbnQiLCJBbHBoYSIsIm1heFRpbWVyIiwic2FmZVBvc1kiLCJjb2xsYXBzZUluZGV4MiIsImZ1dHVyZUNvbCIsImZ1dHVyZUNvbDIiLCJyZXN1bHRDb2wiLCJmdXR1cmVUeXBlIiwiZnV0dXJlVHlwZTIiLCJmaW5kSW5kZXgiLCJlIiwicmVzdGFydERvbUFjdGlvbiIsIm1vYmlsZURldmljZSIsImlzTW9iaWxlIiwic29tZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwicGxhdGZvcm0iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJhZGRFdmVudExpc3RlbmVyIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwibW92ZUVuZFgiLCJjaGFuZ2VkVG91Y2hlcyIsIm1vdmVFbmRZIiwidGVzdFZhbCIsImFicyIsIm9ua2V5dXAiLCJrZXlDb2RlIiwiZ2FtZXJlU3RhcnRGbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhdWRpb0RpZURvbSIsImN1cnJlbnRUaW1lIiwicGxheSIsImF1ZGlvTWFpbERvbSIsIndpbmRvdyIsInN0YXJ0QnRuRG9tIiwiYmVmb3JlQ29udGFpbmVyRG9tIiwiY2xhc3NMaXN0IiwiYWRkIiwiU3RhcnRUb1BsYXlHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHRCxtQkFBTyxDQUFDLHNFQUFELENBQTlCOztBQUNBLElBQU1FLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyxrRUFBRCxDQUE1QixDLENBSUE7OztJQUNNRyxpQjtBQUNGLDZCQUFZQyxNQUFaLEVBQW1CQyxLQUFuQixFQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUE4Q0MsTUFBOUMsRUFBMkQ7QUFBQSxRQUFOQyxHQUFNLHVFQUFGLENBQUU7O0FBQUE7O0FBQ3ZELFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS1AsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFZQSxLQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFB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QUZ5QixFQUd6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUh5QixFQUl6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUp5QixFQUt6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUx5QixFQU16QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQU55QixFQU96QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQVB5QixFQVF6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQVJ5QixFQVN6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQVR5QixFQVV6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQVZ5QixFQVd6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQVh5QixFQVl6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQVp5QixFQWF6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQWJ5QixFQWN6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQWR5QixFQWV6QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUss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QixHQUFHLE9BQU8saUpBQWlKLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLFNBQVMsS0FBSyxRQUFRLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxTQUFTLEtBQUssTUFBTSxXQUFXLE1BQU0sWUFBWSxLQUFLLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sU0FBUyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksTUFBTSxPQUFPLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLFNBQVMsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSwwaUJBQTBpQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixLQUFLLDhFQUE4RSxtQkFBbUIsS0FBSyx5SkFBeUoscUJBQXFCLEtBQUssY0FBYyxxQkFBcUIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssdUJBQXVCLG1CQUFtQixLQUFLLG1FQUFtRSxrQkFBa0Isb0JBQW9CLEtBQUssZUFBZSxnQ0FBZ0Msd0JBQXdCLEtBQUssNE5BQTROLGlDQUFpQyw4QkFBOEIsS0FBSyw0QkFBNEIsaUNBQWlDLDhCQUE4Qix3Q0FBd0MscUNBQXFDLGdDQUFnQyxLQUFLLGtCQUFrQix1QkFBdUIsNEJBQTRCLHlCQUF5QixLQUFLLG9JQUFvSSw4QkFBOEIseUJBQXlCLGlCQUFpQix3QkFBd0IsS0FBSyxzS0FBc0ssc0JBQXNCLGtCQUFrQixLQUFLLGdKQUFnSixzQkFBc0IsS0FBSyw2T0FBNk8sd0JBQXdCLCtDQUErQywyQ0FBMkMsYUFBYSw0R0FBNEcsNkJBQTZCLEtBQUssK0hBQStILG1CQUFtQixLQUFLLCtKQUErSixrQkFBa0IsZ0RBQWdELGFBQWEsMEdBQTBHLGtCQUFrQixLQUFLLGdGQUFnRixrQkFBa0IsS0FBSyx5RkFBeUYsa0NBQWtDLHNCQUFzQix1Q0FBdUMsS0FBSyxtTUFBbU0sa0JBQWtCLDJCQUEyQiw0QkFBNEIsbUNBQW1DLGFBQWEsZ1NBQWdTLHdCQUF3QiwwQkFBMEIseUNBQXlDLHdDQUF3QyxhQUFhLHFKQUFxSiw0QkFBNEIsS0FBSywwVkFBMFYsNkJBQTZCLEtBQUssK2hCQUEraEIsbUNBQW1DLGdDQUFnQyxtQ0FBbUMsY0FBYyx3SEFBd0gsd0JBQXdCLEtBQUssZ1JBQWdSLCtCQUErQiwyQkFBMkIsOEJBQThCLDZCQUE2QixhQUFhLGlQQUFpUCxzQ0FBc0MsNkNBQTZDLHdDQUF3Qyx3Q0FBd0MsS0FBSyxnT0FBZ08saUNBQWlDLEtBQUsscUlBQXFJLGtCQUFrQixtQkFBbUIsS0FBSywwSkFBMEosdUJBQXVCLG9DQUFvQyxhQUFhLGdGQUFnRixrQ0FBa0MsMEJBQTBCLEtBQUssMkRBQTJELG9CQUFvQixLQUFLLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLEtBQUsscUJBQXFCLDRCQUE0QiwwQkFBMEIsS0FBSyxhQUFhLCtCQUErQixLQUFLLGtCQUFrQixrQkFBa0Isa0JBQWtCLG1CQUFtQixLQUFLLGtCQUFrQix5QkFBeUIsS0FBSyxzQkFBc0Isd0JBQXdCLHlCQUF5QixvQkFBb0IseUJBQXlCLEtBQUssMEJBQTBCLGtCQUFrQixtQkFBbUIscUJBQXFCLDRCQUE0QixLQUFLLGFBQWEsd0JBQXdCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLG1CQUFtQixxQkFBcUIsa0NBQWtDLEtBQUssc0JBQXNCLDJCQUEyQixjQUFjLGdCQUFnQixvQkFBb0IsK0JBQStCLDJCQUEyQix5QkFBeUIsMEJBQTBCLGtDQUFrQyw0QkFBNEIsd0JBQXdCLHFEQUFxRCw2QkFBNkIsOEJBQThCLFNBQVMsK0JBQStCLDRCQUE0Qiw2QkFBNkIsU0FBUyxnQ0FBZ0MsNkJBQTZCLDZCQUE2QixTQUFTLHdCQUF3QiwrQkFBK0Isd0JBQXdCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLGFBQWEsOEJBQThCLDRCQUE0QixhQUFhLHVCQUF1Qiw0QkFBNEIsbUNBQW1DLHVCQUF1Qix5QkFBeUIsMEJBQTBCLHdCQUF3QixhQUFhLHFCQUFxQiwyQkFBMkIsd0JBQXdCLGFBQWEscUJBQXFCLDJCQUEyQixzQkFBc0IsYUFBYSxTQUFTLDBCQUEwQiwrQkFBK0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsc0JBQXNCLG9CQUFvQixzQ0FBc0MsZ0NBQWdDLDhCQUE4Qix1Q0FBdUMsOENBQThDLG1DQUFtQyw2QkFBNkIsZ0NBQWdDLG9DQUFvQyxtQ0FBbUMsdUNBQXVDLHdDQUF3QyxpQkFBaUIsOEJBQThCLHNEQUFzRCw4Q0FBOEMsbUNBQW1DLHdDQUF3Qyx1Q0FBdUMsaUJBQWlCLGFBQWEsU0FBUyx3Q0FBd0MsdUJBQXVCLCtCQUErQiwwQkFBMEIsOEJBQThCLGFBQWEsU0FBUyxLQUFLLHVDQUF1QztBQUNoa3RCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQitGO0FBQy9GLFlBQTBJOztBQUUxSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx1SEFBTzs7OztBQUl4QixpRUFBZSw4SEFBYyxNQUFNLEU7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0NBR0E7O0FBQ0E7QUFDQTtDQUVBOztBQUNBRSxNQUFNLENBQUNoTSxNQUFQLEdBQWdCLFlBQU07QUFDbEI7QUFDQSxNQUFHK0Isc0RBQWMsRUFBakIsRUFBb0IsQ0FDbkIsQ0FIaUIsQ0FJbEI7OztBQUNBLE1BQU1rSyxXQUFXLEdBQUczSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEIsQ0FMa0IsQ0FNbEI7O0FBQ0EsTUFBTTJJLGtCQUFrQixHQUFHNUksUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUEzQjtBQUNBMEksYUFBVyxDQUFDbEIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBcUMsWUFBSTtBQUNyQ21CLHNCQUFrQixDQUFDQyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsaUJBQWpDO0FBQ0FDLG1CQUFlO0FBQ2xCLEdBSEQsRUFHRSxLQUhGO0FBTUgsQ0FkRDs7QUFnQkEsU0FBU0EsZUFBVCxHQUEwQjtBQUN0QjtBQUNBdkksaURBQVEsR0FGYyxDQUd0Qjs7QUFDQXZCLG9EQUFPO0FBQ1YsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8g5q+P5YCL6Z2c5oWL6LOH5rqQ57eo6K2v5b6M6Lev5b6RXHJcbmNvbnN0IHNreUltZ1VybCA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy9za3kuanBnJylcclxuY29uc3QgbW91bnRhaW5JbWdVcmwgPSByZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvbW91bnRhaW4ucG5nJylcclxuY29uc3QgZ3JvdW5kSW1nVXJsID0gcmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzL2dyb3VuZC5qcGcnKVxyXG5cclxuXHJcblxyXG4vLyDog4zmma/lhYPntKAg5YyF5ZCrIOiDjOaZr+WcsOadvyDog4zmma/lsbEg6IOM5pmv5aSp56m6XHJcbmNsYXNzIEJhY2tncm91bmRFbGVtZW50e1xyXG4gICAgY29uc3RydWN0b3IoaW1nVXJsLGluaXRYLGluaXRZLCB3aWR0aCwgaGVpZ2h0LGNhbnZhcyxtdWw9MSl7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IFwiXCJcclxuICAgICAgICB0aGlzLmltZ1VybCA9IGltZ1VybFxyXG4gICAgICAgIHRoaXMuaW5pdFggPSBpbml0WDtcclxuICAgICAgICB0aGlzLmluaXRZID0gaW5pdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9d2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcclxuICAgICAgICB0aGlzLm11bD1tdWxcclxuICAgIH1cclxuICAgIGluaXQoKXtcclxuICAgICAgICAvLyDkuIvpnaLmnInnibnliKXpnIDmsYLvvIzopoHpgb/lhY10aGlz6LeR5o6JXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8g6IOM5pmv6Lev5b6RXHJcbiAgICAgICAgY29uc3QgSW1nVXJsID0gc2VsZi5pbWdVcmxcclxuICAgICAgIFxyXG4gICAgICAgIC8vIOiDjOaZr+WclueJh+WuueWZqOeUn+aIkFxyXG4gICAgICAgIGNvbnN0IEJnR3JvdW5kSW1nID0gbmV3IEltYWdlKHRoaXMud2lkdGgpO1xyXG4gICAgICAgIC8vIOWclueJh+i8ieWFpeW+jOaJjeiDveaIkOWKn+e5quijvVxyXG4gICAgICAgIEJnR3JvdW5kSW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNlbGYuaW1hZ2UgPSBCZ0dyb3VuZEltZ1xyXG4gICAgICAgICAgICAvLyDliJ3mrKHovInlhaXnm7TmjqXmuLLmn5NcclxuICAgICAgICAgICAgc2VsZi5yZW5kZXIoMClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5oqK5ZyW54mH6KOd6YCy5a655ZmoXHJcbiAgICAgICAgQmdHcm91bmRJbWcuc3JjID0gSW1nVXJsIFxyXG4gICAgICAgIHNlbGYuaW1hZ2UgPSBCZ0dyb3VuZEltZ1xyXG4gICAgfVxyXG4gICAgLy8g57mq6KO96IOM5pmvID0+IOW4tuWFpeeVtuWJjemBiuaIsuaZgumWk+i7uFxyXG4gICAgcmVuZGVyKGN1cnJlbnRUaW1lcil7XHJcbiAgICAgICAgLy8g5aaC5p6cIOWclueJh+aIkOWKn+i8ieWFpSDnuaroo73miJBjYW52YXNcclxuICAgICAgICBpZih0aGlzLmltYWdlLmNvbXBsZXRlKXtcclxuICAgICAgICAgICAgLy8g5LiJ5YCL6IOM5pmv6YCj5o6lIOWLlei1t+S+huS4jeacg+aWt1xyXG4gICAgICAgICAgICBpZih0aGlzLm11bCA+MSl7XHJcbiAgICAgICAgICAgICAgICAvLyDngrrkuoborpNncm91bmTog4zmma/lrozmlbTlkYjnj77vvIzkuI3ooqvoo4HliIdcclxuICAgICAgICAgICAgICAgIC8vIOWboOeCuuS4gOasoeWPqumhr+ekuuS4gOWNiua4healmueahOiDjOaZryDmiYDku6Xni4Dmr5TovIPlpJrog4zmma/lhYPntKBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KjEuMzUsdGhpcy5pbml0WC1jdXJyZW50VGltZXIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoLzIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KjEuMzUsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCozLzIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqdGhpcy5tdWwsdGhpcy5pbml0WC1jdXJyZW50VGltZXIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqdGhpcy5tdWwsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcisyKnRoaXMud2lkdGgsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyLHRoaXMuaW5pdFksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgsdGhpcy5pbml0WSx0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyKzIqdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOWkqeepuueahOiDjOaZr1xyXG5sZXQgc2t5Qmc7XHJcbi8vIOWxseeahOiDjOaZr1xyXG5sZXQgbW91bnRhaW5CZztcclxuLy8g5Zyw5p2/55qE6IOM5pmvXHJcbmxldCBncm91bmRCZztcclxuXHJcbi8vIOWPg+aVuCDnlavluIPpq5jlr6zoiIcgY2FudmFz5LiK5LiL5paHXHJcbmV4cG9ydCBmdW5jdGlvbiBiZ0luaXQoY3ZzX3dpZHRoLGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzKXtcclxuXHJcbiAgICAvLyDlrprnvqnog4zmma/lhYPntKBcclxuICAgIHNreUJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KHNreUltZ1VybCwwLDAsY3ZzX3dpZHRoLCBjdnNfaGVpZ2h0KjIvMTAsZ2FtZUJnQ2FudmFzKVxyXG4gICAgbW91bnRhaW5CZyA9IG5ldyBCYWNrZ3JvdW5kRWxlbWVudChtb3VudGFpbkltZ1VybCwwLGN2c19oZWlnaHQqMS8yMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQqMi8xMCxnYW1lQmdDYW52YXMpXHJcbiAgICBncm91bmRCZyA9IG5ldyBCYWNrZ3JvdW5kRWxlbWVudChncm91bmRJbWdVcmwsMCxjdnNfaGVpZ2h0KjUvMjAsY3ZzX3dpZHRoLCBjdnNfaGVpZ2h0LGdhbWVCZ0NhbnZhcywyLjcpXHJcbiAgICAvLyDliJ3mrKHnuaroo70gXHJcbiAgICBza3lCZy5pbml0KClcclxuICAgIG1vdW50YWluQmcuaW5pdCgpXHJcbiAgICBncm91bmRCZy5pbml0KClcclxufVxyXG5cclxuLy8g5Y+D5pW4IOeVq+W4g+mrmOWvrOiIhyBjYW52YXPkuIrkuIvmlodcclxuZXhwb3J0IGZ1bmN0aW9uIGJnVXBkYXRlKGN2c193aWR0aCxjdnNfaGVpZ2h0LGdhbWVCZ0NhbnZhcyxjdXJyZW50VGltZXIpe1xyXG4gICAgLy8g5q+P5YCL6IOM5pmv5YWD57Sg55qE6YCf5bqmIOWCmeiou++8muWkqeepuui3kei2heaFoiAg5bGx5pyJ6bue5oWiICDlnLDmnb/lhYPntKDnqI3lvq7lv6vkuIDpu55cclxuICAgIGNvbnN0IHNreVNwZWVkID0gY3VycmVudFRpbWVyLzM7XHJcbiAgICBjb25zdCBtb3VudGFpblNwZWVkID0gY3VycmVudFRpbWVyKjIvMztcclxuICAgIGNvbnN0IGdyb3VuZFNwZWVkID0gY3VycmVudFRpbWVyO1xyXG4gICAgLy8g5riF6Zmk6IOM5pmv55Wr5biDXHJcbiAgICBnYW1lQmdDYW52YXMuY2xlYXJSZWN0KDAsMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQpXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8g6YeN5paw5riy5p+TIOW4tuWFpeeahOaVuOWtl+S4jeiDvei2hemBjuiDjOaZr+WvrOW6piDmiYDku6XnlKjppJjmlbhcclxuICAgIHNreUJnLnJlbmRlcihza3lTcGVlZCVjdnNfd2lkdGgpXHJcbiAgICBtb3VudGFpbkJnLnJlbmRlcihtb3VudGFpblNwZWVkJWN2c193aWR0aClcclxuICAgIGdyb3VuZEJnLnJlbmRlcihncm91bmRTcGVlZCVjdnNfd2lkdGgpXHJcbn0iLCIvLyDliJ3lp4vlgLxcclxuaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi9pbml0J1xyXG4vLyDkv6Hku7bnuaroo73mlrnms5VcclxuaW1wb3J0IHtkcmF3TWFpbH0gZnJvbSAnLi9vYnN0YWNsZS9tYWlsJ1xyXG4vLyDliKTmlrfmmK/lkKbooYzli5Xoo53nva5cclxuaW1wb3J0IHtpc01vYmlsZURldmljZX0gZnJvbSAnLi91bnRpbCdcclxuXHJcbi8vIOeOqeWutlxyXG5pbXBvcnQge3VwZGF0ZVBsYXllcn0gZnJvbSAnLi9wbGF5ZXInXHJcbi8vIOS/oeS7tuaVuFxyXG5sZXQgbWFpbE51bXMgPSAwO1xyXG5cclxuLy8g5q275Lqh5pW4XHJcbmxldCBkaWVOdW1zID0gMDtcclxuXHJcbi8vIOeOqeWutuatu+S6oVxyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyRGllQWRkKCl7XHJcbiAgICBkaWVOdW1zKz0xO1xyXG59XHJcblxyXG4vLyDnjqnlrrblkIPliLDkv6FcclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1haWxBZGQoKXtcclxuICAgIG1haWxOdW1zICs9MTtcclxufVxyXG5cclxuLy8g5Y+W5b6X55uu5YmN5YiG5pW454uA5oWLXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhdHVzKCl7XHJcbiAgICByZXR1cm4gW21haWxOdW1zLGRpZU51bXNdXHJcbn1cclxuLy8g6YGK5oiy5YiG5pW45Yid5aeL5YyWXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lU3RhdHVzSW5pdCgpe1xyXG4gICAgZGllTnVtcyA9IDA7XHJcbiAgICBtYWlsTnVtcyA9IDA7XHJcbn1cclxuXHJcbi8vIOe5quijveWPiuaZguiomOWIhuadv1xyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUJvYXJkTG9vcCgpe1xyXG4gICAgLy8g5Lul5LiL6Kit5a6a5pyD6JOL6YGO5paw5ZyWXHJcbiAgICBnYW1lQ2FudmFzLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIlxyXG4gICAgLy8g5a2X5b2iIOWtl+Wkp+Wwj1xyXG4gICAgZ2FtZUNhbnZhcy5mb250ID0gXCJib2xkIDgwcHggQXJpYWxcIlxyXG4gICAgLy8g5a2X5bCN6b2K5bqV6YOoXHJcbiAgICBnYW1lQ2FudmFzLnRleHRCYXNlbGluZSA9IFwiYm90dG9tXCJcclxuICAgIC8vIOWtl+mhj+iJsum7kem7keeahFxyXG4gICAgZ2FtZUNhbnZhcy5maWxsU3R5bGU9XCJibGFja1wiXHJcbiAgICAvLyDlsIdFbWFpbOeahOWcluaUvuWIsOmcgOimgeeahOWcsOaWuVxyXG4gICAgZHJhd01haWwoMTMsNS4zLDEpXHJcbiAgICAvLyDlrZfnmoTlhaflrrnvvIzoiIfkvY3nva5cclxuICAgIGdhbWVDYW52YXMuZmlsbFRleHQoYHggJHttYWlsTnVtc31gLHVpX3dpZHRoKjUvNix1aV9oZWlndGgpXHJcbiAgICBcclxufVxyXG5cclxuLy8g57mq6KO95pWZ5a24XHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lVGVhY2goKXtcclxuICAgIC8vIOS7peS4i+ioreWumuacg+iTi+mBjuaWsOWcllxyXG4gICAgZ2FtZUNhbnZhcy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCJcclxuICAgIC8vIOWtl+W9oiDlrZflpKflsI9cclxuICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCAzMHB4IEFyaWFsXCJcclxuICAgIGdhbWVDYW52YXMudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIlxyXG4gICAgLy8gZ2FtZUNhbnZhcy50ZXh0QWxpZ24gPSBcImxlZnRcIlxyXG4gICAgLy8g6IOM5pmv6aGP6Imy57KJ57KJ55qEXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxTdHlsZT1cIiNmM2I4YzhcIlxyXG4gICAgZ2FtZUNhbnZhcy5maWxsUmVjdCh1aV93aWR0aCo0LzYsMCx1aV93aWR0aC81LHVpX2hlaWd0aC83KVxyXG4gICAgIC8vIOWtl+mhj+iJsum7kem7keeahFxyXG4gICAgZ2FtZUNhbnZhcy5maWxsU3R5bGU9XCJibGFja1wiXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KCfmk43nqbrmlrnlvI/ngronLHVpX3dpZHRoKjQvNix1aV9oZWlndGgvMTQpXHJcbiAgICAvLyDkuI3lkIzoo53nva7poa/npLrlrZfkuI3lkIxcclxuICAgIGlmKGlzTW9iaWxlRGV2aWNlKCkpe1xyXG4gICAgICAgIGdhbWVDYW52YXMuZmlsbFRleHQoJ+aJi+WLolwi5LiK5ruR6IiH5LiL5ruRXCInLHVpX3dpZHRoKjQvNix1aV9oZWlndGgvNylcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGdhbWVDYW52YXMuZmlsbFRleHQoJ+mNteebpOeahFwi5LiK5LiL5bem5Y+zXCInLHVpX3dpZHRoKjQvNix1aV9oZWlndGgvNylcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5hbGx5RHJhdygpe1xyXG4gICAgIC8vIOS7peS4i+ioreWumuacg+iTi+mBjuaWsOWcllxyXG4gICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAgLy8g5a2X5b2iIOWtl+Wkp+Wwj1xyXG4gICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCA2MHB4IEFyaWFsXCJcclxuICAgICBnYW1lQ2FudmFzLnRleHRCYXNlbGluZSA9IFwiYm90dG9tXCJcclxuICAgICAvLyBnYW1lQ2FudmFzLnRleHRBbGlnbiA9IFwibGVmdFwiXHJcbiAgICAgIC8vIOWtl+mhj+iJsum7kem7keeahFxyXG4gICAgZ2FtZUNhbnZhcy5maWxsU3R5bGU9XCJibGFja1wiXHJcbiAgICAgXHJcbiAgICAgZ2FtZUNhbnZhcy5jbGVhclJlY3QoMCwwLHVpX3dpZHRoLHVpX2hlaWd0aClcclxuICAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KGDmi7/liLDkv6Hku7YgeCR7bWFpbE51bXN9YCx1aV93aWR0aCoyLzYsdWlfaGVpZ3RoKjMvMTApXHJcbiAgICAgZ2FtZUNhbnZhcy5maWxsVGV4dChg5b6p5rS75qyh5pW4IHgke2RpZU51bXN9YCx1aV93aWR0aCoyLzYsdWlfaGVpZ3RoKjUvMTApXHJcbiAgICAgLy8g5a2X5b2iIOWtl+Wkp+Wwj1xyXG4gICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCAzMHB4IEFyaWFsXCJcclxuICAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KFwi6bue5oiR6YeN546pXCIsdWlfd2lkdGgqMi82LHVpX2hlaWd0aCo3LzEwKVxyXG4gICAgLy8g57mq6KO9546p5a62XHJcbiAgICB1cGRhdGVQbGF5ZXIoOTkpXHJcbn0iLCJcclxuLy8g6YGK5oiy6LOH6KiK5Yid5aeL5YyWXHJcbmltcG9ydCB7Z2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGgsZ2FtZUJnQ2FudmFzLGJnX3dpZHRoLGJnX2hlaWdodH0gZnJvbSAnLi9pbml0J1xyXG4vLyDog4zmma/liJ3lp4vljJboiIfmm7TmlrBcclxuaW1wb3J0IHtiZ1VwZGF0ZX0gZnJvbSAnLi9iYWNrZ3JvdW5kJ1xyXG4vLyDnjqnlrrZcclxuaW1wb3J0IHt1cGRhdGVQbGF5ZXIsUGxheWVyRmluYWx9IGZyb20gJy4vcGxheWVyJ1xyXG4vLyDpmpznpJnniannuaroo73jgIHpmpznpJnnianlnLDlnJYg44CB6Zqc56SZ54mp6YCf5bqmXHJcbmltcG9ydCB7ZHJhd09ic3RhY2xlVG9NYXAsb2JzdGFjbGVBcnJheSxvYnN0YWNsZVNwZWVkfSBmcm9tICcuL29ic3RhY2xlL2dhbWVNYXBzJztcclxuLy8g6YGK5oiy5YiG5pW457SA6YyEID0+5Y+K5pmC6KiY5YiG5p2/5pa55rOVXHJcbmltcG9ydCB7Z2FtZUJvYXJkTG9vcCxnYW1lVGVhY2h9IGZyb20gJy4vZ2FtZUJvYXJkJ1xyXG4vLyBET00gd2luZG9355u46Zec5bel5YW3XHJcbmltcG9ydCB7Z2FtZUFjdGlvbn0gZnJvbSAnLi91bnRpbCdcclxuXHJcbi8vICDpgYrmiLLmmYLplpPou7hcclxubGV0IGN1cnJlbnRUaW1lciA9IDA7IFxyXG5cclxuLy/mmK/lkKbmmqvlgZxcclxubGV0IGlzTG9vcGluZyA9IHRydWU7XHJcblxyXG4vLyDmmqvlgZzlub7np5JcclxubGV0IHBhdXNlVGltZXIgPSAwO1xyXG5cclxuXHJcbi8vIOaaq+WBnOaZgumWk1xyXG5sZXQgcGF1c2VUaW1lRm4gPSAoKT0+e31cclxuXHJcbi8vIOmanOekmeeJqeWcsOWclue4vemVt1xyXG5sZXQgb2JzdGFjbGVMZW5ndGggPSBvYnN0YWNsZUFycmF5Lmxlbmd0aFxyXG4vLyDnhKHpmZDov7TlnIhcclxuZXhwb3J0IGZ1bmN0aW9uIExvb3BpbmcoKXtcclxuICAgIC8vIOaYr+WQpuWFqOmrlOWFg+e0oOato+W4uOmBi+S9nFxyXG4gICAgaWYoaXNMb29waW5nKXtcclxuICAgICAgICAvLyDmuIXnqbrnlavluINcclxuICAgICAgICBnYW1lQ2FudmFzLmNsZWFyUmVjdCgwLDAsdWlfd2lkdGgsdWlfaGVpZ3RoKVxyXG4gICAgICAgIC8vIOmBiuaIsumAsueoi+WKoOS4gFxyXG4gICAgICAgIGN1cnJlbnRUaW1lcis9MjtcclxuICAgICAgICAvLyDog4zmma/muLLmn5Pmm7TmlrBcclxuICAgICAgICBiZ1VwZGF0ZShiZ193aWR0aCxiZ19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcilcclxuICAgICAgICBcclxuICAgICAgICAvLyDmm7TmlrDnjqnlrrbos4foqIpcclxuICAgICAgICB1cGRhdGVQbGF5ZXIoY3VycmVudFRpbWVyKVxyXG4gICAgICAgIC8vIOaWsOWclueVq+WcqOiIiuWcluS4i1xyXG4gICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdmVyXCJcclxuICAgICAgICAgIC8vIOa4suafkyDpmpznpJnnialcclxuICAgICAgICBkcmF3T2JzdGFjbGVUb01hcChjdXJyZW50VGltZXIpXHJcbiAgICAgICAgLy8g5Y+K5pmC6KiY5YiG5p2/5riy5p+TXHJcbiAgICAgICAgZ2FtZUJvYXJkTG9vcCgpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvLyDmmqvlgZznp5Lmlbjmm7TmlrBcclxuICAgICAgICBwYXVzZVRpbWVyKys7XHJcbiAgICAgICAgcGF1c2VUaW1lRm4ocGF1c2VUaW1lcilcclxuICAgIH1cclxuICAgIC8vIOaWsOaJi+aVmeWtuO+8jOWcqCAxNTBGcmFtZeWJjVxyXG4gICAgaWYoY3VycmVudFRpbWVyPDE1MCl7XHJcbiAgICAgICAgZ2FtZVRlYWNoKClcclxuICAgIH1cclxuXHJcbiAgICAvLyDnlbZjdXJyZW50VGltZXIgPiBvYnN0YWNsZUxlbmd0aC9vYnN0YWNsZVNwZWVkIOS7o+ihqCDlnLDlnJbot5HlrozkuoZcclxuICAgIGlmKGN1cnJlbnRUaW1lcj5vYnN0YWNsZUxlbmd0aC9vYnN0YWNsZVNwZWVkKXtcclxuICAgICAgICAvLyDnjqnlrrbmnIDlvozli5XkvZxcclxuICAgICAgICBwYXVzZShQbGF5ZXJGaW5hbClcclxuICAgICAgICAvLyByZXN0YXJ0KClcclxuICAgIH1cclxuICAgIC8vIOaMgee6jOabtOaWsOinuOeZvFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKExvb3BpbmcpXHJcbn1cclxuLy8g5pqr5YGc6YGK5oiy77yM5Y+D5pW454K6IOaaq+WBnOaZguimgeWBmueahOS6i+WSjOaaq+WBnOe4veaZgumWk1xyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2UocGF1c2VGbil7XHJcbiAgICBpc0xvb3BpbmcgPSBmYWxzZTtcclxuICAgIHBhdXNlVGltZUZuID0gcGF1c2VGblxyXG59XHJcbi8vIOe5vOe6jOmBiuaIslxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRMb29wKCl7XHJcbiAgICAvLyDmmqvlgZznp5LmlbjliJ3lp4vljJZcclxuICAgIHBhdXNlVGltZXI9MDtcclxuICAgIHBhdXNlVGltZUZuPSgpPT57fVxyXG4gICAgaXNMb29waW5nID0gdHJ1ZVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0YXJ0KCl7XHJcbiAgICBjdXJyZW50VGltZXIgPSAwO1xyXG4gICAgc3RhcnRMb29wKClcclxufVxyXG5cclxuXHJcbi8vIOeOqeWutumBiuaIsuS4reenu+WLleS6i+S7tuebo+iBvee2geWumlxyXG5nYW1lQWN0aW9uKClcclxuXHJcblxyXG4iLCJcclxuLy8g6IOM5pmv5Yid5aeL5YyWXHJcbmltcG9ydCB7YmdJbml0fSBmcm9tICcuL2JhY2tncm91bmQnXHJcbi8vIOWIqeeUqGNhbnZhcyBJRCDlj5blvpcgRE9NIOWSjCBjYXZhbnNcclxuZnVuY3Rpb24gZ2V0Q2FudmFzQW5kQ29udGV4dEJ5SWQoaWQpe1xyXG4gICAgY29uc3QgZG9tID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJysgaWQpO1xyXG4gICAgaWYoZG9tLmdldENvbnRleHQpe1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGRvbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHJldHVybltkb20sIGN0eF07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5LiN5pSv5o+0Y2FudmFzXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBVSUNhbnZhcyAvLyDpgYrmiLLnmoTkurrnianpmpznpJnnianLi+S/oeWwgSDnlavluINcclxuY29uc3QgW2dhbWVEb20sZ2FtZUNhbnZhc10gPSBnZXRDYW52YXNBbmRDb250ZXh0QnlJZCgnZ2FtZS11aScpXHJcbi8vIOiDjOaZr0NhbnZhcyAvLyDpgYrmiLLog4zmma8g55Wr5biDXHJcbmNvbnN0IFtnYW1lQmdEb20sZ2FtZUJnQ2FudmFzXSA9IGdldENhbnZhc0FuZENvbnRleHRCeUlkKCdnYW1lLWJnJylcclxuXHJcbmNvbnN0IHVpX3dpZHRoID0gZ2FtZURvbS53aWR0aDtcclxuY29uc3QgdWlfaGVpZ3RoID0gZ2FtZURvbS5oZWlnaHQ7XHJcblxyXG4vLyDog4zmma/nlavluIPlr6zluqbpq5jluqZcclxuY29uc3QgYmdfd2lkdGggPSBnYW1lQmdEb20ud2lkdGg7XHJcbmNvbnN0IGJnX2hlaWdodCA9IGdhbWVCZ0RvbS5oZWlnaHQ7XHJcblxyXG4vLyDpgYrmiLLliJ3lp4vljJbmlrnms5VcclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVJbml0KCl7XHJcbiAgICAvLyDog4zmma/muLLmn5NcclxuICAgIGJnSW5pdChiZ193aWR0aCxiZ19oZWlnaHQsZ2FtZUJnQ2FudmFzKVxyXG59XHJcblxyXG4vLyDpgYrmiLLnmoTmiYDmnInos4foqIpcclxuZXhwb3J0IHtnYW1lRG9tLGdhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RoLGdhbWVCZ0RvbSxnYW1lQmdDYW52YXMsYmdfd2lkdGgsYmdfaGVpZ2h0fVxyXG5cclxuIiwiLy8g5Zyw5ZyWIOWvrDE35YCL546p5a6255qE5a+sKDB+MTYpICDpq5g25qKd5bCP6LevKDB+NSlcclxuLy8g546p5a6255qE5L2N572uXHJcbmltcG9ydCB7Z2FtZUNhbnZhc30gZnJvbSAnLi4vaW5pdCdcclxuXHJcbi8vIOS/oeeusee5quijveaWueazlVxyXG5pbXBvcnQge2RyYXdNYWlsfSBmcm9tICcuL21haWwnXHJcbmltcG9ydCB7ZHJhd1RyZWV9IGZyb20gJy4vdHJlZSdcclxuaW1wb3J0IHtkcmF3U3RvbmV9IGZyb20gJy4vc3RvbmUnXHJcblxyXG4vLyDpmpznpJnnianmlbjluqbmhaLljYHlgI1cclxuZXhwb3J0IGNvbnN0IG9ic3RhY2xlU3BlZWQgPSAxLzMwXHJcblxyXG4vL+manOekmeeJqUFycmF5IOWcsOWcllxyXG4vLyAx5pivbWFpbCAy5pivdHJlZSAz5pivc3RvbmVcclxuZXhwb3J0IGNvbnN0IG9ic3RhY2xlQXJyYXkgPSBbXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMSwxLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMSwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwzLDAsMCwwXSxcclxuICAgIFsxLDEsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwzXSxcclxuICAgIFswLDAsMiwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDIsMywwXSxcclxuICAgIFswLDAsMywwLDEsMF0sXHJcbiAgICBbMCwzLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDAsMiwwXSwgXHJcbiAgICBbMywwLDAsMiwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMywwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFsyLDAsMSwwLDAsM10sICBcclxuICAgIFswLDAsMCwyLDAsM10sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwzXSxcclxuICAgIFszLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDAsMSwwXSwgIFxyXG4gICAgWzMsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLCAgXHJcbiAgICBbMCwwLDAsMiwwLDNdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMywwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sICBcclxuICAgIFszLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwyLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSwgIFxyXG4gICAgWzMsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMywwLDBdLCAgXHJcbiAgICBbMywwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDIsMCwwXSxcclxuICAgIFswLDMsMCwyLDAsMF0sXHJcbiAgICBbMiwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwzLDMsM10sICBcclxuICAgIFswLDAsMCwyLDEsM10sXHJcbiAgICBbMCwwLDAsMywyLDNdLFxyXG4gICAgWzAsMCwwLDMsMCwyXSxcclxuICAgIFswLDAsMywwLDAsMl0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwwXSwgIFxyXG4gICAgWzEsMCwwLDAsMCwxXSxcclxuICAgIFswLDEsMCwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMSwwLDBdLFxyXG4gICAgWzAsMCwxLDEsMCwwXSxcclxuICAgIFswLDAsMSwxLDAsMF0sXHJcbiAgICBbMCwxLDAsMSwwLDBdLCAgXHJcbiAgICBbMSwwLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwxXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwyLDEsMF0sICBcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDEsMF0sXHJcbiAgICBbMCwxLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFsxLDAsMCwwLDEsMV0sXHJcbiAgICBbMCwwLDIsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMV0sXHJcbiAgICBbMCwwLDIsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMiwwLDAsMCwyLDBdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzIsMCwwLDAsMiwxXSxcclxuICAgIFswLDAsMCwwLDAsMV0sXHJcbiAgICBbMCwwLDAsMCwwLDFdLFxyXG4gICAgWzAsMCwwLDAsMCwxXSxcclxuICAgIFswLDAsMCwxLDAsMV0sXHJcbiAgICBbMCwwLDAsMSwwLDFdLFxyXG4gICAgWzAsMCwwLDEsMCwxXSxcclxuICAgIFswLDAsMCwxLDAsMV0sXHJcbiAgICBbMCwwLDAsMSwwLDFdLFxyXG4gICAgWzAsMCwwLDEsMCwwXSxcclxuICAgIFswLDAsMCwxLDAsMF0sXHJcbiAgICBbMCwzLDAsMSwyLDBdLFxyXG4gICAgWzAsMywxLDAsMiwyXSxcclxuICAgIFswLDMsMSwwLDIsMF0sXHJcbiAgICBbMCwzLDEsMCwyLDBdLFxyXG4gICAgWzAsMywxLDEsMiwwXSxcclxuICAgIFswLDMsMSwxLDIsMF0sXHJcbiAgICBbMCwzLDEsMSwyLDBdLFxyXG4gICAgWzAsMywxLDEsMiwwXSxcclxuICAgIFswLDMsMSwxLDIsMF0sXHJcbiAgICBbMywzLDEsMSwyLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSwgICBcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG5dXHJcblxyXG4vLyDnm67liY3pmpznpJnniannmoTliJ3lp4vliJdcclxubGV0IGZpcnN0SW5kZXg7XHJcbi8vIOmanOekmeeJqeeahOacgOW+jOWIl1xyXG5sZXQgbGFzdEluZGV4O1xyXG5cclxuXHJcbi8vIOmanOekmeeJqee5quijvVxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd09ic3RhY2xlVG9NYXAoY3VycmVudFRpbWVyKXtcclxuICAgIC8vIOW4jOacm+manOekmeeJqeaFom9ic3RhY2xlU3BlZWTlgI1cclxuICAgIGNvbnN0IG9ic3RhY2xlVGltZXIgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lcipvYnN0YWNsZVNwZWVkKVxyXG4gICAgLy8gb2JzdGFjbGVBcnJheeeahOWkp+Wwj1xyXG4gICAgbGV0IG9ic3RhY2xlTGVuZ3RoID0gb2JzdGFjbGVBcnJheS5sZW5ndGhcclxuICAgIC8vIOWmguaenOi3keWujOS6hiDkuI3nlKjmuLLmn5NcclxuICAgIGlmKG9ic3RhY2xlVGltZXI+b2JzdGFjbGVMZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiA7XHJcbiAgICB9XHJcbiAgICAvLyBvYnN0YWNsZUFycmF55Zyo5Zyw5ZyW55qE56ys5LiA5YiXXHJcbiAgICBmaXJzdEluZGV4ID0gb2JzdGFjbGVUaW1lclxyXG4gICAgLy8g5Zyw5ZyW5pyA5b6M5LiA5YiXXHJcbiAgICBsYXN0SW5kZXggPSAob2JzdGFjbGVUaW1lcisxNz5vYnN0YWNsZUxlbmd0aCk/b2JzdGFjbGVMZW5ndGg6b2JzdGFjbGVUaW1lcisxN1xyXG5cclxuICAgIGZvcihsZXQgaT1maXJzdEluZGV4OyBpPGxhc3RJbmRleDsgaSsrKXtcclxuICAgICAgICAvLyDmr4/kuIDliJfnmoTpmpznpJnnialcclxuICAgICAgICBjb25zdCBwZXJPYnN0YWNsZUFycmF5ID0gb2JzdGFjbGVBcnJheVtpXVxyXG4gICAgICAgIHBlck9ic3RhY2xlQXJyYXkuZm9yRWFjaCgodHlwZSxpbmRleCk9PntcclxuICAgICAgICAgICAgLy8gdHlwZSA9PT0g5piv5L+h5bCBIHR5cGUgPT09IDLmmK/mqLkgdHlwZSA9PT0gM+aYr+efs+mgrVxyXG4gICAgICAgICAgICBpZih0eXBlPT09MSl7XHJcbiAgICAgICAgICAgICAgICAvLyDlm6Dngrrkv6HmmK/po4TnmoTvvIzmiYDku6Xpo4TlnKjmnIDkuIrpnaJcclxuICAgICAgICAgICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAgICAgICAgICAgICBkcmF3TWFpbChpLWZpcnN0SW5kZXgsaW5kZXgsY3VycmVudFRpbWVyKVxyXG4gICAgICAgICAgICAgICAgZ2FtZUNhbnZhcy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLW92ZXJcIlxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlPT09Mil7XHJcbiAgICAgICAgICAgICAgICBkcmF3VHJlZShpLWZpcnN0SW5kZXgsaW5kZXgsY3VycmVudFRpbWVyKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlPT09Myl7XHJcbiAgICAgICAgICAgICAgICBkcmF3U3RvbmUoaS1maXJzdEluZGV4LGluZGV4LGN1cnJlbnRUaW1lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWPluW+l+manOekmeeJqea4suafk+eLgOaFi1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzdGFjbGVTdGF0dXMoKXtcclxuICAgIHJldHVybiBbZmlyc3RJbmRleCxsYXN0SW5kZXgsb2JzdGFjbGVBcnJheV1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuXHJcbmltcG9ydCB7cGF1c2Usc3RhcnRMb29wfSBmcm9tICcuLi9nYW1lbG9vcCdcclxuLy8g5L+h5bCB55qE57Sg5p2Q6Lev5b6RXHJcbmNvbnN0IG1haWxJbWdVcmwgPSByZXF1aXJlKCcuLi9hc3NldHMvaW1hZ2VzL21haWwucG5nJylcclxuXHJcbi8vIOWclueJh+mrmOWvrOW6plxyXG5sZXQgbWFpbFdpZHRoO1xyXG5sZXQgbWFpbEhlaWdodDtcclxuLy8g5ZyW54mH5Ymq6KOB6auY5a+sXHJcbmxldCBtYWlsQ3V0V2lkdGg7XHJcbmxldCBtYWlsQ3V0SGVpZ2h0XHJcblxyXG4vLyDmr4/mrKHnp7vli5XnmoTplpPplqPllq7kvY1cclxuXHJcbi8vIOiDjOaZr+WclueJh+WuueWZqOeUn+aIkFxyXG5jb25zdCBtYWlsSW1nID0gbmV3IEltYWdlKDUwMCk7XHJcbi8vIOaKiuWclueJh+ijnemAsuWuueWZqFxyXG5tYWlsSW1nLnNyYyA9IG1haWxJbWdVcmwgXHJcblxyXG4vLyDlnJbniYfopoHmiJDlip/oroDlj5blvozmiY3og73muLLmn5NcclxubWFpbEltZy5kZWNvZGUoKVxyXG4udGhlbigoKSA9PiB7XHJcbiAgICBtYWlsV2lkdGggPSB1aV93aWR0aC8yMDtcclxuICAgIG1haWxIZWlnaHQgPSB1aV9oZWlndGgvMjtcclxuICAgIG1haWxDdXRXaWR0aCA9IHVpX3dpZHRoLzM0O1xyXG4gICAgbWFpbEN1dEhlaWdodCA9IHVpX2hlaWd0aC82O1xyXG4gICAgXHJcbiAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShtYWlsSW1nLDAsMCxtYWlsQ3V0V2lkdGgsbWFpbEN1dEhlaWdodCx1aV93aWR0aC8xNyozLDAsbWFpbFdpZHRoLG1haWxIZWlnaHQpXHJcbn0pXHJcblxyXG5cclxuLy8g5L+h5Lu26KKr56Kw5Yiw55qE54m55pWIICDluLblhaXnorDliLDomZXnmoRY5bqn5qiZLOeisOWIsOiZleeahFnluqfmqJlcclxuZXhwb3J0IGZ1bmN0aW9uIG1haWxUb3VjaCh4LHkpe1xyXG4gICAgLy8g6YGK5oiy5pqr5YGcXHJcbiAgICBwYXVzZSgocGF1c2VUaW1lcik9PntcclxuICAgICAgICAvLyDpgJnmrKHli5XnlavnmoTnp5LmlbhcclxuICAgICAgICBjb25zdCBhbmltYXRlQWxsVGltZSA9IDRcclxuICAgICAgICAvLyDpgJnlgIvli5XnlavnmoTmlbjluqZcclxuICAgICAgICBjb25zdCBhbmltYXRlU3BlZWQgPSAyXHJcbiAgICAgICAgLy8g6YCZ5YCL5YuV55Wr55qEVGltZXJcclxuICAgICAgICBjb25zdCBhbmltYXRlVGltZXIgPSBNYXRoLmZsb29yKHBhdXNlVGltZXIqYW5pbWF0ZVNwZWVkKVxyXG4gICAgICAgIC8vIOWLleeVq+S4reW/g1jluqfmqJlcclxuICAgICAgICBsZXQgWD0odWlfd2lkdGgvMTcpKnhcclxuICAgICAgICAvLyDli5XnlavkuK3lv4NZ5bqn5qiZIOacgOS9jueCum1haWxDdXRIZWlnaHQqeS03MFxyXG4gICAgICAgIGxldCBZPShtYWlsQ3V0SGVpZ2h0KSp5KzMwXHJcbiAgICAgICAgLy8g5Y2K5b6RIDEwfjE1XHJcbiAgICAgICAgbGV0IHI9MTBcclxuICAgICAgICAvLyDljYrlvpHlpJblu7bkvLjvvIznibnmlYjnmoTplbfluqZcclxuICAgICAgICBsZXQgbD0xNSsoTWF0aC5mbG9vcihhbmltYXRlVGltZXIlNTApKVxyXG4gICAgICAgIC8vIOeVq27mop3nt5pcclxuICAgICAgICBsZXQgbnVtcyA9IDg7XHJcbiAgICAgICAgLy8g5q+PYeW6puWKg+S4gOainee3miDvvIxNYXRoLlBJKjLmmK8zNjDluqZcclxuICAgICAgICBsZXQgYW5nbGVVbml0ID1NYXRoLlBJKjIvbnVtc1xyXG4gICAgICAgIC8vIOe5quijvemWi+Wni+aZguWIneWni+WMlu+8jOS4jeeEtuacieWPr+iDveiiq+e3qeWtmOS5i+WJjeeahOaVuOaTmlxyXG4gICAgICAgIGdhbWVDYW52YXMuYmVnaW5QYXRoKClcclxuICAgICAgICAvLyDli5XnlavlnKjmnIDkuIrpnaJcclxuICAgICAgICBnYW1lQ2FudmFzLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIlxyXG4gICAgICAgIGdhbWVDYW52YXMuc3Ryb2tlU3R5bGU9XCJ5ZWxsb3dcIlxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bnVtcztpKyspe1xyXG4gICAgICAgICAgICAvLyDpgJnmrKHopoHnuaroo73nmoTop5LluqZcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRBbmdsZSA9IGFuZ2xlVW5pdCppXHJcbiAgICAgICAgICAgIC8vIOW6p+aomeenu+WLlemBjuWOu1xyXG4gICAgICAgICAgICBnYW1lQ2FudmFzLm1vdmVUbyhYK3IqTWF0aC5zaW4oY3VycmVudEFuZ2xlKSxZK3IqTWF0aC5jb3MoY3VycmVudEFuZ2xlKSlcclxuICAgICAgICAgICAgLy8g5b6e5LiK5LiA5YCL5bqn5qiZ6ZaL5aeL57mq6KO9XHJcbiAgICAgICAgICAgIGdhbWVDYW52YXMubGluZVRvKFgrbCpNYXRoLnNpbihjdXJyZW50QW5nbGUpLFkrbCpNYXRoLmNvcyhjdXJyZW50QW5nbGUpKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnuaroo73nt5pcclxuICAgICAgICBnYW1lQ2FudmFzLnN0cm9rZSgpXHJcbiAgICAgICAgLy8g5pmC6ZaT5YiwIOaJgOacieWLleeVq+e5vOe6jFxyXG4gICAgICAgIGlmKHBhdXNlVGltZXI+YW5pbWF0ZUFsbFRpbWUpe1xyXG4gICAgICAgICAgICBzdGFydExvb3AoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuLy8g57mq6KO95L+h5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3TWFpbCh4LHksY3VycmVudFRpbWVyKXtcclxuICAgIC8vIOavj+WAi+WLleS9nOmWk+agvFxyXG4gICAgY29uc3QgdW5pdFZhbCA9IHVpX3dpZHRoLzMzLjM7XHJcbiAgICAvLyDkv6Hku7bkuIrkuIvnp7vli5Xllq7kvY1cclxuICAgIGNvbnN0IG1haWxWZXJ0aWNhbFVuaXQgPSA0NzAvNVxyXG4gICAgLy8g5L+h5Lu25bem5Y+z56e75YuV6ZaT5qC8XHJcbiAgICAvLyBjb25zdCBob3Jpem9uUG9zVW5pdCA9IHVpX3dpZHRoLzE3O1xyXG4gICAgY29uc3QgaG9yaXpvblBvc1VuaXQgPSB1aV93aWR0aC8xN1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IG1haWxBY3Rpb25JbmRleCA9IChjdXJyZW50VGltZXIpJTE1O1xyXG4gICAgXHJcbiAgICBpZihtYWlsSW1nLmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDpgYfliLDkuIDlgIvllY/poYzvvIzljp/mnKzmmK/pgJnmqKNcclxuICAgICAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShzdG9uZUltZ0VsZW1lbnQsc3RvbmVQb3NYVW5pdCp4LHN0b25lUG9zWVVuaXQqeSxzdG9uZVdpZHRoLHN0b25lSGVpZ2h0KVxyXG4gICAgICAgIC8vIOS9huaYr+a4suafk+WHuuS+hueahOe1kOaenOaYr+iDjOaZr+S4gOagvOS4gOagvOi1sO+8jOaJgOS7pSBzdG9uZVBvc1hVbml0Kngg5pS55oiQIHN0b25lUG9zWFVuaXQqKHgtMSktc3RvbmVQb3NYVW5pdCooYSpvYnN0YWNsZVNwZWVkKVxyXG4gICAgICAgICAvLyDljp/mnKzmr48zMEZyYW1l5omN5pyD5o+b5LiA5qyh5L2N572uIO+8jOaUueWLleavj+asoeaFouaFouaPm1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUV2ZXJ5RnJhbWUgPSBjdXJyZW50VGltZXIlMzArMVxyXG4gICAgICAgIC8vIHnou7jnmoToqqTlt67lgLxcclxuICAgICAgICBjb25zdCB5RXJyb3JWYWwgPSAyNVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKG1haWxJbWcsdW5pdFZhbCptYWlsQWN0aW9uSW5kZXgsMCxtYWlsQ3V0V2lkdGgsbWFpbEN1dEhlaWdodCxob3Jpem9uUG9zVW5pdCooeC1jaGFuZ2VFdmVyeUZyYW1lLzMwKSx5RXJyb3JWYWwrbWFpbFZlcnRpY2FsVW5pdCp5LG1haWxXaWR0aCxtYWlsSGVpZ2h0KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuXHJcbmNvbnN0IHN0b25lSW1nVXJsID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvc3RvbmUucG5nXCIpXHJcblxyXG5jb25zdCBzdG9uZUltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoNjAwKTtcclxuc3RvbmVJbWdFbGVtZW50LnNyYz1zdG9uZUltZ1VybFxyXG4vLyDlnJbniYfopoHmiJDlip/oroDlj5blvozmiY3og73muLLmn5Ncclxuc3RvbmVJbWdFbGVtZW50LmRlY29kZSgpLnRoZW4oKCk9PntcclxuICAgIFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RvbmUoeCx5LGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmqLnnmoTlr6xcclxuICAgIGNvbnN0IHN0b25lV2lkdGggPSB1aV93aWR0aC8xNztcclxuICAgIC8vIOaoueeahOmrmFxyXG4gICAgY29uc3Qgc3RvbmVIZWlnaHQgPSB1aV9oZWlndGgvNDtcclxuXHJcbiAgICAvLyDlnJbniYdY6Lu46ZaT6ZqUXHJcbiAgICAvLyDlnJbniYdZ6Lu46ZaT6ZqUXHJcbiAgICBjb25zdCBzdG9uZVBvc1hVbml0ID0gdWlfd2lkdGgvMTc7ICBcclxuICAgIGNvbnN0IHN0b25lUG9zWVVuaXQgPSB1aV9oZWlndGgvNi01O1xyXG4gICAgaWYoc3RvbmVJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDpgYfliLDkuIDlgIvllY/poYzvvIzljp/mnKzmmK/pgJnmqKNcclxuICAgICAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShzdG9uZUltZ0VsZW1lbnQsc3RvbmVQb3NYVW5pdCp4LHN0b25lUG9zWVVuaXQqeSxzdG9uZVdpZHRoLHN0b25lSGVpZ2h0KVxyXG4gICAgICAgIC8vIOS9huaYr+a4suafk+WHuuS+hueahOe1kOaenOaYr+iDjOaZr+S4gOagvOS4gOagvOi1sO+8jOaJgOS7pSBzdG9uZVBvc1hVbml0Kngg5pS55oiQIHN0b25lUG9zWFVuaXQqKHgtMSktc3RvbmVQb3NYVW5pdCooYSpvYnN0YWNsZVNwZWVkKVxyXG4gICAgICAgICAvLyDljp/mnKzmr48zMEZyYW1l5omN5pyD5o+b5LiA5qyh5L2N572uIO+8jOaUueWLleavj+asoeaFouaFouaPm1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUV2ZXJ5RnJhbWUgPSBjdXJyZW50VGltZXIlMzArMVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKHN0b25lSW1nRWxlbWVudCwoc3RvbmVQb3NYVW5pdCkqKHgtY2hhbmdlRXZlcnlGcmFtZS8zMCksc3RvbmVQb3NZVW5pdCp5LHN0b25lV2lkdGgsc3RvbmVIZWlnaHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuXHJcbmNvbnN0IHRyZWVJbWdVcmwgPSByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy90cmVlLnBuZ1wiKVxyXG5cclxuY29uc3QgdHJlZUltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoNjAwKTtcclxudHJlZUltZ0VsZW1lbnQuc3JjPXRyZWVJbWdVcmxcclxuLy8g5ZyW54mH6KaB5oiQ5Yqf6K6A5Y+W5b6M5omN6IO95riy5p+TXHJcbnRyZWVJbWdFbGVtZW50LmRlY29kZSgpXHJcbi50aGVuKCgpID0+IHtcclxuICAgIC8vIGdhbWVDYW52YXMuZHJhd0ltYWdlKHRyZWVJbWdFbGVtZW50LHVpX3dpZHRoLzE3KjQsdWlfaGVpZ3RoLzYqNC0yNSx1aV93aWR0aC8xOCx1aV9oZWlndGgvNClcclxufSkuY2F0Y2goKGVycik9PntcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3VHJlZSh4LHksY3VycmVudFRpbWVyKXtcclxuICAgIC8vIOaoueeahOWvrFxyXG4gICAgY29uc3QgdHJlZVdpZHRoID0gdWlfd2lkdGgvMTc7XHJcbiAgICAvLyDmqLnnmoTpq5hcclxuICAgIGNvbnN0IHRyZWVIZWlnaHQgPSB1aV9oZWlndGgvNDtcclxuXHJcbiAgICAvLyDlnJbniYdY6Lu46ZaT6ZqUXHJcbiAgICAvLyDlnJbniYdZ6Lu46ZaT6ZqUXHJcbiAgICBjb25zdCB0cmVlUG9zWFVuaXQgPSB1aV93aWR0aC8xNzsgIFxyXG4gICAgY29uc3QgdHJlZVBvc1lVbml0ID0gdWlfaGVpZ3RoLzYtNTtcclxuICAgIGlmKHRyZWVJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDpgYfliLDkuIDlgIvllY/poYzvvIzljp/mnKzmmK/pgJnmqKNcclxuICAgICAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShzdG9uZUltZ0VsZW1lbnQsc3RvbmVQb3NYVW5pdCp4LHN0b25lUG9zWVVuaXQqeSxzdG9uZVdpZHRoLHN0b25lSGVpZ2h0KVxyXG4gICAgICAgIC8vIOS9huaYr+a4suafk+WHuuS+hueahOe1kOaenOaYr+iDjOaZr+S4gOagvOS4gOagvOi1sO+8jOaJgOS7pSBzdG9uZVBvc1hVbml0Kngg5pS55oiQIHN0b25lUG9zWFVuaXQqKHgtMSktc3RvbmVQb3NYVW5pdCooYSpvYnN0YWNsZVNwZWVkKVxyXG4gICAgICAgICAvLyDljp/mnKzmr48zMEZyYW1l5omN5pyD5o+b5LiA5qyh5L2N572uIO+8jOaUueWLleavj+asoeaFouaFouaPm1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUV2ZXJ5RnJhbWUgPSBjdXJyZW50VGltZXIlMzArMVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKHRyZWVJbWdFbGVtZW50LHRyZWVQb3NYVW5pdCooeC1jaGFuZ2VFdmVyeUZyYW1lLzMwKSx0cmVlUG9zWVVuaXQqeSx0cmVlV2lkdGgsdHJlZUhlaWdodClcclxuICAgIH1cclxufSIsIi8vIOWIneWni+WAvFxyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RofSBmcm9tICcuL2luaXQnXHJcbi8vIOmBiuaIsuW+queSsOaOp+WItlxyXG5pbXBvcnQge3BhdXNlLHN0YXJ0TG9vcH0gZnJvbSAnLi9nYW1lbG9vcCdcclxuLy8g5Y+W5b6X6Zqc56SZ54mp5riy5p+T54uA5oWLXHJcbmltcG9ydCB7Z2V0T2JzdGFjbGVTdGF0dXN9IGZyb20gJy4vb2JzdGFjbGUvZ2FtZU1hcHMnXHJcbi8vIOS/oeS7tueJueaViFxyXG5pbXBvcnQge21haWxUb3VjaH0gZnJvbSAnLi9vYnN0YWNsZS9tYWlsJ1xyXG5cclxuLy8g6YGK5oiy5YiG5pW4XHJcbmltcG9ydCB7cGxheWVyRGllQWRkLHBsYXllck1haWxBZGQsZmluYWxseURyYXd9IGZyb20gJy4vZ2FtZUJvYXJkJ1xyXG5cclxuLy8g6YeN546p6YGK5oiy55qERE9N55uj5o6nXHJcbmltcG9ydCB7cmVzdGFydERvbUFjdGlvbixkaWVNZWRpYVBsYXksIG1haWxNZWRpYVBsYXl9IGZyb20gJy4vdW50aWwnXHJcblxyXG4vLyDnjqnlrrbnmoTntKDmnZDot6/lvpFcclxuY29uc3QgUGxheWVySW1nVXJsID0gcmVxdWlyZShcIi4vYXNzZXRzL2ltYWdlcy9wbGF5ZXIucG5nXCIpXHJcblxyXG4vLyDkurrnianlnJbniYfnmoTlr6zluqZcclxuY29uc3QgcGxheWVyV2lkdGggPSB1aV93aWR0aC8xMDtcclxuLy8g5Lq654mp55qE6auY5bqmXHJcbmNvbnN0IHBsYXllckhlaWdodCA9IHVpX2hlaWd0aCoyLjVcclxuXHJcbi8vIOWeguebtOenu+WLleWWruS9jVxyXG5jb25zdCB2ZXJ0aWNhbFVuaXQgPSB1aV9oZWlndGgqLTAuMDZcclxuLy8g55uu5YmN55qE5Z6C55u056e75YuV6YePIOevhOWcjSAwfjUg5Yid5aeL54K6MlxyXG5sZXQgY3VycmVudFZlcnRpY2FsID0gMjtcclxuLy8g5rC05bmz5L2N572uKOWbuuWumilcclxuY29uc3QgaW5pdFBvc1ggPSAzO1xyXG5jb25zdCBVbml0V2lkdGggPSB1aV93aWR0aC8xNztcclxuY29uc3QgaG9yaXpvblBvcyA9IFVuaXRXaWR0aCppbml0UG9zWDtcclxuXHJcbi8vIOWclueJh+e0oOadkOe4veWFseaciTE35YCL5YuV5L2c77yM5q+P5qyh5Y+q6aGv56S65LiA5YCLXHJcbmNvbnN0IHBsYXllclBlcldpZHRoID0gVW5pdFdpZHRoICBcclxuLy8g5q+P5YCL5YuV5L2c6ZaT5qC8XHJcbmNvbnN0IHVuaXRWYWwgPSB1aV93aWR0aC8xNy4zOTtcclxuXHJcbi8vIOWIneWni+WMluWclueJh+i8ieWFpVxyXG5jb25zdCBQbGF5ZXJJbWdFbGVtZW50ID0gbmV3IEltYWdlKDYwMCk7XHJcblBsYXllckltZ0VsZW1lbnQuc3JjPVBsYXllckltZ1VybFxyXG4vLyDlnJbniYfopoHmiJDlip/oroDlj5blvozmiY3og73muLLmn5NcclxuUGxheWVySW1nRWxlbWVudC5kZWNvZGUoKVxyXG4udGhlbigoKSA9PiB7XHJcbiAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShQbGF5ZXJJbWdFbGVtZW50LDAsdmVydGljYWxVbml0KmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsMCwwLHBsYXllcldpZHRoLHBsYXllckhlaWdodClcclxufSlcclxuXHJcblxyXG4vLyDmqqLmn6XmmK/lkKbmnInmkp7liLDmnbHopb/miJbotoXlh7rpgornlYxcclxuZnVuY3Rpb24gY2hlY2tNb3ZlKCl7XHJcbiAgICAvLyDlnoLnm7TlpKflsI/pmZDliLZcclxuICAgIGxldCBtYXhWYWwgPSA1XHJcbiAgICBsZXQgbWluVmFsID0gMFxyXG4gICAgaWYoY3VycmVudFZlcnRpY2FsPm1heFZhbCl7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsID0gbWF4VmFsXHJcbiAgICB9ZWxzZSBpZihjdXJyZW50VmVydGljYWw8bWluVmFsKXtcclxuICAgICAgICBjdXJyZW50VmVydGljYWwgPSBtaW5WYWxcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZSgxKVxyXG4gICAgY29sbGFwc2UoMilcclxufVxyXG5cclxuLy8g546p5a625ZyoWOW6p+aomeavlOebruWJjeS9jee9ruWkmnBveFBsdXMg5pKe5Yiw5p2x6KW/55qE5LqL5Lu2XHJcbmZ1bmN0aW9uIGNvbGxhcHNlKHBvc1hQbHVzKXtcclxuICAgIGxldCBbZmlyc3RJbmRleCxsYXN0SW5kZXgsb2JzdGFjbGVBcnJheV0gPSBnZXRPYnN0YWNsZVN0YXR1cygpXHJcbiAgICAvLyDmnIDlvozkuIDliJdcclxuICAgIGNvbnN0IExhc3RDb2xsYXBzZUluZGV4ID0gb2JzdGFjbGVBcnJheS5sZW5ndGgtMTtcclxuICAgIC8vIOeisOaSnuWIl+eahEluZGV4XHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4ID0gZmlyc3RJbmRleCtpbml0UG9zWCtwb3NYUGx1c1xyXG4gICAgLy8g5aaC5p6c5LiN5pivTmFOXHJcbiAgICBpZihjb2xsYXBzZUluZGV4ID09PSBjb2xsYXBzZUluZGV4ICYmIGNvbGxhcHNlSW5kZXg8PUxhc3RDb2xsYXBzZUluZGV4KXtcclxuICAgICAgICBjb25zdCBjb2xsYXBzZVR5cGUgPSBvYnN0YWNsZUFycmF5W2NvbGxhcHNlSW5kZXhdW2N1cnJlbnRWZXJ0aWNhbF1cclxuICAgICAgIFxyXG4gICAgICAgIGlmKGNvbGxhcHNlVHlwZT4xKXtcclxuICAgICAgICAgICAgLy8g5pKe5Yiw6Z+z5pWIXHJcbiAgICAgICAgICAgIGRpZU1lZGlhUGxheSgpXHJcbiAgICAgICAgICAgIC8vIOaSreaUvueOqeWutuaSnuWIsOWLleeVq1xyXG4gICAgICAgICAgICBwYXVzZShQbGF5ZXJKdW1wKVxyXG4gICAgICAgICAgICAvLyDnjqnlrrbmrbvkuqHntIDpjIRcclxuICAgICAgICAgICAgcGxheWVyRGllQWRkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vIOaSnuWIsOS/oeS7tumBiuaIsuaaq+WBnOS4gOS4i++8jOS/oeS7tua2iOWksVxyXG4gICAgICAgIGlmKGNvbGxhcHNlVHlwZT09PTEpe1xyXG4gICAgICAgICAgICAvLyBtYWls56Kw5Yiw6Z+z5pWIXHJcbiAgICAgICAgICAgIG1haWxNZWRpYVBsYXkoKVxyXG4gICAgICAgICAgICAvLyBlbWFpbOeisOWIsOWLleeVq1xyXG4gICAgICAgICAgICBtYWlsVG91Y2goaW5pdFBvc1grcG9zWFBsdXMsY3VycmVudFZlcnRpY2FsKVxyXG4gICAgICAgICAgICAvLyDnjqnlrrblj5blvpfkv6Hku7blop7liqBcclxuICAgICAgICAgICAgcGxheWVyTWFpbEFkZCgpXHJcbiAgICAgICAgICAgIC8vIOiDjOaZr+a2iOWksVxyXG4gICAgICAgICAgICBvYnN0YWNsZUFycmF5W2NvbGxhcHNlSW5kZXhdW2N1cnJlbnRWZXJ0aWNhbF0gPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIOWcqCgocG9zWCxwb3NZKSnluqfmqJnmmK/lkKbmkp7liLBcclxuZnVuY3Rpb24gaXNDb2xsYXBzZShwb3NYLHBvc1kpe1xyXG4gICAgbGV0IFtmaXJzdEluZGV4LGxhc3RJbmRleCxvYnN0YWNsZUFycmF5XSA9IGdldE9ic3RhY2xlU3RhdHVzKClcclxuICAgICAvLyDnorDmkp7liJfnmoRJbmRleFxyXG4gICAgIGNvbnN0IGNvbGxhcHNlSW5kZXggPSBmaXJzdEluZGV4K3Bvc1hcclxuICAgIC8vICDlpoLmnpzkuYvlvozpg73mspLpmpznpJnniakg5YmH5LiN5pyD5pKe5Yiw5p2x6KW/XHJcbiAgICAgaWYoY29sbGFwc2VJbmRleD49b2JzdGFjbGVBcnJheS5sZW5ndGgpe1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICB9XHJcbiAgICAvLyAg5aSn5pa8MSDku6PooajkuI3mmK/kv6Hku7ZcclxuICAgIHJldHVybiBvYnN0YWNsZUFycmF5W2NvbGxhcHNlSW5kZXhdJiZvYnN0YWNsZUFycmF5W2NvbGxhcHNlSW5kZXhdW3Bvc1ldPD0xXHJcbn1cclxuXHJcbi8vIOWIneWni+WMluW+jOWbnuWCs+S5i+W+jOabtOaWsOeahOaWueW8j1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyKGN1cnJlbnRUaW1lcil7XHJcbiAgICBjaGVja01vdmUoKVxyXG4gICAgLy8g55W25YmN5YuV5L2c5Ymq6KOBXHJcbiAgICAvLyDli5XkvZzpg6jmnIPotoXpgY4xN+WAiygwfjE2Ke+8jOi3keatpeWLleS9nOaYr+esrDnlgIvli5XkvZzliLAxN+WAi+WLleS9nCg4fjE2KVxyXG4gICAgY29uc3QgY3VycmVudEFjdGlvbkluZGV4ID0gOCtNYXRoLmZsb29yKGN1cnJlbnRUaW1lci8zKSU5XHJcbiAgICBjb25zdCBjdXRBY3Rpb25WYWwgPSB1bml0VmFsKmN1cnJlbnRBY3Rpb25JbmRleFxyXG5cclxuICAgIC8vIC8vIOWclueJh+acieaIkOWKn+iugOWPlu+8jOaJjeeQhuS7llxyXG4gICAgaWYoUGxheWVySW1nRWxlbWVudC5jb21wbGV0ZSl7XHJcbiAgICAgICAgLy8g5riF6Zmk55Wr5biDXHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5jbGVhclJlY3QoaG9yaXpvblBvcyx2ZXJ0aWNhbFVuaXQqY3VycmVudFZlcnRpY2FsLHBsYXllcldpZHRoLHBsYXllckhlaWdodClcclxuICAgICAgICAvLyDph43mlrDnuaroo71cclxuICAgICAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShQbGF5ZXJJbWdFbGVtZW50LGN1dEFjdGlvblZhbCx2ZXJ0aWNhbFVuaXQqY3VycmVudFZlcnRpY2FsLHBsYXllclBlcldpZHRoLHVpX2hlaWd0aCxob3Jpem9uUG9zLDAscGxheWVyV2lkdGgscGxheWVySGVpZ2h0KVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKFBsYXllckltZ0VsZW1lbnQsY3V0QWN0aW9uVmFsLDAscGxheWVyUGVyV2lkdGgsdWlfaGVpZ3RoLGhvcml6b25Qb3MsKHVpX2hlaWd0aC82LTEwKSpjdXJyZW50VmVydGljYWwscGxheWVyV2lkdGgscGxheWVySGVpZ2h0KVxyXG4gICAgfVxyXG59XHJcbi8vIOWQkeS4iuenu+WLlVxyXG5leHBvcnQgZnVuY3Rpb24gTW92ZVVwKCl7XHJcbiAgICAvLyDlpoLmnpznp7vli5XlrozmmK/pmpznpJnniakg5LiN57Wm5LuW56e75YuVXHJcbiAgICBpZihpc0NvbGxhcHNlKGluaXRQb3NYKzEsY3VycmVudFZlcnRpY2FsLTEpJiZpc0NvbGxhcHNlKGluaXRQb3NYLGN1cnJlbnRWZXJ0aWNhbC0xKSl7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsIC09IDFcclxuICAgIH1cclxufVxyXG4vLyDlkJHkuIvnp7vli5VcclxuZXhwb3J0IGZ1bmN0aW9uIE1vdmVEb3duKCl7XHJcbiAgICAvLyDlpoLmnpznp7vli5XlrozmmK/pmpznpJnniakg5LiN57Wm5LuW56e75YuVXHJcbiAgICBpZihpc0NvbGxhcHNlKGluaXRQb3NYKzEsY3VycmVudFZlcnRpY2FsKzEpJiZpc0NvbGxhcHNlKGluaXRQb3NYLGN1cnJlbnRWZXJ0aWNhbCsxKSl7XHJcbiAgICAgICBcclxuICAgICAgICBjdXJyZW50VmVydGljYWwgKz0gMVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4vLyDplovloLTmmYLlkozmkp7liLDmmYLvvIzppqznmoTliY3ohbPmnIPot7PotbfkvoZcclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckp1bXAoVGltZXIpe1xyXG4gICAgIC8vIOWLleS9nOmDqOacg+i2hemBjjE35YCLKDB+MTYp77yM6aas55qE5YmN6IWz5pyD6Lez6LW35L6G5YuV5L2c5piv56ysMeWAi+WLleS9nOWIsDjlgIvli5XkvZwoMH43KVxyXG4gICAgY29uc3QgY3VycmVudEFjdGlvbkluZGV4ID0gTWF0aC5mbG9vcihUaW1lci8zKSU4XHJcbiAgICBjb25zdCBjdXRBY3Rpb25WYWwgPSB1bml0VmFsKmN1cnJlbnRBY3Rpb25JbmRleFxyXG4gICAgXHJcbiAgICAvLyDnm67liY3nmoTpgI/mmI7luqZcclxuICAgIGNvbnN0IGhvd1RyYW5zcGFyZW50ID0gTWF0aC5mbG9vcihUaW1lci8zKSUxMCsxO1xyXG4gICAgY29uc3QgQWxwaGEgPSAxL2hvd1RyYW5zcGFyZW50XHJcbiAgICAvLyAvLyDlnJbniYfmnInmiJDlip/oroDlj5bvvIzmiY3nkIbku5ZcclxuICAgIGlmKFBsYXllckltZ0VsZW1lbnQuY29tcGxldGUpe1xyXG4gICAgICAgIC8vIOa4hemZpOeVq+W4g1xyXG4gICAgICAgIGdhbWVDYW52YXMuY2xlYXJSZWN0KGhvcml6b25Qb3MsKHVpX2hlaWd0aC82LTEwKSpjdXJyZW50VmVydGljYWwscGxheWVyV2lkdGgsdWlfaGVpZ3RoLzQuNClcclxuICAgICAgICBnYW1lQ2FudmFzLmdsb2JhbEFscGhhID0gQWxwaGE7XHJcbiAgICAgICAgLy8g6YeN5paw57mq6KO9XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCxjdXRBY3Rpb25WYWwsMCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsaG9yaXpvblBvcywodWlfaGVpZ3RoLzYtMTApKmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICB9XHJcbiAgICAvLyDmnIDlpJrot5HlpJrkuYVcclxuICAgIGxldCBtYXhUaW1lciA9IDMwXHJcbiAgICBpZihUaW1lcj5tYXhUaW1lcil7XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsID0gc2FmZVBvc1koKVxyXG4gICAgICAgIHN0YXJ0TG9vcCgpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIOeVtuWJjeWIl+WTquijoeaYr+WuieWFqOeahFxyXG5mdW5jdGlvbiBzYWZlUG9zWSgpe1xyXG4gICAgbGV0IFtmaXJzdEluZGV4LGxhc3RJbmRleCxvYnN0YWNsZUFycmF5XSA9IGdldE9ic3RhY2xlU3RhdHVzKClcclxuICAgIC8vIOeisOaSnuWIl+eahEluZGV4XHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4ID0gZmlyc3RJbmRleCtpbml0UG9zWCsxXHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4MiA9IGZpcnN0SW5kZXgraW5pdFBvc1grMlxyXG5cclxuICAgIC8vIOacquS+huacg+mBh+WIsOeahOWFqeWIl1xyXG4gICAgY29uc3QgZnV0dXJlQ29sID0gb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVxyXG4gICAgY29uc3QgZnV0dXJlQ29sMiA9IG9ic3RhY2xlQXJyYXlbY29sbGFwc2VJbmRleDJdXHJcbiAgICAvLyDnjqnlrrbmkp7lrozpoK3lvozlj6/ku6XljrvnmoTlnLDmlrlcclxuICAgIGxldCByZXN1bHRDb2wgPSAtMTtcclxuICAgIGZvcihsZXQgaT1mdXR1cmVDb2wubGVuZ3RoLTE7aT49MDtpLS0pe1xyXG4gICAgICAgIC8vIOWIpOaWt+W+jOmdouWFqeWIl+eahOavj+S4gOihjOaYr+WQpuaYr+manOekmeeJqVxyXG4gICAgICAgIGNvbnN0IGZ1dHVyZVR5cGUgPSBmdXR1cmVDb2xbaV1cclxuICAgICAgICBjb25zdCBmdXR1cmVUeXBlMiA9IGZ1dHVyZUNvbDJbaV1cclxuICAgICAgICAvLyDlvozpnaLlhanmoLzlpoLmnpzpg73kuI3mmK/pmpznpJnniakg5a2Y6LW35L6GXHJcbiAgICAgICAgaWYoZnV0dXJlVHlwZTw9MSAmJiBmdXR1cmVUeXBlMjw9MSl7XHJcbiAgICAgICAgICAgIHJlc3VsdENvbCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5rKS5pyJ562U5qGIIOeahOeLgOazgVxyXG4gICAgaWYocmVzdWx0Q29sID09PSAtMSl7XHJcbiAgICAgICAgcmV0dXJuIGZ1dHVyZUNvbC5maW5kSW5kZXgoKGUpPT57ZTw9MX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0Q29sXHJcbn1cclxuLy8g546p5a6257WQ5p2f5YuV5L2cXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJGaW5hbChUaW1lcil7XHJcbiAgICAgLy8g5YuV5L2c6YOo5pyD6LaF6YGOMTflgIsoMH4xNinvvIzppqznmoTliY3ohbPmnIPot7Potbfkvobli5XkvZzmmK/nrKwx5YCL5YuV5L2c5YiwOOWAi+WLleS9nCgwfjcpXHJcbiAgICAgY29uc3QgY3VycmVudEFjdGlvbkluZGV4ID0gTWF0aC5mbG9vcihUaW1lci8zKSU4XHJcbiAgICAgY29uc3QgY3V0QWN0aW9uVmFsID0gdW5pdFZhbCpjdXJyZW50QWN0aW9uSW5kZXhcclxuICAgICBpZihQbGF5ZXJJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDmuIXpmaTnlavluINcclxuICAgICAgICBnYW1lQ2FudmFzLmNsZWFyUmVjdChob3Jpem9uUG9zLCh1aV9oZWlndGgvNi0xMCkqY3VycmVudFZlcnRpY2FsLHBsYXllcldpZHRoLHVpX2hlaWd0aC80LjQpXHJcbiAgICAgICAgLy8g6YeN5paw57mq6KO9XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCxjdXRBY3Rpb25WYWwsMCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsaG9yaXpvblBvcywodWlfaGVpZ3RoLzYtMTApKmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoVGltZXI+NTApe1xyXG4gICAgICAgIGZpbmFsbHlEcmF3KClcclxuICAgICAgICByZXN0YXJ0RG9tQWN0aW9uKClcclxuICAgIH1cclxufSIsIi8vIOmBiuaIsuW+queSsOaOp+WItlxyXG5pbXBvcnQge3Jlc3RhcnR9IGZyb20gJy4vZ2FtZWxvb3AnXHJcbi8vIOeOqeWutlxyXG5pbXBvcnQge01vdmVEb3duLE1vdmVVcH0gZnJvbSAnLi9wbGF5ZXInXHJcbi8vIOmBiuaIsuWIhuaVuOebuOmXnOWIneWni+WMllxyXG5pbXBvcnQge2dhbWVTdGF0dXNJbml0fSBmcm9tICcuL2dhbWVCb2FyZCdcclxuXHJcbi8vIOWIpOaWt+aYr+WQpuihjOWLleijnee9rlxyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XHJcbiAgICBjb25zdCBtb2JpbGVEZXZpY2UgPSBbJ0FuZHJvaWQnLCAnd2ViT1MnLCAnaVBob25lJywgJ2lQYWQnLCAnaVBvZCcsJ21hY29zJywgJ0JsYWNrQmVycnknLCAnV2luZG93cyBQaG9uZSddXHJcbiAgICBsZXQgaXNNb2JpbGUgPSBtb2JpbGVEZXZpY2Uuc29tZShlID0+IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goZSkpXHJcbiAgICAvLyAvLyDmlrBpUGFk55qE5bmz5Y+w5Li6IE1hY0ludGVs77yM5YW25LuW5pa55rOV5ris5q2l6YGTXHJcbiAgICByZXR1cm4gaXNNb2JpbGUgfHwgbmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKCdNYWNJbnRlbCcpXHJcbn1cclxuXHJcbi8vIOeOqeWutuenu+WLleebo+iBvVxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUFjdGlvbigpe1xyXG4gICAgLy8g5pW05YCL6YGK5oiy55qERE9N55uj6IG9XHJcbiAgICBjb25zdCBnYW1lRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1nYW1lLXRvdWNoXCIpXHJcbiAgICAvLyDnm67liY3pgYrmiLLnmoR3aWR0aFxyXG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAvLyDnm67liY3pgYrmiLLnmoRoZWlnaHRcclxuICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBcclxuICAgIC8v5aaC5p6c5piv5omL5qmf5p2/IOinuOaOp+e0gOmMhCBcclxuICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICBsZXQgdG91Y2hTdGFydFkgPSAwO1xyXG4gICAgLy8g5aaC5p6c55W25YmN6KOd572u5piv5omL5qmfXHJcbiAgICBpZihpc01vYmlsZURldmljZSgpKXtcclxuICAgICAgICAvLyB0b3VjaFN0YXJ0IOaJi+aMieS4i1xyXG4gICAgICAgIGdhbWVEb20uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwoZSk9PntcclxuICAgICAgICAgICAgLy8g6KiY6YyE5omL5LiA6ZaL5aeL55qE5Zyw5pa5XHJcbiAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICAgICAgdG91Y2hTdGFydFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdG91Y2hTdGFydCDmiYvmlL7plotcclxuICAgICAgICBnYW1lRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLChlKT0+e1xyXG4gICAgICAgICAgICAvLyDmlL7plovnmoRYWeW6p+aomVxyXG4gICAgICAgICAgICB2YXIgbW92ZUVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggXHJcbiAgICAgICAgICAgIHZhciBtb3ZlRW5kWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgICAgICAvLyDmlL7plovnmoRYWeW6p+aomeiIh+aMieS4i+eahOW6p+aomeW3rlxyXG4gICAgICAgICAgICB2YXIgWCA9IG1vdmVFbmRYIC0gdG91Y2hTdGFydFhcclxuICAgICAgICAgICAgdmFyIFkgPSBtb3ZlRW5kWSAtIHRvdWNoU3RhcnRZXHJcbiAgICAgICAgICAgIC8vIOWIpOaWt+eOqeWutuaYr+WQkeS4iumChOaYr+WQkeS4i+WAvFxyXG4gICAgICAgICAgICBsZXQgdGVzdFZhbDtcclxuICAgICAgICAgICAgLy8gd2lkdGgg5ZKMIGhlaWdodOeahOW3rui3ne+8jOWmguaenOWvrOW6puWkpyB0ZXN0VmFsIOeci+eahOaYr1nluqfmqJlcclxuICAgICAgICAgICAgaWYod2lkdGg+PWhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VmFsID0gWVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRlc3RWYWwgPSBYXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5omL5Yui5b6A5LiKIOS4puS4lOaJi+aMh+enu+WLlei3nembouWkp+aWvDEwXHJcbiAgICAgICAgICAgIGlmKHRlc3RWYWw+MCAmJiBNYXRoLmFicyh0ZXN0VmFsKT4xMCl7XHJcbiAgICAgICAgICAgICAgICBNb3ZlRG93bigpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKE1hdGguYWJzKHRlc3RWYWwpPjEwKXtcclxuICAgICAgICAgICAgICAgIE1vdmVVcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAzOCl7XHJcbiAgICAgICAgICAgICAgICBNb3ZlVXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDQwKXtcclxuICAgICAgICAgICAgICAgIE1vdmVEb3duKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4vLyDntZDlsL7mmYLvvIzpu57mk4rpgYrmiLLlj6/ku6Xph43njqlcclxuLy8g6Ke455m86YeN5paw6ZaL5aeL55qERE9N55uj6IG9XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0YXJ0RG9tQWN0aW9uKCl7XHJcbiAgICAvLyDmlbTlgIvpgYrmiLLnmoRET03nm6Pogb1cclxuICAgIGNvbnN0IGdhbWVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdhbWUtdG91Y2hcIilcclxuICAgIGNvbnN0IGdhbWVyZVN0YXJ0Rm4gPSAoKT0+e1xyXG4gICAgICAgIC8vIOmBiuaIsuWIhuaVuOebuOmXnOWIneWni+WMllxyXG4gICAgICAgIGdhbWVTdGF0dXNJbml0KClcclxuICAgICAgICAvLyDpgYrmiLLmmYLplpPou7jliJ3lp4vljJZcclxuICAgICAgICByZXN0YXJ0KClcclxuICAgICAgICBnYW1lRG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVyZVN0YXJ0Rm4sZmFsc2UpXHJcbiAgICB9XHJcbiAgICAvLyDpu57mk4rpgYrmiLLlj6/ku6Xph43njqlcclxuICAgIGdhbWVEb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZ2FtZXJlU3RhcnRGbixmYWxzZSlcclxufVxyXG5cclxuY29uc3QgYXVkaW9EaWVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpZU1lZGlhXCIpXHJcbmF1ZGlvRGllRG9tLnBhdXNlKClcclxuLy8g5pKe5Yiw55+z6aCt5oiW5qi55pmC5pyD5pyJ6Z+z5pWIICAgXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWVNZWRpYVBsYXkoKXtcclxuICAgIGF1ZGlvRGllRG9tLmN1cnJlbnRUaW1lID0gMFxyXG4gICAgYXVkaW9EaWVEb20ucGxheSgpXHJcbn1cclxuXHJcbmNvbnN0IGF1ZGlvTWFpbERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbE1lZGlhXCIpXHJcbi8vIOeisOWIsE1BSUzliLDmmYLmnIPmnInpn7PmlYggICBcclxuZXhwb3J0IGZ1bmN0aW9uIG1haWxNZWRpYVBsYXkoKXtcclxuICAgIGF1ZGlvTWFpbERvbS5jdXJyZW50VGltZSA9IDBcclxuICAgIGF1ZGlvTWFpbERvbS5wbGF5KClcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcbiAqICAgIGBlbWAgdW5pdHMuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcbmE6Zm9jdXMge1xcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxuICovXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXG4gKi9cXG5mb3JtIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDIgKi9cXG4gICptYXJnaW4tbGVmdDogLTdweDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcbiAqICAgIGFuZCBDaHJvbWUuXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAvKiAzICovXFxuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXFxuICovXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxcbmlucHV0W3R5cGU9cmVzZXRdLFxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIDMgKi9cXG4gICpvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDQgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcbiAqL1xcbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbiAgKmhlaWdodDogMTNweDtcXG4gIC8qIDMgKi9cXG4gICp3aWR0aDogMTNweDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqIG9uIE9TIFguXFxuICovXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi5jaHJvbWVmcmFtZSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Q5ODY7XFxufVxcblxcbi5nYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogY2FsYyg1MHZ3KTtcXG4gIG1heC13aWR0aDogOTkycHg7XFxuICBtYXgtaGVpZ2h0OiA0OTZweDtcXG4gIGJvcmRlcjogOXB4ICM1ZmE2YWIgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQ5NnB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5nYW1lLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDIwMHZoO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwdmgpIHtcXG4gIC5nYW1lLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDgwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDQwdnc7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LWhlaWdodDogNTB2dykge1xcbiAgLmdhbWUtd3JhcHBlciB7XFxuICAgIG1heC13aWR0aDogMTYwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDc4dmg7XFxuICB9XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS10b3Atc2l6ZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIC5nYW1lLWJvdHRvbS1zaXplIHtcXG4gIGhlaWdodDogNzglO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAjZ2FtZS11aSB7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAyMiU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyICNnYW1lLWJnIHtcXG4gIHotaW5kZXg6IDA7XFxuICB0b3A6IDA7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmE0Yzk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIgLmNvbnRhaW5lcl9fY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmdhbWUtd3JhcHBlciAuYmVmb3JlLWNvbnRhaW5lciAuY29udGFpbmVyX19jb250ZW50IC5jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogIzAyNjI2OTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIgLmNvbnRhaW5lcl9fY29udGVudCAuY29udGVudF9fYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkMGViO1xcbiAgY29sb3I6ICM2MDJjZGE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC50cmFuc2l0aW9uLW5vbmUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuLmdhbWUtd3JhcHBlciAudHJhbnNpdGlvbi1ub25lIC5jb250ZW50X19idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFBO0VBQ0QsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0Q7O0FERUEseURBQUE7QUFDQTtFQUNJLFVBQUE7QUNDSjs7QURFQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VB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QUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBd1dKO0FBdldJO0VBWko7SUFhUSxnQkFBQTtJQUNBLGlCQUFBO0VBMFdOO0FBQ0Y7QUF6V0k7RUFoQko7SUFpQlEsZUFBQTtJQUNBLGdCQUFBO0VBNFdOO0FBQ0Y7QUEzV0k7RUFwQko7SUFxQlEsZ0JBQUE7SUFDQSxnQkFBQTtFQThXTjtBQUNGO0FBN1dJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQStXUjtBQTlXUTtFQUNJLFlBQUE7QUFnWFo7QUE5V1E7RUFDSSxXQUFBO0FBZ1haO0FBOVdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQWdYWjtBQTlXUTtFQUNJLFVBQUE7RUFDQSxRQUFBO0FBZ1haO0FBOVdRO0VBQ0ksVUFBQTtFQUNBLE1BQUE7QUFnWFo7QUE3V0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUErV1I7QUE5V1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWdYWjtBQS9XWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWlYaEI7QUEvV1k7RUFFSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWdYaEI7QUEzV0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUE2V1I7QUE1V1E7RUFDSSxhQUFBO0FBOFdaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcclxcbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvLFxcclxcbmNhbnZhcyxcXHJcXG52aWRlbyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgKnpvb206IDE7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXHJcXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXHJcXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxyXFxuICogICAgYGVtYCB1bml0cy5cXHJcXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXHJcXG4gKiAgICB1c2VyIHpvb20uXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxyXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxyXFxuICovXFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXHJcXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAyICovXFxyXFxuICAgICptYXJnaW4tbGVmdDogLTdweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxyXFxuICogICAgYW5kIENocm9tZS5cXHJcXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDMgKi9cXHJcXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcclxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXHJcXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcclxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXHJcXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXHJcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXHJcXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxyXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXHJcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxyXFxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcclxcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxyXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXHJcXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXFxyXFxuICAgICp3aWR0aDogMTNweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcclxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcclxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiBvbiBPUyBYLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxyXFxuICovXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbjo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb21lZnJhbWUge1xcclxcbiAgICBtYXJnaW46IDAuMmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xcclxcbn1cIixcIkBpbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XFxyXFxuXFxyXFxuaHRtbCxib2R5e1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5hcHB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDk4NjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtd3JhcHBlcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogY2FsYyg1MHZ3KTtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OTJweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNDk2cHg7XFxyXFxuICAgIGJvcmRlcjogOXB4ICM1ZmE2YWIgc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgQG1lZGlhKG1heC1oZWlnaHQ6NDk2cHgpYW5kKG1pbi13aWR0aDo5OTJweCl7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHZoO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhKG1heC13aWR0aDo1MHZoKXtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODB2dztcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhKG1heC1oZWlnaHQ6NTB2dyl7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE2MHZoO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogNzh2aDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FtZS1jb250YWluZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIC5nYW1lLXRvcC1zaXple1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lLWJvdHRvbS1zaXple1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNzglO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWUtaXRlbXtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2dhbWUtdWl7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgICAgICB0b3A6MjIlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2dhbWUtYmd7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMDtcXHJcXG4gICAgICAgICAgICB0b3A6MDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAuYmVmb3JlLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDM7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhNGM5O1xcclxcbiAgICAgICAgLmNvbnRhaW5lcl9fY29udGVudHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAuY29udGVudF9fdGl0bGV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMjYyNjk7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmNvbnRlbnRfX2J0bntcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQwZWI7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjAyY2RhO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC8vIOaFouaFoua2iOWksVxcclxcbiAgICAudHJhbnNpdGlvbi1ub25le1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgICAgIC5jb250ZW50X19idG57XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIOWAkuWHuumdnOaFi+izh+a6kOaqlFxyXG5pbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnXHJcblxyXG4vLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuaW1wb3J0IHtnYW1lSW5pdH0gZnJvbSAnLi9pbml0J1xyXG5pbXBvcnQge0xvb3Bpbmd9IGZyb20gJy4vZ2FtZWxvb3AnXHJcbmltcG9ydCB7aXNNb2JpbGVEZXZpY2V9IGZyb20gJy4vdW50aWwnXHJcbi8vIOWIneWni+WMllxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgLy8gLy8g5YWI5Yik5pa355W25YmN6KOd572uXHJcbiAgICBpZihpc01vYmlsZURldmljZSgpKXtcclxuICAgIH1cclxuICAgIC8vIOmBiuaIsumWi+Wni+eahOaMiemIlVxyXG4gICAgY29uc3Qgc3RhcnRCdG5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0R2FtZUJ0blwiKVxyXG4gICAgLy8g6YGK5oiy6ZaL5aeL5YmN55qE5bCB6Z2iXHJcbiAgICBjb25zdCBiZWZvcmVDb250YWluZXJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWJlZm9yZUdhbWVcIilcclxuICAgIHN0YXJ0QnRuRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgYmVmb3JlQ29udGFpbmVyRG9tLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLW5vbmVcIilcclxuICAgICAgICBTdGFydFRvUGxheUdhbWUoKVxyXG4gICAgfSxmYWxzZSlcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0VG9QbGF5R2FtZSgpe1xyXG4gICAgLy8g6YGK5oiy5Yid5aeL5YyWXHJcbiAgICBnYW1lSW5pdCgpXHJcbiAgICAvLyDlvqrnkrDop7jnmbxcclxuICAgIExvb3BpbmcoKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==