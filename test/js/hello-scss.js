/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/test/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	console.log('hello scss!!!');


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../../node_modules/.4.0.0@sass-loader/index.js?sourceMap!./hello-scss.scss", function() {
				var newContent = require("!!./../../node_modules/.0.23.1@css-loader/index.js?sourceMap!./../../node_modules/.4.0.0@sass-loader/index.js?sourceMap!./hello-scss.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nExample usage in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\nTo change `display` (e.g. `display: inline-block;`), we suggest using a common CSS class:\n\n// CSS\n.icon {\n  display: inline-block;\n}\n\n// HTML\n<i class=\"icon icon-home\"></i>\n*/\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\nbody {\n  font-family: Helvetica,Tahoma,Arial, \"Hiragino Sans GB\",\"Microsoft YaHei\",SimSun,Heiti,sans-serif; }\n\nh1, .extend {\n  color: red; }\n\n.nav {\n  overflow: hidden;\n  height: 82px;\n  width: 1240px;\n  margin: 0 auto; }\n  .nav .logo {\n    background-image: url(" + __webpack_require__(4) + ");\n    background-position: 0px -42px;\n    width: 115px;\n    height: 20px;\n    float: left;\n    margin-top: 32px; }\n  .nav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n    margin-top: 32px; }\n  .nav li {\n    padding: 0;\n    margin: 0;\n    display: block;\n    float: left;\n    padding: 0 22px;\n    color: #515151;\n    cursor: pointer;\n    font-size: 14px; }\n    .nav li:hover {\n      color: #3697ce; }\n\n.test-var h2 {\n  color: red; }\n\n.sp-1 {\n  color: blue; }\n\n.ie-test {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1; }\n\n.outer a {\n  color: #515151; }\n\na {\n  color: red; }\n\n.extend {\n  text-align: center; }\n\n.zhanwei {\n  color: red;\n  height: 50px;\n  line-height: 50px; }\n", "", {"version":3,"sources":["/./pages/scss/pages/scss/sprite.scss","/./pages/scss/pages/scss/hello-scss.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;EAYE;AA6BF;;;;;;;;;;;;;;;;;;;;;;;;;EAyBE;AA2BF;;;;;EAKE;AChGF;EACI,kGAC6D,EAChE;;AAED;EACI,WAAW,EACd;;AAED;EACI,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,eAAe,EA6BlB;EAjCD;IDwEE,gDAAuB;IALvB,+BA5C2B;IAkC3B,aAlCkC;IAsClC,aAtCwC;ICflC,YAAY;IACZ,iBAAiB,EACpB;EAVL;IAaQ,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB,iBAAiB,EACpB;EAlBL;IAqBQ,WAAW;IACX,UAAU;IACV,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,eAAU;IACV,gBAAgB;IAChB,gBAAgB,EAInB;IAhCL;MA8BY,eAAU,EACb;;AAIT;EAEQ,WAHE,EAIL;;AAOL;EACI,YAAY,EACf;;AAED;EACI,sBAAsB;GACtB,gBAAiB;GACjB,QAAQ,EACX;;AAGD;EAEQ,eAAe,EAClB;;AACQ;EACL,WAAW,EACd;;AAIL;EAEI,mBAAmB,EACtB;;AAED;EACI,WAAW;EACX,aAAa;EACb,kBAAkB,EACrB","file":"hello-scss.scss","sourcesContent":["/*\nSCSS variables are information about icon's compiled state, stored under its original file name\n\n.icon-home {\n  width: $icon-home-width;\n}\n\nThe large array-like variables contain all information about a single icon\n$icon-home: x y offset_x offset_y width height total_width total_height image_path;\n\nAt the bottom of this section, we provide information about the spritesheet itself\n$spritesheet: width height image $spritesheet-sprites;\n*/\n$user-icon-name: 'user-icon';\n$user-icon-x: 135px;\n$user-icon-y: 0px;\n$user-icon-offset-x: -135px;\n$user-icon-offset-y: 0px;\n$user-icon-width: 22px;\n$user-icon-height: 22px;\n$user-icon-total-width: 157px;\n$user-icon-total-height: 62px;\n$user-icon-image: '../img/sprite.png';\n$user-icon: (135px, 0px, -135px, 0px, 22px, 22px, 157px, 62px, '../img/sprite.png', 'user-icon', );\n$logo-name: 'logo';\n$logo-x: 0px;\n$logo-y: 42px;\n$logo-offset-x: 0px;\n$logo-offset-y: -42px;\n$logo-width: 115px;\n$logo-height: 20px;\n$logo-total-width: 157px;\n$logo-total-height: 62px;\n$logo-image: '../img/sprite.png';\n$logo: (0px, 42px, 0px, -42px, 115px, 20px, 157px, 62px, '../img/sprite.png', 'logo', );\n$spritesheet-width: 157px;\n$spritesheet-height: 62px;\n$spritesheet-image: '../img/sprite.png';\n$spritesheet-sprites: ($user-icon, $logo, );\n$spritesheet: (157px, 62px, '../img/sprite.png', $spritesheet-sprites, );\n\n/*\nThe provided mixins are intended to be used with the array-like variables\n\n.icon-home {\n  @include sprite-width($icon-home);\n}\n\n.icon-email {\n  @include sprite($icon-email);\n}\n\nExample usage in HTML:\n\n`display: block` sprite:\n<div class=\"icon-home\"></div>\n\nTo change `display` (e.g. `display: inline-block;`), we suggest using a common CSS class:\n\n// CSS\n.icon {\n  display: inline-block;\n}\n\n// HTML\n<i class=\"icon icon-home\"></i>\n*/\n@mixin sprite-width($sprite) {\n  width: nth($sprite, 5);\n}\n\n@mixin sprite-height($sprite) {\n  height: nth($sprite, 6);\n}\n\n@mixin sprite-position($sprite) {\n  $sprite-offset-x: nth($sprite, 3);\n  $sprite-offset-y: nth($sprite, 4);\n  background-position: $sprite-offset-x  $sprite-offset-y;\n}\n\n@mixin sprite-image($sprite) {\n  $sprite-image: nth($sprite, 9);\n  background-image: url(#{$sprite-image});\n}\n\n@mixin sprite($sprite) {\n  @include sprite-image($sprite);\n  @include sprite-position($sprite);\n  @include sprite-width($sprite);\n  @include sprite-height($sprite);\n}\n\n/*\nThe `sprites` mixin generates identical output to the CSS template\n  but can be overridden inside of SCSS\n\n@include sprites($spritesheet-sprites);\n*/\n@mixin sprites($sprites) {\n  @each $sprite in $sprites {\n    $sprite-name: nth($sprite, 10);\n    .#{$sprite-name} {\n      @include sprite($sprite);\n    }\n  }\n}\n","@import \"./sprite.scss\";\n\nbody{\n    font-family: Helvetica,Tahoma,Arial,\n    \"Hiragino Sans GB\",\"Microsoft YaHei\",SimSun,Heiti,sans-serif;\n}\n\nh1 {\n    color: red;\n}\n\n.nav {\n    overflow: hidden;\n    height: 82px;\n    width: 1240px;\n    margin: 0 auto;\n\n    .logo {\n        @include sprite($logo);\n        float: left;\n        margin-top: 32px;\n    }\n\n    ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n        margin-top: 32px;\n    }\n\n    li {\n        padding: 0;\n        margin: 0;\n        display: block;\n        float: left;\n        padding: 0 22px;\n        color: rgb(81,81,81);\n        cursor: pointer;\n        font-size: 14px;\n        &:hover {\n            color: rgb(54,151,206);\n        }\n    }\n}\n$color:red;\n.test-var{\n    h2{\n        color: $color;\n    }\n}\n$color: #efefef;\n//变量作用域是全局的，一经修改，就要完蛋了。\n\n//特殊变量\n$index:1;\n.sp-#{$index}{\n    color: blue;\n}\n\n.ie-test{\n    display: inline-block;\n    *display: inline;\n    *zoom:1;\n}\n\n//@at-root跳出所有的嵌套\n.outer{\n    a{\n        color: #515151;\n    }\n    @at-root a{\n        color: red;\n    }\n}\n\n//继承@extend\n.extend{\n    @extend h1;\n    text-align: center;\n}\n// 占位选择器，不被调用不被解析\n%r1{\n    color: red;\n    height: 50px;\n    line-height: 50px;\n}\n.zhanwei{\n    @extend %r1;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/sprite-7aeee3e9f729ad18b5787b2cc12c43f9.png";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=hello-scss.js.map