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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\nhtml, body {\n  width: 100%;\n}\n\n.game-wrapper {\n  margin: 0 auto;\n  height: calc(100vw*5/13);\n}\n.game-wrapper .game-container {\n  position: relative;\n  width: 100%;\n  height: inherit;\n}\n.game-wrapper .game-container .game-top-size {\n  height: calc(100vw*5/13);\n}\n.game-wrapper .game-container .game-bottom-size {\n  height: calc(100vw*4/13);\n}\n.game-wrapper .game-container .game-item {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.game-wrapper .game-container #game-ui {\n  z-index: 1;\n  top: calc(100vw*1/13);\n}\n.game-wrapper .game-container #game-bg {\n  z-index: 0;\n  top: 0;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/_reset.scss","webpack://./src/assets/scss/app.scss"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}","@import './reset.scss';\r\n\r\nhtml,body{\r\n    width:100%;\r\n}\r\n\r\n\r\n\r\n.game-wrapper{\r\n    margin: 0 auto;\r\n    height: calc(100vw*5/13);\r\n    .game-container{\r\n        position: relative;\r\n        width: 100%;\r\n        height: inherit;\r\n        .game-top-size{\r\n            height: calc(100vw*5/13);\r\n        }\r\n        .game-bottom-size{\r\n            height: calc(100vw*4/13);\r\n        }\r\n        .game-item{\r\n            width: 100%;\r\n            position: absolute;\r\n            top: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            left: 0;\r\n        }\r\n        #game-ui{\r\n            z-index: 1;\r\n            top:calc(100vw*1/13);\r\n            \r\n        }\r\n        #game-bg{\r\n            z-index: 0;\r\n            top:0;\r\n        }\r\n    }\r\n}\r\n    \r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ }),

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
// 每個靜態資源編譯後路徑
const skyImgUrl = __webpack_require__(/*! ./assets/images/sky.jpg */ "./src/assets/images/sky.jpg")
const mountainImgUrl = __webpack_require__(/*! ./assets/images/mountain.png */ "./src/assets/images/mountain.png")
const groundImgUrl = __webpack_require__(/*! ./assets/images/ground.jpg */ "./src/assets/images/ground.jpg")



// 背景元素 包含 背景地板 背景山 背景天空
class BackgroundElement{
    constructor(imgUrl,initX,initY, width, height,canvas,mul=1){
        this.image = ""
        this.imgUrl = imgUrl
        this.initX = initX;
        this.initY = initY;
        this.width =width;
        this.height = height;
        this.canvas = canvas
        this.mul=mul
    }
    init(){
        // 下面有特別需求，要避免this跑掉
        const self = this;
        // 背景路徑
        const ImgUrl = self.imgUrl
       
        // 背景圖片容器生成
        const BgGroundImg = new Image(this.width);
        // 圖片載入後才能成功繪製
        BgGroundImg.onload = function(){
            self.image = BgGroundImg
            // 初次載入直接渲染
            self.render(0)
        }
        // 把圖片裝進容器
        BgGroundImg.src = ImgUrl 
        self.image = BgGroundImg
    }
    // 繪製背景 => 帶入當前遊戲時間軸
    render(currentTimer){
        // 如果 圖片成功載入 繪製成canvas
        if(this.image.complete){
            // 三個背景連接 動起來不會斷
            if(this.mul >1){
                // 為了讓ground背景完整呈現，不被裁切
                // 因為一次只顯示一半清楚的背景 所以狀比較多背景元素
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer+this.width/2,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer+this.width,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer+this.width*3/2,this.initY,this.width,this.height)
                // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer,this.initY,this.width,this.height)
                // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+this.width,this.initY,this.width,this.height)
                // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+2*this.width,this.initY,this.width,this.height)
            }else{
                this.canvas.drawImage(this.image,this.initX-currentTimer,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX-currentTimer+this.width,this.initY,this.width, this.height)
                this.canvas.drawImage(this.image,this.initX-currentTimer+2*this.width,this.initY,this.width, this.height)
            }
        }
    }
}



// 天空的背景
let skyBg;
// 山的背景
let mountainBg;
// 地板的背景
let groundBg;

// 參數 畫布高寬與 canvas上下文
function bgInit(cvs_width,cvs_height,gameBgCanvas){

    // 定義背景元素
    skyBg = new BackgroundElement(skyImgUrl,0,0,cvs_width, cvs_height*2/10,gameBgCanvas)
    mountainBg = new BackgroundElement(mountainImgUrl,0,cvs_height*1/20,cvs_width, cvs_height*2/10,gameBgCanvas)
    groundBg = new BackgroundElement(groundImgUrl,0,cvs_height*5/20,cvs_width, cvs_height,gameBgCanvas,2.7)
    // 初次繪製 
    skyBg.init()
    mountainBg.init()
    groundBg.init()
}

// 參數 畫布高寬與 canvas上下文
function bgUpdate(cvs_width,cvs_height,gameBgCanvas,currentTimer){
    // 每個背景元素的速度 備註：天空跑超慢  山有點慢  地板元素稍微快一點
    const skySpeed = currentTimer/3;
    const mountainSpeed = currentTimer*2/3;
    const groundSpeed = currentTimer;
    // 清除背景畫布
    gameBgCanvas.clearRect(0,0,cvs_width, cvs_height)
    
    
    // 重新渲染 帶入的數字不能超過背景寬度 所以用餘數
    skyBg.render(skySpeed%cvs_width)
    mountainBg.render(mountainSpeed%cvs_width)
    groundBg.render(groundSpeed%cvs_width)
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

// 遊戲資訊初始化
// import {init} from './init';

// 背景初始化與更新





//  遊戲時間軸
let currentTimer = 0; 

//是否暫停
let isLooping = true;

// 無限迴圈
function Looping(){
    if(isLooping){
        // 遊戲進程加一
        currentTimer+=2;
        // 清空畫布
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.clearRect(0,0,_init__WEBPACK_IMPORTED_MODULE_0__.ui_width,_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth)
        // 背景渲染更新
        ;(0,_background__WEBPACK_IMPORTED_MODULE_1__.bgUpdate)(_init__WEBPACK_IMPORTED_MODULE_0__.bg_width,_init__WEBPACK_IMPORTED_MODULE_0__.bg_height,_init__WEBPACK_IMPORTED_MODULE_0__.gameBgCanvas,currentTimer)
      
        // 更新玩家資訊
        ;(0,_player__WEBPACK_IMPORTED_MODULE_2__.updatePlayer)(currentTimer)
          // 渲染 障礙物
        // 希望障礙物慢10倍
        ;(0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__.drawObstacleToMap)(Math.floor(currentTimer*_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_3__.obstacleSpeed))
    }
    // 持續更新觸發
    // requestAnimationFrame(Looping)
}
// 暫停遊戲
function pause(){
    isLooping = false;
}
// 繼續遊戲
function startLoop(){
    isLooping = true
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
/* harmony import */ var _obstacle_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle/mail */ "./src/obstacle/mail.js");

// 背景初始化



// 利用canvas ID 取得 DOM 和 cavans
function getCanvasAndContextById(id){
    const dom =document.querySelector('#'+ id);
    if(dom.getContext){
        const ctx = dom.getContext('2d');
        return[dom, ctx];
    }else{
        console.error("不支援canvas")
    }
}


// UICanvas // 遊戲的人物障礙物ˋ信封 畫布
const [gameDom,gameCanvas] = getCanvasAndContextById('game-ui')
// 背景Canvas // 遊戲背景 畫布
const [gameBgDom,gameBgCanvas] = getCanvasAndContextById('game-bg')
const ui_width = gameDom.width;
const ui_heigth = gameDom.height;

// 背景畫布寬度高度
const bg_width = gameBgDom.width;
const bg_height = gameBgDom.height;

// 遊戲初始化方法
function gameInit(){
    // 背景渲染
    (0,_background__WEBPACK_IMPORTED_MODULE_0__.bgInit)(bg_width,bg_height,gameBgCanvas)
    // drawMail(gameCanvas)
}

// 遊戲的所有資訊


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
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail */ "./src/obstacle/mail.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ "./src/obstacle/tree.js");
/* harmony import */ var _stone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stone */ "./src/obstacle/stone.js");
// 地圖 寬17個玩家的寬(0~16)  高6條小路(0~5)
// 玩家的位置

// 信箱繪製方法




