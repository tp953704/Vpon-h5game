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
/* harmony export */   "gameBoardLoop": () => (/* binding */ gameBoardLoop),
/* harmony export */   "gameTeach": () => (/* binding */ gameTeach)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _obstacle_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle/mail */ "./src/obstacle/mail.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./until */ "./src/until.js");
// 初始值
 // 信件繪製方法

 // 判斷是否行動裝置

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
  _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('操空方式為', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 14);

  if ((0,_until__WEBPACK_IMPORTED_MODULE_2__.isMobileDevice)()) {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('手勢"上滑與下滑"', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 7);
  } else {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.fillText('鍵盤的"上下左右"', _init__WEBPACK_IMPORTED_MODULE_0__.ui_width * 4 / 6, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth / 7);
  }
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
/* harmony export */   "startLoop": () => (/* binding */ startLoop)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle/gameMaps */ "./src/obstacle/gameMaps.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./until */ "./src/until.js");
// 遊戲資訊初始化
// import {init} from './init';
 // 背景初始化與更新

 // 玩家

 // 障礙物繪製

 // 遊戲分數紀錄 =>及時記分板方法

 // DOM window相關工具

 //  遊戲時間軸

var currentTimer = 0; //是否暫停

var isLooping = true; // 暫停幾秒

var pauseTimer = 0; // 暫停時間

var pauseTimeFn = function pauseTimeFn() {}; // 無限迴圈


function Looping() {
  // 是否全體元素正常運作
  if (isLooping) {
    // 清空畫布
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.clearRect(0, 0, _init__WEBPACK_IMPORTED_MODULE_0__.ui_width, _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth); // 遊戲進程加一

    currentTimer += 1; // 背景渲染更新

    (0,_background__WEBPACK_IMPORTED_MODULE_1__.bgUpdate)(_init__WEBPACK_IMPORTED_MODULE_0__.bg_width, _init__WEBPACK_IMPORTED_MODULE_0__.bg_height, _init__WEBPACK_IMPORTED_MODULE_0__.gameBgCanvas, currentTimer); // 更新玩家資訊

    (0,_player__WEBPACK_IMPORTED_MODULE_2__.updatePlayer)(currentTimer); // 新圖畫在舊圖下

    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.globalCompositeOperation = "destination-over"; // 渲染 障礙物

    (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__.drawObstacleToMap)(currentTimer); // 及時記分板渲染

    (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.gameBoardLoop)();
  } else {
    // 暫停秒數更新
    pauseTimer++;
    pauseTimeFn(pauseTimer);
  } // 新手教學


  if (currentTimer < 150) {
    (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.gameTeach)();
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
gameAction(); // 滑動監聽

function gameAction() {
  // 整個遊戲的DOM監聽
  var gameDom = document.querySelector(".js-game-touch"); // 目前遊戲的width

  var width = document.documentElement.clientWidth; // 目前遊戲的height

  var height = document.documentElement.clientHeight; //如果是手機板 觸控紀錄 

  var touchStartX = 0;
  var touchStartY = 0; // 如果當前裝置是手機

  if ((0,_until__WEBPACK_IMPORTED_MODULE_5__.isMobileDevice)()) {
    // touchStart 手按下
    gameDom.addEventListener("touchstart", function (e) {
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
      }

      if (testVal > 0 && Math.abs(testVal) > 10) {
        (0,_player__WEBPACK_IMPORTED_MODULE_2__.MoveUp)();
      } else if (Math.abs(testVal) > 10) {
        (0,_player__WEBPACK_IMPORTED_MODULE_2__.MoveDown)();
      }
    });
  } else {
    document.onkeydown = function (e) {
      console.log(e.whitch);
    };
  }
}

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
/* harmony export */   "PlayerJump": () => (/* binding */ PlayerJump)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacle/gameMaps */ "./src/obstacle/gameMaps.js");
/* harmony import */ var _obstacle_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obstacle/mail */ "./src/obstacle/mail.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 初始值
 // 遊戲循環

 // 取得障礙物渲染狀態

 // 信件特效

 // 遊戲分數

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
      // 播放玩家撞到動畫
      (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.pause)(PlayerJump); // 玩家死亡紀錄

      (0,_gameBoard__WEBPACK_IMPORTED_MODULE_4__.playerDieAdd)();
    } // 撞到信件遊戲暫停一下，信件消失


    if (collapseType === 1) {
      // email碰到動畫
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
/* harmony export */   "rotateInPhone": () => (/* binding */ rotateInPhone)
/* harmony export */ });
// 判斷是否行動裝置
function isMobileDevice() {
  var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'macos', 'BlackBerry', 'Windows Phone'];
  var isMobile = mobileDevice.some(function (e) {
    return navigator.userAgent.match(e);
  }); // // 新iPad的平台为 MacIntel，其他方法測步道

  return isMobile || navigator.platform.match('MacIntel');
} // 通過判斷旋轉角度來判斷是否豎屏或橫屏

function rotateInPhone() {
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  var contentDOM = document.querySelector('.game-wrapper');
  fixWindow(width, height, contentDOM); //根據手機旋轉判斷

  var evt = "onorientationchange" in window ? "orientationchange" : "resize"; //旋轉事件

  window.addEventListener(evt, function () {
    //事件監聽
    var screen_width = width; //屏幕寬度

    if (window.orientation === 90 || window.orientation === -90) {
      //旋轉到 90 或 -90 度
      console.log(1, 2);
      screen_width = height; //橫坪

      contentDOM.style.width = height + 'px';
      contentDOM.style.height = height / 2 + 'px';
      contentDOM.style.top = (width - height / 2) / 2 + 'px';
      contentDOM.style.left = '0px';
      contentDOM.style.transform = 'none'; //不旋轉；
    } else {
      //旋轉到180或0度，即橫屏到豎屏           
      fixWindow(width, height, contentDOM);
    }
  }, false);
} // 重修高與寬

