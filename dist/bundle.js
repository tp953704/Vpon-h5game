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

/***/ "./src/assets/images/mountain.png":
/*!****************************************!*\
  !*** ./src/assets/images/mountain.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/3c525cd610662e12bcae.png";

/***/ }),

/***/ "./src/assets/images/sky.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/sky.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/7253121e4ecaf37e94a3.jpg";

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
       
        // 背景地板
        const BgGroundImg = new Image(this.width);
        // 圖片載入後才能成功繪製
        BgGroundImg.onload = function(){
            self.image = BgGroundImg
            // 初次載入直接渲染
            self.render(0)
        }
        BgGroundImg.src = ImgUrl 
        self.image = BgGroundImg
    }
    // 繪製背景 => 帶入當前遊戲時間軸
    render(currentTimer){
        // 如果 圖片成功載入 繪製成canvas
        if(this.image.complete){
            // 三個背景連接 動起來不會斷
            if(this.mul >1){
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer,this.initY,this.width,this.height)
            this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+this.width,this.initY,this.width,this.height)
            this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+2*this.width,this.initY,this.width,this.height)
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
    groundBg = new BackgroundElement(groundImgUrl,0,cvs_height*2/10,cvs_width, cvs_height,gameBgCanvas,2.5)
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
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/background.js");

// 背景初始化與更新