// 障礙物數度慢十倍
const obstacleSpeed = 1/30
//障礙物Array 
// 1是mail
const obstacleArray = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,3,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,3,0,0,0],
    [0,3,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,3],
    [0,0,2,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,2,0,0],
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,2,1,0],
    [0,0,1,0,1,0],
    [0,3,1,0,1,0],
    [0,0,1,0,1,0], 
    [3,0,0,2,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [3,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,2,0,3],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [3,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [3,0,0,2,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,2,0,3],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [3,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [3,0,0,2,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,2,1,0,1,0],
    [0,0,1,0,1,0],  
    [3,2,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,3,1,0],  
    [3,0,0,0,0,0],
    [0,2,1,2,0,0],
    [0,3,1,2,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,2,1,0],  
    [0,0,2,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,0,0,0],
    [0,0,1,2,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,2,1,0],     
]

// 目前障礙物的初始列
let firstIndex;
// 障礙物的最後列
let lastIndex;


// 障礙物繪製
function drawObstacleToMap(currentTimer){
    // obstacleArray的大小
    let obstacleLength = obstacleArray.length
    // 如果跑完了 不用渲染
    if(currentTimer>obstacleLength){
        return ;
    }
    // obstacleArray在地圖的第一列
    firstIndex = currentTimer
    // 地圖最後一列
    lastIndex = (currentTimer+17>obstacleLength)?obstacleLength:currentTimer+17

    for(let i=firstIndex; i<lastIndex; i++){
        // 每一列的障礙物
        const perObstacleArray = obstacleArray[i]
        perObstacleArray.forEach((type,index)=>{
            // type === 是信封 type === 2是樹 type === 3是石頭
            if(type===1){
                (0,_mail__WEBPACK_IMPORTED_MODULE_0__.drawMail)(i-firstIndex,index,currentTimer)
            }else if(type===2){
                (0,_tree__WEBPACK_IMPORTED_MODULE_1__.drawTree)(i-firstIndex,index,currentTimer)
            }else if(type===3){
                (0,_stone__WEBPACK_IMPORTED_MODULE_2__.drawStone)(i-firstIndex,index)
            }
        })
    }
}

// 取得障礙物渲染狀態
function getObstacleStatus(){
    return [firstIndex,lastIndex,obstacleArray]
}



/***/ }),

/***/ "./src/obstacle/mail.js":
/*!******************************!*\
  !*** ./src/obstacle/mail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawMail": () => (/* binding */ drawMail)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init */ "./src/init.js");

// 信封的素材路徑
const mailImgUrl = __webpack_require__(/*! ../assets/images/mail.png */ "./src/assets/images/mail.png")

// 圖片高寬度
let mailWidth;
let mailHeight;
// 圖片剪裁高寬
let mailCutWidth;
let mailCutHeight

// 每次移動的間閣單位

// 背景圖片容器生成
const mailImg = new Image(500);
// 把圖片裝進容器
mailImg.src = mailImgUrl 

// 圖片要成功讀取後才能渲染
mailImg.decode()
.then(() => {
    mailWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/20;
    mailHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/2;
    mailCutWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/34;
    mailCutHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/6;
    
    // gameCanvas.drawImage(mailImg,0,0,mailCutWidth,mailCutHeight,ui_width/17*3,0,mailWidth,mailHeight)
})