function fixWindow(width, height, dom) {
  var screen_width = width; //屏幕寬度

  if (width < height && width * 2 > height) {
    screen_width = height; //如果是豎屏，靈感的寬度就等於屏高

    dom.style.width = height + 'px';
    dom.style.height = height / 2 + 'px';
    dom.style.top = height / 4 + 'px';
    dom.style.left = 0 - (height - width) / 2 + 'px';
    dom.style.transform = 'rotate(90deg)';
  } else if (width < height && width * 2 < height) {
    screen_width = height; //如果是豎屏，靈感的寬度就等於屏高

    dom.style.width = 2 * width + 'px';
    dom.style.height = width + 'px';
    dom.style.top = (height - width) / 2 + 'px';
    dom.style.left = 0 - width / 2 + 'px';
    dom.style.transform = 'rotate(90deg)';
  } else {
    if (width > 992) {
      dom.style.top = (height - 992 / 2) / 2 + 'px';
    } else {
      dom.style.top = (height - width / 2) / 2 + 'px';
    }
  }
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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.app {\n  width: 100vw;\n  height: 100vh;\n  background-color: #f7d986;\n}\n\n.game-wrapper {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  height: calc(50vw);\n  max-width: 992px;\n  max-height: 496px;\n  border: 9px #5fa6ab solid;\n  border-radius: 10px;\n}\n.game-wrapper .game-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.game-wrapper .game-container .game-top-size {\n  height: 100%;\n}\n.game-wrapper .game-container .game-bottom-size {\n  height: 78%;\n}\n.game-wrapper .game-container .game-item {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.game-wrapper .game-container #game-ui {\n  z-index: 1;\n  top: 22%;\n}\n.game-wrapper .game-container #game-bg {\n  z-index: 0;\n  top: 0;\n}\n.game-wrapper .before-container {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #afa4c9;\n}\n.game-wrapper .before-container .container__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\n.game-wrapper .before-container .container__content .content__title {\n  font-size: 30px;\n  color: #026269;\n  text-align: center;\n  font-weight: bolder;\n}\n.game-wrapper .before-container .container__content .content__btn {\n  padding: 10px;\n  background-color: #aad0eb;\n  color: #602cda;\n  font-weight: bolder;\n  border-radius: 5px;\n}\n.game-wrapper .transition-none {\n  opacity: 0;\n  transition: all 1s;\n}\n.game-wrapper .transition-none .content__btn {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/_reset.scss","webpack://./src/assets/scss/app.scss"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}","@import './reset.scss';\r\n\r\nhtml,body{\r\n    width:100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.app{\r\n    // display: flex;\r\n    // justify-content: center;\r\n    // align-items: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #f7d986;\r\n}\r\n\r\n.game-wrapper{\r\n    position: relative;\r\n    top:0;\r\n    left: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    margin: 0 auto;\r\n    height: calc(50vw);\r\n    max-width: 992px;\r\n    max-height: 496px;\r\n    border: 9px #5fa6ab solid;\r\n    border-radius: 10px;\r\n    .game-container{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        .game-top-size{\r\n            height: 100%;\r\n        }\r\n        .game-bottom-size{\r\n            height: 78%;\r\n        }\r\n        .game-item{\r\n            width: 100%;\r\n            position: absolute;\r\n            top: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n        }\r\n        #game-ui{\r\n            z-index: 1;\r\n            top:22%;\r\n        }\r\n        #game-bg{\r\n            z-index: 0;\r\n            top:0;\r\n        }\r\n    }\r\n    .before-container{\r\n        position: absolute;\r\n        z-index: 3;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #afa4c9;\r\n        .container__content{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            align-items:center;\r\n            height: 100%;\r\n            .content__title{\r\n                font-size: 30px;\r\n                color: #026269;\r\n                text-align: center;\r\n                font-weight: bolder;\r\n            }\r\n            .content__btn{\r\n                \r\n                padding: 10px;\r\n                background-color: #aad0eb;\r\n                color: #602cda;\r\n                font-weight: bolder;\r\n                border-radius: 5px;\r\n            }\r\n        }\r\n    }\r\n    // 慢慢消失\r\n    .transition-none{\r\n        opacity: 0;\r\n        transition: all 1s;\r\n        .content__btn{\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n    \r\n\r\n\r\n"],"sourceRoot":""}]);
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
  if ((0,_until__WEBPACK_IMPORTED_MODULE_3__.isMobileDevice)()) {
    (0,_until__WEBPACK_IMPORTED_MODULE_3__.rotateInPhone)();
  } // 遊戲開始的按鈕


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9nYW1lTWFwcy5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9tYWlsLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL29ic3RhY2xlL3N0b25lLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL29ic3RhY2xlL3RyZWUuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL3VudGlsLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2ViNGUiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInNreUltZ1VybCIsInJlcXVpcmUiLCJtb3VudGFpbkltZ1VybCIsImdyb3VuZEltZ1VybCIsIkJhY2tncm91bmRFbGVtZW50IiwiaW1nVXJsIiwiaW5pdFgiLCJpbml0WSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwibXVsIiwiaW1hZ2UiLCJzZWxmIiwiSW1nVXJsIiwiQmdHcm91bmRJbWciLCJJbWFnZSIsIm9ubG9hZCIsInJlbmRlciIsInNyYyIsImN1cnJlbnRUaW1lciIsImNvbXBsZXRlIiwiZHJhd0ltYWdlIiwic2t5QmciLCJtb3VudGFpbkJnIiwiZ3JvdW5kQmciLCJiZ0luaXQiLCJjdnNfd2lkdGgiLCJjdnNfaGVpZ2h0IiwiZ2FtZUJnQ2FudmFzIiwiaW5pdCIsImJnVXBkYXRlIiwic2t5U3BlZWQiLCJtb3VudGFpblNwZWVkIiwiZ3JvdW5kU3BlZWQiLCJjbGVhclJlY3QiLCJtYWlsTnVtcyIsImRpZU51bXMiLCJwbGF5ZXJEaWVBZGQiLCJwbGF5ZXJNYWlsQWRkIiwiZ2FtZVN0YXR1cyIsImdhbWVCb2FyZExvb3AiLCJnYW1lQ2FudmFzIiwiZHJhd01haWwiLCJ1aV93aWR0aCIsInVpX2hlaWd0aCIsImdhbWVUZWFjaCIsImlzTW9iaWxlRGV2aWNlIiwiaXNMb29waW5nIiwicGF1c2VUaW1lciIsInBhdXNlVGltZUZuIiwiTG9vcGluZyIsImJnX3dpZHRoIiwiYmdfaGVpZ2h0IiwidXBkYXRlUGxheWVyIiwiZHJhd09ic3RhY2xlVG9NYXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInBhdXNlRm4iLCJzdGFydExvb3AiLCJnYW1lQWN0aW9uIiwiZ2FtZURvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwibW92ZUVuZFgiLCJjaGFuZ2VkVG91Y2hlcyIsIm1vdmVFbmRZIiwiWCIsIlkiLCJ0ZXN0VmFsIiwiTWF0aCIsImFicyIsIk1vdmVVcCIsIk1vdmVEb3duIiwib25rZXlkb3duIiwiY29uc29sZSIsImxvZyIsIndoaXRjaCIsImdldENhbnZhc0FuZENvbnRleHRCeUlkIiwiaWQiLCJkb20iLCJnZXRDb250ZXh0IiwiY3R4IiwiZXJyb3IiLCJnYW1lQmdEb20iLCJnYW1lSW5pdCIsIm9ic3RhY2xlU3BlZWQiLCJvYnN0YWNsZUFycmF5IiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsIm9ic3RhY2xlVGltZXIiLCJmbG9vciIsIm9ic3RhY2xlTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInBlck9ic3RhY2xlQXJyYXkiLCJmb3JFYWNoIiwidHlwZSIsImluZGV4IiwiZHJhd1RyZWUiLCJkcmF3U3RvbmUiLCJnZXRPYnN0YWNsZVN0YXR1cyIsIm1haWxJbWdVcmwiLCJtYWlsV2lkdGgiLCJtYWlsSGVpZ2h0IiwibWFpbEN1dFdpZHRoIiwibWFpbEN1dEhlaWdodCIsIm1haWxJbWciLCJkZWNvZGUiLCJ0aGVuIiwibWFpbFRvdWNoIiwieCIsInkiLCJhbmltYXRlQWxsVGltZSIsImFuaW1hdGVTcGVlZCIsImFuaW1hdGVUaW1lciIsInIiLCJsIiwibnVtcyIsImFuZ2xlVW5pdCIsIlBJIiwiY3VycmVudEFuZ2xlIiwic2luIiwiY29zIiwidW5pdFZhbCIsIm1haWxWZXJ0aWNhbFVuaXQiLCJob3Jpem9uUG9zVW5pdCIsIm1haWxBY3Rpb25JbmRleCIsImNoYW5nZUV2ZXJ5RnJhbWUiLCJ5RXJyb3JWYWwiLCJzdG9uZUltZ1VybCIsInN0b25lSW1nRWxlbWVudCIsInN0b25lV2lkdGgiLCJzdG9uZUhlaWdodCIsInN0b25lUG9zWFVuaXQiLCJzdG9uZVBvc1lVbml0IiwidHJlZUltZ1VybCIsInRyZWVJbWdFbGVtZW50IiwiZXJyIiwidHJlZVdpZHRoIiwidHJlZUhlaWdodCIsInRyZWVQb3NYVW5pdCIsInRyZWVQb3NZVW5pdCIsIlBsYXllckltZ1VybCIsInBsYXllcldpZHRoIiwicGxheWVySGVpZ2h0IiwidmVydGljYWxVbml0IiwiY3VycmVudFZlcnRpY2FsIiwiaW5pdFBvc1giLCJVbml0V2lkdGgiLCJob3Jpem9uUG9zIiwicGxheWVyUGVyV2lkdGgiLCJQbGF5ZXJJbWdFbGVtZW50IiwiY2hlY2tNb3ZlIiwibWF4VmFsIiwibWluVmFsIiwiY29sbGFwc2UiLCJwb3NYUGx1cyIsIkxhc3RDb2xsYXBzZUluZGV4IiwiY29sbGFwc2VJbmRleCIsImNvbGxhcHNlVHlwZSIsIlBsYXllckp1bXAiLCJpc0NvbGxhcHNlIiwicG9zWCIsInBvc1kiLCJjdXJyZW50QWN0aW9uSW5kZXgiLCJjdXRBY3Rpb25WYWwiLCJUaW1lciIsImhvd1RyYW5zcGFyZW50IiwiQWxwaGEiLCJtYXhUaW1lciIsInNhZmVQb3NZIiwiY29sbGFwc2VJbmRleDIiLCJmdXR1cmVDb2wiLCJmdXR1cmVDb2wyIiwicmVzdWx0Q29sIiwiZnV0dXJlVHlwZSIsImZ1dHVyZVR5cGUyIiwiZmluZEluZGV4IiwibW9iaWxlRGV2aWNlIiwiaXNNb2JpbGUiLCJzb21lIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJwbGF0Zm9ybSIsInJvdGF0ZUluUGhvbmUiLCJib2R5IiwiY29udGVudERPTSIsImZpeFdpbmRvdyIsImV2dCIsIndpbmRvdyIsInNjcmVlbl93aWR0aCIsIm9yaWVudGF0aW9uIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwic3RhcnRCdG5Eb20iLCJiZWZvcmVDb250YWluZXJEb20iLCJjbGFzc0xpc3QiLCJhZGQiLCJTdGFydFRvUGxheUdhbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUF6Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUdELG1CQUFPLENBQUMsc0VBQUQsQ0FBOUI7O0FBQ0EsSUFBTUUsWUFBWSxHQUFHRixtQkFBTyxDQUFDLGtFQUFELENBQTVCLEMsQ0FJQTs7O0lBQ01HLGlCO0FBQ0YsNkJBQVlDLE1BQVosRUFBbUJDLEtBQW5CLEVBQXlCQyxLQUF6QixFQUFnQ0MsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQThDQyxNQUE5QyxFQUEyRDtBQUFBLFFBQU5DLEdBQU0sdUVBQUYsQ0FBRTs7QUFBQTs7QUFDdkQsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLUCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQVlBLEtBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVNBLEdBQVQ7QUFDSDs7OztXQUNELGdCQUFNO0FBQ0Y7QUFDQSxVQUFNRSxJ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QUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLFNBQVMsS0FBSyxRQUFRLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxTQUFTLEtBQUssTUFBTSxXQUFXLE1BQU0sWUFBWSxLQUFLLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sU0FBUyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksTUFBTSxPQUFPLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLFNBQVMsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSwwaUJBQTBpQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixLQUFLLDhFQUE4RSxtQkFBbUIsS0FBSyx5SkFBeUoscUJBQXFCLEtBQUssY0FBYyxxQkFBcUIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssdUJBQXVCLG1CQUFtQixLQUFLLG1FQUFtRSxrQkFBa0Isb0JBQW9CLEtBQUssZUFBZSxnQ0FBZ0Msd0JBQXdCLEtBQUssNE5BQTROLGlDQUFpQyw4QkFBOEIsS0FBSyw0QkFBNEIsaUNBQWlDLDhCQUE4Qix3Q0FBd0MscUNBQXFDLGdDQUFnQyxLQUFLLGtCQUFrQix1QkFBdUIsNEJBQTRCLHlCQUF5QixLQUFLLG9JQUFvSSw4QkFBOEIseUJBQXlCLGlCQUFpQix3QkFBd0IsS0FBSyxzS0FBc0ssc0JBQXNCLGtCQUFrQixLQUFLLGdKQUFnSixzQkFBc0IsS0FBSyw2T0FBNk8sd0JBQXdCLCtDQUErQywyQ0FBMkMsYUFBYSw0R0FBNEcsNkJBQTZCLEtBQUssK0hBQStILG1CQUFtQixLQUFLLCtKQUErSixrQkFBa0IsZ0RBQWdELGFBQWEsMEdBQTBHLGtCQUFrQixLQUFLLGdGQUFnRixrQkFBa0IsS0FBSyx5RkFBeUYsa0NBQWtDLHNCQUFzQix1Q0FBdUMsS0FBSyxtTUFBbU0sa0JBQWtCLDJCQUEyQiw0QkFBNEIsbUNBQW1DLGFBQWEsZ1NBQWdTLHdCQUF3QiwwQkFBMEIseUNBQXlDLHdDQUF3QyxhQUFhLHFKQUFxSiw0QkFBNEIsS0FBSywwVkFBMFYsNkJBQTZCLEtBQUssK2hCQUEraEIsbUNBQW1DLGdDQUFnQyxtQ0FBbUMsY0FBYyx3SEFBd0gsd0JBQXdCLEtBQUssZ1JBQWdSLCtCQUErQiwyQkFBMkIsOEJBQThCLDZCQUE2QixhQUFhLGlQQUFpUCxzQ0FBc0MsNkNBQTZDLHdDQUF3Qyx3Q0FBd0MsS0FBSyxnT0FBZ08saUNBQWlDLEtBQUsscUlBQXFJLGtCQUFrQixtQkFBbUIsS0FBSywwSkFBMEosdUJBQXVCLG9DQUFvQyxhQUFhLGdGQUFnRixrQ0FBa0MsMEJBQTBCLEtBQUssMkRBQTJELG9CQUFvQixLQUFLLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLEtBQUsscUJBQXFCLDRCQUE0QiwwQkFBMEIsS0FBSyxhQUFhLCtCQUErQixLQUFLLGtCQUFrQixrQkFBa0Isa0JBQWtCLG1CQUFtQixLQUFLLGtCQUFrQix5QkFBeUIsS0FBSyxzQkFBc0Isd0JBQXdCLHlCQUF5QixvQkFBb0IseUJBQXlCLEtBQUssMEJBQTBCLGtCQUFrQixtQkFBbUIscUJBQXFCLHlCQUF5QixLQUFLLGFBQWEseUJBQXlCLG1DQUFtQywrQkFBK0IscUJBQXFCLHNCQUFzQixrQ0FBa0MsS0FBSyxzQkFBc0IsMkJBQTJCLGNBQWMsZ0JBQWdCLG9CQUFvQiwrQkFBK0IsdUJBQXVCLDJCQUEyQix5QkFBeUIsMEJBQTBCLGtDQUFrQyw0QkFBNEIsd0JBQXdCLCtCQUErQix3QkFBd0IseUJBQXlCLDJCQUEyQiw2QkFBNkIsYUFBYSw4QkFBOEIsNEJBQTRCLGFBQWEsdUJBQXVCLDRCQUE0QixtQ0FBbUMsdUJBQXVCLHlCQUF5QiwwQkFBMEIsd0JBQXdCLGFBQWEscUJBQXFCLDJCQUEyQix3QkFBd0IsYUFBYSxxQkFBcUIsMkJBQTJCLHNCQUFzQixhQUFhLFNBQVMsMEJBQTBCLCtCQUErQix1QkFBdUIsbUJBQW1CLHFCQUFxQixzQkFBc0Isb0JBQW9CLHNDQUFzQyxnQ0FBZ0MsOEJBQThCLHVDQUF1Qyw4Q0FBOEMsbUNBQW1DLDZCQUE2QixnQ0FBZ0Msb0NBQW9DLG1DQUFtQyx1Q0FBdUMsd0NBQXdDLGlCQUFpQiw4QkFBOEIsc0RBQXNELDhDQUE4QyxtQ0FBbUMsd0NBQXdDLHVDQUF1QyxpQkFBaUIsYUFBYSxTQUFTLHdDQUF3Qyx1QkFBdUIsK0JBQStCLDBCQUEwQiw4QkFBOEIsYUFBYSxTQUFTLEtBQUssdUNBQXVDO0FBQ2hzckI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CK0Y7QUFDL0YsWUFBMEk7O0FBRTFJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHVIQUFPOzs7O0FBSXhCLGlFQUFlLDhIQUFjLE1BQU0sRTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7Q0FHQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0FpTSxNQUFNLENBQUN4TCxNQUFQLEdBQWdCLFlBQU07QUFDbEI7QUFDQSxNQUFHOEIsc0RBQWMsRUFBakIsRUFBb0I7QUFDaEJxSix5REFBYTtBQUNoQixHQUppQixDQUtsQjs7O0FBQ0EsTUFBTVksV0FBVyxHQUFHbEosUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCLENBTmtCLENBT2xCOztBQUNBLE1BQU1rSixrQkFBa0IsR0FBR25KLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBM0I7QUFDQWlKLGFBQVcsQ0FBQzNJLGdCQUFaLENBQTZCLE9BQTdCLEVBQXFDLFlBQUk7QUFDckM0SSxzQkFBa0IsQ0FBQ0MsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLGlCQUFqQztBQUNBQyxtQkFBZTtBQUNsQixHQUhELEVBR0UsS0FIRjtBQU9ILENBaEJEOztBQWtCQSxTQUFTQSxlQUFULEdBQTBCO0FBQ3RCO0FBQ0FySCxpREFBUSxHQUZjLENBR3RCOztBQUNBNUMsb0RBQU87QUFDVixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyDmr4/lgIvpnZzmhYvos4fmupDnt6jora/lvozot6/lvpFcclxuY29uc3Qgc2t5SW1nVXJsID0gcmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzL3NreS5qcGcnKVxyXG5jb25zdCBtb3VudGFpbkltZ1VybCA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbi5wbmcnKVxyXG5jb25zdCBncm91bmRJbWdVcmwgPSByZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvZ3JvdW5kLmpwZycpXHJcblxyXG5cclxuXHJcbi8vIOiDjOaZr+WFg+e0oCDljIXlkKsg6IOM5pmv5Zyw5p2/IOiDjOaZr+WxsSDog4zmma/lpKnnqbpcclxuY2xhc3MgQmFja2dyb3VuZEVsZW1lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWdVcmwsaW5pdFgsaW5pdFksIHdpZHRoLCBoZWlnaHQsY2FudmFzLG11bD0xKXtcclxuICAgICAgICB0aGlzLmltYWdlID0gXCJcIlxyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsXHJcbiAgICAgICAgdGhpcy5pbml0WCA9IGluaXRYO1xyXG4gICAgICAgIHRoaXMuaW5pdFkgPSBpbml0WTtcclxuICAgICAgICB0aGlzLndpZHRoID13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xyXG4gICAgICAgIHRoaXMubXVsPW11bFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIOS4i+mdouacieeJueWIpemcgOaxgu+8jOimgemBv+WFjXRoaXPot5HmjolcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyDog4zmma/ot6/lvpFcclxuICAgICAgICBjb25zdCBJbWdVcmwgPSBzZWxmLmltZ1VybFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8g6IOM5pmv5ZyW54mH5a655Zmo55Sf5oiQXHJcbiAgICAgICAgY29uc3QgQmdHcm91bmRJbWcgPSBuZXcgSW1hZ2UodGhpcy53aWR0aCk7XHJcbiAgICAgICAgLy8g5ZyW54mH6LyJ5YWl5b6M5omN6IO95oiQ5Yqf57mq6KO9XHJcbiAgICAgICAgQmdHcm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICAgICAgICAgIC8vIOWIneasoei8ieWFpeebtOaOpea4suafk1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmiorlnJbniYfoo53pgLLlrrnlmahcclxuICAgICAgICBCZ0dyb3VuZEltZy5zcmMgPSBJbWdVcmwgXHJcbiAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICB9XHJcbiAgICAvLyDnuaroo73og4zmma8gPT4g5bi25YWl55W25YmN6YGK5oiy5pmC6ZaT6Lu4XHJcbiAgICByZW5kZXIoY3VycmVudFRpbWVyKXtcclxuICAgICAgICAvLyDlpoLmnpwg5ZyW54mH5oiQ5Yqf6LyJ5YWlIOe5quijveaIkGNhbnZhc1xyXG4gICAgICAgIGlmKHRoaXMuaW1hZ2UuY29tcGxldGUpe1xyXG4gICAgICAgICAgICAvLyDkuInlgIvog4zmma/pgKPmjqUg5YuV6LW35L6G5LiN5pyD5pa3XHJcbiAgICAgICAgICAgIGlmKHRoaXMubXVsID4xKXtcclxuICAgICAgICAgICAgICAgIC8vIOeCuuS6huiuk2dyb3VuZOiDjOaZr+WujOaVtOWRiOePvu+8jOS4jeiiq+ijgeWIh1xyXG4gICAgICAgICAgICAgICAgLy8g5Zug54K65LiA5qyh5Y+q6aGv56S65LiA5Y2K5riF5qWa55qE6IOM5pmvIOaJgOS7peeLgOavlOi8g+WkmuiDjOaZr+WFg+e0oFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCoxLjM1LHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgvMix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCoxLjM1LHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoKjMvMix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KnRoaXMubXVsLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyKzIqdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrMip0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8g5aSp56m655qE6IOM5pmvXHJcbmxldCBza3lCZztcclxuLy8g5bGx55qE6IOM5pmvXHJcbmxldCBtb3VudGFpbkJnO1xyXG4vLyDlnLDmnb/nmoTog4zmma9cclxubGV0IGdyb3VuZEJnO1xyXG5cclxuLy8g5Y+D5pW4IOeVq+W4g+mrmOWvrOiIhyBjYW52YXPkuIrkuIvmlodcclxuZXhwb3J0IGZ1bmN0aW9uIGJnSW5pdChjdnNfd2lkdGgsY3ZzX2hlaWdodCxnYW1lQmdDYW52YXMpe1xyXG5cclxuICAgIC8vIOWumue+qeiDjOaZr+WFg+e0oFxyXG4gICAgc2t5QmcgPSBuZXcgQmFja2dyb3VuZEVsZW1lbnQoc2t5SW1nVXJsLDAsMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQqMi8xMCxnYW1lQmdDYW52YXMpXHJcbiAgICBtb3VudGFpbkJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KG1vdW50YWluSW1nVXJsLDAsY3ZzX2hlaWdodCoxLzIwLGN2c193aWR0aCwgY3ZzX2hlaWdodCoyLzEwLGdhbWVCZ0NhbnZhcylcclxuICAgIGdyb3VuZEJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KGdyb3VuZEltZ1VybCwwLGN2c19oZWlnaHQqNS8yMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLDIuNylcclxuICAgIC8vIOWIneasoee5quijvSBcclxuICAgIHNreUJnLmluaXQoKVxyXG4gICAgbW91bnRhaW5CZy5pbml0KClcclxuICAgIGdyb3VuZEJnLmluaXQoKVxyXG59XHJcblxyXG4vLyDlj4Pmlbgg55Wr5biD6auY5a+s6IiHIGNhbnZhc+S4iuS4i+aWh1xyXG5leHBvcnQgZnVuY3Rpb24gYmdVcGRhdGUoY3ZzX3dpZHRoLGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmr4/lgIvog4zmma/lhYPntKDnmoTpgJ/luqYg5YKZ6Ki777ya5aSp56m66LeR6LaF5oWiICDlsbHmnInpu57mhaIgIOWcsOadv+WFg+e0oOeojeW+ruW/q+S4gOm7nlxyXG4gICAgY29uc3Qgc2t5U3BlZWQgPSBjdXJyZW50VGltZXIvMztcclxuICAgIGNvbnN0IG1vdW50YWluU3BlZWQgPSBjdXJyZW50VGltZXIqMi8zO1xyXG4gICAgY29uc3QgZ3JvdW5kU3BlZWQgPSBjdXJyZW50VGltZXI7XHJcbiAgICAvLyDmuIXpmaTog4zmma/nlavluINcclxuICAgIGdhbWVCZ0NhbnZhcy5jbGVhclJlY3QoMCwwLGN2c193aWR0aCwgY3ZzX2hlaWdodClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyDph43mlrDmuLLmn5Mg5bi25YWl55qE5pW45a2X5LiN6IO96LaF6YGO6IOM5pmv5a+s5bqmIOaJgOS7peeUqOmkmOaVuFxyXG4gICAgc2t5QmcucmVuZGVyKHNreVNwZWVkJWN2c193aWR0aClcclxuICAgIG1vdW50YWluQmcucmVuZGVyKG1vdW50YWluU3BlZWQlY3ZzX3dpZHRoKVxyXG4gICAgZ3JvdW5kQmcucmVuZGVyKGdyb3VuZFNwZWVkJWN2c193aWR0aClcclxufSIsIi8vIOWIneWni+WAvFxyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RofSBmcm9tICcuL2luaXQnXHJcbi8vIOS/oeS7tue5quijveaWueazlVxyXG5pbXBvcnQge2RyYXdNYWlsfSBmcm9tICcuL29ic3RhY2xlL21haWwnXHJcbi8vIOWIpOaWt+aYr+WQpuihjOWLleijnee9rlxyXG5pbXBvcnQge2lzTW9iaWxlRGV2aWNlfSBmcm9tICcuL3VudGlsJ1xyXG4vLyDkv6Hku7bmlbhcclxubGV0IG1haWxOdW1zID0gMDtcclxuXHJcbi8vIOatu+S6oeaVuFxyXG5sZXQgZGllTnVtcyA9IDA7XHJcblxyXG4vLyDnjqnlrrbmrbvkuqFcclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckRpZUFkZCgpe1xyXG4gICAgZGllTnVtcys9MTtcclxufVxyXG5cclxuLy8g546p5a625ZCD5Yiw5L+hXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJNYWlsQWRkKCl7XHJcbiAgICBtYWlsTnVtcyArPTE7XHJcbn1cclxuXHJcbi8vIOWPluW+l+ebruWJjeWIhuaVuOeLgOaFi1xyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVN0YXR1cygpe1xyXG4gICAgcmV0dXJuIFttYWlsTnVtcyxkaWVOdW1zXVxyXG59XHJcblxyXG4vLyDnuaroo73lj4rmmYLoqJjliIbmnb9cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVCb2FyZExvb3AoKXtcclxuICAgIC8vIOS7peS4i+ioreWumuacg+iTi+mBjuaWsOWcllxyXG4gICAgZ2FtZUNhbnZhcy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCJcclxuICAgIC8vIOWtl+W9oiDlrZflpKflsI9cclxuICAgIGdhbWVDYW52YXMuZm9udCA9IFwiYm9sZCA4MHB4IEFyaWFsXCJcclxuICAgIC8vIOWtl+Wwjem9iuW6lemDqFxyXG4gICAgZ2FtZUNhbnZhcy50ZXh0QmFzZWxpbmUgPSBcImJvdHRvbVwiXHJcbiAgICAvLyDlrZfpoY/oibLpu5Hpu5HnmoRcclxuICAgIGdhbWVDYW52YXMuZmlsbFN0eWxlPVwiYmxhY2tcIlxyXG4gICAgLy8g5bCHRW1haWznmoTlnJbmlL7liLDpnIDopoHnmoTlnLDmlrlcclxuICAgIGRyYXdNYWlsKDEzLDUuMywxKVxyXG4gICAgLy8g5a2X55qE5YWn5a6577yM6IiH5L2N572uXHJcbiAgICBnYW1lQ2FudmFzLmZpbGxUZXh0KGB4ICR7bWFpbE51bXN9YCx1aV93aWR0aCo1LzYsdWlfaGVpZ3RoKVxyXG4gICAgXHJcbn1cclxuXHJcbi8vIOe5quijveaVmeWtuFxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZVRlYWNoKCl7XHJcbiAgICAvLyDku6XkuIvoqK3lrprmnIPok4vpgY7mlrDlnJZcclxuICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiXHJcbiAgICAvLyDlrZflvaIg5a2X5aSn5bCPXHJcbiAgICBnYW1lQ2FudmFzLmZvbnQgPSBcImJvbGQgMzBweCBBcmlhbFwiXHJcbiAgICBnYW1lQ2FudmFzLnRleHRCYXNlbGluZSA9IFwiYm90dG9tXCJcclxuICAgIC8vIGdhbWVDYW52YXMudGV4dEFsaWduID0gXCJsZWZ0XCJcclxuICAgIC8vIOiDjOaZr+mhj+iJsueyieeyieeahFxyXG4gICAgZ2FtZUNhbnZhcy5maWxsU3R5bGU9XCIjZjNiOGM4XCJcclxuICAgIGdhbWVDYW52YXMuZmlsbFJlY3QodWlfd2lkdGgqNC82LDAsdWlfd2lkdGgvNSx1aV9oZWlndGgvNylcclxuICAgICAvLyDlrZfpoY/oibLpu5Hpu5HnmoRcclxuICAgIGdhbWVDYW52YXMuZmlsbFN0eWxlPVwiYmxhY2tcIlxyXG4gICAgZ2FtZUNhbnZhcy5maWxsVGV4dCgn5pON56m65pa55byP54K6Jyx1aV93aWR0aCo0LzYsdWlfaGVpZ3RoLzE0KVxyXG4gICAgaWYoaXNNb2JpbGVEZXZpY2UoKSl7XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5maWxsVGV4dCgn5omL5YuiXCLkuIrmu5HoiIfkuIvmu5FcIicsdWlfd2lkdGgqNC82LHVpX2hlaWd0aC83KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZ2FtZUNhbnZhcy5maWxsVGV4dCgn6Y2155uk55qEXCLkuIrkuIvlt6blj7NcIicsdWlfd2lkdGgqNC82LHVpX2hlaWd0aC83KVxyXG4gICAgfVxyXG4gICBcclxufSIsIlxyXG4vLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuLy8gaW1wb3J0IHtpbml0fSBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RoLGdhbWVCZ0NhbnZhcyxiZ193aWR0aCxiZ19oZWlnaHR9IGZyb20gJy4vaW5pdCdcclxuLy8g6IOM5pmv5Yid5aeL5YyW6IiH5pu05pawXHJcbmltcG9ydCB7YmdVcGRhdGV9IGZyb20gJy4vYmFja2dyb3VuZCdcclxuLy8g546p5a62XHJcbmltcG9ydCB7dXBkYXRlUGxheWVyLE1vdmVEb3duLE1vdmVVcH0gZnJvbSAnLi9wbGF5ZXInXHJcbi8vIOmanOekmeeJqee5quijvVxyXG5pbXBvcnQge2RyYXdPYnN0YWNsZVRvTWFwfSBmcm9tICcuL29ic3RhY2xlL2dhbWVNYXBzJztcclxuLy8g6YGK5oiy5YiG5pW457SA6YyEID0+5Y+K5pmC6KiY5YiG5p2/5pa55rOVXHJcbmltcG9ydCB7Z2FtZUJvYXJkTG9vcCxnYW1lVGVhY2h9IGZyb20gJy4vZ2FtZUJvYXJkJ1xyXG4vLyBET00gd2luZG9355u46Zec5bel5YW3XHJcbmltcG9ydCB7aXNNb2JpbGVEZXZpY2V9IGZyb20gJy4vdW50aWwnXHJcblxyXG4vLyAg6YGK5oiy5pmC6ZaT6Lu4XHJcbmxldCBjdXJyZW50VGltZXIgPSAwOyBcclxuXHJcbi8v5piv5ZCm5pqr5YGcXHJcbmxldCBpc0xvb3BpbmcgPSB0cnVlO1xyXG5cclxuLy8g5pqr5YGc5bm+56eSXHJcbmxldCBwYXVzZVRpbWVyID0gMDtcclxuXHJcblxyXG4vLyDmmqvlgZzmmYLplpNcclxubGV0IHBhdXNlVGltZUZuID0gKCk9Pnt9XHJcblxyXG4vLyDnhKHpmZDov7TlnIhcclxuZXhwb3J0IGZ1bmN0aW9uIExvb3BpbmcoKXtcclxuICAgIC8vIOaYr+WQpuWFqOmrlOWFg+e0oOato+W4uOmBi+S9nFxyXG4gICAgaWYoaXNMb29waW5nKXtcclxuICAgICAgICAvLyDmuIXnqbrnlavluINcclxuICAgICAgICBnYW1lQ2FudmFzLmNsZWFyUmVjdCgwLDAsdWlfd2lkdGgsdWlfaGVpZ3RoKVxyXG4gICAgICAgIC8vIOmBiuaIsumAsueoi+WKoOS4gFxyXG4gICAgICAgIGN1cnJlbnRUaW1lcis9MTtcclxuICAgICAgICAvLyDog4zmma/muLLmn5Pmm7TmlrBcclxuICAgICAgICBiZ1VwZGF0ZShiZ193aWR0aCxiZ19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcilcclxuICAgICAgICBcclxuICAgICAgICAvLyDmm7TmlrDnjqnlrrbos4foqIpcclxuICAgICAgICB1cGRhdGVQbGF5ZXIoY3VycmVudFRpbWVyKVxyXG4gICAgICAgIC8vIOaWsOWclueVq+WcqOiIiuWcluS4i1xyXG4gICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdmVyXCJcclxuICAgICAgICAgIC8vIOa4suafkyDpmpznpJnnialcclxuICAgICAgICBkcmF3T2JzdGFjbGVUb01hcChjdXJyZW50VGltZXIpXHJcbiAgICAgICAgLy8g5Y+K5pmC6KiY5YiG5p2/5riy5p+TXHJcbiAgICAgICAgZ2FtZUJvYXJkTG9vcCgpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvLyDmmqvlgZznp5Lmlbjmm7TmlrBcclxuICAgICAgICBwYXVzZVRpbWVyKys7XHJcbiAgICAgICAgcGF1c2VUaW1lRm4ocGF1c2VUaW1lcilcclxuICAgIH1cclxuICAgIC8vIOaWsOaJi+aVmeWtuFxyXG4gICAgaWYoY3VycmVudFRpbWVyPDE1MCl7XHJcbiAgICAgICAgZ2FtZVRlYWNoKClcclxuICAgIH1cclxuICAgIC8vIOaMgee6jOabtOaWsOinuOeZvFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKExvb3BpbmcpXHJcbn1cclxuLy8g5pqr5YGc6YGK5oiy77yM5Y+D5pW454K6IOaaq+WBnOaZguimgeWBmueahOS6i+WSjOaaq+WBnOe4veaZgumWk1xyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2UocGF1c2VGbil7XHJcbiAgICBpc0xvb3BpbmcgPSBmYWxzZTtcclxuICAgIHBhdXNlVGltZUZuID0gcGF1c2VGblxyXG59XHJcbi8vIOe5vOe6jOmBiuaIslxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRMb29wKCl7XHJcbiAgICAvLyDmmqvlgZznp5LmlbjliJ3lp4vljJZcclxuICAgIHBhdXNlVGltZXI9MDtcclxuICAgIHBhdXNlVGltZUZuPSgpPT57fVxyXG4gICAgaXNMb29waW5nID0gdHJ1ZVxyXG59XHJcblxyXG5nYW1lQWN0aW9uKClcclxuXHJcbi8vIOa7keWLleebo+iBvVxyXG5mdW5jdGlvbiBnYW1lQWN0aW9uKCl7XHJcbiAgICAvLyDmlbTlgIvpgYrmiLLnmoRET03nm6Pogb1cclxuICAgIGNvbnN0IGdhbWVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWdhbWUtdG91Y2hcIilcclxuICAgIC8vIOebruWJjemBiuaIsueahHdpZHRoXHJcbiAgICBjb25zdCB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIC8vIOebruWJjemBiuaIsueahGhlaWdodFxyXG4gICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIFxyXG4gICAgLy/lpoLmnpzmmK/miYvmqZ/mnb8g6Ke45o6n57SA6YyEIFxyXG4gICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcclxuICAgIGxldCB0b3VjaFN0YXJ0WSA9IDA7XHJcbiAgICAvLyDlpoLmnpznlbbliY3oo53nva7mmK/miYvmqZ9cclxuICAgIGlmKGlzTW9iaWxlRGV2aWNlKCkpe1xyXG4gICAgICAgIC8vIHRvdWNoU3RhcnQg5omL5oyJ5LiLXHJcbiAgICAgICAgZ2FtZURvbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLChlKT0+e1xyXG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgICAgIHRvdWNoU3RhcnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHRvdWNoU3RhcnQg5omL5pS+6ZaLXHJcbiAgICAgICAgZ2FtZURvbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwoZSk9PntcclxuICAgICAgICAgICAgLy8g5pS+6ZaL55qEWFnluqfmqJlcclxuICAgICAgICAgICAgdmFyIG1vdmVFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIFxyXG4gICAgICAgICAgICB2YXIgbW92ZUVuZFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgLy8g5pS+6ZaL55qEWFnluqfmqJnoiIfmjInkuIvnmoTluqfmqJnlt65cclxuICAgICAgICAgICAgdmFyIFggPSBtb3ZlRW5kWCAtIHRvdWNoU3RhcnRYXHJcbiAgICAgICAgICAgIHZhciBZID0gbW92ZUVuZFkgLSB0b3VjaFN0YXJ0WVxyXG4gICAgICAgICAgICAvLyDliKTmlrfnjqnlrrbmmK/lkJHkuIrpgoTmmK/lkJHkuIvlgLxcclxuICAgICAgICAgICAgbGV0IHRlc3RWYWw7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoIOWSjCBoZWlnaHTnmoTlt67ot53vvIzlpoLmnpzlr6zluqblpKcgdGVzdFZhbCDnnIvnmoTmmK9Z5bqn5qiZXHJcbiAgICAgICAgICAgIGlmKHdpZHRoPj1oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGVzdFZhbCA9IFlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VmFsID0gWFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRlc3RWYWw+MCAmJiBNYXRoLmFicyh0ZXN0VmFsKT4xMCl7XHJcbiAgICAgICAgICAgICAgICBNb3ZlVXAoKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihNYXRoLmFicyh0ZXN0VmFsKT4xMCl7XHJcbiAgICAgICAgICAgICAgICBNb3ZlRG93bigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUud2hpdGNoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIiwiXHJcbi8vIOiDjOaZr+WIneWni+WMllxyXG5pbXBvcnQge2JnSW5pdH0gZnJvbSAnLi9iYWNrZ3JvdW5kJ1xyXG5cclxuLy8g5Yip55SoY2FudmFzIElEIOWPluW+lyBET00g5ZKMIGNhdmFuc1xyXG5mdW5jdGlvbiBnZXRDYW52YXNBbmRDb250ZXh0QnlJZChpZCl7XHJcbiAgICBjb25zdCBkb20gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBpZCk7XHJcbiAgICBpZihkb20uZ2V0Q29udGV4dCl7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gZG9tLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgcmV0dXJuW2RvbSwgY3R4XTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuI3mlK/mj7RjYW52YXNcIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFVJQ2FudmFzIC8vIOmBiuaIsueahOS6uueJqemanOekmeeJqcuL5L+h5bCBIOeVq+W4g1xyXG5jb25zdCBbZ2FtZURvbSxnYW1lQ2FudmFzXSA9IGdldENhbnZhc0FuZENvbnRleHRCeUlkKCdnYW1lLXVpJylcclxuLy8g6IOM5pmvQ2FudmFzIC8vIOmBiuaIsuiDjOaZryDnlavluINcclxuY29uc3QgW2dhbWVCZ0RvbSxnYW1lQmdDYW52YXNdID0gZ2V0Q2FudmFzQW5kQ29udGV4dEJ5SWQoJ2dhbWUtYmcnKVxyXG5jb25zdCB1aV93aWR0aCA9IGdhbWVEb20ud2lkdGg7XHJcbmNvbnN0IHVpX2hlaWd0aCA9IGdhbWVEb20uaGVpZ2h0O1xyXG5cclxuLy8g6IOM5pmv55Wr5biD5a+s5bqm6auY5bqmXHJcbmNvbnN0IGJnX3dpZHRoID0gZ2FtZUJnRG9tLndpZHRoO1xyXG5jb25zdCBiZ19oZWlnaHQgPSBnYW1lQmdEb20uaGVpZ2h0O1xyXG5cclxuLy8g6YGK5oiy5Yid5aeL5YyW5pa55rOVXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lSW5pdCgpe1xyXG4gICAgLy8g6IOM5pmv5riy5p+TXHJcbiAgICBiZ0luaXQoYmdfd2lkdGgsYmdfaGVpZ2h0LGdhbWVCZ0NhbnZhcylcclxufVxyXG5cclxuLy8g6YGK5oiy55qE5omA5pyJ6LOH6KiKXHJcbmV4cG9ydCB7Z2FtZURvbSxnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aCxnYW1lQmdEb20sZ2FtZUJnQ2FudmFzLGJnX3dpZHRoLGJnX2hlaWdodH1cclxuXHJcblxyXG4iLCIvLyDlnLDlnJYg5a+sMTflgIvnjqnlrrbnmoTlr6woMH4xNikgIOmrmDbmop3lsI/ot68oMH41KVxyXG4vLyDnjqnlrrbnmoTkvY3nva5cclxuaW1wb3J0IHtnYW1lQ2FudmFzfSBmcm9tICcuLi9pbml0J1xyXG5cclxuLy8g5L+h566x57mq6KO95pa55rOVXHJcbmltcG9ydCB7ZHJhd01haWx9IGZyb20gJy4vbWFpbCdcclxuaW1wb3J0IHtkcmF3VHJlZX0gZnJvbSAnLi90cmVlJ1xyXG5pbXBvcnQge2RyYXdTdG9uZX0gZnJvbSAnLi9zdG9uZSdcclxuXHJcbi8vIOmanOekmeeJqeaVuOW6puaFouWNgeWAjVxyXG5leHBvcnQgY29uc3Qgb2JzdGFjbGVTcGVlZCA9IDEvMzBcclxuXHJcbi8v6Zqc56SZ54mpQXJyYXkg5Zyw5ZyWXHJcbi8vIDHmmK9tYWlsIDLmmK90cmVlIDPmmK9zdG9uZVxyXG5jb25zdCBvYnN0YWNsZUFycmF5ID0gW1xyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzEsMSwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzEsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMywwLDAsMF0sXHJcbiAgICBbMSwxLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsM10sXHJcbiAgICBbMCwwLDIsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwyLDMsMF0sXHJcbiAgICBbMCwwLDMsMCwxLDBdLFxyXG4gICAgWzAsMywwLDAsMSwwXSxcclxuICAgIFswLDAsMCwwLDIsMF0sIFxyXG4gICAgWzMsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzMsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMiwwLDEsMCwwLDNdLCAgXHJcbiAgICBbMCwwLDAsMiwwLDNdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDEsM10sXHJcbiAgICBbMywwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMSwwXSxcclxuICAgIFswLDAsMCwwLDEsMF0sICBcclxuICAgIFszLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSwgIFxyXG4gICAgWzAsMCwwLDIsMCwzXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzMsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLCAgXHJcbiAgICBbMywwLDAsMiwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sICBcclxuICAgIFszLDIsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDMsMCwwXSwgIFxyXG4gICAgWzMsMCwwLDAsMCwwXSxcclxuICAgIFswLDIsMCwyLDAsMF0sXHJcbiAgICBbMCwzLDAsMiwwLDBdLFxyXG4gICAgWzIsMCwwLDAsMCwwXSxcclxuICAgIFswLDIsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMywzLDNdLCAgXHJcbiAgICBbMCwwLDAsMiwxLDNdLFxyXG4gICAgWzAsMCwwLDMsMiwzXSxcclxuICAgIFswLDAsMCwzLDAsMl0sXHJcbiAgICBbMCwwLDMsMCwwLDJdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwyLDAsMF0sICBcclxuICAgIFsxLDAsMCwwLDAsMV0sXHJcbiAgICBbMCwxLDAsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDEsMCwwXSxcclxuICAgIFswLDAsMSwxLDAsMF0sXHJcbiAgICBbMCwwLDEsMSwwLDBdLFxyXG4gICAgWzAsMSwwLDEsMCwwXSwgIFxyXG4gICAgWzEsMCwwLDAsMSwwXSxcclxuICAgIFswLDAsMCwyLDAsMV0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMiwxLDBdLCAgXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwxLDBdLFxyXG4gICAgWzAsMSwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMSwwLDAsMCwxLDFdLFxyXG4gICAgWzAsMCwyLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDFdLFxyXG4gICAgWzAsMCwyLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMiwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDIsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzIsMCwwLDAsMiwwXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFswLDIsMCwyLDAsMV0sXHJcbiAgICBbMCwyLDAsMiwwLDFdLFxyXG4gICAgWzAsMiwwLDIsMCwxXSxcclxuICAgIFsyLDAsMCwwLDIsMV0sXHJcbiAgICBbMCwwLDAsMCwwLDFdLFxyXG4gICAgWzAsMCwwLDAsMCwxXSxcclxuICAgIFswLDAsMCwwLDAsMV0sXHJcbiAgICBbMCwwLDAsMSwwLDFdLFxyXG4gICAgWzAsMCwwLDEsMCwxXSxcclxuICAgIFswLDAsMCwxLDAsMV0sXHJcbiAgICBbMCwwLDAsMSwwLDFdLFxyXG4gICAgWzAsMCwwLDEsMCwxXSxcclxuICAgIFswLDAsMCwxLDAsMF0sXHJcbiAgICBbMCwwLDAsMSwwLDBdLFxyXG4gICAgWzAsMywwLDEsMiwwXSxcclxuICAgIFswLDMsMSwwLDIsMl0sXHJcbiAgICBbMCwzLDEsMCwyLDBdLFxyXG4gICAgWzAsMywxLDAsMiwwXSxcclxuICAgIFswLDMsMSwxLDIsMF0sXHJcbiAgICBbMCwzLDEsMSwyLDBdLFxyXG4gICAgWzAsMywxLDEsMiwwXSxcclxuICAgIFswLDMsMSwxLDIsMF0sXHJcbiAgICBbMCwzLDEsMSwyLDBdLFxyXG4gICAgWzMsMywxLDEsMiwyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sICAgXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuICAgIFsyLDMsMCwwLDMsMl0sXHJcbiAgICBbMiwzLDAsMCwzLDJdLFxyXG4gICAgWzIsMywwLDAsMywyXSxcclxuXVxyXG5cclxuLy8g55uu5YmN6Zqc56SZ54mp55qE5Yid5aeL5YiXXHJcbmxldCBmaXJzdEluZGV4O1xyXG4vLyDpmpznpJnniannmoTmnIDlvozliJdcclxubGV0IGxhc3RJbmRleDtcclxuXHJcblxyXG4vLyDpmpznpJnniannuaroo71cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdPYnN0YWNsZVRvTWFwKGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDluIzmnJvpmpznpJnnianmhaJvYnN0YWNsZVNwZWVk5YCNXHJcbiAgICBjb25zdCBvYnN0YWNsZVRpbWVyID0gTWF0aC5mbG9vcihjdXJyZW50VGltZXIqb2JzdGFjbGVTcGVlZClcclxuICAgIC8vIG9ic3RhY2xlQXJyYXnnmoTlpKflsI9cclxuICAgIGxldCBvYnN0YWNsZUxlbmd0aCA9IG9ic3RhY2xlQXJyYXkubGVuZ3RoXHJcbiAgICAvLyDlpoLmnpzot5HlrozkuoYg5LiN55So5riy5p+TXHJcbiAgICBpZihvYnN0YWNsZVRpbWVyPm9ic3RhY2xlTGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgLy8gb2JzdGFjbGVBcnJheeWcqOWcsOWclueahOesrOS4gOWIl1xyXG4gICAgZmlyc3RJbmRleCA9IG9ic3RhY2xlVGltZXJcclxuICAgIC8vIOWcsOWcluacgOW+jOS4gOWIl1xyXG4gICAgbGFzdEluZGV4ID0gKG9ic3RhY2xlVGltZXIrMTc+b2JzdGFjbGVMZW5ndGgpP29ic3RhY2xlTGVuZ3RoOm9ic3RhY2xlVGltZXIrMTdcclxuXHJcbiAgICBmb3IobGV0IGk9Zmlyc3RJbmRleDsgaTxsYXN0SW5kZXg7IGkrKyl7XHJcbiAgICAgICAgLy8g5q+P5LiA5YiX55qE6Zqc56SZ54mpXHJcbiAgICAgICAgY29uc3QgcGVyT2JzdGFjbGVBcnJheSA9IG9ic3RhY2xlQXJyYXlbaV1cclxuICAgICAgICBwZXJPYnN0YWNsZUFycmF5LmZvckVhY2goKHR5cGUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIC8vIHR5cGUgPT09IOaYr+S/oeWwgSB0eXBlID09PSAy5piv5qi5IHR5cGUgPT09IDPmmK/nn7PpoK1cclxuICAgICAgICAgICAgaWYodHlwZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgLy8g5Zug54K65L+h5piv6aOE55qE77yM5omA5Lul6aOE5Zyo5pyA5LiK6Z2iXHJcbiAgICAgICAgICAgICAgICBnYW1lQ2FudmFzLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIlxyXG4gICAgICAgICAgICAgICAgZHJhd01haWwoaS1maXJzdEluZGV4LGluZGV4LGN1cnJlbnRUaW1lcilcclxuICAgICAgICAgICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdmVyXCJcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgZHJhd1RyZWUoaS1maXJzdEluZGV4LGluZGV4LGN1cnJlbnRUaW1lcilcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZT09PTMpe1xyXG4gICAgICAgICAgICAgICAgZHJhd1N0b25lKGktZmlyc3RJbmRleCxpbmRleCxjdXJyZW50VGltZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyDlj5blvpfpmpznpJnnianmuLLmn5Pni4DmhYtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9ic3RhY2xlU3RhdHVzKCl7XHJcbiAgICByZXR1cm4gW2ZpcnN0SW5kZXgsbGFzdEluZGV4LG9ic3RhY2xlQXJyYXldXHJcbn1cclxuXHJcbiIsImltcG9ydCB7Z2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGh9IGZyb20gJy4uL2luaXQnXHJcblxyXG5pbXBvcnQge3BhdXNlLHN0YXJ0TG9vcH0gZnJvbSAnLi4vZ2FtZWxvb3AnXHJcbi8vIOS/oeWwgeeahOe0oOadkOi3r+W+kVxyXG5jb25zdCBtYWlsSW1nVXJsID0gcmVxdWlyZSgnLi4vYXNzZXRzL2ltYWdlcy9tYWlsLnBuZycpXHJcblxyXG4vLyDlnJbniYfpq5jlr6zluqZcclxubGV0IG1haWxXaWR0aDtcclxubGV0IG1haWxIZWlnaHQ7XHJcbi8vIOWclueJh+WJquijgemrmOWvrFxyXG5sZXQgbWFpbEN1dFdpZHRoO1xyXG5sZXQgbWFpbEN1dEhlaWdodFxyXG5cclxuLy8g5q+P5qyh56e75YuV55qE6ZaT6Zaj5Zau5L2NXHJcblxyXG4vLyDog4zmma/lnJbniYflrrnlmajnlJ/miJBcclxuY29uc3QgbWFpbEltZyA9IG5ldyBJbWFnZSg1MDApO1xyXG4vLyDmiorlnJbniYfoo53pgLLlrrnlmahcclxubWFpbEltZy5zcmMgPSBtYWlsSW1nVXJsIFxyXG5cclxuLy8g5ZyW54mH6KaB5oiQ5Yqf6K6A5Y+W5b6M5omN6IO95riy5p+TXHJcbm1haWxJbWcuZGVjb2RlKClcclxuLnRoZW4oKCkgPT4ge1xyXG4gICAgbWFpbFdpZHRoID0gdWlfd2lkdGgvMjA7XHJcbiAgICBtYWlsSGVpZ2h0ID0gdWlfaGVpZ3RoLzI7XHJcbiAgICBtYWlsQ3V0V2lkdGggPSB1aV93aWR0aC8zNDtcclxuICAgIG1haWxDdXRIZWlnaHQgPSB1aV9oZWlndGgvNjtcclxuICAgIFxyXG4gICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2UobWFpbEltZywwLDAsbWFpbEN1dFdpZHRoLG1haWxDdXRIZWlnaHQsdWlfd2lkdGgvMTcqMywwLG1haWxXaWR0aCxtYWlsSGVpZ2h0KVxyXG59KVxyXG5cclxuXHJcbi8vIOS/oeS7tuiiq+eisOWIsOeahOeJueaViCAg5bi25YWl56Kw5Yiw6JmV55qEWOW6p+aomSznorDliLDomZXnmoRZ5bqn5qiZXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWlsVG91Y2goeCx5KXtcclxuICAgIC8vIOmBiuaIsuaaq+WBnFxyXG4gICAgcGF1c2UoKHBhdXNlVGltZXIpPT57XHJcbiAgICAgICAgLy8g6YCZ5qyh5YuV55Wr55qE56eS5pW4XHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZUFsbFRpbWUgPSA0XHJcbiAgICAgICAgLy8g6YCZ5YCL5YuV55Wr55qE5pW45bqmXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZVNwZWVkID0gMlxyXG4gICAgICAgIC8vIOmAmeWAi+WLleeVq+eahFRpbWVyXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZVRpbWVyID0gTWF0aC5mbG9vcihwYXVzZVRpbWVyKmFuaW1hdGVTcGVlZClcclxuICAgICAgICAvLyDli5XnlavkuK3lv4NY5bqn5qiZXHJcbiAgICAgICAgbGV0IFg9KHVpX3dpZHRoLzE3KSp4XHJcbiAgICAgICAgLy8g5YuV55Wr5Lit5b+DWeW6p+aomSDmnIDkvY7ngrptYWlsQ3V0SGVpZ2h0KnktNzBcclxuICAgICAgICBsZXQgWT0obWFpbEN1dEhlaWdodCkqeSszMFxyXG4gICAgICAgIC8vIOWNiuW+kSAxMH4xNVxyXG4gICAgICAgIGxldCByPTEwXHJcbiAgICAgICAgLy8g5Y2K5b6R5aSW5bu25Ly477yM54m55pWI55qE6ZW35bqmXHJcbiAgICAgICAgbGV0IGw9MTUrKE1hdGguZmxvb3IoYW5pbWF0ZVRpbWVyJTUwKSlcclxuICAgICAgICAvLyDnlatu5qKd57eaXHJcbiAgICAgICAgbGV0IG51bXMgPSA4O1xyXG4gICAgICAgIC8vIOavj2HluqblioPkuIDmop3nt5og77yMTWF0aC5QSSoy5pivMzYw5bqmXHJcbiAgICAgICAgbGV0IGFuZ2xlVW5pdCA9TWF0aC5QSSoyL251bXNcclxuICAgICAgICAvLyDnuaroo73plovlp4vmmYLliJ3lp4vljJbvvIzkuI3nhLbmnInlj6/og73ooqvnt6nlrZjkuYvliY3nmoTmlbjmk5pcclxuICAgICAgICBnYW1lQ2FudmFzLmJlZ2luUGF0aCgpXHJcbiAgICAgICAgLy8g5YuV55Wr5Zyo5pyA5LiK6Z2iXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCJcclxuICAgICAgICBnYW1lQ2FudmFzLnN0cm9rZVN0eWxlPVwieWVsbG93XCJcclxuICAgICAgICBmb3IobGV0IGk9MDtpPG51bXM7aSsrKXtcclxuICAgICAgICAgICAgLy8g6YCZ5qyh6KaB57mq6KO955qE6KeS5bqmXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50QW5nbGUgPSBhbmdsZVVuaXQqaVxyXG4gICAgICAgICAgICAvLyDluqfmqJnnp7vli5XpgY7ljrtcclxuICAgICAgICAgICAgZ2FtZUNhbnZhcy5tb3ZlVG8oWCtyKk1hdGguc2luKGN1cnJlbnRBbmdsZSksWStyKk1hdGguY29zKGN1cnJlbnRBbmdsZSkpXHJcbiAgICAgICAgICAgIC8vIOW+nuS4iuS4gOWAi+W6p+aomemWi+Wni+e5quijvVxyXG4gICAgICAgICAgICBnYW1lQ2FudmFzLmxpbmVUbyhYK2wqTWF0aC5zaW4oY3VycmVudEFuZ2xlKSxZK2wqTWF0aC5jb3MoY3VycmVudEFuZ2xlKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g57mq6KO957eaXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5zdHJva2UoKVxyXG4gICAgICAgIC8vIOaZgumWk+WIsCDmiYDmnInli5XnlavnubznuoxcclxuICAgICAgICBpZihwYXVzZVRpbWVyPmFuaW1hdGVBbGxUaW1lKXtcclxuICAgICAgICAgICAgc3RhcnRMb29wKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOe5quijveS/oeS7tlxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd01haWwoeCx5LGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmr4/lgIvli5XkvZzplpPmoLxcclxuICAgIGNvbnN0IHVuaXRWYWwgPSB1aV93aWR0aC8zMy4zO1xyXG4gICAgLy8g5L+h5Lu25LiK5LiL56e75YuV5Zau5L2NXHJcbiAgICBjb25zdCBtYWlsVmVydGljYWxVbml0ID0gNDcwLzVcclxuICAgIC8vIOS/oeS7tuW3puWPs+enu+WLlemWk+agvFxyXG4gICAgLy8gY29uc3QgaG9yaXpvblBvc1VuaXQgPSB1aV93aWR0aC8xNztcclxuICAgIGNvbnN0IGhvcml6b25Qb3NVbml0ID0gdWlfd2lkdGgvMTdcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBtYWlsQWN0aW9uSW5kZXggPSAoY3VycmVudFRpbWVyKSUxNTtcclxuICAgIFxyXG4gICAgaWYobWFpbEltZy5jb21wbGV0ZSl7XHJcbiAgICAgICAgLy8g6YGH5Yiw5LiA5YCL5ZWP6aGM77yM5Y6f5pys5piv6YCZ5qijXHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2Uoc3RvbmVJbWdFbGVtZW50LHN0b25lUG9zWFVuaXQqeCxzdG9uZVBvc1lVbml0Knksc3RvbmVXaWR0aCxzdG9uZUhlaWdodClcclxuICAgICAgICAvLyDkvYbmmK/muLLmn5Plh7rkvobnmoTntZDmnpzmmK/og4zmma/kuIDmoLzkuIDmoLzotbDvvIzmiYDku6Ugc3RvbmVQb3NYVW5pdCp4IOaUueaIkCBzdG9uZVBvc1hVbml0Kih4LTEpLXN0b25lUG9zWFVuaXQqKGEqb2JzdGFjbGVTcGVlZClcclxuICAgICAgICAgLy8g5Y6f5pys5q+PMzBGcmFtZeaJjeacg+aPm+S4gOasoeS9jee9riDvvIzmlLnli5Xmr4/mrKHmhaLmhaLmj5tcclxuICAgICAgICBjb25zdCBjaGFuZ2VFdmVyeUZyYW1lID0gY3VycmVudFRpbWVyJTMwKzFcclxuICAgICAgICAvLyB56Lu455qE6Kqk5beu5YC8XHJcbiAgICAgICAgY29uc3QgeUVycm9yVmFsID0gMjVcclxuICAgICAgICBnYW1lQ2FudmFzLmRyYXdJbWFnZShtYWlsSW1nLHVuaXRWYWwqbWFpbEFjdGlvbkluZGV4LDAsbWFpbEN1dFdpZHRoLG1haWxDdXRIZWlnaHQsaG9yaXpvblBvc1VuaXQqKHgtY2hhbmdlRXZlcnlGcmFtZS8zMCkseUVycm9yVmFsK21haWxWZXJ0aWNhbFVuaXQqeSxtYWlsV2lkdGgsbWFpbEhlaWdodClcclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8g6YGK5oiy6LOH6KiK5Yid5aeL5YyWXHJcbmltcG9ydCB7Z2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGh9IGZyb20gJy4uL2luaXQnXHJcblxyXG5jb25zdCBzdG9uZUltZ1VybCA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL3N0b25lLnBuZ1wiKVxyXG5cclxuY29uc3Qgc3RvbmVJbWdFbGVtZW50ID0gbmV3IEltYWdlKDYwMCk7XHJcbnN0b25lSW1nRWxlbWVudC5zcmM9c3RvbmVJbWdVcmxcclxuLy8g5ZyW54mH6KaB5oiQ5Yqf6K6A5Y+W5b6M5omN6IO95riy5p+TXHJcbnN0b25lSW1nRWxlbWVudC5kZWNvZGUoKS50aGVuKCgpPT57XHJcbiAgICBcclxufSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd1N0b25lKHgseSxjdXJyZW50VGltZXIpe1xyXG4gICAgLy8g5qi555qE5a+sXHJcbiAgICBjb25zdCBzdG9uZVdpZHRoID0gdWlfd2lkdGgvMTc7XHJcbiAgICAvLyDmqLnnmoTpq5hcclxuICAgIGNvbnN0IHN0b25lSGVpZ2h0ID0gdWlfaGVpZ3RoLzQ7XHJcblxyXG4gICAgLy8g5ZyW54mHWOi7uOmWk+malFxyXG4gICAgLy8g5ZyW54mHWei7uOmWk+malFxyXG4gICAgY29uc3Qgc3RvbmVQb3NYVW5pdCA9IHVpX3dpZHRoLzE3OyAgXHJcbiAgICBjb25zdCBzdG9uZVBvc1lVbml0ID0gdWlfaGVpZ3RoLzYtNTtcclxuICAgIGlmKHN0b25lSW1nRWxlbWVudC5jb21wbGV0ZSl7XHJcbiAgICAgICAgLy8g6YGH5Yiw5LiA5YCL5ZWP6aGM77yM5Y6f5pys5piv6YCZ5qijXHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2Uoc3RvbmVJbWdFbGVtZW50LHN0b25lUG9zWFVuaXQqeCxzdG9uZVBvc1lVbml0Knksc3RvbmVXaWR0aCxzdG9uZUhlaWdodClcclxuICAgICAgICAvLyDkvYbmmK/muLLmn5Plh7rkvobnmoTntZDmnpzmmK/og4zmma/kuIDmoLzkuIDmoLzotbDvvIzmiYDku6Ugc3RvbmVQb3NYVW5pdCp4IOaUueaIkCBzdG9uZVBvc1hVbml0Kih4LTEpLXN0b25lUG9zWFVuaXQqKGEqb2JzdGFjbGVTcGVlZClcclxuICAgICAgICAgLy8g5Y6f5pys5q+PMzBGcmFtZeaJjeacg+aPm+S4gOasoeS9jee9riDvvIzmlLnli5Xmr4/mrKHmhaLmhaLmj5tcclxuICAgICAgICBjb25zdCBjaGFuZ2VFdmVyeUZyYW1lID0gY3VycmVudFRpbWVyJTMwKzFcclxuICAgICAgICBnYW1lQ2FudmFzLmRyYXdJbWFnZShzdG9uZUltZ0VsZW1lbnQsKHN0b25lUG9zWFVuaXQpKih4LWNoYW5nZUV2ZXJ5RnJhbWUvMzApLHN0b25lUG9zWVVuaXQqeSxzdG9uZVdpZHRoLHN0b25lSGVpZ2h0KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLy8g6YGK5oiy6LOH6KiK5Yid5aeL5YyWXHJcbmltcG9ydCB7Z2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGh9IGZyb20gJy4uL2luaXQnXHJcblxyXG5jb25zdCB0cmVlSW1nVXJsID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvdHJlZS5wbmdcIilcclxuXHJcbmNvbnN0IHRyZWVJbWdFbGVtZW50ID0gbmV3IEltYWdlKDYwMCk7XHJcbnRyZWVJbWdFbGVtZW50LnNyYz10cmVlSW1nVXJsXHJcbi8vIOWclueJh+imgeaIkOWKn+iugOWPluW+jOaJjeiDvea4suafk1xyXG50cmVlSW1nRWxlbWVudC5kZWNvZGUoKVxyXG4udGhlbigoKSA9PiB7XHJcbiAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZSh0cmVlSW1nRWxlbWVudCx1aV93aWR0aC8xNyo0LHVpX2hlaWd0aC82KjQtMjUsdWlfd2lkdGgvMTgsdWlfaGVpZ3RoLzQpXHJcbn0pLmNhdGNoKChlcnIpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd1RyZWUoeCx5LGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmqLnnmoTlr6xcclxuICAgIGNvbnN0IHRyZWVXaWR0aCA9IHVpX3dpZHRoLzE3O1xyXG4gICAgLy8g5qi555qE6auYXHJcbiAgICBjb25zdCB0cmVlSGVpZ2h0ID0gdWlfaGVpZ3RoLzQ7XHJcblxyXG4gICAgLy8g5ZyW54mHWOi7uOmWk+malFxyXG4gICAgLy8g5ZyW54mHWei7uOmWk+malFxyXG4gICAgY29uc3QgdHJlZVBvc1hVbml0ID0gdWlfd2lkdGgvMTc7ICBcclxuICAgIGNvbnN0IHRyZWVQb3NZVW5pdCA9IHVpX2hlaWd0aC82LTU7XHJcbiAgICBpZih0cmVlSW1nRWxlbWVudC5jb21wbGV0ZSl7XHJcbiAgICAgICAgLy8g6YGH5Yiw5LiA5YCL5ZWP6aGM77yM5Y6f5pys5piv6YCZ5qijXHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2Uoc3RvbmVJbWdFbGVtZW50LHN0b25lUG9zWFVuaXQqeCxzdG9uZVBvc1lVbml0Knksc3RvbmVXaWR0aCxzdG9uZUhlaWdodClcclxuICAgICAgICAvLyDkvYbmmK/muLLmn5Plh7rkvobnmoTntZDmnpzmmK/og4zmma/kuIDmoLzkuIDmoLzotbDvvIzmiYDku6Ugc3RvbmVQb3NYVW5pdCp4IOaUueaIkCBzdG9uZVBvc1hVbml0Kih4LTEpLXN0b25lUG9zWFVuaXQqKGEqb2JzdGFjbGVTcGVlZClcclxuICAgICAgICAgLy8g5Y6f5pys5q+PMzBGcmFtZeaJjeacg+aPm+S4gOasoeS9jee9riDvvIzmlLnli5Xmr4/mrKHmhaLmhaLmj5tcclxuICAgICAgICBjb25zdCBjaGFuZ2VFdmVyeUZyYW1lID0gY3VycmVudFRpbWVyJTMwKzFcclxuICAgICAgICBnYW1lQ2FudmFzLmRyYXdJbWFnZSh0cmVlSW1nRWxlbWVudCx0cmVlUG9zWFVuaXQqKHgtY2hhbmdlRXZlcnlGcmFtZS8zMCksdHJlZVBvc1lVbml0KnksdHJlZVdpZHRoLHRyZWVIZWlnaHQpXHJcbiAgICB9XHJcbn0iLCIvLyDliJ3lp4vlgLxcclxuaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi9pbml0J1xyXG4vLyDpgYrmiLLlvqrnkrBcclxuaW1wb3J0IHtwYXVzZSxzdGFydExvb3B9IGZyb20gJy4vZ2FtZWxvb3AnXHJcbi8vIOWPluW+l+manOekmeeJqea4suafk+eLgOaFi1xyXG5pbXBvcnQge2dldE9ic3RhY2xlU3RhdHVzfSBmcm9tICcuL29ic3RhY2xlL2dhbWVNYXBzJ1xyXG4vLyDkv6Hku7bnibnmlYhcclxuaW1wb3J0IHttYWlsVG91Y2h9IGZyb20gJy4vb2JzdGFjbGUvbWFpbCdcclxuXHJcbi8vIOmBiuaIsuWIhuaVuFxyXG5pbXBvcnQge3BsYXllckRpZUFkZCxwbGF5ZXJNYWlsQWRkfSBmcm9tICcuL2dhbWVCb2FyZCdcclxuXHJcbi8vIOeOqeWutueahOe0oOadkOi3r+W+kVxyXG5jb25zdCBQbGF5ZXJJbWdVcmwgPSByZXF1aXJlKFwiLi9hc3NldHMvaW1hZ2VzL3BsYXllci5wbmdcIilcclxuXHJcbi8vIOS6uueJqeWclueJh+eahOWvrOW6plxyXG5jb25zdCBwbGF5ZXJXaWR0aCA9IHVpX3dpZHRoLzEwO1xyXG4vLyDkurrniannmoTpq5jluqZcclxuY29uc3QgcGxheWVySGVpZ2h0ID0gdWlfaGVpZ3RoKjIuNVxyXG5cclxuLy8g5Z6C55u056e75YuV5Zau5L2NXHJcbmNvbnN0IHZlcnRpY2FsVW5pdCA9IHVpX2hlaWd0aCotMC4wNlxyXG4vLyDnm67liY3nmoTlnoLnm7Tnp7vli5Xph48g56+E5ZyNIDB+NSDliJ3lp4vngroyXHJcbmxldCBjdXJyZW50VmVydGljYWwgPSAyO1xyXG4vLyDmsLTlubPkvY3nva4o5Zu65a6aKVxyXG5jb25zdCBpbml0UG9zWCA9IDM7XHJcbmNvbnN0IFVuaXRXaWR0aCA9IHVpX3dpZHRoLzE3O1xyXG5jb25zdCBob3Jpem9uUG9zID0gVW5pdFdpZHRoKmluaXRQb3NYO1xyXG5cclxuLy8g5ZyW54mH57Sg5p2Q57i95YWx5pyJMTflgIvli5XkvZzvvIzmr4/mrKHlj6rpoa/npLrkuIDlgItcclxuY29uc3QgcGxheWVyUGVyV2lkdGggPSBVbml0V2lkdGggIFxyXG4vLyDmr4/lgIvli5XkvZzplpPmoLxcclxuY29uc3QgdW5pdFZhbCA9IHVpX3dpZHRoLzE3LjM5O1xyXG5cclxuLy8g5Yid5aeL5YyW5ZyW54mH6LyJ5YWlXHJcbmNvbnN0IFBsYXllckltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoNjAwKTtcclxuUGxheWVySW1nRWxlbWVudC5zcmM9UGxheWVySW1nVXJsXHJcbi8vIOWclueJh+imgeaIkOWKn+iugOWPluW+jOaJjeiDvea4suafk1xyXG5QbGF5ZXJJbWdFbGVtZW50LmRlY29kZSgpXHJcbi50aGVuKCgpID0+IHtcclxuICAgIC8vIGdhbWVDYW52YXMuZHJhd0ltYWdlKFBsYXllckltZ0VsZW1lbnQsMCx2ZXJ0aWNhbFVuaXQqY3VycmVudFZlcnRpY2FsLHBsYXllclBlcldpZHRoLHVpX2hlaWd0aCwwLDAscGxheWVyV2lkdGgscGxheWVySGVpZ2h0KVxyXG59KVxyXG5cclxuXHJcbi8vIOaqouafpeaYr+WQpuacieaSnuWIsOadseilv+aIlui2heWHuumCiueVjFxyXG5mdW5jdGlvbiBjaGVja01vdmUoKXtcclxuICAgIC8vIOWeguebtOWkp+Wwj+mZkOWItlxyXG4gICAgbGV0IG1heFZhbCA9IDVcclxuICAgIGxldCBtaW5WYWwgPSAwXHJcbiAgICBpZihjdXJyZW50VmVydGljYWw+bWF4VmFsKXtcclxuICAgICAgICBjdXJyZW50VmVydGljYWwgPSBtYXhWYWxcclxuICAgIH1lbHNlIGlmKGN1cnJlbnRWZXJ0aWNhbDxtaW5WYWwpe1xyXG4gICAgICAgIGN1cnJlbnRWZXJ0aWNhbCA9IG1pblZhbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlKDEpXHJcbiAgICBjb2xsYXBzZSgyKVxyXG59XHJcblxyXG4vLyDnjqnlrrblnKhY5bqn5qiZ5q+U55uu5YmN5L2N572u5aSacG94UGx1cyDmkp7liLDmnbHopb/nmoTkuovku7ZcclxuZnVuY3Rpb24gY29sbGFwc2UocG9zWFBsdXMpe1xyXG4gICAgbGV0IFtmaXJzdEluZGV4LGxhc3RJbmRleCxvYnN0YWNsZUFycmF5XSA9IGdldE9ic3RhY2xlU3RhdHVzKClcclxuICAgIC8vIOacgOW+jOS4gOWIl1xyXG4gICAgY29uc3QgTGFzdENvbGxhcHNlSW5kZXggPSBvYnN0YWNsZUFycmF5Lmxlbmd0aC0xO1xyXG4gICAgLy8g56Kw5pKe5YiX55qESW5kZXhcclxuICAgIGNvbnN0IGNvbGxhcHNlSW5kZXggPSBmaXJzdEluZGV4K2luaXRQb3NYK3Bvc1hQbHVzXHJcbiAgICAvLyDlpoLmnpzkuI3mmK9OYU5cclxuICAgIGlmKGNvbGxhcHNlSW5kZXggPT09IGNvbGxhcHNlSW5kZXggJiYgY29sbGFwc2VJbmRleDw9TGFzdENvbGxhcHNlSW5kZXgpe1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNlVHlwZSA9IG9ic3RhY2xlQXJyYXlbY29sbGFwc2VJbmRleF1bY3VycmVudFZlcnRpY2FsXVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY29sbGFwc2VUeXBlPjEpe1xyXG4gICAgICAgICAgICAvLyDmkq3mlL7njqnlrrbmkp7liLDli5XnlatcclxuICAgICAgICAgICAgcGF1c2UoUGxheWVySnVtcClcclxuICAgICAgICAgICAgLy8g546p5a625q275Lqh57SA6YyEXHJcbiAgICAgICAgICAgIHBsYXllckRpZUFkZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAvLyDmkp7liLDkv6Hku7bpgYrmiLLmmqvlgZzkuIDkuIvvvIzkv6Hku7bmtojlpLFcclxuICAgICAgICBpZihjb2xsYXBzZVR5cGU9PT0xKXtcclxuICAgICAgICAgICAgLy8gZW1haWznorDliLDli5XnlatcclxuICAgICAgICAgICAgbWFpbFRvdWNoKGluaXRQb3NYK3Bvc1hQbHVzLGN1cnJlbnRWZXJ0aWNhbClcclxuICAgICAgICAgICAgLy8g546p5a625Y+W5b6X5L+h5Lu25aKe5YqgXHJcbiAgICAgICAgICAgIHBsYXllck1haWxBZGQoKVxyXG4gICAgICAgICAgICAvLyDog4zmma/mtojlpLFcclxuICAgICAgICAgICAgb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVtjdXJyZW50VmVydGljYWxdID0gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyDlnKgoKHBvc1gscG9zWSkp5bqn5qiZ5piv5ZCm5pKe5YiwXHJcbmZ1bmN0aW9uIGlzQ29sbGFwc2UocG9zWCxwb3NZKXtcclxuICAgIGxldCBbZmlyc3RJbmRleCxsYXN0SW5kZXgsb2JzdGFjbGVBcnJheV0gPSBnZXRPYnN0YWNsZVN0YXR1cygpXHJcbiAgICAgLy8g56Kw5pKe5YiX55qESW5kZXhcclxuICAgICBjb25zdCBjb2xsYXBzZUluZGV4ID0gZmlyc3RJbmRleCtwb3NYXHJcbiAgICAvLyAg5aaC5p6c5LmL5b6M6YO95rKS6Zqc56SZ54mpIOWJh+S4jeacg+aSnuWIsOadseilv1xyXG4gICAgIGlmKGNvbGxhcHNlSW5kZXg+PW9ic3RhY2xlQXJyYXkubGVuZ3RoKXtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgfVxyXG4gICAgLy8gIOWkp+aWvDEg5Luj6KGo5LiN5piv5L+h5Lu2XHJcbiAgICByZXR1cm4gb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XSYmb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVtwb3NZXTw9MVxyXG59XHJcblxyXG4vLyDliJ3lp4vljJblvozlm57lgrPkuYvlvozmm7TmlrDnmoTmlrnlvI9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcihjdXJyZW50VGltZXIpe1xyXG4gICAgY2hlY2tNb3ZlKClcclxuICAgIC8vIOeVtuWJjeWLleS9nOWJquijgVxyXG4gICAgLy8g5YuV5L2c6YOo5pyD6LaF6YGOMTflgIsoMH4xNinvvIzot5HmraXli5XkvZzmmK/nrKw55YCL5YuV5L2c5YiwMTflgIvli5XkvZwoOH4xNilcclxuICAgIGNvbnN0IGN1cnJlbnRBY3Rpb25JbmRleCA9IDgrTWF0aC5mbG9vcihjdXJyZW50VGltZXIvMyklOVxyXG4gICAgY29uc3QgY3V0QWN0aW9uVmFsID0gdW5pdFZhbCpjdXJyZW50QWN0aW9uSW5kZXhcclxuXHJcbiAgICAvLyAvLyDlnJbniYfmnInmiJDlip/oroDlj5bvvIzmiY3nkIbku5ZcclxuICAgIGlmKFBsYXllckltZ0VsZW1lbnQuY29tcGxldGUpe1xyXG4gICAgICAgIC8vIOa4hemZpOeVq+W4g1xyXG4gICAgICAgIC8vIGdhbWVDYW52YXMuY2xlYXJSZWN0KGhvcml6b25Qb3MsdmVydGljYWxVbml0KmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICAgICAgLy8g6YeN5paw57mq6KO9XHJcbiAgICAgICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCxjdXRBY3Rpb25WYWwsdmVydGljYWxVbml0KmN1cnJlbnRWZXJ0aWNhbCxwbGF5ZXJQZXJXaWR0aCx1aV9oZWlndGgsaG9yaXpvblBvcywwLHBsYXllcldpZHRoLHBsYXllckhlaWdodClcclxuICAgICAgICBnYW1lQ2FudmFzLmRyYXdJbWFnZShQbGF5ZXJJbWdFbGVtZW50LGN1dEFjdGlvblZhbCwwLHBsYXllclBlcldpZHRoLHVpX2hlaWd0aCxob3Jpem9uUG9zLCh1aV9oZWlndGgvNi0xMCkqY3VycmVudFZlcnRpY2FsLHBsYXllcldpZHRoLHBsYXllckhlaWdodClcclxuICAgIH1cclxufVxyXG4vLyDlkJHkuIrnp7vli5VcclxuZXhwb3J0IGZ1bmN0aW9uIE1vdmVVcCgpe1xyXG4gICAgLy8g5aaC5p6c56e75YuV5a6M5piv6Zqc56SZ54mpIOS4jee1puS7luenu+WLlVxyXG4gICAgaWYoaXNDb2xsYXBzZShpbml0UG9zWCsxLGN1cnJlbnRWZXJ0aWNhbC0xKSYmaXNDb2xsYXBzZShpbml0UG9zWCxjdXJyZW50VmVydGljYWwtMSkpe1xyXG4gICAgICAgIGN1cnJlbnRWZXJ0aWNhbCAtPSAxXHJcbiAgICB9XHJcbn1cclxuLy8g5ZCR5LiL56e75YuVXHJcbmV4cG9ydCBmdW5jdGlvbiBNb3ZlRG93bigpe1xyXG4gICAgLy8g5aaC5p6c56e75YuV5a6M5piv6Zqc56SZ54mpIOS4jee1puS7luenu+WLlVxyXG4gICAgaWYoaXNDb2xsYXBzZShpbml0UG9zWCsxLGN1cnJlbnRWZXJ0aWNhbCsxKSYmaXNDb2xsYXBzZShpbml0UG9zWCxjdXJyZW50VmVydGljYWwrMSkpe1xyXG4gICAgICAgXHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsICs9IDFcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8g6ZaL5aC05pmC5ZKM5pKe5Yiw5pmC77yM6aas55qE5YmN6IWz5pyD6Lez6LW35L6GXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJKdW1wKFRpbWVyKXtcclxuICAgICAvLyDli5XkvZzpg6jmnIPotoXpgY4xN+WAiygwfjE2Ke+8jOmmrOeahOWJjeiFs+acg+i3s+i1t+S+huWLleS9nOaYr+esrDHlgIvli5XkvZzliLA45YCL5YuV5L2cKDB+NylcclxuICAgIGNvbnN0IGN1cnJlbnRBY3Rpb25JbmRleCA9IE1hdGguZmxvb3IoVGltZXIvMyklOFxyXG4gICAgY29uc3QgY3V0QWN0aW9uVmFsID0gdW5pdFZhbCpjdXJyZW50QWN0aW9uSW5kZXhcclxuICAgIFxyXG4gICAgLy8g55uu5YmN55qE6YCP5piO5bqmXHJcbiAgICBjb25zdCBob3dUcmFuc3BhcmVudCA9IE1hdGguZmxvb3IoVGltZXIvMyklMTArMTtcclxuICAgIGNvbnN0IEFscGhhID0gMS9ob3dUcmFuc3BhcmVudFxyXG4gICAgLy8gLy8g5ZyW54mH5pyJ5oiQ5Yqf6K6A5Y+W77yM5omN55CG5LuWXHJcbiAgICBpZihQbGF5ZXJJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDmuIXpmaTnlavluINcclxuICAgICAgICBnYW1lQ2FudmFzLmNsZWFyUmVjdChob3Jpem9uUG9zLCh1aV9oZWlndGgvNi0xMCkqY3VycmVudFZlcnRpY2FsLHBsYXllcldpZHRoLHVpX2hlaWd0aC80LjQpXHJcbiAgICAgICAgZ2FtZUNhbnZhcy5nbG9iYWxBbHBoYSA9IEFscGhhO1xyXG4gICAgICAgIC8vIOmHjeaWsOe5quijvVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKFBsYXllckltZ0VsZW1lbnQsY3V0QWN0aW9uVmFsLDAscGxheWVyUGVyV2lkdGgsdWlfaGVpZ3RoLGhvcml6b25Qb3MsKHVpX2hlaWd0aC82LTEwKSpjdXJyZW50VmVydGljYWwscGxheWVyV2lkdGgscGxheWVySGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgLy8g5pyA5aSa6LeR5aSa5LmFXHJcbiAgICBsZXQgbWF4VGltZXIgPSAzMFxyXG4gICAgaWYoVGltZXI+bWF4VGltZXIpe1xyXG4gICAgICAgIGdhbWVDYW52YXMuZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIGN1cnJlbnRWZXJ0aWNhbCA9IHNhZmVQb3NZKClcclxuICAgICAgICBzdGFydExvb3AoKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIOeVtuWJjeWIl+WTquijoeaYr+WuieWFqOeahFxyXG5mdW5jdGlvbiBzYWZlUG9zWSgpe1xyXG4gICAgbGV0IFtmaXJzdEluZGV4LGxhc3RJbmRleCxvYnN0YWNsZUFycmF5XSA9IGdldE9ic3RhY2xlU3RhdHVzKClcclxuICAgIC8vIOeisOaSnuWIl+eahEluZGV4XHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4ID0gZmlyc3RJbmRleCtpbml0UG9zWCsxXHJcbiAgICBjb25zdCBjb2xsYXBzZUluZGV4MiA9IGZpcnN0SW5kZXgraW5pdFBvc1grMlxyXG5cclxuICAgIC8vIOacquS+huacg+mBh+WIsOeahOWFqeWIl1xyXG4gICAgY29uc3QgZnV0dXJlQ29sID0gb2JzdGFjbGVBcnJheVtjb2xsYXBzZUluZGV4XVxyXG4gICAgY29uc3QgZnV0dXJlQ29sMiA9IG9ic3RhY2xlQXJyYXlbY29sbGFwc2VJbmRleDJdXHJcbiAgICAvLyDnjqnlrrbmkp7lrozpoK3lvozlj6/ku6XljrvnmoTlnLDmlrlcclxuICAgIGxldCByZXN1bHRDb2wgPSAtMTtcclxuICAgIGZvcihsZXQgaT1mdXR1cmVDb2wubGVuZ3RoLTE7aT49MDtpLS0pe1xyXG4gICAgICAgIC8vIOWIpOaWt+W+jOmdouWFqeWIl+eahOavj+S4gOihjOaYr+WQpuaYr+manOekmeeJqVxyXG4gICAgICAgIGNvbnN0IGZ1dHVyZVR5cGUgPSBmdXR1cmVDb2xbaV1cclxuICAgICAgICBjb25zdCBmdXR1cmVUeXBlMiA9IGZ1dHVyZUNvbDJbaV1cclxuICAgICAgICAvLyDlvozpnaLlhanmoLzlpoLmnpzpg73kuI3mmK/pmpznpJnniakg5a2Y6LW35L6GXHJcbiAgICAgICAgaWYoZnV0dXJlVHlwZTw9MSAmJiBmdXR1cmVUeXBlMjw9MSl7XHJcbiAgICAgICAgICAgIHJlc3VsdENvbCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5rKS5pyJ562U5qGIIOeahOeLgOazgVxyXG4gICAgaWYocmVzdWx0Q29sID09PSAtMSl7XHJcbiAgICAgICAgcmV0dXJuIGZ1dHVyZUNvbC5maW5kSW5kZXgoKGUpPT57ZTw9MX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0Q29sXHJcbn0iLCIvLyDliKTmlrfmmK/lkKbooYzli5Xoo53nva5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xyXG4gICAgY29uc3QgbW9iaWxlRGV2aWNlID0gWydBbmRyb2lkJywgJ3dlYk9TJywgJ2lQaG9uZScsICdpUGFkJywgJ2lQb2QnLCdtYWNvcycsICdCbGFja0JlcnJ5JywgJ1dpbmRvd3MgUGhvbmUnXVxyXG4gICAgXHJcbiAgICBcclxuICAgIGxldCBpc01vYmlsZSA9IG1vYmlsZURldmljZS5zb21lKGUgPT4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChlKSlcclxuICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIOaWsGlQYWTnmoTlubPlj7DkuLogTWFjSW50ZWzvvIzlhbbku5bmlrnms5XmuKzmraXpgZNcclxuICAgIHJldHVybiBpc01vYmlsZSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0ubWF0Y2goJ01hY0ludGVsJylcclxufVxyXG5cclxuLy8g6YCa6YGO5Yik5pa35peL6L2J6KeS5bqm5L6G5Yik5pa35piv5ZCm6LGO5bGP5oiW5qmr5bGPXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJblBob25lKCl7XHJcbiAgICBjb25zdCB3aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcclxuICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXdyYXBwZXInKTtcclxuICAgIGZpeFdpbmRvdyh3aWR0aCxoZWlnaHQsY29udGVudERPTSlcclxuICAgIFxyXG4gICAgLy/moLnmk5rmiYvmqZ/ml4vovYnliKTmlrdcclxuICAgIGNvbnN0IGV2dCA9IFwib25vcmllbnRhdGlvbmNoYW5nZVwiIGluIHdpbmRvdyA/IFwib3JpZW50YXRpb25jaGFuZ2VcIiA6IFwicmVzaXplXCI7IC8v5peL6L2J5LqL5Lu2XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uICgpIHsgLy/kuovku7bnm6Pogb1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2NyZWVuX3dpZHRoID0gd2lkdGg7IC8v5bGP5bmV5a+s5bqmXHJcbiAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gOTAgfHwgd2luZG93Lm9yaWVudGF0aW9uID09PSAtOTApIHsgLy/ml4vovYnliLAgOTAg5oiWIC05MCDluqZcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMSwyKVxyXG4gICAgICAgICAgICBzY3JlZW5fd2lkdGggPSBoZWlnaHQ7IC8v5qmr5Z2qXHJcbiAgICAgICAgICAgIGNvbnRlbnRET00uc3R5bGUud2lkdGggPSAoaGVpZ2h0KSArICdweCc7XHJcbiAgICAgICAgICAgIGNvbnRlbnRET00uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0LzIgKyAncHgnO1xyXG4gICAgICAgICAgICBjb250ZW50RE9NLnN0eWxlLnRvcCA9ICh3aWR0aC1oZWlnaHQvMikvMisncHgnO1xyXG4gICAgICAgICAgICBjb250ZW50RE9NLnN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICAgICAgY29udGVudERPTS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7IC8v5LiN5peL6L2J77ybXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgICAvL+aXi+i9ieWIsDE4MOaIljDluqbvvIzljbPmqavlsY/liLDosY7lsY8gICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaXhXaW5kb3cod2lkdGgsaGVpZ2h0LGNvbnRlbnRET00pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgZmFsc2UpO1xyXG59XHJcbi8vIOmHjeS/rumrmOiIh+WvrFxyXG5mdW5jdGlvbiBmaXhXaW5kb3cod2lkdGgsaGVpZ2h0LGRvbSl7XHJcbiAgICBsZXQgc2NyZWVuX3dpZHRoID0gd2lkdGg7IC8v5bGP5bmV5a+s5bqmXHJcbiAgICBcclxuICAgIGlmICh3aWR0aCA8IGhlaWdodCAmJiB3aWR0aCoyPmhlaWdodCkge1xyXG4gICAgICAgIHNjcmVlbl93aWR0aCA9IGhlaWdodDsgLy/lpoLmnpzmmK/osY7lsY/vvIzpnYjmhJ/nmoTlr6zluqblsLHnrYnmlrzlsY/pq5hcclxuICAgICAgICBkb20uc3R5bGUud2lkdGggPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIGRvbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQvMiArICdweCc7XHJcbiAgICAgICAgZG9tLnN0eWxlLnRvcCA9IChoZWlnaHQpIC8gNCArICdweCc7XHJcbiAgICAgICAgZG9tLnN0eWxlLmxlZnQgPSAwIC0gKGhlaWdodCAtIHdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgICAgIGRvbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICBcclxuICAgIH1lbHNlIGlmKHdpZHRoIDwgaGVpZ2h0ICYmIHdpZHRoKjIgPCBoZWlnaHQpe1xyXG4gICAgICAgIHNjcmVlbl93aWR0aCA9IGhlaWdodDsgLy/lpoLmnpzmmK/osY7lsY/vvIzpnYjmhJ/nmoTlr6zluqblsLHnrYnmlrzlsY/pq5hcclxuICAgICAgICBkb20uc3R5bGUud2lkdGggPSAyKndpZHRoICsgJ3B4JztcclxuICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIGRvbS5zdHlsZS50b3AgPSAoaGVpZ2h0IC0gd2lkdGgpIC8gMiArICdweCc7XHJcbiAgICAgICAgZG9tLnN0eWxlLmxlZnQgPSAwIC0gKHdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgICAgIGRvbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICBcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHdpZHRoPjk5Mil7XHJcbiAgICAgICAgICAgIGRvbS5zdHlsZS50b3AgPSAoaGVpZ2h0LTk5Mi8yKSAvIDIgKyAncHgnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb20uc3R5bGUudG9wID0gKGhlaWdodCAtIHdpZHRoLzIpIC8gMiArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICovXFxuYXVkaW8sXFxuY2FudmFzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxuICogICAgYGVtYCB1bml0cy5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuYTpmb2N1cyB7XFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbiAgLyogMSAqL1xcbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXG4gKi9cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcbmZvcm0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxuICovXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMiAqL1xcbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxuICogICAgYW5kIENocm9tZS5cXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIC8qIDMgKi9cXG4gICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXG4gKi9cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXFxuaW5wdXRbdHlwZT1yZXNldF0sXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogMyAqL1xcbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogNCAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXFxuICovXFxuaW5wdXRbdHlwZT1jaGVja2JveF0sXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxuICAqaGVpZ2h0OiAxM3B4O1xcbiAgLyogMyAqL1xcbiAgKndpZHRoOiAxM3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCxcXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmNocm9tZWZyYW1lIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkOTg2O1xcbn1cXG5cXG4uZ2FtZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogY2FsYyg1MHZ3KTtcXG4gIG1heC13aWR0aDogOTkycHg7XFxuICBtYXgtaGVpZ2h0OiA0OTZweDtcXG4gIGJvcmRlcjogOXB4ICM1ZmE2YWIgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgLmdhbWUtdG9wLXNpemUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS1ib3R0b20tc2l6ZSB7XFxuICBoZWlnaHQ6IDc4JTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgLmdhbWUtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgI2dhbWUtdWkge1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMjIlO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAjZ2FtZS1iZyB7XFxuICB6LWluZGV4OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5iZWZvcmUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDM7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhNGM5O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5iZWZvcmUtY29udGFpbmVyIC5jb250YWluZXJfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmJlZm9yZS1jb250YWluZXIgLmNvbnRhaW5lcl9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6ICMwMjYyNjk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5iZWZvcmUtY29udGFpbmVyIC5jb250YWluZXJfX2NvbnRlbnQgLmNvbnRlbnRfX2J0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDBlYjtcXG4gIGNvbG9yOiAjNjAyY2RhO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmdhbWUtd3JhcHBlciAudHJhbnNpdGlvbi1ub25lIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcbi5nYW1lLXdyYXBwZXIgLnRyYW5zaXRpb24tbm9uZSAuY29udGVudF9fYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBQTtFQUNELFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0NEOztBREVBLHlEQUFBO0FBQ0E7RUFDSSxVQUFBO0FDQ0o7O0FE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QUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QUF0V0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBeVdKOztBQXRXQTtFQUlJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFzV0o7O0FBbldBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBc1dKO0FBcldJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXVXUjtBQXRXUTtFQUNJLFlBQUE7QUF3V1o7QUF0V1E7RUFDSSxXQUFBO0FBd1daO0FBdFdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQXdXWjtBQXRXUTtFQUNJLFVBQUE7RUFDQSxRQUFBO0FBd1daO0FBdFdRO0VBQ0ksVUFBQTtFQUNBLE1BQUE7QUF3V1o7QUFyV0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUF1V1I7QUF0V1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXdXWjtBQXZXWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXlXaEI7QUF2V1k7RUFFSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXdXaEI7QUFuV0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFxV1I7QUFwV1E7RUFDSSxhQUFBO0FBc1daXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcclxcbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvLFxcclxcbmNhbnZhcyxcXHJcXG52aWRlbyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgKmRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgKnpvb206IDE7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXHJcXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXHJcXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxyXFxuICogICAgYGVtYCB1bml0cy5cXHJcXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXHJcXG4gKiAgICB1c2VyIHpvb20uXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxyXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxyXFxuICovXFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXHJcXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAyICovXFxyXFxuICAgICptYXJnaW4tbGVmdDogLTdweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxyXFxuICogICAgYW5kIENocm9tZS5cXHJcXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDMgKi9cXHJcXG4gICAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcclxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXHJcXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcclxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXHJcXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXHJcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXHJcXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxyXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXHJcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxyXFxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcclxcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxyXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXHJcXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXFxyXFxuICAgICp3aWR0aDogMTNweDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcclxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcclxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiBvbiBPUyBYLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXHJcXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxyXFxuICovXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbjo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hyb21lZnJhbWUge1xcclxcbiAgICBtYXJnaW46IDAuMmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbSAwO1xcclxcbn1cIixcIkBpbXBvcnQgJy4vcmVzZXQuc2Nzcyc7XFxyXFxuXFxyXFxuaHRtbCxib2R5e1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5hcHB7XFxyXFxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Q5ODY7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXdyYXBwZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDUwdncpO1xcclxcbiAgICBtYXgtd2lkdGg6IDk5MnB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA0OTZweDtcXHJcXG4gICAgYm9yZGVyOiA5cHggIzVmYTZhYiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLmdhbWUtY29udGFpbmVye1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAuZ2FtZS10b3Atc2l6ZXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZS1ib3R0b20tc2l6ZXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDc4JTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5nYW1lLWl0ZW17XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNnYW1lLXVpe1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICAgICAgdG9wOjIyJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNnYW1lLWJne1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOjA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLmJlZm9yZS1jb250YWluZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAzO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYTRjOTtcXHJcXG4gICAgICAgIC5jb250YWluZXJfX2NvbnRlbnR7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgLmNvbnRlbnRfX3RpdGxle1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDI2MjY5O1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5jb250ZW50X19idG57XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkMGViO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogIzYwMmNkYTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAvLyDmhaLmhaLmtojlpLFcXHJcXG4gICAgLnRyYW5zaXRpb24tbm9uZXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgICAgICAuY29udGVudF9fYnRue1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyDlgJLlh7rpnZzmhYvos4fmupDmqpRcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJ1xyXG5cclxuLy8g6YGK5oiy6LOH6KiK5Yid5aeL5YyWXHJcbmltcG9ydCB7Z2FtZUluaXR9IGZyb20gJy4vaW5pdCdcclxuaW1wb3J0IHtMb29waW5nfSBmcm9tICcuL2dhbWVsb29wJ1xyXG5pbXBvcnQge2lzTW9iaWxlRGV2aWNlLHJvdGF0ZUluUGhvbmV9IGZyb20gJy4vdW50aWwnXHJcbi8vIOWIneWni+WMllxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgLy8gLy8g5YWI5Yik5pa355W25YmN6KOd572uXHJcbiAgICBpZihpc01vYmlsZURldmljZSgpKXtcclxuICAgICAgICByb3RhdGVJblBob25lKClcclxuICAgIH1cclxuICAgIC8vIOmBiuaIsumWi+Wni+eahOaMiemIlVxyXG4gICAgY29uc3Qgc3RhcnRCdG5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0R2FtZUJ0blwiKVxyXG4gICAgLy8g6YGK5oiy6ZaL5aeL5YmN55qE5bCB6Z2iXHJcbiAgICBjb25zdCBiZWZvcmVDb250YWluZXJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWJlZm9yZUdhbWVcIilcclxuICAgIHN0YXJ0QnRuRG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgYmVmb3JlQ29udGFpbmVyRG9tLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLW5vbmVcIilcclxuICAgICAgICBTdGFydFRvUGxheUdhbWUoKVxyXG4gICAgfSxmYWxzZSlcclxuXHJcblxyXG4gICBcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnRUb1BsYXlHYW1lKCl7XHJcbiAgICAvLyDpgYrmiLLliJ3lp4vljJZcclxuICAgIGdhbWVJbml0KClcclxuICAgIC8vIOW+queSsOinuOeZvFxyXG4gICAgTG9vcGluZygpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=