// 遊戲會一直持續渲染
function gameLoop(bg_width,bg_height,gameBgCanvas){
    // 遊戲時間軸
    let currentTimer = 0;
    //紀錄上一次繪製的時間
    let lastTime = Date.now(); 
    //requestAnimationFrame 執行完成的時間 = 當前時間 - 上一次繪製的世界
    let deltaTime = 0;  
    return function Looping(){
        const now = Date.now()
        // 時間紀錄
        deltaTime = now - lastTime;
        lastTime = now;
        currentTimer+=1;

        // 背景渲染更新
        (0,_background__WEBPACK_IMPORTED_MODULE_0__.bgUpdate)(bg_width,bg_height,gameBgCanvas,currentTimer)
        // 持續更新觸發
        requestAnimationFrame(Looping)
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
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/background.js");
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


// 初始化
function init(){
    // UICanvas // 遊戲的人物障礙物ˋ信封 畫布
    const [gameDom,gameCanvas] = getCanvasAndContextById('game-ui')
    // 背景Canvas // 遊戲背景 畫布
    const [gameBgDom,gameBgCanvas] = getCanvasAndContextById('game-bg')
    // 畫布寬度高度
    const bg_width = gameBgDom.width;
    const bg_height = gameBgDom.height;
    // 背景渲染
    (0,_background__WEBPACK_IMPORTED_MODULE_0__.bgInit)(bg_width,bg_height,gameBgCanvas)
    
    return { gameDom,gameCanvas,gameBgDom,gameBgCanvas,bg_width,bg_height}

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
// 倒出靜態資源檔


// 遊戲資訊初始化




// 初始化
window.onload = () => {
    // 初始化並倒出 初始值
    const { gameBgCanvas,bg_width,bg_height} = (0,_init__WEBPACK_IMPORTED_MODULE_1__.init)()
    // 遊戲每一Frame更新一次畫面
    const Looping = (0,_gameloop__WEBPACK_IMPORTED_MODULE_2__.gameLoop)(bg_width,bg_height,gameBgCanvas);

    Looping()
}



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3M/ZWI0ZSIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS8uL3NyYy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdnBvbi1oNWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92cG9uLWg1Z2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Zwb24taDVnYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Zwb24taDVnYW1lLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esa2lCQUFraUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyx3RUFBd0UsZUFBZSxHQUFHLGlKQUFpSixtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLFlBQVkscUJBQXFCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLDZEQUE2RCxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsc0JBQXNCLEdBQUcsa05BQWtOLDZCQUE2QiwwQkFBMEIsR0FBRyx3QkFBd0IsNkJBQTZCLDBCQUEwQixvQ0FBb0MsaUNBQWlDLDRCQUE0QixHQUFHLGNBQWMsbUJBQW1CLHdCQUF3QixxQkFBcUIsR0FBRyxrSEFBa0gsMEJBQTBCLHFCQUFxQixhQUFhLG9CQUFvQixHQUFHLHNKQUFzSixrQkFBa0IsY0FBYyxHQUFHLGdJQUFnSSxrQkFBa0IsR0FBRyx5TkFBeU4sb0JBQW9CLDhDQUE4QywwQ0FBMEMsY0FBYyw4RkFBOEYseUJBQXlCLEdBQUcsK0dBQStHLGVBQWUsR0FBRywrSUFBK0ksY0FBYywrQ0FBK0MsY0FBYyw0RkFBNEYsY0FBYyxHQUFHLGtFQUFrRSxjQUFjLEdBQUcsMkVBQTJFLDhCQUE4QixrQkFBa0IsbUNBQW1DLEdBQUcsaUxBQWlMLGNBQWMsMEJBQTBCLHdCQUF3QixrQ0FBa0MsY0FBYyxzUUFBc1Esb0JBQW9CLHlCQUF5Qix3Q0FBd0MsdUNBQXVDLGNBQWMsbUlBQW1JLHdCQUF3QixHQUFHLG9VQUFvVSx5QkFBeUIsR0FBRywyZUFBMmUsK0JBQStCLCtCQUErQixrQ0FBa0MsY0FBYyx3R0FBd0csb0JBQW9CLEdBQUcsa1BBQWtQLDJCQUEyQiwwQkFBMEIsNkJBQTZCLDRCQUE0QixjQUFjLDJOQUEyTixrQ0FBa0MsNENBQTRDLG9DQUFvQyx1Q0FBdUMsR0FBRyxzTUFBc00sNkJBQTZCLEdBQUcscUhBQXFILGNBQWMsZUFBZSxHQUFHLDBJQUEwSSxtQkFBbUIsbUNBQW1DLGNBQWMsa0VBQWtFLDhCQUE4QixzQkFBc0IsR0FBRywrQ0FBK0MsZ0JBQWdCLEdBQUcsc0JBQXNCLHdCQUF3QixzQkFBc0IsR0FBRyxpQkFBaUIsd0JBQXdCLHNCQUFzQixHQUFHLFNBQVMsMkJBQTJCLEdBQUcsY0FBYyxjQUFjLGNBQWMsZUFBZSxHQUFHLGNBQWMscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixxQkFBcUIsZ0JBQWdCLHFCQUFxQixHQUFHLGdCQUFnQixnQkFBZ0IsR0FBRyxtQkFBbUIsbUJBQW1CLDZCQUE2QixHQUFHLGlDQUFpQyx1QkFBdUIsZ0JBQWdCLG9CQUFvQixHQUFHLGdEQUFnRCw2QkFBNkIsR0FBRyxtREFBbUQsNkJBQTZCLEdBQUcsNENBQTRDLGdCQUFnQix1QkFBdUIsV0FBVyxhQUFhLGNBQWMsWUFBWSxHQUFHLDBDQUEwQyxlQUFlLDBCQUEwQixHQUFHLDBDQUEwQyxlQUFlLFdBQVcsR0FBRyxPQUFPLGlKQUFpSixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sV0FBVyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLFFBQVEsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxTQUFTLEtBQUssUUFBUSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLEtBQUssTUFBTSxXQUFXLE1BQU0sU0FBUyxLQUFLLE1BQU0sV0FBVyxNQUFNLFlBQVksS0FBSyxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLFNBQVMsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLE1BQU0sT0FBTyxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxTQUFTLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxN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Q21DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQU07O0FBRVYsWUFBWTs7QUFFWjs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQytCOztBQUUvQjtBQUM0QjtBQUNPOzs7QUFHbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQ0FBaUMsR0FBRywyQ0FBSTtBQUNuRDtBQUNBLG9CQUFvQixtREFBUTs7QUFFNUI7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICovXFxuYXVkaW8sXFxuY2FudmFzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxuICogICAgYGVtYCB1bml0cy5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuYTpmb2N1cyB7XFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbiAgLyogMSAqL1xcbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXG4gKi9cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcbmZvcm0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxuICovXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMiAqL1xcbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxuICogICAgYW5kIENocm9tZS5cXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIC8qIDMgKi9cXG4gICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXG4gKi9cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXFxuaW5wdXRbdHlwZT1yZXNldF0sXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogMyAqL1xcbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogNCAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXFxuICovXFxuaW5wdXRbdHlwZT1jaGVja2JveF0sXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxuICAqaGVpZ2h0OiAxM3B4O1xcbiAgLyogMyAqL1xcbiAgKndpZHRoOiAxM3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCxcXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmNocm9tZWZyYW1lIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5nYW1lLXdyYXBwZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IGNhbGMoMTAwdncqNS8xMyk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4uZ2FtZS13cmFwcGVyIC5nYW1lLWNvbnRhaW5lciAuZ2FtZS10b3Atc2l6ZSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdncqNS8xMyk7XFxufVxcbi5nYW1lLXdyYXBwZXIgLmdhbWUtY29udGFpbmVyIC5nYW1lLWJvdHRvbS1zaXplIHtcXG4gIGhlaWdodDogY2FsYygxMDB2dyo0LzEzKTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgLmdhbWUtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgI2dhbWUtdWkge1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogY2FsYygxMDB2dyoxLzEzKTtcXG59XFxuLmdhbWUtd3JhcHBlciAuZ2FtZS1jb250YWluZXIgI2dhbWUtYmcge1xcbiAgei1pbmRleDogMDtcXG4gIHRvcDogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFBO0VBQ0QsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0Q7O0FERUEseURBQUE7QUFDQTtFQUNJLFVBQUE7QUNDSjs7QURFQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7OztFQUlJLHdCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7O0VBQUE7QUFJQTs7O0VBR0kscUJBQUE7R0FDQSxlQUFBO0dBQ0EsT0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTs7O0VBQUE7QUFLQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FDREo7O0FESUE7OztFQUFBO0FBS0E7RUFDSSxhQUFBO0FDRko7O0FES0E7Ozs7O0VBQUE7QUFPQTtFQUNJLGVBQUE7RUFBaUIsTUFBQTtFQUNqQiw4QkFBQTtFQUFnQyxNQUFBO0VBQ2hDLDBCQUFBO0VBQTRCLE1BQUE7QUNBaEM7O0FER0E7O0VBQUE7QUFJQTtFQUNJLG9CQUFBO0FDREo7O0FESUE7O0VBQUE7QUFJQTs7RUFFSSxVQUFBO0FDRko7O0FES0E7OztFQUFBO0FBS0E7RUFDSSxTQUFBO0VBQVcsTUFBQTtFQUNYLCtCQUFBO0VBQWlDLE1BQUE7QUNEckM7O0FESUE7O0VBQUE7QUFJQTtFQUNJLFNBQUE7QUNGSjs7QURLQTs7RUFBQTtBQUlBO0VBQ0ksU0FBQTtBQ0hKOztBRE1BOztFQUFBO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0pKOztBRE9BOzs7O0VBQUE7QUFNQTtFQUNJLFNBQUE7RUFBVyxNQUFBO0VBQ1gsVUFBQTtFQUNBLG1CQUFBO0VBQXFCLE1BQUE7R0FDckIsaUJBQUE7RUFBb0IsTUFBQTtBQ0Z4Qjs7QURLQTs7Ozs7RUFBQTtBQU9BOzs7O0VBSUksZUFBQTtFQUFpQixNQUFBO0VBQ2pCLFNBQUE7RUFBVyxNQUFBO0VBQ1gsd0JBQUE7RUFBMEIsTUFBQTtHQUMxQixzQkFBQTtFQUF5QixNQUFBO0FDQzdCOztBREVBOzs7RUFBQTtBQUtBOztFQUVJLG1CQUFBO0FDQUo7O0FER0E7Ozs7O0VBQUE7QUFPQTs7RUFFSSxvQkFBQTtBQ0RKOztBRElBOzs7Ozs7OztFQUFBO0FBVUE7Ozs7RUFJSSwwQkFBQTtFQUE0QixNQUFBO0VBQzVCLGVBQUE7RUFBaUIsTUFBQTtHQUNqQixpQkFBQTtFQUFxQixNQUFBO0FDQ3pCOztBREVBOztFQUFBO0FBSUE7O0VBRUksZUFBQTtBQ0FKOztBREdBOzs7OztFQUFBO0FBT0E7O0VBRUksc0JBQUE7RUFBd0IsTUFBQTtFQUN4QixVQUFBO0VBQVksTUFBQTtHQUNaLFlBQUE7RUFBZSxNQUFBO0dBQ2YsV0FBQTtFQUFjLE1BQUE7QUNHbEI7O0FEQUE7Ozs7RUFBQTtBQU1BO0VBQ0ksNkJBQUE7RUFBK0IsTUFBQTtFQUMvQiw0QkFBQTtFQUNBLCtCQUFBO0VBQWlDLE1BQUE7RUFDakMsdUJBQUE7QUNJSjs7QUREQTs7O0VBQUE7QUFLQTs7RUFFSSx3QkFBQTtBQ0dKOztBREFBOztFQUFBO0FBSUE7O0VBRUksU0FBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTs7O0VBQUE7QUFLQTtFQUNJLGNBQUE7RUFBZ0IsTUFBQTtFQUNoQixtQkFBQTtFQUFxQixNQUFBO0FDR3pCOztBREFBOztFQUFBO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7Ozs7O0VBS0ksV0FBQTtBQ0VKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBQXRXQTtFQUNJLFdBQUE7QUF5V0o7O0FBcFdBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0FBdVdKO0FBdFdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXdXUjtBQXZXUTtFQUNJLHdCQUFBO0FBeVdaO0FBdldRO0VBQ0ksd0JBQUE7QUF5V1o7QUF2V1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBeVdaO0FBdldRO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FBeVdaO0FBdFdRO0VBQ0ksVUFBQTtFQUNBLE1BQUE7QUF3V1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXFxyXFxuOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxyXFxuICovXFxyXFxuXFxyXFxuYXVkaW8sXFxyXFxuY2FudmFzLFxcclxcbnZpZGVvIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAqZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAqem9vbTogMTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcclxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxyXFxuICovXFxyXFxuXFxyXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxcclxcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRleHQgcmVzaXppbmcgb2RkbHkgaW4gSUUgNi83IHdoZW4gYm9keSBgZm9udC1zaXplYCBpcyBzZXQgdXNpbmdcXHJcXG4gKiAgICBgZW1gIHVuaXRzLlxcclxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcclxcbiAqICAgIHVzZXIgem9vbS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmE6YWN0aXZlLFxcclxcbmE6aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXHJcXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXHJcXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA2LzcvOC85LCBTYWZhcmkgNSwgYW5kIE9wZXJhIDExLlxcclxcbiAqL1xcclxcblxcclxcbmZpZ3VyZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcclxcbiAgICBtYXJnaW46IDAgMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxcclxcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxcclxcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDIgKi9cXHJcXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4OyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LCBGaXJlZm94IDMrLCBTYWZhcmkgNSxcXHJcXG4gKiAgICBhbmQgQ2hyb21lLlxcclxcbiAqIDMuIEltcHJvdmUgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMyAqL1xcclxcbiAgICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxyXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcclxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxyXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxcclxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcclxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcclxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXHJcXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcclxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXHJcXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXHJcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxyXFxuICAgICpvdmVyZmxvdzogdmlzaWJsZTsgIC8qIDQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b25bZGlzYWJsZWRdLFxcclxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cXHJcXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxcclxcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxcclxcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxuICAgICpoZWlnaHQ6IDEzcHg7IC8qIDMgKi9cXHJcXG4gICAgKndpZHRoOiAxM3B4OyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxyXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxyXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcclxcbiAqIG9uIE9TIFguXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxcclxcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogMSAqL1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBjb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOjotbW96LXNlbGVjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46OnNlbGVjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi5jaHJvbWVmcmFtZSB7XFxyXFxuICAgIG1hcmdpbjogMC4yZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2NjYztcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XFxyXFxufVwiLFwiQGltcG9ydCAnLi9yZXNldC5zY3NzJztcXHJcXG5cXHJcXG5odG1sLGJvZHl7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5nYW1lLXdyYXBwZXJ7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncqNS8xMyk7XFxyXFxuICAgIC5nYW1lLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICAgICAgLmdhbWUtdG9wLXNpemV7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3KjUvMTMpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWUtYm90dG9tLXNpemV7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3KjQvMTMpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmdhbWUtaXRlbXtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2dhbWUtdWl7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgICAgICB0b3A6Y2FsYygxMDB2dyoxLzEzKTtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNnYW1lLWJne1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOjA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8g5q+P5YCL6Z2c5oWL6LOH5rqQ57eo6K2v5b6M6Lev5b6RXHJcbmNvbnN0IHNreUltZ1VybCA9IHJlcXVpcmUoJy4vYXNzZXRzL2ltYWdlcy9za3kuanBnJylcclxuY29uc3QgbW91bnRhaW5JbWdVcmwgPSByZXF1aXJlKCcuL2Fzc2V0cy9pbWFnZXMvbW91bnRhaW4ucG5nJylcclxuY29uc3QgZ3JvdW5kSW1nVXJsID0gcmVxdWlyZSgnLi9hc3NldHMvaW1hZ2VzL2dyb3VuZC5qcGcnKVxyXG5cclxuXHJcbi8vIOiDjOaZr+WFg+e0oCDljIXlkKsg6IOM5pmv5Zyw5p2/IOiDjOaZr+WxsSDog4zmma/lpKnnqbpcclxuY2xhc3MgQmFja2dyb3VuZEVsZW1lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWdVcmwsaW5pdFgsaW5pdFksIHdpZHRoLCBoZWlnaHQsY2FudmFzLG11bD0xKXtcclxuICAgICAgICB0aGlzLmltYWdlID0gXCJcIlxyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsXHJcbiAgICAgICAgdGhpcy5pbml0WCA9IGluaXRYO1xyXG4gICAgICAgIHRoaXMuaW5pdFkgPSBpbml0WTtcclxuICAgICAgICB0aGlzLndpZHRoID13aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xyXG4gICAgICAgIHRoaXMubXVsPW11bFxyXG4gICAgfVxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIOS4i+mdouacieeJueWIpemcgOaxgu+8jOimgemBv+WFjXRoaXPot5HmjolcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyDog4zmma/ot6/lvpFcclxuICAgICAgICBjb25zdCBJbWdVcmwgPSBzZWxmLmltZ1VybFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8g6IOM5pmv5Zyw5p2/XHJcbiAgICAgICAgY29uc3QgQmdHcm91bmRJbWcgPSBuZXcgSW1hZ2UodGhpcy53aWR0aCk7XHJcbiAgICAgICAgLy8g5ZyW54mH6LyJ5YWl5b6M5omN6IO95oiQ5Yqf57mq6KO9XHJcbiAgICAgICAgQmdHcm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICAgICAgICAgIC8vIOWIneasoei8ieWFpeebtOaOpea4suafk1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlcigwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBCZ0dyb3VuZEltZy5zcmMgPSBJbWdVcmwgXHJcbiAgICAgICAgc2VsZi5pbWFnZSA9IEJnR3JvdW5kSW1nXHJcbiAgICB9XHJcbiAgICAvLyDnuaroo73og4zmma8gPT4g5bi25YWl55W25YmN6YGK5oiy5pmC6ZaT6Lu4XHJcbiAgICByZW5kZXIoY3VycmVudFRpbWVyKXtcclxuICAgICAgICAvLyDlpoLmnpwg5ZyW54mH5oiQ5Yqf6LyJ5YWlIOe5quijveaIkGNhbnZhc1xyXG4gICAgICAgIGlmKHRoaXMuaW1hZ2UuY29tcGxldGUpe1xyXG4gICAgICAgICAgICAvLyDkuInlgIvog4zmma/pgKPmjqUg5YuV6LW35L6G5LiN5pyD5pa3XHJcbiAgICAgICAgICAgIGlmKHRoaXMubXVsID4xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KnRoaXMubXVsLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyLHRoaXMuaW5pdFksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQqdGhpcy5tdWwsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMuaW5pdFgsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KnRoaXMubXVsLHRoaXMuaW5pdFgtY3VycmVudFRpbWVyKzIqdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIsdGhpcy5pbml0WSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrdGhpcy53aWR0aCx0aGlzLmluaXRZLHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5pbml0WC1jdXJyZW50VGltZXIrMip0aGlzLndpZHRoLHRoaXMuaW5pdFksdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyDlpKnnqbrnmoTog4zmma9cclxubGV0IHNreUJnO1xyXG4vLyDlsbHnmoTog4zmma9cclxubGV0IG1vdW50YWluQmc7XHJcblxyXG4vLyDlnLDmnb/nmoTog4zmma9cclxubGV0IGdyb3VuZEJnO1xyXG5cclxuLy8g5Y+D5pW4IOeVq+W4g+mrmOWvrOiIhyBjYW52YXPkuIrkuIvmlodcclxuZXhwb3J0IGZ1bmN0aW9uIGJnSW5pdChjdnNfd2lkdGgsY3ZzX2hlaWdodCxnYW1lQmdDYW52YXMpe1xyXG5cclxuICAgIC8vIOWumue+qeiDjOaZr+WFg+e0oFxyXG4gICAgc2t5QmcgPSBuZXcgQmFja2dyb3VuZEVsZW1lbnQoc2t5SW1nVXJsLDAsMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQqMi8xMCxnYW1lQmdDYW52YXMpXHJcbiAgICBtb3VudGFpbkJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KG1vdW50YWluSW1nVXJsLDAsY3ZzX2hlaWdodCoxLzIwLGN2c193aWR0aCwgY3ZzX2hlaWdodCoyLzEwLGdhbWVCZ0NhbnZhcylcclxuICAgIGdyb3VuZEJnID0gbmV3IEJhY2tncm91bmRFbGVtZW50KGdyb3VuZEltZ1VybCwwLGN2c19oZWlnaHQqMi8xMCxjdnNfd2lkdGgsIGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLDIuNSlcclxuICAgIC8vIOWIneasoee5quijvSBcclxuICAgIHNreUJnLmluaXQoKVxyXG4gICAgbW91bnRhaW5CZy5pbml0KClcclxuICAgIGdyb3VuZEJnLmluaXQoKVxyXG59XHJcblxyXG4vLyDlj4Pmlbgg55Wr5biD6auY5a+s6IiHIGNhbnZhc+S4iuS4i+aWh1xyXG5leHBvcnQgZnVuY3Rpb24gYmdVcGRhdGUoY3ZzX3dpZHRoLGN2c19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcil7XHJcbiAgICAvLyDmr4/lgIvog4zmma/lhYPntKDnmoTpgJ/luqYg5YKZ6Ki777ya5aSp56m66LeR6LaF5oWiICDlsbHmnInpu57mhaIgIOWcsOadv+WFg+e0oOeojeW+ruW/q+S4gOm7nlxyXG4gICAgY29uc3Qgc2t5U3BlZWQgPSBjdXJyZW50VGltZXIvMztcclxuICAgIGNvbnN0IG1vdW50YWluU3BlZWQgPSBjdXJyZW50VGltZXIqMi8zO1xyXG4gICAgY29uc3QgZ3JvdW5kU3BlZWQgPSBjdXJyZW50VGltZXI7XHJcbiAgICAvLyDmuIXpmaTog4zmma/nlavluINcclxuICAgIGdhbWVCZ0NhbnZhcy5jbGVhclJlY3QoMCwwLGN2c193aWR0aCwgY3ZzX2hlaWdodClcclxuXHJcbiAgICAvLyDph43mlrDmuLLmn5Mg5bi25YWl55qE5pW45a2X5LiN6IO96LaF6YGO6IOM5pmv5a+s5bqmIOaJgOS7peeUqOmkmOaVuFxyXG4gICAgc2t5QmcucmVuZGVyKHNreVNwZWVkJWN2c193aWR0aClcclxuICAgIG1vdW50YWluQmcucmVuZGVyKG1vdW50YWluU3BlZWQlY3ZzX3dpZHRoKVxyXG4gICAgZ3JvdW5kQmcucmVuZGVyKGdyb3VuZFNwZWVkJWN2c193aWR0aClcclxufSIsIlxyXG4vLyDog4zmma/liJ3lp4vljJboiIfmm7TmlrBcclxuaW1wb3J0IHtiZ1VwZGF0ZX0gZnJvbSAnLi9iYWNrZ3JvdW5kJ1xyXG5cclxuXHJcbi8vIOmBiuaIsuacg+S4gOebtOaMgee6jOa4suafk1xyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUxvb3AoYmdfd2lkdGgsYmdfaGVpZ2h0LGdhbWVCZ0NhbnZhcyl7XHJcbiAgICAvLyDpgYrmiLLmmYLplpPou7hcclxuICAgIGxldCBjdXJyZW50VGltZXIgPSAwO1xyXG4gICAgLy/ntIDpjITkuIrkuIDmrKHnuaroo73nmoTmmYLplpNcclxuICAgIGxldCBsYXN0VGltZSA9IERhdGUubm93KCk7IFxyXG4gICAgLy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUg5Z+36KGM5a6M5oiQ55qE5pmC6ZaTID0g55W25YmN5pmC6ZaTIC0g5LiK5LiA5qyh57mq6KO955qE5LiW55WMXHJcbiAgICBsZXQgZGVsdGFUaW1lID0gMDsgIFxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIExvb3BpbmcoKXtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgLy8g5pmC6ZaT57SA6YyEXHJcbiAgICAgICAgZGVsdGFUaW1lID0gbm93IC0gbGFzdFRpbWU7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBub3c7XHJcbiAgICAgICAgY3VycmVudFRpbWVyKz0xO1xyXG5cclxuICAgICAgICAvLyDog4zmma/muLLmn5Pmm7TmlrBcclxuICAgICAgICBiZ1VwZGF0ZShiZ193aWR0aCxiZ19oZWlnaHQsZ2FtZUJnQ2FudmFzLGN1cnJlbnRUaW1lcilcclxuICAgICAgICAvLyDmjIHnuozmm7TmlrDop7jnmbxcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoTG9vcGluZylcclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8g6IOM5pmv5Yid5aeL5YyWXHJcbmltcG9ydCB7YmdJbml0fSBmcm9tICcuL2JhY2tncm91bmQnXHJcblxyXG4vLyDliKnnlKhjYW52YXMgSUQg5Y+W5b6XIERPTSDlkowgY2F2YW5zXHJcbmZ1bmN0aW9uIGdldENhbnZhc0FuZENvbnRleHRCeUlkKGlkKXtcclxuICAgIGNvbnN0IGRvbSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrIGlkKTtcclxuICAgIGlmKGRvbS5nZXRDb250ZXh0KXtcclxuICAgICAgICBjb25zdCBjdHggPSBkb20uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICByZXR1cm5bZG9tLCBjdHhdO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuS4jeaUr+aPtGNhbnZhc1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8g5Yid5aeL5YyWXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyBVSUNhbnZhcyAvLyDpgYrmiLLnmoTkurrnianpmpznpJnnianLi+S/oeWwgSDnlavluINcclxuICAgIGNvbnN0IFtnYW1lRG9tLGdhbWVDYW52YXNdID0gZ2V0Q2FudmFzQW5kQ29udGV4dEJ5SWQoJ2dhbWUtdWknKVxyXG4gICAgLy8g6IOM5pmvQ2FudmFzIC8vIOmBiuaIsuiDjOaZryDnlavluINcclxuICAgIGNvbnN0IFtnYW1lQmdEb20sZ2FtZUJnQ2FudmFzXSA9IGdldENhbnZhc0FuZENvbnRleHRCeUlkKCdnYW1lLWJnJylcclxuICAgIC8vIOeVq+W4g+WvrOW6pumrmOW6plxyXG4gICAgY29uc3QgYmdfd2lkdGggPSBnYW1lQmdEb20ud2lkdGg7XHJcbiAgICBjb25zdCBiZ19oZWlnaHQgPSBnYW1lQmdEb20uaGVpZ2h0O1xyXG4gICAgLy8g6IOM5pmv5riy5p+TXHJcbiAgICBiZ0luaXQoYmdfd2lkdGgsYmdfaGVpZ2h0LGdhbWVCZ0NhbnZhcylcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgZ2FtZURvbSxnYW1lQ2FudmFzLGdhbWVCZ0RvbSxnYW1lQmdDYW52YXMsYmdfd2lkdGgsYmdfaGVpZ2h0fVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIOWAkuWHuumdnOaFi+izh+a6kOaqlFxyXG5pbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnXHJcblxyXG4vLyDpgYrmiLLos4foqIrliJ3lp4vljJZcclxuaW1wb3J0IHtpbml0fSBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQge2dhbWVMb29wfSBmcm9tICcuL2dhbWVsb29wJ1xyXG5cclxuXHJcbi8vIOWIneWni+WMllxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgLy8g5Yid5aeL5YyW5Lim5YCS5Ye6IOWIneWni+WAvFxyXG4gICAgY29uc3QgeyBnYW1lQmdDYW52YXMsYmdfd2lkdGgsYmdfaGVpZ2h0fSA9IGluaXQoKVxyXG4gICAgLy8g6YGK5oiy5q+P5LiARnJhbWXmm7TmlrDkuIDmrKHnlavpnaJcclxuICAgIGNvbnN0IExvb3BpbmcgPSBnYW1lTG9vcChiZ193aWR0aCxiZ19oZWlnaHQsZ2FtZUJnQ2FudmFzKTtcclxuXHJcbiAgICBMb29waW5nKClcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=