function drawMail(x,y,currentTimer){
    // 每個動作間格
    const unitVal = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/33.3;
    // 信件上下移動單位
    const mailVerticalUnit = 470/5
    // 信件左右移動間格
    // const horizonPosUnit = ui_width/17;
    const horizonPosUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17
    
    
    const mailActionIndex = (currentTimer*3)%15;
    
    if(mailImg.complete){
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(mailImg,unitVal*mailActionIndex,0,mailCutWidth,mailCutHeight,horizonPosUnit*x,10+mailVerticalUnit*y,mailWidth,mailHeight)
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


const stoneImgUrl = __webpack_require__(/*! ../assets/images/stone.png */ "./src/assets/images/stone.png")

const stoneImgElement = new Image(600);
stoneImgElement.src=stoneImgUrl
// 圖片要成功讀取後才能渲染
stoneImgElement.decode()
.then(() => {
    _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(stoneImgElement,_init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17*4,_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/6*4-25,_init__WEBPACK_IMPORTED_MODULE_0__.ui_width/18,_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/4)
}).catch((err)=>{
    console.log(err)
})

function drawStone(x,y){
    // 樹的寬
    const stoneWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17;
    // 樹的高
    const stoneHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/4;

    // 圖片X軸間隔
    // 圖片Y軸間隔
    const stonePosXUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17;  
    const stonePosYUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/6-5;
    if(stoneImgElement.complete){
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
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


const treeImgUrl = __webpack_require__(/*! ../assets/images/tree.png */ "./src/assets/images/tree.png")

const treeImgElement = new Image(600);
treeImgElement.src=treeImgUrl
// 圖片要成功讀取後才能渲染
treeImgElement.decode()
.then(() => {
    // gameCanvas.drawImage(treeImgElement,ui_width/17*4,ui_heigth/6*4-25,ui_width/18,ui_heigth/4)
}).catch((err)=>{
    console.log(err)
})

function drawTree(x,y){
    // 樹的寬
    const treeWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17;
    // 樹的高
    const treeHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/4;

    // 圖片X軸間隔
    // 圖片Y軸間隔
    const treePosXUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17;  
    const treePosYUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth/6-5;
    if(treeImgElement.complete){
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(treeImgElement,treePosXUnit*x,treePosYUnit*y,treeWidth,treeHeight)
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
/* harmony export */   "MoveDown": () => (/* binding */ MoveDown)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacle/gameMaps */ "./src/obstacle/gameMaps.js");
// 初始值

// 遊戲循環

// 取得障礙物渲染狀態


// 玩家的素材路徑
const PlayerImgUrl = __webpack_require__(/*! ./assets/images/player.png */ "./src/assets/images/player.png")

// 人物圖片的寬度
const playerWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/10;
// 人物的高度
const playerHeight = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth*2.5

// 垂直移動單位
const verticalUnit = _init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth*-0.06
// 目前的垂直移動量 範圍 0~5 初始為2
let currentVertical = 1;
// 水平位置(固定)
const initPosX = 3;
const UnitWidth = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17;
const horizonPos = UnitWidth*initPosX;

// 圖片素材總共有17個動作，每次只顯示一個
const playerPerWidth = UnitWidth   
const PlayerImgElement = new Image(600);
PlayerImgElement.src=PlayerImgUrl
// 圖片要成功讀取後才能渲染
PlayerImgElement.decode()
.then(() => {
    // gameCanvas.drawImage(PlayerImgElement,0,verticalUnit*currentVertical,playerPerWidth,ui_heigth,0,0,playerWidth,playerHeight)
})

// 檢查是否有撞到東西或超出邊界
function checkMove(){
    // 垂直大小限制
    let maxVal = 5
    let minVal = 0
    if(currentVertical>maxVal){
        currentVertical = maxVal
    }else if(currentVertical<minVal){
        currentVertical = minVal
    }
    collapse()
}

// 玩家撞到東西
function collapse(){
    let [firstIndex,lastIndex,obstacleArray] = (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__.getObstacleStatus)()
    // 最後一列
    const LastCollapseIndex = obstacleArray.length-1;
    // 碰撞列的Index
    const collapseIndex = firstIndex+initPosX+1
    // 如果不是NaN
    if(collapseIndex === collapseIndex && collapseIndex<=LastCollapseIndex){
        const collapseType = obstacleArray[collapseIndex][currentVertical]
        // 撞到信件遊戲暫停一下，信件消失
        if(collapseType!==0){
            (0,_gameloop__WEBPACK_IMPORTED_MODULE_1__.pause)()
            obstacleArray[collapseIndex][currentVertical] = 0
        }
    }
}
// 在((posX,posY))座標是否撞到
function isCollapse(posX,posY){
    let [firstIndex,lastIndex,obstacleArray] = (0,_obstacle_gameMaps__WEBPACK_IMPORTED_MODULE_2__.getObstacleStatus)()
     // 碰撞列的Index
     const collapseIndex = firstIndex+posX
    //  如果之後都沒障礙物 則不會撞到東西
     if(collapseIndex>=obstacleArray.length){
         return true;
     }

    return obstacleArray[collapseIndex][posY]===0
}

// 初始化後回傳之後更新的方式
function updatePlayer(currentTimer){
    checkMove()
    // 每個動作間格
    const unitVal = _init__WEBPACK_IMPORTED_MODULE_0__.ui_width/17.39;
    // 當前動作剪裁
    // 動作部會超過17個(0~16)，跑步動作是第9個動作到17個動作(8~16)
    const currentActionIndex = 8+Math.floor(currentTimer/3)%9
    const cutActionVal = unitVal*currentActionIndex

    // // 圖片有成功讀取，才理他
    if(PlayerImgElement.complete){
        // 清除畫布
        // gameCanvas.clearRect(horizonPos,verticalUnit*currentVertical,playerWidth,playerHeight)
        // 重新繪製
        _init__WEBPACK_IMPORTED_MODULE_0__.gameCanvas.drawImage(PlayerImgElement,cutActionVal,verticalUnit*currentVertical,playerPerWidth,_init__WEBPACK_IMPORTED_MODULE_0__.ui_heigth,horizonPos,0,playerWidth,playerHeight)
    }
}
// 向上移動
function MoveUp(){
    // 如果移動完是障礙物 不給他移動
    if(isCollapse(initPosX+1,currentVertical-1)){
        currentVertical -= 1
    }
}
// 向下移動
function MoveDown(){
    // 如果移動完是障礙物 不給他移動
    if(isCollapse(initPosX+1,currentVertical+1)){
        currentVertical += 1
    }
    
}




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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
// 倒出靜態資源檔


// 遊戲資訊初始化




// 初始化
window.onload = () => {
    // 遊戲初始化
    (0,_init__WEBPACK_IMPORTED_MODULE_1__.gameInit)()
    // 循環觸發
    ;(0,_gameloop__WEBPACK_IMPORTED_MODULE_2__.Looping)()

    // dom的監聽
    const TopBtn = document.querySelector("#topBtn")
    const BottomBtn = document.querySelector("#bottomBtn")
    const keepBtn = document.querySelector("#startLoop")
    TopBtn.addEventListener("click",()=>{
        ;(0,_player__WEBPACK_IMPORTED_MODULE_3__.MoveUp)()
    },false)
    BottomBtn.addEventListener("click",()=>{
        ;(0,_player__WEBPACK_IMPORTED_MODULE_3__.MoveDown)()
    },false)
    keepBtn.addEventListener('click',()=>{
        console.log("繼續")
        ;(0,_gameloop__WEBPACK_IMPORTED_MODULE_2__.startLoop)()
    })
}



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3M/ZWI0ZSIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvb2JzdGFjbGUvZ2FtZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvb2JzdGFjbGUvbWFpbC5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS9zdG9uZS5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9vYnN0YWNsZS90cmVlLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxraUJBQWtpQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLHdFQUF3RSxlQUFlLEdBQUcsaUpBQWlKLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxXQUFXLDhCQUE4QixzQkFBc0IsR0FBRyxrTkFBa04sNkJBQTZCLDBCQUEwQixHQUFHLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxpQ0FBaUMsNEJBQTRCLEdBQUcsY0FBYyxtQkFBbUIsd0JBQXdCLHFCQUFxQixHQUFHLGtIQUFrSCwwQkFBMEIscUJBQXFCLGFBQWEsb0JBQW9CLEdBQUcsc0pBQXNKLGtCQUFrQixjQUFjLEdBQUcsZ0lBQWdJLGtCQUFrQixHQUFHLHlOQUF5TixvQkFBb0IsOENBQThDLDBDQUEwQyxjQUFjLDhGQUE4Rix5QkFBeUIsR0FBRywrR0FBK0csZUFBZSxHQUFHLCtJQUErSSxjQUFjLCtDQUErQyxjQUFjLDRGQUE0RixjQUFjLEdBQUcsa0VBQWtFLGNBQWMsR0FBRywyRUFBMkUsOEJBQThCLGtCQUFrQixtQ0FBbUMsR0FBRyxpTEFBaUwsY0FBYywwQkFBMEIsd0JBQXdCLGtDQUFrQyxjQUFjLHNRQUFzUSxvQkFBb0IseUJBQXlCLHdDQUF3Qyx1Q0FBdUMsY0FBYyxtSUFBbUksd0JBQXdCLEdBQUcsb1VBQW9VLHlCQUF5QixHQUFHLDJlQUEyZSwrQkFBK0IsK0JBQStCLGtDQUFrQyxjQUFjLHdHQUF3RyxvQkFBb0IsR0FBRyxrUEFBa1AsMkJBQTJCLDBCQUEwQiw2QkFBNkIsNEJBQTRCLGNBQWMsMk5BQTJOLGtDQUFrQyw0Q0FBNEMsb0NBQW9DLHVDQUF1QyxHQUFHLHNNQUFzTSw2QkFBNkIsR0FBRyxxSEFBcUgsY0FBYyxlQUFlLEdBQUcsMElBQTBJLG1CQUFtQixtQ0FBbUMsY0FBYyxrRUFBa0UsOEJBQThCLHNCQUFzQixHQUFHLCtDQUErQyxnQkFBZ0IsR0FBRyxzQkFBc0Isd0JBQXdCLHNCQUFzQixHQUFHLGlCQUFpQix3QkFBd0Isc0JBQXNCLEdBQUcsU0FBUywyQkFBMkIsR0FBRyxjQUFjLGNBQWMsY0FBYyxlQUFlLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLHFCQUFxQixnQkFBZ0IscUJBQXFCLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLG1CQUFtQixtQkFBbUIsNkJBQTZCLEdBQUcsaUNBQWlDLHVCQUF1QixnQkFBZ0Isb0JBQW9CLEdBQUcsZ0RBQWdELDZCQUE2QixHQUFHLG1EQUFtRCw2QkFBNkIsR0FBRyw0Q0FBNEMsZ0JBQWdCLHVCQUF1QixXQUFXLGFBQWEsY0FBYyxZQUFZLEdBQUcsMENBQTBDLGVBQWUsMEJBQTBCLEdBQUcsMENBQTBDLGVBQWUsV0FBVyxHQUFHLE9BQU8saUpBQWlKLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sUUFBUSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLFNBQVMsS0FBSyxRQUFRLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxTQUFTLEtBQUssTUFBTSxXQUFXLE1BQU0sWUFBWSxLQUFLLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sU0FBUyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksTUFBTSxPQUFPLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFB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LCtDQUFRO0FBQ1o7QUFDQSxJQUFJLG1EQUFPOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFNO0FBQ2QsS0FBSztBQUNMO0FBQ0EsUUFBUSxrREFBUTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEscURBQVM7QUFDakIsS0FBSztBQUNMIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKi9cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG4gICp6b29tOiAxO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcXG4gKiAgICBgZW1gIHVuaXRzLlxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcbiAqICAgIHVzZXIgem9vbS5cXG4gKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5hOmZvY3VzIHtcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXI6IDA7XFxuICAvKiAxICovXFxuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxcbiAqL1xcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgbWFyZ2luIGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxuICovXFxuZm9ybSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXFxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm9yZGVyOiAwO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAyICovXFxuICAqbWFyZ2luLWxlZnQ6IC03cHg7XFxuICAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcXG4gKiAgICBhbmQgQ2hyb21lLlxcbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgLyogMyAqL1xcbiAgKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICogNC4gUmVtb3ZlIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXFxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxcbiAqL1xcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcXG5pbnB1dFt0eXBlPXJlc2V0XSxcXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiAzICovXFxuICAqb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiA0ICovXFxufVxcblxcbi8qKlxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxuICovXFxuYnV0dG9uW2Rpc2FibGVkXSxcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXFxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXFxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cXG4gKi9cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi9cXG4gICpoZWlnaHQ6IDEzcHg7XFxuICAvKiAzICovXFxuICAqd2lkdGg6IDEzcHg7XFxuICAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAyICovXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiBvbiBPUyBYLlxcbiAqL1xcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6ICMyMjI7XFxufVxcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uY2hyb21lZnJhbWUge1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdhbWUtd3JhcHBlciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogY2FsYygxMDB2dyo1LzEzKTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIC5nYW1lLXRvcC1zaXplIHtcXG4gIGhlaWdodDogY2FsYygxMDB2dyo1LzEzKTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgLmdhbWUtYm90dG9tLXNpemUge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZ3KjQvMTMpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAjZ2FtZS11aSB7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiBjYWxjKDEwMHZ3KjEvMTMpO1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAjZ2FtZS1iZyB7XFxuICB6LWluZGV4OiAwO1xcbiAgdG9wOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9hcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDRCxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURFQSx5REFBQTtBQUNBO0VBQ0ksVUFBQTtBQ0NKOztBREVBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBOzs7O0VBSUksd0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTs7RUFBQTtBQUlBOzs7RUFHSSxxQkFBQTtHQUNBLGVBQUE7R0FDQSxPQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBOzs7RUFBQTtBQUtBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNESjs7QURJQTs7O0VBQUE7QUFLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTs7Ozs7RUFBQTtBQU9BO0VBQ0ksZUFBQTtFQUFpQixNQUFBO0VBQ2pCLDhCQUFBO0VBQWdDLE1BQUE7RUFDaEMsMEJBQUE7RUFBNEIsTUFBQTtBQ0FoQzs7QURHQTs7RUFBQTtBQUlBO0VBQ0ksb0JBQUE7QUNESjs7QURJQTs7RUFBQTtBQUlBOztFQUVJLFVBQUE7QUNGSjs7QURLQTs7O0VBQUE7QUFLQTtFQUNJLFNBQUE7RUFBVyxNQUFBO0VBQ1gsK0JBQUE7RUFBaUMsTUFBQTtBQ0RyQzs7QURJQTs7RUFBQTtBQUlBO0VBQ0ksU0FBQTtBQ0ZKOztBREtBOztFQUFBO0FBSUE7RUFDSSxTQUFBO0FDSEo7O0FETUE7O0VBQUE7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDSko7O0FET0E7Ozs7RUFBQTtBQU1BO0VBQ0ksU0FBQTtFQUFXLE1BQUE7RUFDWCxVQUFBO0VBQ0EsbUJBQUE7RUFBcUIsTUFBQTtHQUNyQixpQkFBQTtFQUFvQixNQUFBO0FDRnhCOztBREtBOzs7OztFQUFBO0FBT0E7Ozs7RUFJSSxlQUFBO0VBQWlCLE1BQUE7RUFDakIsU0FBQTtFQUFXLE1BQUE7RUFDWCx3QkFBQTtFQUEwQixNQUFBO0dBQzFCLHNCQUFBO0VBQXlCLE1BQUE7QUNDN0I7O0FERUE7OztFQUFBO0FBS0E7O0VBRUksbUJBQUE7QUNBSjs7QURHQTs7Ozs7RUFBQTtBQU9BOztFQUVJLG9CQUFBO0FDREo7O0FESUE7Ozs7Ozs7O0VBQUE7QUFVQTs7OztFQUlJLDBCQUFBO0VBQTRCLE1BQUE7RUFDNUIsZUFBQTtFQUFpQixNQUFBO0dBQ2pCLGlCQUFBO0VBQXFCLE1BQUE7QUNDekI7O0FERUE7O0VBQUE7QUFJQTs7RUFFSSxlQUFBO0FDQUo7O0FER0E7Ozs7O0VBQUE7QUFPQTs7RUFFSSxzQkFBQTtFQUF3QixNQUFBO0VBQ3hCLFVBQUE7RUFBWSxNQUFBO0dBQ1osWUFBQTtFQUFlLE1BQUE7R0FDZixXQUFBO0VBQWMsTUFBQTtBQ0dsQjs7QURBQTs7OztFQUFBO0FBTUE7RUFDSSw2QkFBQTtFQUErQixNQUFBO0VBQy9CLDRCQUFBO0VBQ0EsK0JBQUE7RUFBaUMsTUFBQTtFQUNqQyx1QkFBQTtBQ0lKOztBRERBOzs7RUFBQTtBQUtBOztFQUVJLHdCQUFBO0FDR0o7O0FEQUE7O0VBQUE7QUFJQTs7RUFFSSxTQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBOzs7RUFBQTtBQUtBO0VBQ0ksY0FBQTtFQUFnQixNQUFBO0VBQ2hCLG1CQUFBO0VBQXFCLE1BQUE7QUNHekI7O0FEQUE7O0VBQUE7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTs7Ozs7RUFLSSxXQUFBO0FDRUo7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FBdFdBO0VBQ0ksV0FBQTtBQXlXSjs7QUFwV0E7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7QUF1V0o7QUF0V0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBd1dSO0FBdldRO0VBQ0ksd0JBQUE7QUF5V1o7QUF2V1E7RUFDSSx3QkFBQTtBQXlXWjtBQXZXUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUF5V1o7QUF2V1E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUF5V1o7QUF0V1E7RUFDSSxVQUFBO0VBQ0EsTUFBQTtBQXdXWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cXHJcXG46Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbyxcXHJcXG5jYW52YXMsXFxyXFxudmlkZW8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICp6b29tOiAxO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxyXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxyXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcclxcbiAqICAgIGBlbWAgdW5pdHMuXFxyXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxyXFxuICogICAgdXNlciB6b29tLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTphY3RpdmUsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxyXFxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xcclxcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcclxcbiAqICAgIGFuZCBDaHJvbWUuXFxyXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAzICovXFxyXFxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXHJcXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxyXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXHJcXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxyXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxyXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxyXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcclxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxyXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcclxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcclxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXHJcXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlOyAgLyogNCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcclxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXFxyXFxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG4gICAgKmhlaWdodDogMTNweDsgLyogMyAqL1xcclxcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXHJcXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxyXFxuICogb24gT1MgWC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcclxcbiAqL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNocm9tZWZyYW1lIHtcXHJcXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogMC4yZW0gMDtcXHJcXG59XCIsXCJAaW1wb3J0ICcuL3Jlc2V0LnNjc3MnO1xcclxcblxcclxcbmh0bWwsYm9keXtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmdhbWUtd3JhcHBlcntcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2dyo1LzEzKTtcXHJcXG4gICAgLmdhbWUtY29udGFpbmVye1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICAuZ2FtZS10b3Atc2l6ZXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncqNS8xMyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZS1ib3R0b20tc2l6ZXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncqNC8xMyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZ2FtZS1pdGVte1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjZ2FtZS11aXtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgICAgIHRvcDpjYWxjKDEwMHZ3KjEvMTMpO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2dhbWUtYmd7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMDtcXHJcXG4gICAgICAgICAgICB0b3A6MDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyDmr4/lgIvpnZzmhYvos4fmupDnt6jora/lvozot6/lvpFcclxuY29uc3Qgc2t5SW1nVXJsID0gcmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzL3NreS5qcGcnKVxyXG5jb25zdCBtb3VudGFpbkltZ1VybCA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbi5wbmcnKVxyXG5jb25zdCBncm91bmRJbWdVcmwgPSByZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvZ3JvdW5kLmpwZycpXHJcblxyXG5cclxuXHJcbi8vIOiDjOaZr+WFg+e0oCDljIXlkKsg6IOM5pmv5Zyw5p2/IOiDjOaZr+WxsSDog4zmma/lpKnnqbpcclxuY2xhc3MgQmFja2dyb3VuZEVsZW1lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWdVcmwsaW5pdFgsaW5pdFksIHdpZHRoLCBoZWlnaHQsY2FudmFzLG11bD0xKXtcclxuICAgICAgICB0aGlzLmltYWdlID0gXCJcIlxyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsXHJcbiAgICAgICAgdGhpcy5pbml0WCA9IGluaXRYO1xyXG4gICAgICAgIHRoaXMuaW5pdFkgPSBpbml0WTtcclxuICAgICAgICB0aGlzLndpZHRoID13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xyXG4gICAgICAgIHRoaXMubXVsPW11bFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIOS4i+mdouacieeJueWIpemcgOaxgu+8jOimgemBv+WFjXRoaXPot5HmjolcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyDog4zmma/ot6/lvpFcclxuICAgICAgICBjb25zdCBJbWdVcmwgPSBzZWxmLmltZ1VybFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8g6IOM5pmv5ZyW54mH5a655Zmo55Sf5oiQXHJcbiAgICAgICAgY29uc3QgQmdHcm91bmRJbWcgPSBuZXcgSW1hZ2UodGhpcy53aWR0aCk7XHJcbiAgICAgICAgLy8g5ZyW54mH6LyJ5YWl5b6M5omN6IO95oiQ5Yqf57mq6KO9XHJcbiAgICAgICAgQmdHcm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICAgICAgICAgIC8vIOWIneasoei8ieWFpeebtOaOpea4suafk1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigwKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmiorlnJbniYfoo53pgLLlrrnlmahcclxuICAgICAgICBCZ0dyb3VuZEltZy5zcmMgPSBJbWdVcmwgXHJcbiAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICB9XHJcbiAgICAvLyDnuaroo73og4zmma8gPT4g5bi25YWl55W25YmN6YGK5oiy5pmC6ZaT6Lu4XHJcbiAgICByZW5kZXIoY3VycmVudFRpbWVyKXtcclxuICAgICAgICAvLyDlpoLmnpwg5ZyW54mH5oiQ5Yqf6LyJ5YWlIOe5quijveaIkGNhbnZhc1xyXG4gICAgICAgIGlmKHRoaXMuaW1hZ2UuY29tcGxldGUpe1xyXG4gICAgICAgICAgICAvLyDkuInlgIvog4zmma/pgKPmjqUg5YuV6LW35L6G5LiN5pyD5pa3XHJcbiAgICAgICAgICAgIGlmKHRoaXMubXVsID4xKXtcclxuICAgICAgICAgICAgICAgIC8vIOeCuuS6huiuk2dyb3VuZOiDjOaZr+WujOaVtOWRiOePvu+8jOS4jeiiq+ijgeWIh1xyXG4gICAgICAgICAgICAgICAgLy8g5Zug54K65LiA5qyh5Y+q6aGv56S65LiA5Y2K5riF5qWa55qE6IOM5pmvIOaJgOS7peeLgOavlOi8g+WkmuiDjOaZr+WFg+e0oFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCoxLjM1LHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgvMix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCoxLjM1LHRoaXMuaW5pdFgtY3VycmVudFRpbWVyK3RoaXMud2lkdGgsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqMS4zNSx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoKjMvMix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcix0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLmluaXRYLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCp0aGlzLm11bCx0aGlzLmluaXRYLWN1cnJlbnRUaW1lcit0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KnRoaXMubXVsLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyKzIqdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrMip0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8g5aSp56m655qE6IOM5pmvXHJcbmxldCBza3lCZztcclxuLy8g5bGx55qE6IOM5pmvXHJcbmxldCBtb3VudGFpbkJnO1xyXG4vLyDlnLDmnb/nmoTog4zmma9cclxubGV0IGdyb3VuZEJnO1xyXG5cclxuLy8g5Y+D5pW4IOeVq+W4g+mrmOWvrOiIhyBjYW52YXPkuIrkuIvmlodcclxuZXhwb3J0IGZ1bmN0aW9uIGJnSW5pdChjdnNfd2lkdGgsY3ZzX2hlaWdodCxnYW1lQmdDYW52YXMpe1xyXG5cclxuICAgIC8vIOWumue+qeiDjOaZr+WFg+e0oFxyXG4gICAgc2t5QmcgPSBuZXcgQmFja2dyb3VuZEVsZW1lbnQoc2t5SW1nVXJsLDAsMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQqMi8xMCxnYW1lQmdDYW52YXMpXHJcbiAgICBtb3VudGFpbkJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KG1vdW50YWluSW1nVXJsLDAsY3ZzX2hlaWdodCoxLzIwLGN2c193aWR0aCwgY3ZzX2hlaWdodCoyLzEwLGdhbWVCZ0NhbnZhcylcclxuICAgIGdyb3VuZEJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KGdyb3VuZEltZ1VybCwwLGN2c19oZWlnaHQqNS8yMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLDIuNylcclxuICAgIC8vIOWIneasoee5quijvSBcclxuICAgIHNreUJnLmluaXQoKVxyXG4gICAgbW91bnRhaW5CZy5pbml0KClcclxuICAgIGdyb3VuZEJnLmluaXQoKVxyXG59XHJcblxyXG4vLyDlj4Pmlbgg55Wr5biD6auY5a+s6IiHIGNhbnZhc+S4iuS4i+aWh1xyXG5leHBvcnQgZnVuY3Rpb24gYmdVcGRhdGUoY3ZzX3dpZHRoLGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmr4/lgIvog4zmma/lhYPntKDnmoTpgJ/luqYg5YKZ6Ki777ya5aSp56m66LeR6LaF5oWiICDlsbHmnInpu57mhaIgIOWcsOadv+WFg+e0oOeojeW+ruW/q+S4gOm7nlxyXG4gICAgY29uc3Qgc2t5U3BlZWQgPSBjdXJyZW50VGltZXIvMztcclxuICAgIGNvbnN0IG1vdW50YWluU3BlZWQgPSBjdXJyZW50VGltZXIqMi8zO1xyXG4gICAgY29uc3QgZ3JvdW5kU3BlZWQgPSBjdXJyZW50VGltZXI7XHJcbiAgICAvLyDmuIXpmaTog4zmma/nlavluINcclxuICAgIGdhbWVCZ0NhbnZhcy5jbGVhclJlY3QoMCwwLGN2c193aWR0aCwgY3ZzX2hlaWdodClcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyDph43mlrDmuLLmn5Mg5bi25YWl55qE5pW45a2X5LiN6IO96LaF6YGO6IOM5pmv5a+s5bqmIOaJgOS7peeUqOmkmOaVuFxyXG4gICAgc2t5QmcucmVuZGVyKHNreVNwZWVkJWN2c193aWR0aClcclxuICAgIG1vdW50YWluQmcucmVuZGVyKG1vdW50YWluU3BlZWQlY3ZzX3dpZHRoKVxyXG4gICAgZ3JvdW5kQmcucmVuZGVyKGdyb3VuZFNwZWVkJWN2c193aWR0aClcclxufSIsIlxyXG4vLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuLy8gaW1wb3J0IHtpbml0fSBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RoLGdhbWVCZ0NhbnZhcyxiZ193aWR0aCxiZ19oZWlnaHR9IGZyb20gJy4vaW5pdCdcclxuLy8g6IOM5pmv5Yid5aeL5YyW6IiH5pu05pawXHJcbmltcG9ydCB7YmdVcGRhdGV9IGZyb20gJy4vYmFja2dyb3VuZCdcclxuaW1wb3J0IHt1cGRhdGVQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJ1xyXG5cclxuaW1wb3J0IHtkcmF3T2JzdGFjbGVUb01hcCxvYnN0YWNsZVNwZWVkfSBmcm9tICcuL29ic3RhY2xlL2dhbWVNYXBzJztcclxuXHJcbi8vICDpgYrmiLLmmYLplpPou7hcclxubGV0IGN1cnJlbnRUaW1lciA9IDA7IFxyXG5cclxuLy/mmK/lkKbmmqvlgZxcclxubGV0IGlzTG9vcGluZyA9IHRydWU7XHJcblxyXG4vLyDnhKHpmZDov7TlnIhcclxuZXhwb3J0IGZ1bmN0aW9uIExvb3BpbmcoKXtcclxuICAgIGlmKGlzTG9vcGluZyl7XHJcbiAgICAgICAgLy8g6YGK5oiy6YCy56iL5Yqg5LiAXHJcbiAgICAgICAgY3VycmVudFRpbWVyKz0yO1xyXG4gICAgICAgIC8vIOa4heepuueVq+W4g1xyXG4gICAgICAgIGdhbWVDYW52YXMuY2xlYXJSZWN0KDAsMCx1aV93aWR0aCx1aV9oZWlndGgpXHJcbiAgICAgICAgLy8g6IOM5pmv5riy5p+T5pu05pawXHJcbiAgICAgICAgYmdVcGRhdGUoYmdfd2lkdGgsYmdfaGVpZ2h0LGdhbWVCZ0NhbnZhcyxjdXJyZW50VGltZXIpXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIOabtOaWsOeOqeWutuizh+ioilxyXG4gICAgICAgIHVwZGF0ZVBsYXllcihjdXJyZW50VGltZXIpXHJcbiAgICAgICAgICAvLyDmuLLmn5Mg6Zqc56SZ54mpXHJcbiAgICAgICAgLy8g5biM5pyb6Zqc56SZ54mp5oWiMTDlgI1cclxuICAgICAgICBkcmF3T2JzdGFjbGVUb01hcChNYXRoLmZsb29yKGN1cnJlbnRUaW1lcipvYnN0YWNsZVNwZWVkKSlcclxuICAgIH1cclxuICAgIC8vIOaMgee6jOabtOaWsOinuOeZvFxyXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKExvb3BpbmcpXHJcbn1cclxuLy8g5pqr5YGc6YGK5oiyXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXVzZSgpe1xyXG4gICAgaXNMb29waW5nID0gZmFsc2U7XHJcbn1cclxuLy8g57m857qM6YGK5oiyXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydExvb3AoKXtcclxuICAgIGlzTG9vcGluZyA9IHRydWVcclxufSIsIlxyXG4vLyDog4zmma/liJ3lp4vljJZcclxuaW1wb3J0IHtiZ0luaXR9IGZyb20gJy4vYmFja2dyb3VuZCdcclxuaW1wb3J0IHtkcmF3TWFpbH0gZnJvbSAnLi9vYnN0YWNsZS9tYWlsJ1xyXG5cclxuLy8g5Yip55SoY2FudmFzIElEIOWPluW+lyBET00g5ZKMIGNhdmFuc1xyXG5mdW5jdGlvbiBnZXRDYW52YXNBbmRDb250ZXh0QnlJZChpZCl7XHJcbiAgICBjb25zdCBkb20gPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnKyBpZCk7XHJcbiAgICBpZihkb20uZ2V0Q29udGV4dCl7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gZG9tLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgcmV0dXJuW2RvbSwgY3R4XTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuI3mlK/mj7RjYW52YXNcIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFVJQ2FudmFzIC8vIOmBiuaIsueahOS6uueJqemanOekmeeJqcuL5L+h5bCBIOeVq+W4g1xyXG5jb25zdCBbZ2FtZURvbSxnYW1lQ2FudmFzXSA9IGdldENhbnZhc0FuZENvbnRleHRCeUlkKCdnYW1lLXVpJylcclxuLy8g6IOM5pmvQ2FudmFzIC8vIOmBiuaIsuiDjOaZryDnlavluINcclxuY29uc3QgW2dhbWVCZ0RvbSxnYW1lQmdDYW52YXNdID0gZ2V0Q2FudmFzQW5kQ29udGV4dEJ5SWQoJ2dhbWUtYmcnKVxyXG5jb25zdCB1aV93aWR0aCA9IGdhbWVEb20ud2lkdGg7XHJcbmNvbnN0IHVpX2hlaWd0aCA9IGdhbWVEb20uaGVpZ2h0O1xyXG5cclxuLy8g6IOM5pmv55Wr5biD5a+s5bqm6auY5bqmXHJcbmNvbnN0IGJnX3dpZHRoID0gZ2FtZUJnRG9tLndpZHRoO1xyXG5jb25zdCBiZ19oZWlnaHQgPSBnYW1lQmdEb20uaGVpZ2h0O1xyXG5cclxuLy8g6YGK5oiy5Yid5aeL5YyW5pa55rOVXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lSW5pdCgpe1xyXG4gICAgLy8g6IOM5pmv5riy5p+TXHJcbiAgICBiZ0luaXQoYmdfd2lkdGgsYmdfaGVpZ2h0LGdhbWVCZ0NhbnZhcylcclxuICAgIC8vIGRyYXdNYWlsKGdhbWVDYW52YXMpXHJcbn1cclxuXHJcbi8vIOmBiuaIsueahOaJgOacieizh+ioilxyXG5leHBvcnQge2dhbWVEb20sZ2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGgsZ2FtZUJnRG9tLGdhbWVCZ0NhbnZhcyxiZ193aWR0aCxiZ19oZWlnaHR9IiwiLy8g5Zyw5ZyWIOWvrDE35YCL546p5a6255qE5a+sKDB+MTYpICDpq5g25qKd5bCP6LevKDB+NSlcclxuLy8g546p5a6255qE5L2N572uXHJcblxyXG4vLyDkv6HnrrHnuaroo73mlrnms5VcclxuaW1wb3J0IHtkcmF3TWFpbH0gZnJvbSAnLi9tYWlsJ1xyXG5pbXBvcnQge2RyYXdUcmVlfSBmcm9tICcuL3RyZWUnXHJcbmltcG9ydCB7ZHJhd1N0b25lfSBmcm9tICcuL3N0b25lJ1xyXG5cclxuLy8g6Zqc56SZ54mp5pW45bqm5oWi5Y2B5YCNXHJcbmV4cG9ydCBjb25zdCBvYnN0YWNsZVNwZWVkID0gMS8zMFxyXG4vL+manOekmeeJqUFycmF5IFxyXG4vLyAx5pivbWFpbFxyXG5jb25zdCBvYnN0YWNsZUFycmF5ID0gW1xyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwzLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwzLDAsMCwwXSxcclxuICAgIFswLDMsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDAsMCwzXSxcclxuICAgIFswLDAsMiwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDIsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwzLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSwgXHJcbiAgICBbMywwLDAsMiwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMywwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sICBcclxuICAgIFswLDAsMCwyLDAsM10sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFszLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSwgIFxyXG4gICAgWzMsMCwwLDIsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLCAgXHJcbiAgICBbMCwwLDAsMiwwLDNdLFxyXG4gICAgWzAsMCwxLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMywwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sICBcclxuICAgIFszLDAsMCwyLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwyLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSwgIFxyXG4gICAgWzMsMiwwLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMywxLDBdLCAgXHJcbiAgICBbMywwLDAsMCwwLDBdLFxyXG4gICAgWzAsMiwxLDIsMCwwXSxcclxuICAgIFswLDMsMSwyLDEsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sICBcclxuICAgIFswLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDIsMSwwXSwgIFxyXG4gICAgWzAsMCwyLDAsMCwwXSxcclxuICAgIFswLDAsMSwwLDAsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLCAgXHJcbiAgICBbMCwwLDAsMCwwLDBdLFxyXG4gICAgWzAsMCwxLDIsMCwwXSxcclxuICAgIFswLDAsMSwwLDEsMF0sXHJcbiAgICBbMCwwLDEsMCwxLDBdLFxyXG4gICAgWzAsMCwxLDAsMSwwXSxcclxuICAgIFswLDAsMSwyLDEsMF0sICAgICBcclxuXVxyXG5cclxuLy8g55uu5YmN6Zqc56SZ54mp55qE5Yid5aeL5YiXXHJcbmxldCBmaXJzdEluZGV4O1xyXG4vLyDpmpznpJnniannmoTmnIDlvozliJdcclxubGV0IGxhc3RJbmRleDtcclxuXHJcblxyXG4vLyDpmpznpJnniannuaroo71cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdPYnN0YWNsZVRvTWFwKGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyBvYnN0YWNsZUFycmF555qE5aSn5bCPXHJcbiAgICBsZXQgb2JzdGFjbGVMZW5ndGggPSBvYnN0YWNsZUFycmF5Lmxlbmd0aFxyXG4gICAgLy8g5aaC5p6c6LeR5a6M5LqGIOS4jeeUqOa4suafk1xyXG4gICAgaWYoY3VycmVudFRpbWVyPm9ic3RhY2xlTGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG4gICAgLy8gb2JzdGFjbGVBcnJheeWcqOWcsOWclueahOesrOS4gOWIl1xyXG4gICAgZmlyc3RJbmRleCA9IGN1cnJlbnRUaW1lclxyXG4gICAgLy8g5Zyw5ZyW5pyA5b6M5LiA5YiXXHJcbiAgICBsYXN0SW5kZXggPSAoY3VycmVudFRpbWVyKzE3Pm9ic3RhY2xlTGVuZ3RoKT9vYnN0YWNsZUxlbmd0aDpjdXJyZW50VGltZXIrMTdcclxuXHJcbiAgICBmb3IobGV0IGk9Zmlyc3RJbmRleDsgaTxsYXN0SW5kZXg7IGkrKyl7XHJcbiAgICAgICAgLy8g5q+P5LiA5YiX55qE6Zqc56SZ54mpXHJcbiAgICAgICAgY29uc3QgcGVyT2JzdGFjbGVBcnJheSA9IG9ic3RhY2xlQXJyYXlbaV1cclxuICAgICAgICBwZXJPYnN0YWNsZUFycmF5LmZvckVhY2goKHR5cGUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgIC8vIHR5cGUgPT09IOaYr+S/oeWwgSB0eXBlID09PSAy5piv5qi5IHR5cGUgPT09IDPmmK/nn7PpoK1cclxuICAgICAgICAgICAgaWYodHlwZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgZHJhd01haWwoaS1maXJzdEluZGV4LGluZGV4LGN1cnJlbnRUaW1lcilcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgZHJhd1RyZWUoaS1maXJzdEluZGV4LGluZGV4LGN1cnJlbnRUaW1lcilcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZT09PTMpe1xyXG4gICAgICAgICAgICAgICAgZHJhd1N0b25lKGktZmlyc3RJbmRleCxpbmRleClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWPluW+l+manOekmeeJqea4suafk+eLgOaFi1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzdGFjbGVTdGF0dXMoKXtcclxuICAgIHJldHVybiBbZmlyc3RJbmRleCxsYXN0SW5kZXgsb2JzdGFjbGVBcnJheV1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuLy8g5L+h5bCB55qE57Sg5p2Q6Lev5b6RXHJcbmNvbnN0IG1haWxJbWdVcmwgPSByZXF1aXJlKCcuLi9hc3NldHMvaW1hZ2VzL21haWwucG5nJylcclxuXHJcbi8vIOWclueJh+mrmOWvrOW6plxyXG5sZXQgbWFpbFdpZHRoO1xyXG5sZXQgbWFpbEhlaWdodDtcclxuLy8g5ZyW54mH5Ymq6KOB6auY5a+sXHJcbmxldCBtYWlsQ3V0V2lkdGg7XHJcbmxldCBtYWlsQ3V0SGVpZ2h0XHJcblxyXG4vLyDmr4/mrKHnp7vli5XnmoTplpPplqPllq7kvY1cclxuXHJcbi8vIOiDjOaZr+WclueJh+WuueWZqOeUn+aIkFxyXG5jb25zdCBtYWlsSW1nID0gbmV3IEltYWdlKDUwMCk7XHJcbi8vIOaKiuWclueJh+ijnemAsuWuueWZqFxyXG5tYWlsSW1nLnNyYyA9IG1haWxJbWdVcmwgXHJcblxyXG4vLyDlnJbniYfopoHmiJDlip/oroDlj5blvozmiY3og73muLLmn5NcclxubWFpbEltZy5kZWNvZGUoKVxyXG4udGhlbigoKSA9PiB7XHJcbiAgICBtYWlsV2lkdGggPSB1aV93aWR0aC8yMDtcclxuICAgIG1haWxIZWlnaHQgPSB1aV9oZWlndGgvMjtcclxuICAgIG1haWxDdXRXaWR0aCA9IHVpX3dpZHRoLzM0O1xyXG4gICAgbWFpbEN1dEhlaWdodCA9IHVpX2hlaWd0aC82O1xyXG4gICAgXHJcbiAgICAvLyBnYW1lQ2FudmFzLmRyYXdJbWFnZShtYWlsSW1nLDAsMCxtYWlsQ3V0V2lkdGgsbWFpbEN1dEhlaWdodCx1aV93aWR0aC8xNyozLDAsbWFpbFdpZHRoLG1haWxIZWlnaHQpXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd01haWwoeCx5LGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmr4/lgIvli5XkvZzplpPmoLxcclxuICAgIGNvbnN0IHVuaXRWYWwgPSB1aV93aWR0aC8zMy4zO1xyXG4gICAgLy8g5L+h5Lu25LiK5LiL56e75YuV5Zau5L2NXHJcbiAgICBjb25zdCBtYWlsVmVydGljYWxVbml0ID0gNDcwLzVcclxuICAgIC8vIOS/oeS7tuW3puWPs+enu+WLlemWk+agvFxyXG4gICAgLy8gY29uc3QgaG9yaXpvblBvc1VuaXQgPSB1aV93aWR0aC8xNztcclxuICAgIGNvbnN0IGhvcml6b25Qb3NVbml0ID0gdWlfd2lkdGgvMTdcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBtYWlsQWN0aW9uSW5kZXggPSAoY3VycmVudFRpbWVyKjMpJTE1O1xyXG4gICAgXHJcbiAgICBpZihtYWlsSW1nLmNvbXBsZXRlKXtcclxuICAgICAgICBnYW1lQ2FudmFzLmRyYXdJbWFnZShtYWlsSW1nLHVuaXRWYWwqbWFpbEFjdGlvbkluZGV4LDAsbWFpbEN1dFdpZHRoLG1haWxDdXRIZWlnaHQsaG9yaXpvblBvc1VuaXQqeCwxMCttYWlsVmVydGljYWxVbml0KnksbWFpbFdpZHRoLG1haWxIZWlnaHQpXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIOmBiuaIsuizh+ioiuWIneWni+WMllxyXG5pbXBvcnQge2dhbWVDYW52YXMsdWlfd2lkdGgsdWlfaGVpZ3RofSBmcm9tICcuLi9pbml0J1xyXG5cclxuY29uc3Qgc3RvbmVJbWdVcmwgPSByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9zdG9uZS5wbmdcIilcclxuXHJcbmNvbnN0IHN0b25lSW1nRWxlbWVudCA9IG5ldyBJbWFnZSg2MDApO1xyXG5zdG9uZUltZ0VsZW1lbnQuc3JjPXN0b25lSW1nVXJsXHJcbi8vIOWclueJh+imgeaIkOWKn+iugOWPluW+jOaJjeiDvea4suafk1xyXG5zdG9uZUltZ0VsZW1lbnQuZGVjb2RlKClcclxuLnRoZW4oKCkgPT4ge1xyXG4gICAgZ2FtZUNhbnZhcy5kcmF3SW1hZ2Uoc3RvbmVJbWdFbGVtZW50LHVpX3dpZHRoLzE3KjQsdWlfaGVpZ3RoLzYqNC0yNSx1aV93aWR0aC8xOCx1aV9oZWlndGgvNClcclxufSkuY2F0Y2goKGVycik9PntcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3RvbmUoeCx5KXtcclxuICAgIC8vIOaoueeahOWvrFxyXG4gICAgY29uc3Qgc3RvbmVXaWR0aCA9IHVpX3dpZHRoLzE3O1xyXG4gICAgLy8g5qi555qE6auYXHJcbiAgICBjb25zdCBzdG9uZUhlaWdodCA9IHVpX2hlaWd0aC80O1xyXG5cclxuICAgIC8vIOWclueJh1jou7jplpPpmpRcclxuICAgIC8vIOWclueJh1nou7jplpPpmpRcclxuICAgIGNvbnN0IHN0b25lUG9zWFVuaXQgPSB1aV93aWR0aC8xNzsgIFxyXG4gICAgY29uc3Qgc3RvbmVQb3NZVW5pdCA9IHVpX2hlaWd0aC82LTU7XHJcbiAgICBpZihzdG9uZUltZ0VsZW1lbnQuY29tcGxldGUpe1xyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKHN0b25lSW1nRWxlbWVudCxzdG9uZVBvc1hVbml0Kngsc3RvbmVQb3NZVW5pdCp5LHN0b25lV2lkdGgsc3RvbmVIZWlnaHQpXHJcbiAgICB9XHJcbn0iLCIvLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuaW1wb3J0IHtnYW1lQ2FudmFzLHVpX3dpZHRoLHVpX2hlaWd0aH0gZnJvbSAnLi4vaW5pdCdcclxuXHJcbmNvbnN0IHRyZWVJbWdVcmwgPSByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy90cmVlLnBuZ1wiKVxyXG5cclxuY29uc3QgdHJlZUltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoNjAwKTtcclxudHJlZUltZ0VsZW1lbnQuc3JjPXRyZWVJbWdVcmxcclxuLy8g5ZyW54mH6KaB5oiQ5Yqf6K6A5Y+W5b6M5omN6IO95riy5p+TXHJcbnRyZWVJbWdFbGVtZW50LmRlY29kZSgpXHJcbi50aGVuKCgpID0+IHtcclxuICAgIC8vIGdhbWVDYW52YXMuZHJhd0ltYWdlKHRyZWVJbWdFbGVtZW50LHVpX3dpZHRoLzE3KjQsdWlfaGVpZ3RoLzYqNC0yNSx1aV93aWR0aC8xOCx1aV9oZWlndGgvNClcclxufSkuY2F0Y2goKGVycik9PntcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3VHJlZSh4LHkpe1xyXG4gICAgLy8g5qi555qE5a+sXHJcbiAgICBjb25zdCB0cmVlV2lkdGggPSB1aV93aWR0aC8xNztcclxuICAgIC8vIOaoueeahOmrmFxyXG4gICAgY29uc3QgdHJlZUhlaWdodCA9IHVpX2hlaWd0aC80O1xyXG5cclxuICAgIC8vIOWclueJh1jou7jplpPpmpRcclxuICAgIC8vIOWclueJh1nou7jplpPpmpRcclxuICAgIGNvbnN0IHRyZWVQb3NYVW5pdCA9IHVpX3dpZHRoLzE3OyAgXHJcbiAgICBjb25zdCB0cmVlUG9zWVVuaXQgPSB1aV9oZWlndGgvNi01O1xyXG4gICAgaWYodHJlZUltZ0VsZW1lbnQuY29tcGxldGUpe1xyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKHRyZWVJbWdFbGVtZW50LHRyZWVQb3NYVW5pdCp4LHRyZWVQb3NZVW5pdCp5LHRyZWVXaWR0aCx0cmVlSGVpZ2h0KVxyXG4gICAgfVxyXG59IiwiLy8g5Yid5aeL5YC8XHJcbmltcG9ydCB7Z2FtZUNhbnZhcyx1aV93aWR0aCx1aV9oZWlndGh9IGZyb20gJy4vaW5pdCdcclxuLy8g6YGK5oiy5b6q55KwXHJcbmltcG9ydCB7cGF1c2Usc3RhcnRMb29wfSBmcm9tICcuL2dhbWVsb29wJ1xyXG4vLyDlj5blvpfpmpznpJnnianmuLLmn5Pni4DmhYtcclxuaW1wb3J0IHtnZXRPYnN0YWNsZVN0YXR1c30gZnJvbSAnLi9vYnN0YWNsZS9nYW1lTWFwcydcclxuXHJcbi8vIOeOqeWutueahOe0oOadkOi3r+W+kVxyXG5jb25zdCBQbGF5ZXJJbWdVcmwgPSByZXF1aXJlKFwiLi9hc3NldHMvaW1hZ2VzL3BsYXllci5wbmdcIilcclxuXHJcbi8vIOS6uueJqeWclueJh+eahOWvrOW6plxyXG5jb25zdCBwbGF5ZXJXaWR0aCA9IHVpX3dpZHRoLzEwO1xyXG4vLyDkurrniannmoTpq5jluqZcclxuY29uc3QgcGxheWVySGVpZ2h0ID0gdWlfaGVpZ3RoKjIuNVxyXG5cclxuLy8g5Z6C55u056e75YuV5Zau5L2NXHJcbmNvbnN0IHZlcnRpY2FsVW5pdCA9IHVpX2hlaWd0aCotMC4wNlxyXG4vLyDnm67liY3nmoTlnoLnm7Tnp7vli5Xph48g56+E5ZyNIDB+NSDliJ3lp4vngroyXHJcbmxldCBjdXJyZW50VmVydGljYWwgPSAxO1xyXG4vLyDmsLTlubPkvY3nva4o5Zu65a6aKVxyXG5jb25zdCBpbml0UG9zWCA9IDM7XHJcbmNvbnN0IFVuaXRXaWR0aCA9IHVpX3dpZHRoLzE3O1xyXG5jb25zdCBob3Jpem9uUG9zID0gVW5pdFdpZHRoKmluaXRQb3NYO1xyXG5cclxuLy8g5ZyW54mH57Sg5p2Q57i95YWx5pyJMTflgIvli5XkvZzvvIzmr4/mrKHlj6rpoa/npLrkuIDlgItcclxuY29uc3QgcGxheWVyUGVyV2lkdGggPSBVbml0V2lkdGggICBcclxuY29uc3QgUGxheWVySW1nRWxlbWVudCA9IG5ldyBJbWFnZSg2MDApO1xyXG5QbGF5ZXJJbWdFbGVtZW50LnNyYz1QbGF5ZXJJbWdVcmxcclxuLy8g5ZyW54mH6KaB5oiQ5Yqf6K6A5Y+W5b6M5omN6IO95riy5p+TXHJcblBsYXllckltZ0VsZW1lbnQuZGVjb2RlKClcclxuLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gZ2FtZUNhbnZhcy5kcmF3SW1hZ2UoUGxheWVySW1nRWxlbWVudCwwLHZlcnRpY2FsVW5pdCpjdXJyZW50VmVydGljYWwscGxheWVyUGVyV2lkdGgsdWlfaGVpZ3RoLDAsMCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbn0pXHJcblxyXG4vLyDmqqLmn6XmmK/lkKbmnInmkp7liLDmnbHopb/miJbotoXlh7rpgornlYxcclxuZnVuY3Rpb24gY2hlY2tNb3ZlKCl7XHJcbiAgICAvLyDlnoLnm7TlpKflsI/pmZDliLZcclxuICAgIGxldCBtYXhWYWwgPSA1XHJcbiAgICBsZXQgbWluVmFsID0gMFxyXG4gICAgaWYoY3VycmVudFZlcnRpY2FsPm1heFZhbCl7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsID0gbWF4VmFsXHJcbiAgICB9ZWxzZSBpZihjdXJyZW50VmVydGljYWw8bWluVmFsKXtcclxuICAgICAgICBjdXJyZW50VmVydGljYWwgPSBtaW5WYWxcclxuICAgIH1cclxuICAgIGNvbGxhcHNlKClcclxufVxyXG5cclxuLy8g546p5a625pKe5Yiw5p2x6KW/XHJcbmZ1bmN0aW9uIGNvbGxhcHNlKCl7XHJcbiAgICBsZXQgW2ZpcnN0SW5kZXgsbGFzdEluZGV4LG9ic3RhY2xlQXJyYXldID0gZ2V0T2JzdGFjbGVTdGF0dXMoKVxyXG4gICAgLy8g5pyA5b6M5LiA5YiXXHJcbiAgICBjb25zdCBMYXN0Q29sbGFwc2VJbmRleCA9IG9ic3RhY2xlQXJyYXkubGVuZ3RoLTE7XHJcbiAgICAvLyDnorDmkp7liJfnmoRJbmRleFxyXG4gICAgY29uc3QgY29sbGFwc2VJbmRleCA9IGZpcnN0SW5kZXgraW5pdFBvc1grMVxyXG4gICAgLy8g5aaC5p6c5LiN5pivTmFOXHJcbiAgICBpZihjb2xsYXBzZUluZGV4ID09PSBjb2xsYXBzZUluZGV4ICYmIGNvbGxhcHNlSW5kZXg8PUxhc3RDb2xsYXBzZUluZGV4KXtcclxuICAgICAgICBjb25zdCBjb2xsYXBzZVR5cGUgPSBvYnN0YWNsZUFycmF5W2NvbGxhcHNlSW5kZXhdW2N1cnJlbnRWZXJ0aWNhbF1cclxuICAgICAgICAvLyDmkp7liLDkv6Hku7bpgYrmiLLmmqvlgZzkuIDkuIvvvIzkv6Hku7bmtojlpLFcclxuICAgICAgICBpZihjb2xsYXBzZVR5cGUhPT0wKXtcclxuICAgICAgICAgICAgcGF1c2UoKVxyXG4gICAgICAgICAgICBvYnN0YWNsZUFycmF5W2NvbGxhcHNlSW5kZXhdW2N1cnJlbnRWZXJ0aWNhbF0gPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIOWcqCgocG9zWCxwb3NZKSnluqfmqJnmmK/lkKbmkp7liLBcclxuZnVuY3Rpb24gaXNDb2xsYXBzZShwb3NYLHBvc1kpe1xyXG4gICAgbGV0IFtmaXJzdEluZGV4LGxhc3RJbmRleCxvYnN0YWNsZUFycmF5XSA9IGdldE9ic3RhY2xlU3RhdHVzKClcclxuICAgICAvLyDnorDmkp7liJfnmoRJbmRleFxyXG4gICAgIGNvbnN0IGNvbGxhcHNlSW5kZXggPSBmaXJzdEluZGV4K3Bvc1hcclxuICAgIC8vICDlpoLmnpzkuYvlvozpg73mspLpmpznpJnniakg5YmH5LiN5pyD5pKe5Yiw5p2x6KW/XHJcbiAgICAgaWYoY29sbGFwc2VJbmRleD49b2JzdGFjbGVBcnJheS5sZW5ndGgpe1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9ic3RhY2xlQXJyYXlbY29sbGFwc2VJbmRleF1bcG9zWV09PT0wXHJcbn1cclxuXHJcbi8vIOWIneWni+WMluW+jOWbnuWCs+S5i+W+jOabtOaWsOeahOaWueW8j1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyKGN1cnJlbnRUaW1lcil7XHJcbiAgICBjaGVja01vdmUoKVxyXG4gICAgLy8g5q+P5YCL5YuV5L2c6ZaT5qC8XHJcbiAgICBjb25zdCB1bml0VmFsID0gdWlfd2lkdGgvMTcuMzk7XHJcbiAgICAvLyDnlbbliY3li5XkvZzliaroo4FcclxuICAgIC8vIOWLleS9nOmDqOacg+i2hemBjjE35YCLKDB+MTYp77yM6LeR5q2l5YuV5L2c5piv56ysOeWAi+WLleS9nOWIsDE35YCL5YuV5L2cKDh+MTYpXHJcbiAgICBjb25zdCBjdXJyZW50QWN0aW9uSW5kZXggPSA4K01hdGguZmxvb3IoY3VycmVudFRpbWVyLzMpJTlcclxuICAgIGNvbnN0IGN1dEFjdGlvblZhbCA9IHVuaXRWYWwqY3VycmVudEFjdGlvbkluZGV4XHJcblxyXG4gICAgLy8gLy8g5ZyW54mH5pyJ5oiQ5Yqf6K6A5Y+W77yM5omN55CG5LuWXHJcbiAgICBpZihQbGF5ZXJJbWdFbGVtZW50LmNvbXBsZXRlKXtcclxuICAgICAgICAvLyDmuIXpmaTnlavluINcclxuICAgICAgICAvLyBnYW1lQ2FudmFzLmNsZWFyUmVjdChob3Jpem9uUG9zLHZlcnRpY2FsVW5pdCpjdXJyZW50VmVydGljYWwscGxheWVyV2lkdGgscGxheWVySGVpZ2h0KVxyXG4gICAgICAgIC8vIOmHjeaWsOe5quijvVxyXG4gICAgICAgIGdhbWVDYW52YXMuZHJhd0ltYWdlKFBsYXllckltZ0VsZW1lbnQsY3V0QWN0aW9uVmFsLHZlcnRpY2FsVW5pdCpjdXJyZW50VmVydGljYWwscGxheWVyUGVyV2lkdGgsdWlfaGVpZ3RoLGhvcml6b25Qb3MsMCxwbGF5ZXJXaWR0aCxwbGF5ZXJIZWlnaHQpXHJcbiAgICB9XHJcbn1cclxuLy8g5ZCR5LiK56e75YuVXHJcbmV4cG9ydCBmdW5jdGlvbiBNb3ZlVXAoKXtcclxuICAgIC8vIOWmguaenOenu+WLleWujOaYr+manOekmeeJqSDkuI3ntabku5bnp7vli5VcclxuICAgIGlmKGlzQ29sbGFwc2UoaW5pdFBvc1grMSxjdXJyZW50VmVydGljYWwtMSkpe1xyXG4gICAgICAgIGN1cnJlbnRWZXJ0aWNhbCAtPSAxXHJcbiAgICB9XHJcbn1cclxuLy8g5ZCR5LiL56e75YuVXHJcbmV4cG9ydCBmdW5jdGlvbiBNb3ZlRG93bigpe1xyXG4gICAgLy8g5aaC5p6c56e75YuV5a6M5piv6Zqc56SZ54mpIOS4jee1puS7luenu+WLlVxyXG4gICAgaWYoaXNDb2xsYXBzZShpbml0UG9zWCsxLGN1cnJlbnRWZXJ0aWNhbCsxKSl7XHJcbiAgICAgICAgY3VycmVudFZlcnRpY2FsICs9IDFcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyDlgJLlh7rpnZzmhYvos4fmupDmqpRcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJ1xyXG5cclxuLy8g6YGK5oiy6LOH6KiK5Yid5aeL5YyWXHJcbmltcG9ydCB7Z2FtZUluaXR9IGZyb20gJy4vaW5pdCdcclxuaW1wb3J0IHtMb29waW5nLHN0YXJ0TG9vcH0gZnJvbSAnLi9nYW1lbG9vcCdcclxuaW1wb3J0IHtNb3ZlVXAsTW92ZURvd259IGZyb20gJy4vcGxheWVyJ1xyXG5cclxuLy8g5Yid5aeL5YyWXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAvLyDpgYrmiLLliJ3lp4vljJZcclxuICAgIGdhbWVJbml0KClcclxuICAgIC8vIOW+queSsOinuOeZvFxyXG4gICAgTG9vcGluZygpXHJcblxyXG4gICAgLy8gZG9t55qE55uj6IG9XHJcbiAgICBjb25zdCBUb3BCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcEJ0blwiKVxyXG4gICAgY29uc3QgQm90dG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3R0b21CdG5cIilcclxuICAgIGNvbnN0IGtlZXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0TG9vcFwiKVxyXG4gICAgVG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgTW92ZVVwKClcclxuICAgIH0sZmFsc2UpXHJcbiAgICBCb3R0b21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICBNb3ZlRG93bigpXHJcbiAgICB9LGZhbHNlKVxyXG4gICAga2VlcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIue5vOe6jFwiKVxyXG4gICAgICAgIHN0YXJ0TG9vcCgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==