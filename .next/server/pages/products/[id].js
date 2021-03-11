module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./assets/index.js":
/*!*************************!*\
  !*** ./assets/index.js ***!
  \*************************/
/*! exports provided: svgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgs */ "./assets/svgs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svgs", function() { return _svgs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/svgs/Cog/index.js":
/*!**********************************!*\
  !*** ./assets/svgs/Cog/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./assets/svgs/Cog/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\assets\\svgs\\Cog\\index.js";


const Cog = props => {
  const {
    color,
    height
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].Cog, {
    viewBox: "0 0 512 512",
    fill: color,
    height: height,
    width: "auto",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Cog);

/***/ }),

/***/ "./assets/svgs/Cog/styles/base.js":
/*!****************************************!*\
  !*** ./assets/svgs/Cog/styles/base.js ***!
  \****************************************/
/*! exports provided: Cog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cog", function() { return Cog; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const Cog = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._svg).withConfig({
  displayName: "base__Cog",
  componentId: "sc-53uq41-0"
})([""]);

/***/ }),

/***/ "./assets/svgs/Cog/styles/index.js":
/*!*****************************************!*\
  !*** ./assets/svgs/Cog/styles/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./assets/svgs/Cog/styles/base.js");

const styles = {
  Cog: _base__WEBPACK_IMPORTED_MODULE_0__["Cog"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./assets/svgs/index.js":
/*!******************************!*\
  !*** ./assets/svgs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cog */ "./assets/svgs/Cog/index.js");

const svgs = {
  Cog: _Cog__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (svgs);

/***/ }),

/***/ "./components/buttons/Pill/index.js":
/*!******************************************!*\
  !*** ./components/buttons/Pill/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/buttons/Pill/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\buttons\\Pill\\index.js";


const Pill = props => {
  const {
    text,
    onClick
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].Pill, {
    onClick: onClick,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pill);

/***/ }),

/***/ "./components/buttons/Pill/styles/base.js":
/*!************************************************!*\
  !*** ./components/buttons/Pill/styles/base.js ***!
  \************************************************/
/*! exports provided: Pill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pill", function() { return Pill; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const Pill = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._button).withConfig({
  displayName: "base__Pill",
  componentId: "wezba-0"
})(["background-color:", ";height:60px;width:250px;border-radius:25px;box-shadow:0px 5px 40px 2px ", ";color:", ";text-transform:uppercase;letter-spacing:4px;"], props => props.theme.colors.primaryColor, props => props.theme.colors.primaryColor, props => props.theme.colors.white);

/***/ }),

/***/ "./components/buttons/Pill/styles/index.js":
/*!*************************************************!*\
  !*** ./components/buttons/Pill/styles/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/buttons/Pill/styles/base.js");

const styles = {
  Pill: _base__WEBPACK_IMPORTED_MODULE_0__["Pill"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/buttons/index.js":
/*!*************************************!*\
  !*** ./components/buttons/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pill */ "./components/buttons/Pill/index.js");

const buttons = {
  Pill: _Pill__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (buttons);

/***/ }),

/***/ "./components/cards/Discount/content/Graphic.js":
/*!******************************************************!*\
  !*** ./components/cards/Discount/content/Graphic.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./components/cards/Discount/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\cards\\Discount\\content\\Graphic.js";


const Graphic = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].Graphic, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].circle, {
      size: "365px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].circle, {
      size: "315px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].circle, {
      size: "265px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].circle, {
      size: "215px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].circle, {
      size: "165px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].discountPrice, {
        children: "20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Graphic);

/***/ }),

/***/ "./components/cards/Discount/content/index.js":
/*!****************************************************!*\
  !*** ./components/cards/Discount/content/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Graphic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphic */ "./components/cards/Discount/content/Graphic.js");
/* harmony import */ var _toastTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toastTest */ "./components/cards/Discount/content/toastTest.js");


const content = {
  Graphic: _Graphic__WEBPACK_IMPORTED_MODULE_0__["default"],
  ToastText: _toastTest__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ }),

/***/ "./components/cards/Discount/content/toastTest.js":
/*!********************************************************!*\
  !*** ./components/cards/Discount/content/toastTest.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\cards\\Discount\\content\\toastTest.js";

const ToastText = props => {
  const {
    heading,
    message
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ToastText);

/***/ }),

/***/ "./components/cards/Discount/index.js":
/*!********************************************!*\
  !*** ./components/cards/Discount/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ */ "./components/index.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./components/cards/Discount/content/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/cards/Discount/styles/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\cards\\Discount\\index.js";








const Discount = props => {
  const product = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.products.data);
  const {
    0: toggleToast,
    1: toggleToastHandler
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const {
    0: toastText,
    1: toastTextHandler
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('');
  const {
    0: hasWon,
    1: hasWonHandler
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const {
    0: guessMessage,
    1: guessMessageHandler
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''); // console.log(product)

  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      guess: ''
    },
    onSubmit: async values => {
      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_6___default()({
          method: 'post',
          url: '/discounts',
          data: {
            guess: values.guess,
            productId: product.id,
            productName: product.title,
            productPrice: product.variants[0].price
          }
        });
        hasWonHandler(data.correct);
        toggleToastHandler(true);
        const amountOfTries = data.count;

        if (data.correct) {
          toastTextHandler('You have guessed the correct number, you will be redirected in 5 sec');
          guessMessageHandler(data.message);
          window.setTimeout(() => {
            toggleToastHandler(false);
          }, 4900);
          window.setTimeout(() => {
            window.location.assign(data.draftOrderUrl);
          }, 5000);
          return;
        }

        guessMessageHandler(data.message);

        if (amountOfTries >= 10) {
          toastTextHandler('you have hit you maximum number of attempts, you will be redirected back to home in 5 seconds');
          window.setTimeout(() => {
            window.location.assign('/');
          }, 5000);
        } else {
          toastTextHandler(`you have tried ${guessMessage} times you have ${10 - amountOfTries}`);
        }

        window.setTimeout(() => {
          toggleToastHandler(false);
        }, 4900);
        console.log(data);
      } catch (err) {
        console.log('on submit error');
        console.log(err.message);
      }
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].toast, {
      show: toggleToast,
      color: hasWon,
      children: [hasWon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content__WEBPACK_IMPORTED_MODULE_2__["default"].ToastText, {
        heading: guessMessage,
        message: toastText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 18
      }, undefined), !hasWon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content__WEBPACK_IMPORTED_MODULE_2__["default"].ToastText, {
        heading: guessMessage,
        message: toastText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].Discount, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].backgroundGraphic, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content__WEBPACK_IMPORTED_MODULE_2__["default"].Graphic, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].cardBody, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].discountTitle, {
            children: "what is the number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: formik.handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].input, {
              id: "guess",
              name: "guess",
              type: "text",
              minLength: "1",
              maxLength: "4",
              placeholder: "XXXX",
              onChange: formik.handleChange,
              value: formik.values.guess
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].buttonContainer, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_1__["Buttons"].Pill, {
                type: "submit",
                text: "guess"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].contestRules, {
            children: "Guess the correct number to appyly the shown discount. The number is between 1 - 1000, and you have 15 guesses for the correct answer."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Discount);

/***/ }),

/***/ "./components/cards/Discount/styles/base.js":
/*!**************************************************!*\
  !*** ./components/cards/Discount/styles/base.js ***!
  \**************************************************/
/*! exports provided: Discount, Graphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discount", function() { return Discount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graphic", function() { return Graphic; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Discount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__Discount",
  componentId: "sc-19kghuk-0"
})(["background-color:", ";height:300px;width:600px;color:white;z-index:60;display:flex;align-items:center;overflow:hidden;position:relative;box-shadow:0px 0px 15px 5px #000000;"], props => props.theme.colors.primaryColorDark);
const Graphic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__Graphic",
  componentId: "sc-19kghuk-1"
})(["height:300px;width:300px;position:relative;"]);

/***/ }),

/***/ "./components/cards/Discount/styles/containers.js":
/*!********************************************************!*\
  !*** ./components/cards/Discount/styles/containers.js ***!
  \********************************************************/
/*! exports provided: backgroundGraphic, buttonContainer, cardBody, circle, toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundGraphic", function() { return backgroundGraphic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonContainer", function() { return buttonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBody", function() { return cardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const backgroundGraphic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__backgroundGraphic",
  componentId: "sc-15igbbu-0"
})(["height:100%;width:100%;background-image:url('/images/lightning.png');background-color:rgb(0,0,0,0.3);display:flex;"]);
const buttonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__buttonContainer",
  componentId: "sc-15igbbu-1"
})(["display:flex;justify-content:center;padding-top:20px;"]);
const cardBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardBody",
  componentId: "sc-15igbbu-2"
})(["width:300px;padding:15px 0;"]);
const circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__circle",
  componentId: "sc-15igbbu-3"
})(["height:", ";width:", ";background-color:", ";border-radius:50%;box-shadow:0px 0px 15px 5px #000000;top:50%;left:105px;position:absolute;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;"], props => props.size, props => props.size, props => props.theme.colors.primaryColor);
const toast = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__toast",
  componentId: "sc-15igbbu-4"
})(["width:600px;height:80px;background-color:", ";position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - ", "));z-index:", ";box-shadow:0px -2px 5px 2px #000000;"], props => props.color ? 'green' : 'red', props => props.show ? '190px' : '0px', props => props.show ? '60' : '59');

/***/ }),

/***/ "./components/cards/Discount/styles/index.js":
/*!***************************************************!*\
  !*** ./components/cards/Discount/styles/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/cards/Discount/styles/base.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./components/cards/Discount/styles/containers.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs */ "./components/cards/Discount/styles/inputs.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./components/cards/Discount/styles/text.js");




const styles = {
  Discount: _base__WEBPACK_IMPORTED_MODULE_0__["Discount"],
  Graphic: _base__WEBPACK_IMPORTED_MODULE_0__["Graphic"],
  backgroundGraphic: _containers__WEBPACK_IMPORTED_MODULE_1__["backgroundGraphic"],
  buttonContainer: _containers__WEBPACK_IMPORTED_MODULE_1__["buttonContainer"],
  cardBody: _containers__WEBPACK_IMPORTED_MODULE_1__["cardBody"],
  circle: _containers__WEBPACK_IMPORTED_MODULE_1__["circle"],
  contestRules: _text__WEBPACK_IMPORTED_MODULE_3__["contestRules"],
  discountPrice: _text__WEBPACK_IMPORTED_MODULE_3__["discountPrice"],
  discountTitle: _text__WEBPACK_IMPORTED_MODULE_3__["discountTitle"],
  input: _inputs__WEBPACK_IMPORTED_MODULE_2__["input"],
  toast: _containers__WEBPACK_IMPORTED_MODULE_1__["toast"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/cards/Discount/styles/inputs.js":
/*!****************************************************!*\
  !*** ./components/cards/Discount/styles/inputs.js ***!
  \****************************************************/
/*! exports provided: input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "inputs__input",
  componentId: "iic1do-0"
})(["color:", ";background:transparent;border:4px solid ", ";padding:20px;margin:0 auto;display:block;width:250px;max-width:250px;font-size:40px;line-height:40px;letter-spacing:15px;font-weight:600;text-align:center;&::placeholder{color:inherit;}&:focus{outline-width:none;outline:none;caret-color:transparent;}"], props => props.theme.colors.primaryColor, props => props.theme.colors.primaryColor);

/***/ }),

/***/ "./components/cards/Discount/styles/text.js":
/*!**************************************************!*\
  !*** ./components/cards/Discount/styles/text.js ***!
  \**************************************************/
/*! exports provided: discountPrice, discountTitle, contestRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discountPrice", function() { return discountPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discountTitle", function() { return discountTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contestRules", function() { return contestRules; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const discountPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h3).withConfig({
  displayName: "text__discountPrice",
  componentId: "sc-120vchj-0"
})(["color:", ";font-size:50px;font-weight:600;letter-spacing:2px;position:relative;line-height:50px;height:50px;margin-left:-20px;&::before{content:'%';position:absolute;right:-20px;top:-8px;font-size:20px;}&::after{content:'OFF';position:absolute;right:-43px;bottom:-10px;font-size:20px;font-weight:400;}"], props => props.theme.colors.white);
const discountTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h2).withConfig({
  displayName: "text__discountTitle",
  componentId: "sc-120vchj-1"
})(["color:", ";font-size:30px;text-align:center;text-transform:capitalize;"], props => props.theme.colors.white);
const contestRules = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__contestRules",
  componentId: "sc-120vchj-2"
})(["color:", ";font-size:10px;width:230px;line-height:10px;margin:0 auto;"], props => props.theme.colors.white);

/***/ }),

/***/ "./components/cards/ProductCard/index.js":
/*!***********************************************!*\
  !*** ./components/cards/ProductCard/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core */ "./core/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/cards/ProductCard/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\cards\\ProductCard\\index.js";




const ProductCard = props => {
  const {
    id,
    image,
    name,
    price
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].ProductCard, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].imageContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].productImage, {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].contentContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].name, {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].price, {
        children: ["$", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: _core__WEBPACK_IMPORTED_MODULE_2__["utils"].generatePath('/products', id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].button, {
          children: "more"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./components/cards/ProductCard/styles/base.js":
/*!*****************************************************!*\
  !*** ./components/cards/ProductCard/styles/base.js ***!
  \*****************************************************/
/*! exports provided: ProductCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/cards/ProductCard/styles/button.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./components/cards/ProductCard/styles/images.js");



const ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__ProductCard",
  componentId: "sc-1p0zfte-0"
})(["position:relative;width:320px;height:420px;background-color:", ";border-radius:20px;overflow:hidden;&::before{content:'';position:absolute;top:-50%;width:100%;height:100%;background-color:", ";transform:skewY(345deg);transition:0.5s;}&:hover{&::before{top:-70%;transform:skewY(390deg);}", "{max-width:50%;}", "{top:-40px;opacity:1;}}&::after{content:'Category';position:absolute;bottom:0;left:0;font-weight:600;font-size:8em;color:rgba(0,0,0,0.1);}"], props => props.theme.colors.baseColor, props => props.theme.colors.tertiaryColor, _images__WEBPACK_IMPORTED_MODULE_2__["productImage"], _button__WEBPACK_IMPORTED_MODULE_1__["button"]);

/***/ }),

/***/ "./components/cards/ProductCard/styles/button.js":
/*!*******************************************************!*\
  !*** ./components/cards/ProductCard/styles/button.js ***!
  \*******************************************************/
/*! exports provided: button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const button = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._button).withConfig({
  displayName: "button",
  componentId: "sc-14d960e-0"
})(["position:relative;top:200px;opacity:0;padding:10px 30px;margin-top:15px;color:", ";background-color:", ";text-transform:uppercase;transition:0.3s;border-radius:5px;"], props => props.theme.colors.white, props => props.theme.colors.tertiaryColor);

/***/ }),

/***/ "./components/cards/ProductCard/styles/containers.js":
/*!***********************************************************!*\
  !*** ./components/cards/ProductCard/styles/containers.js ***!
  \***********************************************************/
/*! exports provided: imageContainer, contentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageContainer", function() { return imageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentContainer", function() { return contentContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const imageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__imageContainer",
  componentId: "sc-8xp5vc-0"
})(["position:relative;width:100%;display:flex;justify-content:center;align-items:center;padding-top:20px;height:60%;z-index:1;"]);
const contentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__contentContainer",
  componentId: "sc-8xp5vc-1"
})(["position:relative;padding:20px;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:1;"]);

/***/ }),

/***/ "./components/cards/ProductCard/styles/images.js":
/*!*******************************************************!*\
  !*** ./components/cards/ProductCard/styles/images.js ***!
  \*******************************************************/
/*! exports provided: productImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productImage", function() { return productImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const productImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "images__productImage",
  componentId: "sc-16menyf-0"
})(["max-width:100%;transition:0.3s;"]);

/***/ }),

/***/ "./components/cards/ProductCard/styles/index.js":
/*!******************************************************!*\
  !*** ./components/cards/ProductCard/styles/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/cards/ProductCard/styles/base.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/cards/ProductCard/styles/button.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./components/cards/ProductCard/styles/containers.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./components/cards/ProductCard/styles/images.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./components/cards/ProductCard/styles/text.js");





const styles = {
  ProductCard: _base__WEBPACK_IMPORTED_MODULE_0__["ProductCard"],
  button: _button__WEBPACK_IMPORTED_MODULE_1__["button"],
  contentContainer: _containers__WEBPACK_IMPORTED_MODULE_2__["contentContainer"],
  imageContainer: _containers__WEBPACK_IMPORTED_MODULE_2__["imageContainer"],
  name: _text__WEBPACK_IMPORTED_MODULE_4__["name"],
  price: _text__WEBPACK_IMPORTED_MODULE_4__["price"],
  productImage: _images__WEBPACK_IMPORTED_MODULE_3__["productImage"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/cards/ProductCard/styles/text.js":
/*!*****************************************************!*\
  !*** ./components/cards/ProductCard/styles/text.js ***!
  \*****************************************************/
/*! exports provided: name, price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "price", function() { return price; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const name = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h3).withConfig({
  displayName: "text__name",
  componentId: "sc-18vjie2-0"
})(["font-size:18px;color:", ";font-weight:500;text-transform:uppercase;letter-spacing:1px;"], props => props.theme.colors.tertiaryColor);
const price = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h4).withConfig({
  displayName: "text__price",
  componentId: "sc-18vjie2-1"
})(["font-size:24px;color:", ";font-weight:500;letter-spacing:1px;"], props => props.theme.colors.white);

/***/ }),

/***/ "./components/cards/index.js":
/*!***********************************!*\
  !*** ./components/cards/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Discount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discount */ "./components/cards/Discount/index.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./components/cards/ProductCard/index.js");


const cards = {
  Discount: _Discount__WEBPACK_IMPORTED_MODULE_0__["default"],
  ProductCard: _ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Buttons, Cards, Modals, Navigation, Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./components/buttons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return _buttons__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./components/cards/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return _cards__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals */ "./components/modals/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _modals__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "./components/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./components/pages/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return _pages__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./components/modals/CardModal/index.js":
/*!**********************************************!*\
  !*** ./components/modals/CardModal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/modals/CardModal/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\modals\\CardModal\\index.js";


const CardModal = props => {
  const {
    children,
    closeModal,
    show
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].CardModal, {
    show: show,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].close, {
      onClick: closeModal,
      children: "X"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].modalContent, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardModal);

/***/ }),

/***/ "./components/modals/CardModal/styles/base.js":
/*!****************************************************!*\
  !*** ./components/modals/CardModal/styles/base.js ***!
  \****************************************************/
/*! exports provided: CardModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModal", function() { return CardModal; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardModal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__CardModal",
  componentId: "sc-1n6sk3t-0"
})(["height:100vh;width:100vw;position:absolute;z-index:", ";background-color:rgb(0,0,0,0.6);transition:0.5s;display:flex;justify-content:center;align-items:center;"], props => props.show ? 50 : -1);

/***/ }),

/***/ "./components/modals/CardModal/styles/buttons.js":
/*!*******************************************************!*\
  !*** ./components/modals/CardModal/styles/buttons.js ***!
  \*******************************************************/
/*! exports provided: close */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const close = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._button).withConfig({
  displayName: "buttons__close",
  componentId: "qhiy1g-0"
})(["color:", ";font-size:2rem;position:absolute;top:50px;right:50px;cursor:pointer;"], props => props.theme.colors.white);

/***/ }),

/***/ "./components/modals/CardModal/styles/containers.js":
/*!**********************************************************!*\
  !*** ./components/modals/CardModal/styles/containers.js ***!
  \**********************************************************/
/*! exports provided: modalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalContent", function() { return modalContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const modalContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__modalContent",
  componentId: "sc-1f83ydv-0"
})(["z-index:55;"]);

/***/ }),

/***/ "./components/modals/CardModal/styles/index.js":
/*!*****************************************************!*\
  !*** ./components/modals/CardModal/styles/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/modals/CardModal/styles/base.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./components/modals/CardModal/styles/buttons.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./components/modals/CardModal/styles/containers.js");



const styles = {
  CardModal: _base__WEBPACK_IMPORTED_MODULE_0__["CardModal"],
  close: _buttons__WEBPACK_IMPORTED_MODULE_1__["close"],
  modalContent: _containers__WEBPACK_IMPORTED_MODULE_2__["modalContent"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/modals/index.js":
/*!************************************!*\
  !*** ./components/modals/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardModal */ "./components/modals/CardModal/index.js");

const modals = {
  CardModal: _CardModal__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./components/navigation/AdminMain/index.js":
/*!**************************************************!*\
  !*** ./components/navigation/AdminMain/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/navigation/AdminMain/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\navigation\\AdminMain\\index.js";




const AdminMain = props => {
  const {
    theme
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].AdminMain, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].navTitle, {
      children: "puppies nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].linkContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/products",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].button, {
          backgroundColor: theme.colors.primaryColor,
          children: "PRODUCTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].button, {
        backgroundColor: theme.colors.secondaryColor,
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].button, {
        backgroundColor: theme.colors.tertiaryColor,
        children: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(AdminMain));

/***/ }),

/***/ "./components/navigation/AdminMain/styles/base.js":
/*!********************************************************!*\
  !*** ./components/navigation/AdminMain/styles/base.js ***!
  \********************************************************/
/*! exports provided: AdminMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMain", function() { return AdminMain; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AdminMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "base__AdminMain",
  componentId: "sc-6f7i6r-0"
})(["position:absolute;height:100vh;width:300px;top:0;left:0;background-color:", ";display:flex;flex-direction:column;align-items:center;box-shadow:6px 0px 7px 1px ", ";border-left:1px solid ", ";"], props => props.theme.colors.baseColor, props => props.theme.colors.baseColorDark, props => props.theme.colors.baseColorDark);

/***/ }),

/***/ "./components/navigation/AdminMain/styles/buttons.js":
/*!***********************************************************!*\
  !*** ./components/navigation/AdminMain/styles/buttons.js ***!
  \***********************************************************/
/*! exports provided: button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const button = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._button).withConfig({
  displayName: "buttons__button",
  componentId: "sc-1smxmxn-0"
})(["height:50px;width:250px;display:block;margin:10px auto;transition:all 0.3s ease-in-out;position:relative;overflow:hidden;color:", ";&:hover{background-color:", ";&::before{left:100%;}}&::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,", ",transparent);transition:0.5s;}"], props => props.theme.colors.white, props => props.backgroundColor, props => props.theme.colors.white);

/***/ }),

/***/ "./components/navigation/AdminMain/styles/containers.js":
/*!**************************************************************!*\
  !*** ./components/navigation/AdminMain/styles/containers.js ***!
  \**************************************************************/
/*! exports provided: linkContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkContainer", function() { return linkContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const linkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__linkContainer",
  componentId: "a6jf6i-0"
})(["flex-grow:2;"]);

/***/ }),

/***/ "./components/navigation/AdminMain/styles/index.js":
/*!*********************************************************!*\
  !*** ./components/navigation/AdminMain/styles/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/navigation/AdminMain/styles/base.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./components/navigation/AdminMain/styles/buttons.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./components/navigation/AdminMain/styles/containers.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./components/navigation/AdminMain/styles/text.js");




const styles = {
  AdminMain: _base__WEBPACK_IMPORTED_MODULE_0__["AdminMain"],
  button: _buttons__WEBPACK_IMPORTED_MODULE_1__["button"],
  linkContainer: _containers__WEBPACK_IMPORTED_MODULE_2__["linkContainer"],
  navTitle: _text__WEBPACK_IMPORTED_MODULE_3__["navTitle"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/navigation/AdminMain/styles/text.js":
/*!********************************************************!*\
  !*** ./components/navigation/AdminMain/styles/text.js ***!
  \********************************************************/
/*! exports provided: navTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navTitle", function() { return navTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const navTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h1).withConfig({
  displayName: "text__navTitle",
  componentId: "sc-49t2iq-0"
})(["font-size:2rem;text-transform:uppercase;display:block;height:60px;position:relative;color:white;&::after{content:'';position:absolute;height:2px;background-color:white;bottom:0;width:110%;left:-5%;border:1px solid white}"]);

/***/ }),

/***/ "./components/navigation/index.js":
/*!****************************************!*\
  !*** ./components/navigation/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminMain */ "./components/navigation/AdminMain/index.js");

const navigation = {
  AdminMain: _AdminMain__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./components/pages/AdminDashboard/content/Card.js":
/*!*********************************************************!*\
  !*** ./components/pages/AdminDashboard/content/Card.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets */ "./assets/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./components/pages/AdminDashboard/content/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./components/pages/AdminDashboard/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\pages\\AdminDashboard\\content\\Card.js";





const Card = props => {
  const {
    color,
    theme
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].card, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_3__["default"].cardImageTop, {
      color: color
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardTop, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].productName, {
        color: color,
        children: "puppy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardBody, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardInfoContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].infoTitle, {
          children: "viewed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].infoData, {
          children: "154"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardInfoContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].infoTitle, {
          children: "sold"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].infoData, {
          children: "54"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardInfoContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].infoTitle, {
          children: "ratio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].infoData, {
          children: "33%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardFooter, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardSelectButton, {
        children: "day"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardSelectButton, {
        children: "month"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].cardSelectButton, {
        children: "year"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].svgContainer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets__WEBPACK_IMPORTED_MODULE_2__["svgs"].Cog, {
          color: color,
          height: "20px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(Card));

/***/ }),

/***/ "./components/pages/AdminDashboard/content/CardImageTop.js":
/*!*****************************************************************!*\
  !*** ./components/pages/AdminDashboard/content/CardImageTop.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./components/pages/AdminDashboard/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\pages\\AdminDashboard\\content\\CardImageTop.js";


const cardImageTop = props => {
  const {
    color
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["default"].CardImageTop, {
    color: color
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (cardImageTop);

/***/ }),

/***/ "./components/pages/AdminDashboard/content/index.js":
/*!**********************************************************!*\
  !*** ./components/pages/AdminDashboard/content/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./components/pages/AdminDashboard/content/Card.js");
/* harmony import */ var _CardImageTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardImageTop */ "./components/pages/AdminDashboard/content/CardImageTop.js");


const content = {
  Card: _Card__WEBPACK_IMPORTED_MODULE_0__["default"],
  cardImageTop: _CardImageTop__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ }),

/***/ "./components/pages/AdminDashboard/index.js":
/*!**************************************************!*\
  !*** ./components/pages/AdminDashboard/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core */ "./core/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content */ "./components/pages/AdminDashboard/content/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./components/pages/AdminDashboard/styles/index.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../navigation */ "./components/navigation/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\pages\\AdminDashboard\\index.js";









const AdminDashboard = props => {
  const {
    theme
  } = props;
  const productsState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.products);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    _store__WEBPACK_IMPORTED_MODULE_5__["actions"].productActions.getAll(dispatch);
  }, []);

  const generateProductCards = products => {
    const grid = _core__WEBPACK_IMPORTED_MODULE_4__["utils"].generateGrid(products);
    return grid.map(row => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].cardRow, {
      children: row.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_content__WEBPACK_IMPORTED_MODULE_6__["default"].Card, {
        color: theme.colors.tertiaryColor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].AdminDashboard, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navigation__WEBPACK_IMPORTED_MODULE_8__["default"].AdminMain, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].cardContainer, {
      children: productsState.data && generateProductCards(productsState.data.products)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(AdminDashboard));

/***/ }),

/***/ "./components/pages/AdminDashboard/styles/base.js":
/*!********************************************************!*\
  !*** ./components/pages/AdminDashboard/styles/base.js ***!
  \********************************************************/
/*! exports provided: AdminDashboard, CardImageTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboard", function() { return AdminDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageTop", function() { return CardImageTop; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const AdminDashboard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._page).withConfig({
  displayName: "base__AdminDashboard",
  componentId: "sc-1ff6izn-0"
})(["position:relative;background-color:", ";"], props => props.theme.colors.baseColorDark);
const CardImageTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__CardImageTop",
  componentId: "sc-1ff6izn-1"
})(["position:absolute;top:-20px;left:30px;height:60px;width:100px;background-color:", ";"], props => props.color);

/***/ }),

/***/ "./components/pages/AdminDashboard/styles/containers.js":
/*!**************************************************************!*\
  !*** ./components/pages/AdminDashboard/styles/containers.js ***!
  \**************************************************************/
/*! exports provided: card, cardBody, cardContainer, cardFooter, cardInfoContainer, cardRow, cardSelectButton, cardTop, svgContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBody", function() { return cardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardContainer", function() { return cardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardFooter", function() { return cardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardInfoContainer", function() { return cardInfoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardRow", function() { return cardRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSelectButton", function() { return cardSelectButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTop", function() { return cardTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgContainer", function() { return svgContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__card",
  componentId: "hxce4u-0"
})(["height:250px;width:400px;background-color:", ";border-radius:5px;margin:20px;position:relative;"], props => props.theme.colors.baseColor);
const cardBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardBody",
  componentId: "hxce4u-1"
})(["width:100%;display:flex;justify-content:space-between;align-items:center;height:150px;"]);
const cardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardContainer",
  componentId: "hxce4u-2"
})(["height:fit-content;max-height:100vh;width:calc(100% - 400px);margin-left:300px;padding:50px;"]);
const cardFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardFooter",
  componentId: "hxce4u-3"
})(["height:60px;width:calc(100% - 30px);display:flex;justify-content:space-between;margin:0 15px;align-items:center;"]);
const cardInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardInfoContainer",
  componentId: "hxce4u-4"
})(["display:flex;flex-direction:column;align-items:center;width:110px;"]);
const cardRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._cardRow).withConfig({
  displayName: "containers__cardRow",
  componentId: "hxce4u-5"
})([""]);
const cardSelectButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._button).withConfig({
  displayName: "containers__cardSelectButton",
  componentId: "hxce4u-6"
})(["font-size:20px;text-transform:capitalize;color:", ""], props => props.theme.colors.quatenaryColor);
const cardTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "containers__cardTop",
  componentId: "hxce4u-7"
})(["height:fit-content;justify-content:flex-end;display:flex;align-items:flex-end;width:100%;"]);
const svgContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__svgContainer",
  componentId: "hxce4u-8"
})(["width:50px;display:flex;justify-content:center;align-items:center;"]);

/***/ }),

/***/ "./components/pages/AdminDashboard/styles/index.js":
/*!*********************************************************!*\
  !*** ./components/pages/AdminDashboard/styles/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/pages/AdminDashboard/styles/base.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./components/pages/AdminDashboard/styles/containers.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./components/pages/AdminDashboard/styles/text.js");



const styles = {
  AdminDashboard: _base__WEBPACK_IMPORTED_MODULE_0__["AdminDashboard"],
  CardImageTop: _base__WEBPACK_IMPORTED_MODULE_0__["CardImageTop"],
  card: _containers__WEBPACK_IMPORTED_MODULE_1__["card"],
  cardBody: _containers__WEBPACK_IMPORTED_MODULE_1__["cardBody"],
  cardContainer: _containers__WEBPACK_IMPORTED_MODULE_1__["cardContainer"],
  cardFooter: _containers__WEBPACK_IMPORTED_MODULE_1__["cardFooter"],
  cardInfoContainer: _containers__WEBPACK_IMPORTED_MODULE_1__["cardInfoContainer"],
  cardRow: _containers__WEBPACK_IMPORTED_MODULE_1__["cardRow"],
  cardSelectButton: _containers__WEBPACK_IMPORTED_MODULE_1__["cardSelectButton"],
  cardTop: _containers__WEBPACK_IMPORTED_MODULE_1__["cardTop"],
  infoData: _text__WEBPACK_IMPORTED_MODULE_2__["infoData"],
  infoTitle: _text__WEBPACK_IMPORTED_MODULE_2__["infoTitle"],
  productName: _text__WEBPACK_IMPORTED_MODULE_2__["productName"],
  svgContainer: _containers__WEBPACK_IMPORTED_MODULE_1__["svgContainer"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/pages/AdminDashboard/styles/text.js":
/*!********************************************************!*\
  !*** ./components/pages/AdminDashboard/styles/text.js ***!
  \********************************************************/
/*! exports provided: productName, infoTitle, infoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productName", function() { return productName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoTitle", function() { return infoTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoData", function() { return infoData; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const productName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__productName",
  componentId: "sc-1ba8cdm-0"
})(["color:", ";text-align:right;font-size:40px;text-transform:uppercase;padding-right:10px;"], props => props.color);
const infoTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__infoTitle",
  componentId: "sc-1ba8cdm-1"
})(["color:", ";font-size:20px;display:block;text-transform:uppercase;"], props => props.theme.colors.quatenaryColor);
const infoData = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__infoData",
  componentId: "sc-1ba8cdm-2"
})(["color:", ";font-size:30px;display:block;"], props => props.theme.colors.white);

/***/ }),

/***/ "./components/pages/Landing/index.js":
/*!*******************************************!*\
  !*** ./components/pages/Landing/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/pages/Landing/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\pages\\Landing\\index.js";



const Landing = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].Landing, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].pageTitle, {
      children: ["Welcome to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].colorAccent, {
        children: "FloatPlane"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 20
      }, undefined), " Shopify"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Creator Justin ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].colorAccent, {
        children: '{ Heisey }'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 26
      }, undefined), " Heisler"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "try app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/pages/Landing/styles/base.js":
/*!*************************************************!*\
  !*** ./components/pages/Landing/styles/base.js ***!
  \*************************************************/
/*! exports provided: Landing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return Landing; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const Landing = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._page).withConfig({
  displayName: "base__Landing",
  componentId: "lzaxwn-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;color:", ""], props => props.theme.colors.white);

/***/ }),

/***/ "./components/pages/Landing/styles/index.js":
/*!**************************************************!*\
  !*** ./components/pages/Landing/styles/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/pages/Landing/styles/base.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./components/pages/Landing/styles/text.js");


const styles = {
  Landing: _base__WEBPACK_IMPORTED_MODULE_0__["Landing"],
  colorAccent: _text__WEBPACK_IMPORTED_MODULE_1__["colorAccent"],
  pageTitle: _text__WEBPACK_IMPORTED_MODULE_1__["pageTitle"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/pages/Landing/styles/text.js":
/*!*************************************************!*\
  !*** ./components/pages/Landing/styles/text.js ***!
  \*************************************************/
/*! exports provided: pageTitle, colorAccent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTitle", function() { return pageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorAccent", function() { return colorAccent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const pageTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h1).withConfig({
  displayName: "text__pageTitle",
  componentId: "sc-4g3svs-0"
})([""]);
const colorAccent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__colorAccent",
  componentId: "sc-4g3svs-1"
})(["font-size:inherit;color:", ""], props => props.theme.colors.tertiaryColor);

/***/ }),

/***/ "./components/pages/Product/index.js":
/*!*******************************************!*\
  !*** ./components/pages/Product/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ */ "./components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/pages/Product/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\pages\\Product\\index.js";







const ProductPage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const id = router.query.id;
  const {
    0: showModal,
    1: showModalHandler
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const product = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.products.data);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    _store__WEBPACK_IMPORTED_MODULE_5__["actions"].productActions.getOne(dispatch, id);
  }, []);

  const handleShow = () => {
    showModalHandler(!showModal);
  };

  const hideModal = () => {
    showModalHandler(false);
  };

  const generateProductCard = product => {
    let price = '';
    let title = '';
    let subTitle = '';
    let img = '';

    if (product) {
      title = product.title;

      if (product.image) {
        img = product.image.src;
      }

      if (product.variants) {
        price = product.variants[0].price;
        subTitle = product.variants[0].options1;
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].Card, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].imageBox, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].productImage, {
          src: img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].cardContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].cardHeader, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].priceContainer, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].dollar, {
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].price, {
              children: price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].cardBody, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].name, {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].subTitle, {
            children: subTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].cardFooter, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Buttons"].Pill, {
            text: "purchase"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].discount, {
            onClick: handleShow,
            children: "apply discount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].ProductPage, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Modals"].CardModal, {
      closeModal: hideModal,
      show: showModal,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Cards"].Discount, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].backgroundText, {
      children: "CATEGORY text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].cardContainer, {
      children: product && generateProductCard(product)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ }),

/***/ "./components/pages/Product/styles/base.js":
/*!*************************************************!*\
  !*** ./components/pages/Product/styles/base.js ***!
  \*************************************************/
/*! exports provided: ProductPage, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const ProductPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._page).withConfig({
  displayName: "base__ProductPage",
  componentId: "sc-1jl7jio-0"
})(["position:relative;max-height:100vh;overflow:hidden;width:100%;height:100%;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "base__Card",
  componentId: "sc-1jl7jio-1"
})(["display:flex;align-items:center;z-index:5;"]);

/***/ }),

/***/ "./components/pages/Product/styles/buttons.js":
/*!****************************************************!*\
  !*** ./components/pages/Product/styles/buttons.js ***!
  \****************************************************/
/*! exports provided: purchaseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseButton", function() { return purchaseButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const purchaseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._button).withConfig({
  displayName: "buttons__purchaseButton",
  componentId: "oci6g4-0"
})([""]);

/***/ }),

/***/ "./components/pages/Product/styles/containers.js":
/*!*******************************************************!*\
  !*** ./components/pages/Product/styles/containers.js ***!
  \*******************************************************/
/*! exports provided: cardContainer, imageBox, cardContent, cardHeader, cardBody, priceContainer, cardFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardContainer", function() { return cardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageBox", function() { return imageBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardContent", function() { return cardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBody", function() { return cardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceContainer", function() { return priceContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardFooter", function() { return cardFooter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const cardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardContainer",
  componentId: "hshlyq-0"
})(["display:flex;justify-content:center;align-items:center;height:100vh;width:80%;margin-left:0;"]);
const imageBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__imageBox",
  componentId: "hshlyq-1"
})(["background:", ";background:linear-gradient(210deg,", " 38%,", " 61%);height:600px;width:500px;position:relative;box-shadow:-10px 5px 15px 5px ", ";"], props => props.theme.colors.primaryColor, props => props.theme.colors.quatenaryColor, props => props.theme.colors.primaryColor, props => props.theme.colors.baseColorDark);
const cardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardContent",
  componentId: "hshlyq-2"
})(["height:700px;background-color:", ";width:500px;box-shadow:-3px 5px 15px 5px ", ";"], props => props.theme.colors.baseColorLight, props => props.theme.colors.baseColorDark);
const cardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardHeader",
  componentId: "hshlyq-3"
})(["height:20%;display:flex;justify-content:flex-end;width:90%;margin:0 auto;align-items:center;"]);
const cardBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__cardBody",
  componentId: "hshlyq-4"
})(["width:90%;height:60%;margin:0 auto;"]);
const priceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containers__priceContainer",
  componentId: "hshlyq-5"
})(["display:flex;width:fit-content;align-items:flex-start;"]);
const cardFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "containers__cardFooter",
  componentId: "hshlyq-6"
})(["height:20%;display:flex;justify-content:center;align-items:center;flex-direction:column;"]);

/***/ }),

/***/ "./components/pages/Product/styles/images.js":
/*!***************************************************!*\
  !*** ./components/pages/Product/styles/images.js ***!
  \***************************************************/
/*! exports provided: productImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productImage", function() { return productImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const productImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "images__productImage",
  componentId: "sc-16vs38z-0"
})(["height:400px;position:absolute;left:-100px;top:90px;"]);

/***/ }),

/***/ "./components/pages/Product/styles/index.js":
/*!**************************************************!*\
  !*** ./components/pages/Product/styles/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/pages/Product/styles/base.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./components/pages/Product/styles/buttons.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./components/pages/Product/styles/containers.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./components/pages/Product/styles/images.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./components/pages/Product/styles/text.js");





const styles = {
  Card: _base__WEBPACK_IMPORTED_MODULE_0__["Card"],
  ProductPage: _base__WEBPACK_IMPORTED_MODULE_0__["ProductPage"],
  backgroundText: _text__WEBPACK_IMPORTED_MODULE_4__["backgroundText"],
  cardBody: _containers__WEBPACK_IMPORTED_MODULE_2__["cardBody"],
  cardContainer: _containers__WEBPACK_IMPORTED_MODULE_2__["cardContainer"],
  cardContent: _containers__WEBPACK_IMPORTED_MODULE_2__["cardContent"],
  cardFooter: _containers__WEBPACK_IMPORTED_MODULE_2__["cardFooter"],
  cardHeader: _containers__WEBPACK_IMPORTED_MODULE_2__["cardHeader"],
  discount: _text__WEBPACK_IMPORTED_MODULE_4__["discount"],
  dollar: _text__WEBPACK_IMPORTED_MODULE_4__["dollar"],
  name: _text__WEBPACK_IMPORTED_MODULE_4__["name"],
  price: _text__WEBPACK_IMPORTED_MODULE_4__["price"],
  priceContainer: _containers__WEBPACK_IMPORTED_MODULE_2__["priceContainer"],
  productImage: _images__WEBPACK_IMPORTED_MODULE_3__["productImage"],
  purchaseButton: _buttons__WEBPACK_IMPORTED_MODULE_1__["purchaseButton"],
  subTitle: _text__WEBPACK_IMPORTED_MODULE_4__["subTitle"],
  imageBox: _containers__WEBPACK_IMPORTED_MODULE_2__["imageBox"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/pages/Product/styles/text.js":
/*!*************************************************!*\
  !*** ./components/pages/Product/styles/text.js ***!
  \*************************************************/
/*! exports provided: backgroundText, price, dollar, name, subTitle, discount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundText", function() { return backgroundText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "price", function() { return price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dollar", function() { return dollar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTitle", function() { return subTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discount", function() { return discount; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const backgroundText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h2).withConfig({
  displayName: "text__backgroundText",
  componentId: "eytu4g-0"
})(["color:", ";font-size:20rem;transform:rotate(-90deg);position:absolute;bottom:1%;left:5%;width:20rem;text-transform:uppercase;white-space:nowrap;opacity:0.6;"], props => props.theme.colors.baseColorLight);
const price = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h3).withConfig({
  displayName: "text__price",
  componentId: "eytu4g-1"
})(["font-size:3rem;text-transform:uppercase;color:", ";display:block;"], props => props.theme.colors.white);
const dollar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__dollar",
  componentId: "eytu4g-2"
})(["padding-top:0.4rem;padding-right:0.5rem;color:", ";font-size:2rem;display:block;"], props => props.theme.colors.white);
const name = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h2).withConfig({
  displayName: "text__name",
  componentId: "eytu4g-3"
})(["color:", ";font-size:2.5rem;text-transform:capitalize;font-weight:600;"], props => props.theme.colors.white);
const subTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._h3).withConfig({
  displayName: "text__subTitle",
  componentId: "eytu4g-4"
})(["color:", ";font-size:1.5rem;text-transform:capitalize;font-weight:300;letter-spacing:0.05rem;"], props => props.theme.colors.white);
const discount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__discount",
  componentId: "eytu4g-5"
})(["color:", ";text-transform:capitalize;padding-top:10px;cursor:pointer;"], props => props.theme.colors.white);

/***/ }),

/***/ "./components/pages/Products/index.js":
/*!********************************************!*\
  !*** ./components/pages/Products/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ */ "./components/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core */ "./core/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/pages/Products/styles/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\components\\pages\\Products\\index.js";







const Products = props => {
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.products.data);
  console.log(products);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _store__WEBPACK_IMPORTED_MODULE_5__["actions"].productActions.getAll(dispatch);
  }, []);

  const generateProductCards = products => {
    const grid = _core__WEBPACK_IMPORTED_MODULE_4__["utils"].generateGrid(products);
    return grid.map((row, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].cardRow, {
      children: row.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_3__["Cards"].ProductCard, {
        id: product.id,
        image: product.image.src,
        name: product.title,
        price: product.variants[0].price
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined))
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].Products, {
    children: products && generateProductCards(products.products)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/pages/Products/styles/base.js":
/*!**************************************************!*\
  !*** ./components/pages/Products/styles/base.js ***!
  \**************************************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const Products = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._page).withConfig({
  displayName: "base__Products",
  componentId: "r6xzok-0"
})(["background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:100vw;overflow-x:hidden;"], props => props.theme.colors.baseColorDark);

/***/ }),

/***/ "./components/pages/Products/styles/containers.js":
/*!********************************************************!*\
  !*** ./components/pages/Products/styles/containers.js ***!
  \********************************************************/
/*! exports provided: cardRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardRow", function() { return cardRow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ "./core/index.js");


const cardRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_core__WEBPACK_IMPORTED_MODULE_1__["templates"]._cardRow).withConfig({
  displayName: "containers__cardRow",
  componentId: "sc-6w2xq3-0"
})(["width:80%;justify-content:space-between;margin:30px;"]);

/***/ }),

/***/ "./components/pages/Products/styles/index.js":
/*!***************************************************!*\
  !*** ./components/pages/Products/styles/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./components/pages/Products/styles/base.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./components/pages/Products/styles/containers.js");


const styles = {
  Products: _base__WEBPACK_IMPORTED_MODULE_0__["Products"],
  cardRow: _containers__WEBPACK_IMPORTED_MODULE_1__["cardRow"]
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/pages/index.js":
/*!***********************************!*\
  !*** ./components/pages/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard */ "./components/pages/AdminDashboard/index.js");
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing */ "./components/pages/Landing/index.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/pages/Product/index.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products */ "./components/pages/Products/index.js");




const pages = {
  AdminDashboard: _AdminDashboard__WEBPACK_IMPORTED_MODULE_0__["default"],
  Landing: _Landing__WEBPACK_IMPORTED_MODULE_1__["default"],
  Product: _Product__WEBPACK_IMPORTED_MODULE_2__["default"],
  Products: _Products__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (pages);

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! exports provided: templates, themes, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./core/templates/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return _templates__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./core/theme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./core/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./core/templates/_button.js":
/*!***********************************!*\
  !*** ./core/templates/_button.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "_button",
  componentId: "el9330-0"
})(["border:", ";background-color:", ";cursor:pointer;"], props => props['border'] ? props['border'] : 'none', props => props['background-color'] ? props['background-color'] : 'transparent');

/* harmony default export */ __webpack_exports__["default"] = (_button);

/***/ }),

/***/ "./core/templates/_cardRow.js":
/*!************************************!*\
  !*** ./core/templates/_cardRow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const cardRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "_cardRow__cardRow",
  componentId: "sc-1anoxoy-0"
})(["display:flex;justify-content:", ";height:", ";width:", ";"], props => props['justify-content'] ? props['justify-content'] : 'space-between', props => props['height'] ? props['height'] : 'fit-content', props => props['width'] ? props['width'] : '100%');
/* harmony default export */ __webpack_exports__["default"] = (cardRow);

/***/ }),

/***/ "./core/templates/_h1.js":
/*!*******************************!*\
  !*** ./core/templates/_h1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _h1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "_h1",
  componentId: "sc-1qnjsor-0"
})(["font-size:", ";"], props => props['font-size'] ? props['font-size'] : '3rem');

/* harmony default export */ __webpack_exports__["default"] = (_h1);

/***/ }),

/***/ "./core/templates/_h2.js":
/*!*******************************!*\
  !*** ./core/templates/_h2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _h2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "_h2",
  componentId: "sc-1aegezp-0"
})([""]);

/* harmony default export */ __webpack_exports__["default"] = (_h2);

/***/ }),

/***/ "./core/templates/_h3.js":
/*!*******************************!*\
  !*** ./core/templates/_h3.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _h3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "_h3",
  componentId: "sc-1uthp60-0"
})([""]);

/* harmony default export */ __webpack_exports__["default"] = (_h3);

/***/ }),

/***/ "./core/templates/_h4.js":
/*!*******************************!*\
  !*** ./core/templates/_h4.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _h4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "_h4",
  componentId: "gp2nsq-0"
})([""]);

/* harmony default export */ __webpack_exports__["default"] = (_h4);

/***/ }),

/***/ "./core/templates/_page.js":
/*!*********************************!*\
  !*** ./core/templates/_page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _page = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "_page",
  componentId: "r2tm55-0"
})(["min-height:100vh;min-width:100vw;background-color:", ""], props => props['background-color'] ? props['background-color'] : props.theme.colors.baseColor);

/* harmony default export */ __webpack_exports__["default"] = (_page);

/***/ }),

/***/ "./core/templates/_svg.js":
/*!********************************!*\
  !*** ./core/templates/_svg.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const _svg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  role: 'img',
  focusable: "false"
})``;

/* harmony default export */ __webpack_exports__["default"] = (_svg);

/***/ }),

/***/ "./core/templates/globalStyles.js":
/*!****************************************!*\
  !*** ./core/templates/globalStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    max-height: 100vh !important;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./core/templates/index.js":
/*!*********************************!*\
  !*** ./core/templates/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalStyles */ "./core/templates/globalStyles.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_button */ "./core/templates/_button.js");
/* harmony import */ var _cardRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cardRow */ "./core/templates/_cardRow.js");
/* harmony import */ var _h1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_h1 */ "./core/templates/_h1.js");
/* harmony import */ var _h2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_h2 */ "./core/templates/_h2.js");
/* harmony import */ var _h3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_h3 */ "./core/templates/_h3.js");
/* harmony import */ var _h4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_h4 */ "./core/templates/_h4.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_page */ "./core/templates/_page.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_svg */ "./core/templates/_svg.js");









const templates = {
  GlobalStyle: _globalStyles__WEBPACK_IMPORTED_MODULE_0__["default"],
  _button: _button__WEBPACK_IMPORTED_MODULE_1__["default"],
  _cardRow: _cardRow__WEBPACK_IMPORTED_MODULE_2__["default"],
  _h1: _h1__WEBPACK_IMPORTED_MODULE_3__["default"],
  _h2: _h2__WEBPACK_IMPORTED_MODULE_4__["default"],
  _h3: _h3__WEBPACK_IMPORTED_MODULE_5__["default"],
  _h4: _h4__WEBPACK_IMPORTED_MODULE_6__["default"],
  _page: _page__WEBPACK_IMPORTED_MODULE_7__["default"],
  _svg: _svg__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (templates);

/***/ }),

/***/ "./core/theme/default.js":
/*!*******************************!*\
  !*** ./core/theme/default.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultTheme = {
  colors: {
    baseColorDark: '#000',
    baseColor: '#272727',
    baseColorLight: '#747474',
    white: '#fff',
    primaryColorLight: '#ffa282',
    primaryColor: '#ff652f',
    primaryColorDark: '#a6411e',
    secondaryColorLight: '#5188cf',
    secondaryColor: '#3b6294',
    secondaryColorDark: '#243b59',
    tertiaryColorLight: '#1be393',
    tertiaryColor: '#14a76c',
    tertiaryColorDark: '#0c613f',
    quatenaryColorLight: '#faed82',
    quatenaryColor: '#ffe400',
    quatenaryColorDark: '#a89703'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./core/theme/index.js":
/*!*****************************!*\
  !*** ./core/theme/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./core/theme/default.js");

const themes = {
  defaultTheme: _default__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "./core/utilities/generateGrid.js":
/*!****************************************!*\
  !*** ./core/utilities/generateGrid.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const generateGrid = products => {
  const grid = [];
  let row = [];

  for (let x = 0; x < products.length; x++) {
    if (x !== 0) {
      if (x % 3 === 0) {
        grid.push(row);
        row = [];
        row.push(products[x]);
      } else {
        row.push(products[x]);
      }
    } else {
      row.push(products[x]);
    }
  }

  if (row.length !== 0) {
    grid.push(row);
  }

  return grid;
};

/* harmony default export */ __webpack_exports__["default"] = (generateGrid);

/***/ }),

/***/ "./core/utilities/generatePath.js":
/*!****************************************!*\
  !*** ./core/utilities/generatePath.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const generatePath = (base, endpoint) => {
  const path = base + '/' + endpoint;
  return path;
};

/* harmony default export */ __webpack_exports__["default"] = (generatePath);

/***/ }),

/***/ "./core/utilities/handleState.js":
/*!***************************************!*\
  !*** ./core/utilities/handleState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const handleState = (state, handler) => handler(state);

/* harmony default export */ __webpack_exports__["default"] = (handleState);

/***/ }),

/***/ "./core/utilities/index.js":
/*!*********************************!*\
  !*** ./core/utilities/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateGrid */ "./core/utilities/generateGrid.js");
/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatePath */ "./core/utilities/generatePath.js");
/* harmony import */ var _handleState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleState */ "./core/utilities/handleState.js");



const utilities = {
  generateGrid: _generateGrid__WEBPACK_IMPORTED_MODULE_0__["default"],
  generatePath: _generatePath__WEBPACK_IMPORTED_MODULE_1__["default"],
  handleState: _handleState__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (utilities);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./components/index.js");

var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\pages\\products\\[id].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Product = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_1__["Pages"].Product, _objectSpread({}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 28
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./store/actions/products/index.js");

const actions = {
  productActions: _products__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./store/actions/products/getAll.js":
/*!******************************************!*\
  !*** ./store/actions/products/getAll.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getAll = async dispatch => {
  dispatch({
    type: 'SHOPIFY_PRODUCTS_GET_ALL_START'
  });

  try {
    const response = await fetch('/api/products');
    const data = await response.json();
    dispatch({
      type: 'SHOPIFY_PRODUCTS_GET_ALL_SUCCESS',
      payload: data
    });
  } catch (err) {
    console.log('products get all hook');
    console.log(err);
    dispatch({
      type: 'SHOPIFY_PRODUCTS_GET_ALL_FAILED',
      payload: err
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getAll);

/***/ }),

/***/ "./store/actions/products/getOne.js":
/*!******************************************!*\
  !*** ./store/actions/products/getOne.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getOne = async (dispatch, id) => {
  dispatch({
    type: 'SHOPIFY_PRODUCTS_GET_ONE_START'
  });

  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`/api/products/${id}`);
    dispatch({
      type: 'SHOPIFY_PRODUCTS_GET_ONE_SUCCESS',
      payload: data
    });
  } catch (err) {
    console.log('products get one hook');
    console.log(err);
    dispatch({
      type: 'SHOPIFY_PRODUCTS_GET_ONE_FAILED',
      payload: err
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getOne);

/***/ }),

/***/ "./store/actions/products/index.js":
/*!*****************************************!*\
  !*** ./store/actions/products/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAll */ "./store/actions/products/getAll.js");
/* harmony import */ var _getOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOne */ "./store/actions/products/getOne.js");


const productActions = {
  getAll: _getAll__WEBPACK_IMPORTED_MODULE_0__["default"],
  getOne: _getOne__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (productActions);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store/actions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["default"]; });



const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./store/reducers/default.js":
/*!***********************************!*\
  !*** ./store/reducers/default.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
});

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./store/reducers/products.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./store/reducers/default.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  products: _products__WEBPACK_IMPORTED_MODULE_1__["default"],
  temp: _default__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./store/reducers/products.js":
/*!************************************!*\
  !*** ./store/reducers/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initState = {
  loading: false,
  data: null,
  err: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOPIFY_PRODUCTS_GET_ALL_START':
      return {
        loading: true,
        data: null,
        err: null
      };

    case 'SHOPIFY_PRODUCTS_GET_ALL_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        err: null
      };

    case 'SHOPIFY_PRODUCTS_GET_ALL_FAILED':
      return {
        loading: false,
        data: null,
        err: action.payload
      };

    case 'SHOPIFY_PRODUCTS_GET_ONE_START':
      return {
        loading: true,
        data: null,
        err: null
      };

    case 'SHOPIFY_PRODUCTS_GET_ONE_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        err: null
      };

    case 'SHOPIFY_PRODUCTS_GET_ONE_FAILED':
      return {
        loading: false,
        data: null,
        err: action.payload
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Z3MvQ29nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmdzL0NvZy9zdHlsZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3Zncy9Db2cvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9QaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9QaWxsL3N0eWxlcy9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9QaWxsL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9EaXNjb3VudC9jb250ZW50L0dyYXBoaWMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9EaXNjb3VudC9jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZHMvRGlzY291bnQvY29udGVudC90b2FzdFRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9EaXNjb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL0Rpc2NvdW50L3N0eWxlcy9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZHMvRGlzY291bnQvc3R5bGVzL2NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9EaXNjb3VudC9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9EaXNjb3VudC9zdHlsZXMvaW5wdXRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZHMvRGlzY291bnQvc3R5bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9Qcm9kdWN0Q2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL1Byb2R1Y3RDYXJkL3N0eWxlcy9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZHMvUHJvZHVjdENhcmQvc3R5bGVzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL1Byb2R1Y3RDYXJkL3N0eWxlcy9jb250YWluZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZHMvUHJvZHVjdENhcmQvc3R5bGVzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL1Byb2R1Y3RDYXJkL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL1Byb2R1Y3RDYXJkL3N0eWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FyZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFscy9DYXJkTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbHMvQ2FyZE1vZGFsL3N0eWxlcy9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWxzL0NhcmRNb2RhbC9zdHlsZXMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFscy9DYXJkTW9kYWwvc3R5bGVzL2NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbHMvQ2FyZE1vZGFsL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vQWRtaW5NYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9BZG1pbk1haW4vc3R5bGVzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0FkbWluTWFpbi9zdHlsZXMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vQWRtaW5NYWluL3N0eWxlcy9jb250YWluZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9BZG1pbk1haW4vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9BZG1pbk1haW4vc3R5bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQvY29udGVudC9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQvY29udGVudC9DYXJkSW1hZ2VUb3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9BZG1pbkRhc2hib2FyZC9jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9BZG1pbkRhc2hib2FyZC9zdHlsZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL0FkbWluRGFzaGJvYXJkL3N0eWxlcy9jb250YWluZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvQWRtaW5EYXNoYm9hcmQvc3R5bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9MYW5kaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvTGFuZGluZy9zdHlsZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL0xhbmRpbmcvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvTGFuZGluZy9zdHlsZXMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL1Byb2R1Y3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0L3N0eWxlcy9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvUHJvZHVjdC9zdHlsZXMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL1Byb2R1Y3Qvc3R5bGVzL2NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0L3N0eWxlcy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0L3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL1Byb2R1Y3Qvc3R5bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL1Byb2R1Y3RzL3N0eWxlcy9iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvUHJvZHVjdHMvc3R5bGVzL2NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9Qcm9kdWN0cy9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL19idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX2NhcmRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX2gxLmpzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL19oMi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9faDMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX2g0LmpzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL19wYWdlLmpzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL19zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvZ2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvcmUvdGhlbWUvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvcmUvdXRpbGl0aWVzL2dlbmVyYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3V0aWxpdGllcy9nZW5lcmF0ZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS91dGlsaXRpZXMvaGFuZGxlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS91dGlsaXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3RzLy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdHMvZ2V0QWxsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdHMvZ2V0T25lLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvcHJvZHVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNvZyIsInByb3BzIiwiY29sb3IiLCJoZWlnaHQiLCJzdHlsZWQiLCJ0ZW1wbGF0ZXMiLCJfc3ZnIiwic3R5bGVzIiwic3ZncyIsIlBpbGwiLCJ0ZXh0Iiwib25DbGljayIsIl9idXR0b24iLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnlDb2xvciIsIndoaXRlIiwiYnV0dG9ucyIsIkdyYXBoaWMiLCJjb250ZW50IiwiVG9hc3RUZXh0IiwiaGVhZGluZyIsIm1lc3NhZ2UiLCJEaXNjb3VudCIsInByb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdHMiLCJkYXRhIiwidG9nZ2xlVG9hc3QiLCJ0b2dnbGVUb2FzdEhhbmRsZXIiLCJ1c2VTdGF0ZSIsInRvYXN0VGV4dCIsInRvYXN0VGV4dEhhbmRsZXIiLCJoYXNXb24iLCJoYXNXb25IYW5kbGVyIiwiZ3Vlc3NNZXNzYWdlIiwiZ3Vlc3NNZXNzYWdlSGFuZGxlciIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJndWVzcyIsIm9uU3VibWl0IiwidmFsdWVzIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJwcm9kdWN0SWQiLCJpZCIsInByb2R1Y3ROYW1lIiwidGl0bGUiLCJwcm9kdWN0UHJpY2UiLCJ2YXJpYW50cyIsInByaWNlIiwiY29ycmVjdCIsImFtb3VudE9mVHJpZXMiLCJjb3VudCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImFzc2lnbiIsImRyYWZ0T3JkZXJVcmwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZGl2IiwicHJpbWFyeUNvbG9yRGFyayIsImJhY2tncm91bmRHcmFwaGljIiwiYnV0dG9uQ29udGFpbmVyIiwiY2FyZEJvZHkiLCJjaXJjbGUiLCJzaXplIiwidG9hc3QiLCJzaG93IiwiY29udGVzdFJ1bGVzIiwiZGlzY291bnRQcmljZSIsImRpc2NvdW50VGl0bGUiLCJpbnB1dCIsIl9oMyIsIl9oMiIsInNwYW4iLCJQcm9kdWN0Q2FyZCIsImltYWdlIiwibmFtZSIsInV0aWxzIiwiZ2VuZXJhdGVQYXRoIiwiYmFzZUNvbG9yIiwidGVydGlhcnlDb2xvciIsInByb2R1Y3RJbWFnZSIsImJ1dHRvbiIsImltYWdlQ29udGFpbmVyIiwiY29udGVudENvbnRhaW5lciIsImltZyIsIl9oNCIsImNhcmRzIiwiQ2FyZE1vZGFsIiwiY2hpbGRyZW4iLCJjbG9zZU1vZGFsIiwiY2xvc2UiLCJtb2RhbENvbnRlbnQiLCJtb2RhbHMiLCJBZG1pbk1haW4iLCJzZWNvbmRhcnlDb2xvciIsIndpdGhUaGVtZSIsIm5hdiIsImJhc2VDb2xvckRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5rQ29udGFpbmVyIiwibmF2VGl0bGUiLCJfaDEiLCJuYXZpZ2F0aW9uIiwiQ2FyZCIsImNhcmRJbWFnZVRvcCIsIkFkbWluRGFzaGJvYXJkIiwicHJvZHVjdHNTdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJhY3Rpb25zIiwicHJvZHVjdEFjdGlvbnMiLCJnZXRBbGwiLCJnZW5lcmF0ZVByb2R1Y3RDYXJkcyIsImdyaWQiLCJnZW5lcmF0ZUdyaWQiLCJtYXAiLCJyb3ciLCJfcGFnZSIsIkNhcmRJbWFnZVRvcCIsImNhcmQiLCJjYXJkQ29udGFpbmVyIiwiY2FyZEZvb3RlciIsImNhcmRJbmZvQ29udGFpbmVyIiwiY2FyZFJvdyIsIl9jYXJkUm93IiwiY2FyZFNlbGVjdEJ1dHRvbiIsInF1YXRlbmFyeUNvbG9yIiwiY2FyZFRvcCIsImhlYWRlciIsInN2Z0NvbnRhaW5lciIsImluZm9EYXRhIiwiaW5mb1RpdGxlIiwiTGFuZGluZyIsImNvbG9yQWNjZW50IiwicGFnZVRpdGxlIiwiUHJvZHVjdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInNob3dNb2RhbCIsInNob3dNb2RhbEhhbmRsZXIiLCJnZXRPbmUiLCJoYW5kbGVTaG93IiwiaGlkZU1vZGFsIiwiZ2VuZXJhdGVQcm9kdWN0Q2FyZCIsInN1YlRpdGxlIiwic3JjIiwib3B0aW9uczEiLCJwdXJjaGFzZUJ1dHRvbiIsImltYWdlQm94IiwiY2FyZENvbnRlbnQiLCJiYXNlQ29sb3JMaWdodCIsImNhcmRIZWFkZXIiLCJwcmljZUNvbnRhaW5lciIsImZvb3RlciIsImJhY2tncm91bmRUZXh0IiwiZGlzY291bnQiLCJkb2xsYXIiLCJQcm9kdWN0cyIsImluZGV4IiwicGFnZXMiLCJQcm9kdWN0IiwiaDEiLCJoMiIsImg0IiwibWFpbiIsInN2ZyIsImF0dHJzIiwieG1sbnMiLCJyb2xlIiwiZm9jdXNhYmxlIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImRlZmF1bHRUaGVtZSIsInByaW1hcnlDb2xvckxpZ2h0Iiwic2Vjb25kYXJ5Q29sb3JMaWdodCIsInNlY29uZGFyeUNvbG9yRGFyayIsInRlcnRpYXJ5Q29sb3JMaWdodCIsInRlcnRpYXJ5Q29sb3JEYXJrIiwicXVhdGVuYXJ5Q29sb3JMaWdodCIsInF1YXRlbmFyeUNvbG9yRGFyayIsInRoZW1lcyIsIngiLCJsZW5ndGgiLCJwdXNoIiwiYmFzZSIsImVuZHBvaW50IiwicGF0aCIsImhhbmRsZVN0YXRlIiwiaGFuZGxlciIsInV0aWxpdGllcyIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsIm9uQnVpbGRNYW5pZmVzdCIsImlkbGVUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImRlbEJhc2VQYXRoIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJ0eXBlIiwicmVzcG9uc2UiLCJqc29uIiwicGF5bG9hZCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImFjdGlvbiIsImNvbWJpbmVSZWR1Y2VycyIsInByb2R1Y3RzUmVkdWNlciIsInRlbXAiLCJpbml0U3RhdGUiLCJsb2FkaW5nIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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QWpDLE9BQVA7O0FBRUYsU0FBSyxrQ0FBTDtBQUNFLGFBQU87QUFBQzRlLGVBQU8sRUFBRSxLQUFWO0FBQWlCaGhCLFlBQUksRUFBRTJnQixNQUFNLENBQUNKLE9BQTlCO0FBQXVDbmUsV0FBRyxFQUFFO0FBQTVDLE9BQVA7O0FBRUYsU0FBSyxpQ0FBTDtBQUNFLGFBQU87QUFBRTRlLGVBQU8sRUFBRSxLQUFYO0FBQWtCaGhCLFlBQUksRUFBRSxJQUF4QjtBQUE4Qm9DLFdBQUcsRUFBRXVlLE1BQU0sQ0FBQ0o7QUFBMUMsT0FBUDs7QUFFRixTQUFLLGdDQUFMO0FBQ0UsYUFBTztBQUFDUyxlQUFPLEVBQUUsSUFBVjtBQUFnQmhoQixZQUFJLEVBQUUsSUFBdEI7QUFBNEJvQyxXQUFHLEVBQUU7QUFBakMsT0FBUDs7QUFFRixTQUFLLGtDQUFMO0FBQ0UsYUFBTztBQUFDNGUsZUFBTyxFQUFFLEtBQVY7QUFBaUJoaEIsWUFBSSxFQUFFMmdCLE1BQU0sQ0FBQ0osT0FBOUI7QUFBdUNuZSxXQUFHLEVBQUU7QUFBNUMsT0FBUDs7QUFFRixTQUFLLGlDQUFMO0FBQ0UsYUFBTztBQUFFNGUsZUFBTyxFQUFFLEtBQVg7QUFBa0JoaEIsWUFBSSxFQUFFLElBQXhCO0FBQThCb0MsV0FBRyxFQUFFdWUsTUFBTSxDQUFDSjtBQUExQyxPQUFQOztBQUVGO0FBQ0UsYUFBT3pnQixLQUFQO0FBcEJKO0FBc0JELENBdkJEOztBQXlCZW1oQixzRUFBZixFOzs7Ozs7Ozs7OztBQ2pDQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIlxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN2Z3MgfSBmcm9tICcuL3N2Z3MnIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcydcclxuXHJcbmNvbnN0IENvZyA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7IGNvbG9yLCBoZWlnaHQgfSA9IHByb3BzXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdHlsZXMuQ29nIFxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICBmaWxsPXtjb2xvcn1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgIHdpZHRoPSdhdXRvJ1xyXG4gICAgPlxyXG4gICAgICA8cGF0aCBcclxuICAgICAgICBkPVwiTTQ4Ny40IDMxNS43bC00Mi42LTI0LjZjNC4zLTIzLjIgNC4zLTQ3IDAtNzAuMmw0Mi42LTI0LjZjNC45LTIuOCA3LjEtOC42IDUuNS0xNC0xMS4xLTM1LjYtMzAtNjcuOC01NC43LTk0LjYtMy44LTQuMS0xMC01LjEtMTQuOC0yLjNMMzgwLjggMTEwYy0xNy45LTE1LjQtMzguNS0yNy4zLTYwLjgtMzUuMVYyNS44YzAtNS42LTMuOS0xMC41LTkuNC0xMS43LTM2LjctOC4yLTc0LjMtNy44LTEwOS4yIDAtNS41IDEuMi05LjQgNi4xLTkuNCAxMS43Vjc1Yy0yMi4yIDcuOS00Mi44IDE5LjgtNjAuOCAzNS4xTDg4LjcgODUuNWMtNC45LTIuOC0xMS0xLjktMTQuOCAyLjMtMjQuNyAyNi43LTQzLjYgNTguOS01NC43IDk0LjYtMS43IDUuNC42IDExLjIgNS41IDE0TDY3LjMgMjIxYy00LjMgMjMuMi00LjMgNDcgMCA3MC4ybC00Mi42IDI0LjZjLTQuOSAyLjgtNy4xIDguNi01LjUgMTQgMTEuMSAzNS42IDMwIDY3LjggNTQuNyA5NC42IDMuOCA0LjEgMTAgNS4xIDE0LjggMi4zbDQyLjYtMjQuNmMxNy45IDE1LjQgMzguNSAyNy4zIDYwLjggMzUuMXY0OS4yYzAgNS42IDMuOSAxMC41IDkuNCAxMS43IDM2LjcgOC4yIDc0LjMgNy44IDEwOS4yIDAgNS41LTEuMiA5LjQtNi4xIDkuNC0xMS43di00OS4yYzIyLjItNy45IDQyLjgtMTkuOCA2MC44LTM1LjFsNDIuNiAyNC42YzQuOSAyLjggMTEgMS45IDE0LjgtMi4zIDI0LjctMjYuNyA0My42LTU4LjkgNTQuNy05NC42IDEuNS01LjUtLjctMTEuMy01LjYtMTQuMXpNMjU2IDMzNmMtNDQuMSAwLTgwLTM1LjktODAtODBzMzUuOS04MCA4MC04MCA4MCAzNS45IDgwIDgwLTM1LjkgODAtODAgODB6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3R5bGVzLkNvZz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgQ29nID0gc3R5bGVkKHRlbXBsYXRlcy5fc3ZnKWBgIiwiaW1wb3J0IHsgQ29nIH0gZnJvbSAnLi9iYXNlJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIENvZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXMiLCJpbXBvcnQgQ29nIGZyb20gJy4vQ29nJ1xyXG5cclxuY29uc3Qgc3ZncyA9IHtcclxuICBDb2dcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3ZncyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5jb25zdCBQaWxsID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdGV4dCwgb25DbGljayB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdHlsZXMuUGlsbCBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAge3RleHR9XHJcbiAgICA8L3N0eWxlcy5QaWxsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGlsbCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgUGlsbCA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2J1dHRvbilgXHJcbmJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnlDb2xvcn07XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4OyBcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDQwcHggMnB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnlDb2xvcn07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbmAiLCJpbXBvcnQgeyBQaWxsIH0gZnJvbSAnLi9iYXNlJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIFBpbGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzIiwiaW1wb3J0IFBpbGwgZnJvbSAnLi9QaWxsJ1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IHtcclxuICBQaWxsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbnMiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcclxuXHJcbmNvbnN0IEdyYXBoaWMgPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGVzLkdyYXBoaWM+XHJcbiAgICAgICAgPHN0eWxlcy5jaXJjbGUgc2l6ZT0nMzY1cHgnIC8+XHJcbiAgICAgICAgPHN0eWxlcy5jaXJjbGUgc2l6ZT0nMzE1cHgnIC8+XHJcbiAgICAgICAgPHN0eWxlcy5jaXJjbGUgc2l6ZT0nMjY1cHgnIC8+XHJcbiAgICAgICAgPHN0eWxlcy5jaXJjbGUgc2l6ZT0nMjE1cHgnIC8+XHJcbiAgICAgICAgPHN0eWxlcy5jaXJjbGUgc2l6ZT0nMTY1cHgnID5cclxuICAgICAgICAgIDxzdHlsZXMuZGlzY291bnRQcmljZT5cclxuICAgICAgICAgICAgMjBcclxuICAgICAgICAgIDwvc3R5bGVzLmRpc2NvdW50UHJpY2U+XHJcbiAgICAgICAgPC9zdHlsZXMuY2lyY2xlPlxyXG4gICAgPC9zdHlsZXMuR3JhcGhpYz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoaWMiLCJpbXBvcnQgR3JhcGhpYyBmcm9tICcuL0dyYXBoaWMnXHJcbmltcG9ydCBUb2FzdFRleHQgZnJvbSAnLi90b2FzdFRlc3QnXHJcblxyXG5jb25zdCBjb250ZW50ID0ge1xyXG4gIEdyYXBoaWMsXHJcbiAgVG9hc3RUZXh0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQiLCJcclxuXHJcbmNvbnN0IFRvYXN0VGV4dCA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7aGVhZGluZywgbWVzc2FnZX0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGgzPntoZWFkaW5nfTwvaDM+XHJcbiAgICA8c3Bhbj57bWVzc2FnZX08L3NwYW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0VGV4dCIsImltcG9ydCB7IEJ1dHRvbnMgfSBmcm9tICcuLi8uLi8nXHJcbmltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGlzY291bnQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzLmRhdGEpXHJcbiAgY29uc3QgW3RvZ2dsZVRvYXN0LCB0b2dnbGVUb2FzdEhhbmRsZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvYXN0VGV4dCwgdG9hc3RUZXh0SGFuZGxlcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaGFzV29uLCBoYXNXb25IYW5kbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtndWVzc01lc3NhZ2UsIGd1ZXNzTWVzc2FnZUhhbmRsZXJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGd1ZXNzOiAnJyxcclxuICAgIH0sXHJcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgdXJsOiAnL2Rpc2NvdW50cycsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGd1ZXNzOiB2YWx1ZXMuZ3Vlc3MsXHJcbiAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgcHJvZHVjdE5hbWU6IHByb2R1Y3QudGl0bGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZTogcHJvZHVjdC52YXJpYW50c1swXS5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaGFzV29uSGFuZGxlcihkYXRhLmNvcnJlY3QpXHJcbiAgICAgICAgdG9nZ2xlVG9hc3RIYW5kbGVyKHRydWUpXHJcbiAgICAgICAgY29uc3QgYW1vdW50T2ZUcmllcyA9IGRhdGEuY291bnRcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuY29ycmVjdCkge1xyXG4gICAgICAgICAgdG9hc3RUZXh0SGFuZGxlcignWW91IGhhdmUgZ3Vlc3NlZCB0aGUgY29ycmVjdCBudW1iZXIsIHlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgaW4gNSBzZWMnKVxyXG4gICAgICAgICAgZ3Vlc3NNZXNzYWdlSGFuZGxlcihkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVRvYXN0SGFuZGxlcihmYWxzZSlcclxuICAgICAgICAgIH0sIDQ5MDApXHJcblxyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGRhdGEuZHJhZnRPcmRlclVybClcclxuICAgICAgICAgIH0sIDUwMDApXHJcblxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGd1ZXNzTWVzc2FnZUhhbmRsZXIoZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIGlmIChhbW91bnRPZlRyaWVzID49IDEwKSB7XHJcbiAgICAgICAgICB0b2FzdFRleHRIYW5kbGVyKCd5b3UgaGF2ZSBoaXQgeW91IG1heGltdW0gbnVtYmVyIG9mIGF0dGVtcHRzLCB5b3Ugd2lsbCBiZSByZWRpcmVjdGVkIGJhY2sgdG8gaG9tZSBpbiA1IHNlY29uZHMnKVxyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvJylcclxuICAgICAgICAgIH0sIDUwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0VGV4dEhhbmRsZXIoYHlvdSBoYXZlIHRyaWVkICR7Z3Vlc3NNZXNzYWdlfSB0aW1lcyB5b3UgaGF2ZSAkezEwIC0gYW1vdW50T2ZUcmllc31gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdG9nZ2xlVG9hc3RIYW5kbGVyKGZhbHNlKVxyXG4gICAgICAgIH0sIDQ5MDApXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbiBzdWJtaXQgZXJyb3InKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxzdHlsZXMudG9hc3QgXHJcbiAgICAgIHNob3c9e3RvZ2dsZVRvYXN0fVxyXG4gICAgICBjb2xvcj17aGFzV29ufVxyXG4gICAgPlxyXG4gICAgICB7aGFzV29uICYmIDxjb250ZW50LlRvYXN0VGV4dCBoZWFkaW5nPXtndWVzc01lc3NhZ2V9IG1lc3NhZ2U9e3RvYXN0VGV4dH0gLz59XHJcbiAgICAgIHshaGFzV29uICYmIDxjb250ZW50LlRvYXN0VGV4dCBoZWFkaW5nPXtndWVzc01lc3NhZ2V9IG1lc3NhZ2U9e3RvYXN0VGV4dH0gLz59XHJcbiAgICA8L3N0eWxlcy50b2FzdD5cclxuICAgIDxzdHlsZXMuRGlzY291bnQ+XHJcbiAgICAgIDxzdHlsZXMuYmFja2dyb3VuZEdyYXBoaWM+XHJcbiAgICAgICAgPGNvbnRlbnQuR3JhcGhpYyAvPlxyXG4gICAgICAgIDxzdHlsZXMuY2FyZEJvZHk+XHJcbiAgICAgICAgICA8c3R5bGVzLmRpc2NvdW50VGl0bGU+XHJcbiAgICAgICAgICAgIHdoYXQgaXMgdGhlIG51bWJlclxyXG4gICAgICAgICAgPC9zdHlsZXMuZGlzY291bnRUaXRsZT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPHN0eWxlcy5pbnB1dCBcclxuICAgICAgICAgICAgICBpZD0nZ3Vlc3MnXHJcbiAgICAgICAgICAgICAgbmFtZT0nZ3Vlc3MnXHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBtaW5MZW5ndGg9JzEnXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPSc0J1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdYWFhYJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmd1ZXNzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8QnV0dG9ucy5QaWxsIFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgdGV4dD0nZ3Vlc3MnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdHlsZXMuYnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPHN0eWxlcy5jb250ZXN0UnVsZXM+XHJcbiAgICAgICAgICAgIEd1ZXNzIHRoZSBjb3JyZWN0IG51bWJlciB0byBhcHB5bHkgdGhlIHNob3duIGRpc2NvdW50LiBUaGUgbnVtYmVyIGlzIGJldHdlZW4gMSAtIDEwMDAsIGFuZCB5b3UgaGF2ZSAxNSBndWVzc2VzIGZvciB0aGUgY29ycmVjdCBhbnN3ZXIuXHJcbiAgICAgICAgICA8L3N0eWxlcy5jb250ZXN0UnVsZXM+XHJcbiAgICAgICAgPC9zdHlsZXMuY2FyZEJvZHk+XHJcbiAgICAgIDwvc3R5bGVzLmJhY2tncm91bmRHcmFwaGljPlxyXG4gICAgPC9zdHlsZXMuRGlzY291bnQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdW50IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb3VudCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeUNvbG9yRGFya307XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDYwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4ICMwMDAwMDA7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcmFwaGljID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRHcmFwaGljID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL2xpZ2h0bmluZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4zKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzMDBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjaXJjbGUgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5zaXplfTtcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5zaXplfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5Q29sb3J9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4ICMwMDAwMDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMTA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHRvYXN0ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPyAnZ3JlZW4nIDogJ3JlZCd9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlIC0gJHtwcm9wcyA9PiBwcm9wcy5zaG93ID8gJzE5MHB4JyA6ICcwcHgnfSkpO1xyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA/ICc2MCcgOiAnNTknfTtcclxuICBib3gtc2hhZG93OiAwcHggLTJweCA1cHggMnB4ICMwMDAwMDA7XHJcbmAiLCJpbXBvcnQgeyBEaXNjb3VudCwgR3JhcGhpYyB9IGZyb20gJy4vYmFzZSdcclxuaW1wb3J0IHsgYmFja2dyb3VuZEdyYXBoaWMsIGJ1dHRvbkNvbnRhaW5lciwgY2FyZEJvZHksIGNpcmNsZSwgdG9hc3QgfSBmcm9tICcuL2NvbnRhaW5lcnMnXHJcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi9pbnB1dHMnXHJcbmltcG9ydCB7IGNvbnRlc3RSdWxlcywgZGlzY291bnRQcmljZSwgZGlzY291bnRUaXRsZSB9IGZyb20gJy4vdGV4dCcgXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgRGlzY291bnQsXHJcbiAgR3JhcGhpYyxcclxuICBiYWNrZ3JvdW5kR3JhcGhpYyxcclxuICBidXR0b25Db250YWluZXIsXHJcbiAgY2FyZEJvZHksXHJcbiAgY2lyY2xlLFxyXG4gIGNvbnRlc3RSdWxlcyxcclxuICBkaXNjb3VudFByaWNlLFxyXG4gIGRpc2NvdW50VGl0bGUsXHJcbiAgaW5wdXQsXHJcbiAgdG9hc3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeUNvbG9yfTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5Q29sb3J9O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZS13aWR0aDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG5gIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdGVtcGxhdGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZSdcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNjb3VudFByaWNlID0gc3R5bGVkKHRlbXBsYXRlcy5faDMpYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICclJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRvcDogLThweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdPRkYnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00M3B4O1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZGlzY291bnRUaXRsZSA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2gyKWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjb250ZXN0UnVsZXMgPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmAiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vY29yZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcydcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgaWQsIGltYWdlLCBuYW1lLCBwcmljZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGVzLlByb2R1Y3RDYXJkPlxyXG4gICAgICA8c3R5bGVzLmltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxzdHlsZXMucHJvZHVjdEltYWdlIHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgIDwvc3R5bGVzLmltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8c3R5bGVzLmNvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgPHN0eWxlcy5uYW1lPntuYW1lfTwvc3R5bGVzLm5hbWU+XHJcbiAgICAgICAgPHN0eWxlcy5wcmljZT4ke3ByaWNlfTwvc3R5bGVzLnByaWNlPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3V0aWxzLmdlbmVyYXRlUGF0aCgnL3Byb2R1Y3RzJywgaWQpfT5cclxuICAgICAgICAgIDxzdHlsZXMuYnV0dG9uPm1vcmU8L3N0eWxlcy5idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3N0eWxlcy5jb250ZW50Q29udGFpbmVyPlxyXG4gICAgPC9zdHlsZXMuUHJvZHVjdENhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xyXG5pbXBvcnQgeyBwcm9kdWN0SW1hZ2UgfSBmcm9tICcuL2ltYWdlcydcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvcn07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRlcnRpYXJ5Q29sb3J9O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgzNDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgdG9wOiAtNzAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXdZKDM5MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJHtwcm9kdWN0SW1hZ2V9IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJHtidXR0b259IHtcclxuICAgICAgdG9wOiAtNDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIC8qIGNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMuY2F0ZWdvcnkgPyBwcm9wcy5jYXRlZ29yeSA6ICdDYXRlZ29yeSd9OyAqL1xyXG4gICAgY29udGVudDogJ0NhdGVnb3J5JztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA4ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uID0gc3R5bGVkKHRlbXBsYXRlcy5fYnV0dG9uKWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMDBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnlDb2xvcn07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgaW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgei1pbmRleDogMTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHotaW5kZXg6IDE7XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbmAiLCJpbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gJy4vYmFzZSdcclxuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi9idXR0b24nXHJcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIGltYWdlQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXJzJ1xyXG5pbXBvcnQgeyBwcm9kdWN0SW1hZ2UgfSBmcm9tICcuL2ltYWdlcydcclxuaW1wb3J0IHsgbmFtZSwgcHJpY2UgfSBmcm9tICcuL3RleHQnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgUHJvZHVjdENhcmQsXHJcbiAgYnV0dG9uLFxyXG4gIGNvbnRlbnRDb250YWluZXIsXHJcbiAgaW1hZ2VDb250YWluZXIsXHJcbiAgbmFtZSxcclxuICBwcmljZSxcclxuICBwcm9kdWN0SW1hZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdGVtcGxhdGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZSdcclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lID0gc3R5bGVkKHRlbXBsYXRlcy5faDMpYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnlDb2xvcn07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBwcmljZSA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2g0KWBcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbmAiLCJpbXBvcnQgRGlzY291bnQgZnJvbSAnLi9EaXNjb3VudCdcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4vUHJvZHVjdENhcmQnXHJcblxyXG5jb25zdCBjYXJkcyA9IHtcclxuICBEaXNjb3VudCxcclxuICBQcm9kdWN0Q2FyZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkcyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9ucyB9IGZyb20gJy4vYnV0dG9ucydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkcyB9IGZyb20gJy4vY2FyZHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxzIH0gZnJvbSAnLi9tb2RhbHMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2aWdhdGlvbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlcyB9IGZyb20gJy4vcGFnZXMnIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcydcclxuXHJcbmNvbnN0IENhcmRNb2RhbCA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7IGNoaWxkcmVuLCBjbG9zZU1vZGFsLCBzaG93IH0gPSBwcm9wcyBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdHlsZXMuQ2FyZE1vZGFsXHJcbiAgICAgIHNob3c9e3Nob3d9XHJcbiAgICA+XHJcbiAgICAgIDxzdHlsZXMuY2xvc2Ugb25DbGljaz17Y2xvc2VNb2RhbH0+WDwvc3R5bGVzLmNsb3NlPlxyXG4gICAgICA8c3R5bGVzLm1vZGFsQ29udGVudD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvc3R5bGVzLm1vZGFsQ29udGVudD5cclxuICAgIDwvc3R5bGVzLkNhcmRNb2RhbD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRNb2RhbCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZE1vZGFsID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy5zaG93ID8gNTAgOiAtMX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNik7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0ZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsb3NlID0gc3R5bGVkKHRlbXBsYXRlcy5fYnV0dG9uKWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYCAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgei1pbmRleDogNTU7XHJcbmAiLCJpbXBvcnQgeyBDYXJkTW9kYWwgfSBmcm9tICcuL2Jhc2UnXHJcbmltcG9ydCB7IGNsb3NlIH0gZnJvbSAnLi9idXR0b25zJ1xyXG5pbXBvcnQgeyBtb2RhbENvbnRlbnQgfSBmcm9tICcuL2NvbnRhaW5lcnMnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgQ2FyZE1vZGFsLFxyXG4gIGNsb3NlLFxyXG4gIG1vZGFsQ29udGVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXMiLCJpbXBvcnQgQ2FyZE1vZGFsIGZyb20gJy4vQ2FyZE1vZGFsJ1xyXG5cclxuY29uc3QgbW9kYWxzID0ge1xyXG4gIENhcmRNb2RhbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbHMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuY29uc3QgQWRtaW5NYWluID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdHlsZXMuQWRtaW5NYWluPlxyXG4gICAgICA8c3R5bGVzLm5hdlRpdGxlPlxyXG4gICAgICAgIHB1cHBpZXMgbmF2XHJcbiAgICAgIDwvc3R5bGVzLm5hdlRpdGxlPlxyXG4gICAgICA8c3R5bGVzLmxpbmtDb250YWluZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL3Byb2R1Y3RzJz5cclxuICAgICAgICAgIDxzdHlsZXMuYnV0dG9uXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17dGhlbWUuY29sb3JzLnByaW1hcnlDb2xvcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUFJPRFVDVFNcclxuICAgICAgICAgIDwvc3R5bGVzLmJ1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxzdHlsZXMuYnV0dG9uXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3RoZW1lLmNvbG9ycy5zZWNvbmRhcnlDb2xvcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPcmRlcnNcclxuICAgICAgICA8L3N0eWxlcy5idXR0b24+XHJcblxyXG4gICAgICAgIDxzdHlsZXMuYnV0dG9uXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3RoZW1lLmNvbG9ycy50ZXJ0aWFyeUNvbG9yfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVzZXJzXHJcbiAgICAgICAgPC9zdHlsZXMuYnV0dG9uPlxyXG4gICAgICA8L3N0eWxlcy5saW5rQ29udGFpbmVyPlxyXG4gICAgICBcclxuICAgIDwvc3R5bGVzLkFkbWluTWFpbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShBZG1pbk1haW4pIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBBZG1pbk1haW4gPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYXNlQ29sb3J9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDZweCAwcHggN3B4IDFweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYXNlQ29sb3JEYXJrfTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvckRhcmt9O1xyXG5cclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uID0gc3R5bGVkKHRlbXBsYXRlcy5fYnV0dG9uKWBcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvckxpZ2h0fTsgKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXgtZ3JvdzogMjtcclxuYCIsImltcG9ydCB7IEFkbWluTWFpbiB9IGZyb20gJy4vYmFzZSdcclxuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi9idXR0b25zJ1xyXG5pbXBvcnQgeyBsaW5rQ29udGFpbmVyIH0gZnJvbSAnLi9jb250YWluZXJzJ1xyXG5pbXBvcnQgeyBuYXZUaXRsZSB9IGZyb20gJy4vdGV4dCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBBZG1pbk1haW4sXHJcbiAgYnV0dG9uLFxyXG4gIGxpbmtDb250YWluZXIsXHJcbiAgbmF2VGl0bGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdGVtcGxhdGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZSdcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZUaXRsZSA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2gxKWBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZVxyXG4gIH1cclxuYCIsImltcG9ydCBBZG1pbk1haW4gZnJvbSAnLi9BZG1pbk1haW4nXHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0ge1xyXG4gIEFkbWluTWFpblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uIiwiaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHN2Z3MgfSBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMnXHJcbmltcG9ydCBjb250ZW50IGZyb20gJy4vJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgeyBjb2xvciwgdGhlbWUgfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGVzLmNhcmQ+XHJcbiAgICAgIDxjb250ZW50LmNhcmRJbWFnZVRvcCBcclxuICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxzdHlsZXMuY2FyZFRvcD5cclxuICAgICAgICA8c3R5bGVzLnByb2R1Y3ROYW1lXHJcbiAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgcHVwcHlcclxuICAgICAgICA8L3N0eWxlcy5wcm9kdWN0TmFtZT5cclxuICAgICAgPC9zdHlsZXMuY2FyZFRvcD5cclxuICAgICAgPHN0eWxlcy5jYXJkQm9keT5cclxuICAgICAgICA8c3R5bGVzLmNhcmRJbmZvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPHN0eWxlcy5pbmZvVGl0bGU+XHJcbiAgICAgICAgICAgIHZpZXdlZFxyXG4gICAgICAgICAgPC9zdHlsZXMuaW5mb1RpdGxlPlxyXG4gICAgICAgICAgPHN0eWxlcy5pbmZvRGF0YT5cclxuICAgICAgICAgICAgMTU0XHJcbiAgICAgICAgICA8L3N0eWxlcy5pbmZvRGF0YT5cclxuICAgICAgICA8L3N0eWxlcy5jYXJkSW5mb0NvbnRhaW5lcj5cclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGVzLmNhcmRJbmZvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPHN0eWxlcy5pbmZvVGl0bGU+XHJcbiAgICAgICAgICAgIHNvbGRcclxuICAgICAgICAgIDwvc3R5bGVzLmluZm9UaXRsZT5cclxuICAgICAgICAgIDxzdHlsZXMuaW5mb0RhdGE+XHJcbiAgICAgICAgICAgIDU0XHJcbiAgICAgICAgICA8L3N0eWxlcy5pbmZvRGF0YT5cclxuICAgICAgICA8L3N0eWxlcy5jYXJkSW5mb0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPHN0eWxlcy5jYXJkSW5mb0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxzdHlsZXMuaW5mb1RpdGxlPlxyXG4gICAgICAgICAgICByYXRpb1xyXG4gICAgICAgICAgPC9zdHlsZXMuaW5mb1RpdGxlPlxyXG4gICAgICAgICAgPHN0eWxlcy5pbmZvRGF0YT5cclxuICAgICAgICAgICAgMzMlXHJcbiAgICAgICAgICA8L3N0eWxlcy5pbmZvRGF0YT5cclxuICAgICAgICA8L3N0eWxlcy5jYXJkSW5mb0NvbnRhaW5lcj5cclxuICAgICAgPC9zdHlsZXMuY2FyZEJvZHk+XHJcbiAgICAgIDxzdHlsZXMuY2FyZEZvb3Rlcj5cclxuICAgICAgICA8c3R5bGVzLmNhcmRTZWxlY3RCdXR0b24+XHJcbiAgICAgICAgICBkYXlcclxuICAgICAgICA8L3N0eWxlcy5jYXJkU2VsZWN0QnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZXMuY2FyZFNlbGVjdEJ1dHRvbj5cclxuICAgICAgICAgIG1vbnRoXHJcbiAgICAgICAgPC9zdHlsZXMuY2FyZFNlbGVjdEJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGVzLmNhcmRTZWxlY3RCdXR0b24+XHJcbiAgICAgICAgICB5ZWFyXHJcbiAgICAgICAgPC9zdHlsZXMuY2FyZFNlbGVjdEJ1dHRvbj5cclxuICAgICAgICA8c3R5bGVzLnN2Z0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxzdmdzLkNvZyBcclxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICBoZWlnaHQ9JzIwcHgnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3R5bGVzLnN2Z0NvbnRhaW5lcj5cclxuICAgICAgPC9zdHlsZXMuY2FyZEZvb3Rlcj5cclxuICAgIDwvc3R5bGVzLmNhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQ2FyZCkiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcclxuXHJcbmNvbnN0IGNhcmRJbWFnZVRvcCA9IChwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCB7IGNvbG9yIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGVzLkNhcmRJbWFnZVRvcFxyXG4gICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICA+XHJcbiAgICAgIFxyXG4gICAgPC9zdHlsZXMuQ2FyZEltYWdlVG9wPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEltYWdlVG9wIiwiaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xyXG5pbXBvcnQgY2FyZEltYWdlVG9wIGZyb20gJy4vQ2FyZEltYWdlVG9wJ1xyXG5cclxuY29uc3QgY29udGVudCA9IHtcclxuICBDYXJkLFxyXG4gIGNhcmRJbWFnZVRvcFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50IiwiaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vY29yZSdcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJ1xyXG5pbXBvcnQgY29udGVudCBmcm9tICcuL2NvbnRlbnQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uJ1xyXG5cclxuY29uc3QgQWRtaW5EYXNoYm9hcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgeyB0aGVtZSB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgcHJvZHVjdHNTdGF0ZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zLnByb2R1Y3RBY3Rpb25zLmdldEFsbChkaXNwYXRjaClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVQcm9kdWN0Q2FyZHMgPSAocHJvZHVjdHMpID0+IHtcclxuICAgIGNvbnN0IGdyaWQgPSB1dGlscy5nZW5lcmF0ZUdyaWQocHJvZHVjdHMpXHJcbiAgICByZXR1cm4gZ3JpZC5tYXAocm93ID0+IChcclxuICAgICAgPHN0eWxlcy5jYXJkUm93PlxyXG4gICAgICB7cm93Lm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICA8Y29udGVudC5DYXJkXHJcbiAgICAgICAgICBjb2xvcj17dGhlbWUuY29sb3JzLnRlcnRpYXJ5Q29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSkgfVxyXG4gICAgICA8L3N0eWxlcy5jYXJkUm93PlxyXG4gICAgKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGVzLkFkbWluRGFzaGJvYXJkPlxyXG4gICAgICA8TmF2aWdhdGlvbi5BZG1pbk1haW4gLz5cclxuICAgICAgPHN0eWxlcy5jYXJkQ29udGFpbmVyPlxyXG4gICAgICAgIHtwcm9kdWN0c1N0YXRlLmRhdGEgJiYgZ2VuZXJhdGVQcm9kdWN0Q2FyZHMocHJvZHVjdHNTdGF0ZS5kYXRhLnByb2R1Y3RzKX1cclxuICAgICAgPC9zdHlsZXMuY2FyZENvbnRhaW5lcj5cclxuICAgIDwvc3R5bGVzLkFkbWluRGFzaGJvYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEFkbWluRGFzaGJvYXJkKSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgQWRtaW5EYXNoYm9hcmQgPSBzdHlsZWQodGVtcGxhdGVzLl9wYWdlKWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFzZUNvbG9yRGFya307XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2VUb3AgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFzZUNvbG9yfTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MDBweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkSW5mb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFJvdyA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2NhcmRSb3cpYGBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkU2VsZWN0QnV0dG9uID0gc3R5bGVkKHRlbXBsYXRlcy5fYnV0dG9uKWBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnF1YXRlbmFyeUNvbG9yfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFRvcCA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3Qgc3ZnQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmAiLCJpbXBvcnQgeyBBZG1pbkRhc2hib2FyZCwgQ2FyZEltYWdlVG9wIH0gZnJvbSAnLi9iYXNlJ1xyXG5pbXBvcnQgeyBjYXJkLCBjYXJkQm9keSwgY2FyZENvbnRhaW5lciwgY2FyZEZvb3RlciwgY2FyZEluZm9Db250YWluZXIsIGNhcmRSb3csIGNhcmRTZWxlY3RCdXR0b24sIGNhcmRUb3AsIHN2Z0NvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVycydcclxuaW1wb3J0IHsgaW5mb0RhdGEsIGluZm9UaXRsZSwgcHJvZHVjdE5hbWUgfSBmcm9tICcuL3RleHQnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgQWRtaW5EYXNoYm9hcmQsXHJcbiAgQ2FyZEltYWdlVG9wLFxyXG4gIGNhcmQsXHJcbiAgY2FyZEJvZHksXHJcbiAgY2FyZENvbnRhaW5lcixcclxuICBjYXJkRm9vdGVyLFxyXG4gIGNhcmRJbmZvQ29udGFpbmVyLFxyXG4gIGNhcmRSb3csXHJcbiAgY2FyZFNlbGVjdEJ1dHRvbixcclxuICBjYXJkVG9wLFxyXG4gIGluZm9EYXRhLFxyXG4gIGluZm9UaXRsZSxcclxuICBwcm9kdWN0TmFtZSxcclxuICBzdmdDb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0TmFtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaW5mb1RpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnF1YXRlbmFyeUNvbG9yfTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGluZm9EYXRhID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmAiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5jb25zdCBMYW5kaW5nID0gKCkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN0eWxlcy5MYW5kaW5nPlxyXG4gICAgICA8c3R5bGVzLnBhZ2VUaXRsZT5cclxuICAgICAgICBXZWxjb21lIHRvIDxzdHlsZXMuY29sb3JBY2NlbnQ+RmxvYXRQbGFuZTwvc3R5bGVzLmNvbG9yQWNjZW50PiBTaG9waWZ5XHJcbiAgICAgIDwvc3R5bGVzLnBhZ2VUaXRsZT5cclxuICAgICAgPGgzPkNyZWF0b3IgSnVzdGluIDxzdHlsZXMuY29sb3JBY2NlbnQ+eyd7IEhlaXNleSB9J308L3N0eWxlcy5jb2xvckFjY2VudD4gSGVpc2xlcjwvaDM+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wcm9kdWN0cyc+XHJcbiAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgIHRyeSBhcHBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9zdHlsZXMuTGFuZGluZz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmciLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge3RlbXBsYXRlc30gZnJvbSAnLi4vLi4vLi4vLi4vY29yZSdcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5kaW5nID0gc3R5bGVkKHRlbXBsYXRlcy5fcGFnZSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfVxyXG5gIiwiaW1wb3J0IHsgTGFuZGluZyB9IGZyb20gJy4vYmFzZSdcclxuaW1wb3J0IHsgY29sb3JBY2NlbnQsIHBhZ2VUaXRsZSB9IGZyb20gJy4vdGV4dCdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBMYW5kaW5nLFxyXG4gIGNvbG9yQWNjZW50LFxyXG4gIHBhZ2VUaXRsZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZXMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0ZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VUaXRsZSA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2gxKWBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjb2xvckFjY2VudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnlDb2xvcn1cclxuYCIsIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnV0dG9ucywgQ2FyZHMsIE1vZGFscyB9IGZyb20gJy4uLy4uLydcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxyXG4gIFxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNob3dNb2RhbEhhbmRsZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzLmRhdGEpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zLnByb2R1Y3RBY3Rpb25zLmdldE9uZShkaXNwYXRjaCwgaWQpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiB7XHJcbiAgICBzaG93TW9kYWxIYW5kbGVyKCFzaG93TW9kYWwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzaG93TW9kYWxIYW5kbGVyKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVQcm9kdWN0Q2FyZCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBsZXQgcHJpY2UgPSAnJ1xyXG4gICAgbGV0IHRpdGxlID0gJydcclxuICAgIGxldCBzdWJUaXRsZSA9ICcnXHJcbiAgICBsZXQgaW1nID0gJydcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIHRpdGxlID0gcHJvZHVjdC50aXRsZVxyXG4gICAgICBpZiAocHJvZHVjdC5pbWFnZSkge1xyXG4gICAgICAgICAgaW1nID0gcHJvZHVjdC5pbWFnZS5zcmNcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb2R1Y3QudmFyaWFudHMpIHtcclxuICAgICAgICBwcmljZSA9IHByb2R1Y3QudmFyaWFudHNbMF0ucHJpY2VcclxuICAgICAgICBzdWJUaXRsZSA9IHByb2R1Y3QudmFyaWFudHNbMF0ub3B0aW9uczFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN0eWxlcy5DYXJkPlxyXG4gICAgICAgIDxzdHlsZXMuaW1hZ2VCb3g+XHJcbiAgICAgICAgICA8c3R5bGVzLnByb2R1Y3RJbWFnZSBzcmM9e2ltZ30gLz5cclxuICAgICAgICA8L3N0eWxlcy5pbWFnZUJveD5cclxuICAgICAgICA8c3R5bGVzLmNhcmRDb250ZW50PlxyXG4gICAgICAgICAgPHN0eWxlcy5jYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8c3R5bGVzLnByaWNlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxzdHlsZXMuZG9sbGFyPiQ8L3N0eWxlcy5kb2xsYXI+XHJcbiAgICAgICAgICAgICAgPHN0eWxlcy5wcmljZT57cHJpY2V9PC9zdHlsZXMucHJpY2U+XHJcbiAgICAgICAgICAgIDwvc3R5bGVzLnByaWNlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9zdHlsZXMuY2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxzdHlsZXMuY2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDxzdHlsZXMubmFtZT57dGl0bGV9PC9zdHlsZXMubmFtZT5cclxuICAgICAgICAgICAgPHN0eWxlcy5zdWJUaXRsZT57c3ViVGl0bGV9PC9zdHlsZXMuc3ViVGl0bGU+XHJcbiAgICAgICAgICA8L3N0eWxlcy5jYXJkQm9keT5cclxuICAgICAgICAgIDxzdHlsZXMuY2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbnMuUGlsbCB0ZXh0PSdwdXJjaGFzZScgLz5cclxuICAgICAgICAgICAgPHN0eWxlcy5kaXNjb3VudFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgICAgID5hcHBseSBkaXNjb3VudDwvc3R5bGVzLmRpc2NvdW50PlxyXG4gICAgICAgICAgPC9zdHlsZXMuY2FyZEZvb3Rlcj5cclxuICAgICAgICA8L3N0eWxlcy5jYXJkQ29udGVudD5cclxuICAgICAgPC9zdHlsZXMuQ2FyZD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGVzLlByb2R1Y3RQYWdlPlxyXG4gICAgICA8TW9kYWxzLkNhcmRNb2RhbCBcclxuICAgICAgICBjbG9zZU1vZGFsPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgc2hvdz17c2hvd01vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkcy5EaXNjb3VudCAvPlxyXG4gICAgICAgIDwvTW9kYWxzLkNhcmRNb2RhbD5cclxuICAgICAgPHN0eWxlcy5iYWNrZ3JvdW5kVGV4dD5DQVRFR09SWSB0ZXh0PC9zdHlsZXMuYmFja2dyb3VuZFRleHQ+XHJcbiAgICAgIDxzdHlsZXMuY2FyZENvbnRhaW5lcj5cclxuICAgICAgICB7cHJvZHVjdCAmJiBnZW5lcmF0ZVByb2R1Y3RDYXJkKHByb2R1Y3QpfVxyXG4gICAgICA8L3N0eWxlcy5jYXJkQ29udGFpbmVyPlxyXG4gICAgPC9zdHlsZXMuUHJvZHVjdFBhZ2U+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFBhZ2UgPSBzdHlsZWQodGVtcGxhdGVzLl9wYWdlKWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgcHVyY2hhc2VCdXR0b24gPSBzdHlsZWQodGVtcGxhdGVzLl9idXR0b24pYGAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBpbWFnZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeUNvbG9yfTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5xdWF0ZW5hcnlDb2xvcn0gMzglLCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5Q29sb3J9IDYxJSk7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IC0xMHB4IDVweCAxNXB4IDVweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYXNlQ29sb3JEYXJrfTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvckxpZ2h0fTtcclxuICB3aWR0aDogNTAwcHg7IFxyXG4gIGJveC1zaGFkb3c6IC0zcHggNXB4IDE1cHggNXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvckRhcmt9O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgcHJpY2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwMHB4O1xyXG4gIHRvcDogOTBweDtcclxuYCIsImltcG9ydCB7IENhcmQsIFByb2R1Y3RQYWdlIH0gZnJvbSAnLi9iYXNlJ1xyXG5pbXBvcnQgeyBwdXJjaGFzZUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9ucydcclxuaW1wb3J0IHsgY2FyZEJvZHksIGNhcmRDb250YWluZXIsIGNhcmRDb250ZW50LCBjYXJkRm9vdGVyLCBjYXJkSGVhZGVyLCBpbWFnZUJveCwgcHJpY2VDb250YWluZXIgfSBmcm9tICcuL2NvbnRhaW5lcnMnXHJcbmltcG9ydCB7IHByb2R1Y3RJbWFnZSB9IGZyb20gJy4vaW1hZ2VzJ1xyXG5pbXBvcnQgeyBiYWNrZ3JvdW5kVGV4dCwgZGlzY291bnQsIGRvbGxhciwgbmFtZSwgcHJpY2UsIHN1YlRpdGxlIH0gZnJvbSAnLi90ZXh0J1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIENhcmQsXHJcbiAgUHJvZHVjdFBhZ2UsXHJcbiAgYmFja2dyb3VuZFRleHQsXHJcbiAgY2FyZEJvZHksXHJcbiAgY2FyZENvbnRhaW5lcixcclxuICBjYXJkQ29udGVudCxcclxuICBjYXJkRm9vdGVyLFxyXG4gIGNhcmRIZWFkZXIsXHJcbiAgZGlzY291bnQsXHJcbiAgZG9sbGFyLFxyXG4gIG5hbWUsXHJcbiAgcHJpY2UsXHJcbiAgcHJpY2VDb250YWluZXIsXHJcbiAgcHJvZHVjdEltYWdlLFxyXG4gIHB1cmNoYXNlQnV0dG9uLFxyXG4gIHN1YlRpdGxlLFxyXG4gIGltYWdlQm94XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHRlbXBsYXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZFRleHQgPSBzdHlsZWQodGVtcGxhdGVzLl9oMilgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvckxpZ2h0fTtcclxuICBmb250LXNpemU6IDIwcmVtO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMSU7XHJcbiAgbGVmdDogNSU7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBwcmljZSA9IHN0eWxlZCh0ZW1wbGF0ZXMuX2gzKWBcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZG9sbGFyID0gc3R5bGVkLnNwYW5gXHJcbiAgcGFkZGluZy10b3A6IDAuNHJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lID0gc3R5bGVkKHRlbXBsYXRlcy5faDIpYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IHN1YlRpdGxlID0gc3R5bGVkKHRlbXBsYXRlcy5faDMpYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc2NvdW50ID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmAiLCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQ2FyZHMgfSBmcm9tICcuLi8uLi8nXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vY29yZSdcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcydcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdHMuZGF0YSlcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFjdGlvbnMucHJvZHVjdEFjdGlvbnMuZ2V0QWxsKGRpc3BhdGNoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZVByb2R1Y3RDYXJkcyA9IChwcm9kdWN0cykgPT4ge1xyXG4gICAgY29uc3QgZ3JpZCA9IHV0aWxzLmdlbmVyYXRlR3JpZChwcm9kdWN0cylcclxuICAgIHJldHVybiBncmlkLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICA8c3R5bGVzLmNhcmRSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgIHtyb3cubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgIDxDYXJkcy5Qcm9kdWN0Q2FyZCBcclxuICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgbmFtZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnZhcmlhbnRzWzBdLnByaWNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpIH1cclxuICAgICAgPC9zdHlsZXMuY2FyZFJvdz5cclxuICAgICkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN0eWxlcy5Qcm9kdWN0cz5cclxuICAgICAge3Byb2R1Y3RzICYmIGdlbmVyYXRlUHJvZHVjdENhcmRzKHByb2R1Y3RzLnByb2R1Y3RzKX1cclxuICAgIDwvc3R5bGVzLlByb2R1Y3RzPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0ZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzID0gc3R5bGVkKHRlbXBsYXRlcy5fcGFnZSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFzZUNvbG9yRGFya307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0ZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRSb3cgPSBzdHlsZWQodGVtcGxhdGVzLl9jYXJkUm93KWBcclxuICB3aWR0aDogODAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDMwcHg7XHJcbmAiLCJpbXBvcnQgeyBQcm9kdWN0cyB9IGZyb20gJy4vYmFzZSdcclxuaW1wb3J0IHsgY2FyZFJvdyB9IGZyb20gJy4vY29udGFpbmVycydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBQcm9kdWN0cyxcclxuICBjYXJkUm93XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcyIsImltcG9ydCBBZG1pbkRhc2hib2FyZCBmcm9tICcuL0FkbWluRGFzaGJvYXJkJ1xyXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL0xhbmRpbmcnXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCdcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdHMnXHJcblxyXG5jb25zdCBwYWdlcyA9IHtcclxuICBBZG1pbkRhc2hib2FyZCxcclxuICBMYW5kaW5nLFxyXG4gIFByb2R1Y3QsXHJcbiAgUHJvZHVjdHNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZXMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRlbXBsYXRlcyB9IGZyb20gJy4vdGVtcGxhdGVzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRoZW1lcyB9IGZyb20gJy4vdGhlbWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXRpbHMgfSBmcm9tICcuL3V0aWxpdGllcyciLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgX2J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiAke3Byb3BzID0+IHByb3BzWydib3JkZXInXSA/IHByb3BzWydib3JkZXInXSA6ICdub25lJ307XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wc1snYmFja2dyb3VuZC1jb2xvciddID8gcHJvcHNbJ2JhY2tncm91bmQtY29sb3InXSA6ICd0cmFuc3BhcmVudCd9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2J1dHRvbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBjYXJkUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBwcm9wc1snanVzdGlmeS1jb250ZW50J10gPyBwcm9wc1snanVzdGlmeS1jb250ZW50J10gOiAnc3BhY2UtYmV0d2Vlbid9O1xyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wc1snaGVpZ2h0J10gPyBwcm9wc1snaGVpZ2h0J10gOiAnZml0LWNvbnRlbnQnfTtcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wc1snd2lkdGgnXSA/IHByb3BzWyd3aWR0aCddIDogJzEwMCUnfTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZFJvdyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBfaDEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzWydmb250LXNpemUnXSA/IHByb3BzWydmb250LXNpemUnXSA6ICczcmVtJ307XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9oMSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBfaDIgPSBzdHlsZWQuaDJgYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2gyIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IF9oMyA9IHN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfaDMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgX2g0ID0gc3R5bGVkLmg0YGBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9oNCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBfcGFnZSA9IHN0eWxlZC5tYWluYFxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wc1snYmFja2dyb3VuZC1jb2xvciddID8gcHJvcHNbJ2JhY2tncm91bmQtY29sb3InXSA6IHByb3BzLnRoZW1lLmNvbG9ycy5iYXNlQ29sb3J9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9wYWdlIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IF9zdmcgPSBzdHlsZWQuc3ZnLmF0dHJzKHtcclxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXHJcbiAgcm9sZTogJ2ltZycsXHJcbiAgZm9jdXNhYmxlOiBcImZhbHNlXCJcclxufSlgYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX3N2ZyIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAvKiBCb3ggc2l6aW5nIHJ1bGVzICovXHJcbiAgKixcclxuICAqOjpiZWZvcmUsXHJcbiAgKjo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC8qIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgKi9cclxuICB1bFtjbGFzc10sXHJcbiAgb2xbY2xhc3NdIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxuICBib2R5LFxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIHAsXHJcbiAgdWxbY2xhc3NdLFxyXG4gIG9sW2NsYXNzXSxcclxuICBsaSxcclxuICBmaWd1cmUsXHJcbiAgZmlnY2FwdGlvbixcclxuICBibG9ja3F1b3RlLFxyXG4gIGRsLFxyXG4gIGRkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cclxuICBib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXHJcbiAgdWxbY2xhc3NdLFxyXG4gIG9sW2NsYXNzXSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cclxuICBhOm5vdChbY2xhc3NdKSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XHJcbiAgfVxyXG5cclxuICAvKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLyogTmF0dXJhbCBmbG93IGFuZCByaHl0aG0gaW4gYXJ0aWNsZXMgYnkgZGVmYXVsdCAqL1xyXG4gIGFydGljbGUgPiAqICsgKiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG5cclxuICAvKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cclxuICBpbnB1dCxcclxuICBidXR0b24sXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGUiLCJpbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi9nbG9iYWxTdHlsZXMnXHJcblxyXG5pbXBvcnQgX2J1dHRvbiBmcm9tICcuL19idXR0b24nXHJcbmltcG9ydCBfY2FyZFJvdyBmcm9tICcuL19jYXJkUm93J1xyXG5pbXBvcnQgX2gxIGZyb20gJy4vX2gxJ1xyXG5pbXBvcnQgX2gyIGZyb20gJy4vX2gyJ1xyXG5pbXBvcnQgX2gzIGZyb20gJy4vX2gzJ1xyXG5pbXBvcnQgX2g0IGZyb20gJy4vX2g0J1xyXG5pbXBvcnQgX3BhZ2UgZnJvbSAnLi9fcGFnZSdcclxuaW1wb3J0IF9zdmcgZnJvbSAnLi9fc3ZnJ1xyXG5cclxuY29uc3QgdGVtcGxhdGVzID0ge1xyXG4gIEdsb2JhbFN0eWxlLFxyXG4gIF9idXR0b24sXHJcbiAgX2NhcmRSb3csXHJcbiAgX2gxLFxyXG4gIF9oMixcclxuICBfaDMsXHJcbiAgX2g0LFxyXG4gIF9wYWdlLFxyXG4gIF9zdmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVzIiwiY29uc3QgZGVmYXVsdFRoZW1lID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgYmFzZUNvbG9yRGFyazogJyMwMDAnLFxyXG4gICAgYmFzZUNvbG9yOiAnIzI3MjcyNycsXHJcbiAgICBiYXNlQ29sb3JMaWdodDogJyM3NDc0NzQnLFxyXG5cclxuICAgIHdoaXRlOiAnI2ZmZicsXHJcblxyXG4gICAgcHJpbWFyeUNvbG9yTGlnaHQ6ICcjZmZhMjgyJyxcclxuICAgIHByaW1hcnlDb2xvcjogJyNmZjY1MmYnLFxyXG4gICAgcHJpbWFyeUNvbG9yRGFyazogJyNhNjQxMWUnLFxyXG4gICAgXHJcbiAgICBzZWNvbmRhcnlDb2xvckxpZ2h0OiAnIzUxODhjZicsXHJcbiAgICBzZWNvbmRhcnlDb2xvcjogJyMzYjYyOTQnLFxyXG4gICAgc2Vjb25kYXJ5Q29sb3JEYXJrOiAnIzI0M2I1OScsXHJcblxyXG4gICAgdGVydGlhcnlDb2xvckxpZ2h0OiAnIzFiZTM5MycsXHJcbiAgICB0ZXJ0aWFyeUNvbG9yOiAnIzE0YTc2YycsXHJcbiAgICB0ZXJ0aWFyeUNvbG9yRGFyazogJyMwYzYxM2YnLFxyXG4gICAgXHJcbiAgICBxdWF0ZW5hcnlDb2xvckxpZ2h0OiAnI2ZhZWQ4MicsXHJcbiAgICBxdWF0ZW5hcnlDb2xvcjogJyNmZmU0MDAnLFxyXG4gICAgcXVhdGVuYXJ5Q29sb3JEYXJrOiAnI2E4OTcwMydcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRUaGVtZSIsImltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0J1xyXG5cclxuY29uc3QgdGhlbWVzID0ge1xyXG4gIGRlZmF1bHRUaGVtZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZXMiLCJjb25zdCBnZW5lcmF0ZUdyaWQgPSAocHJvZHVjdHMpID0+IHtcclxuICBjb25zdCBncmlkID0gW11cclxuICBsZXQgcm93ID0gW11cclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IHByb2R1Y3RzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICBpZiAoeCAhPT0gMCkge1xyXG4gICAgICBpZiAoeCAlIDMgPT09IDApIHtcclxuICAgICAgICBncmlkLnB1c2gocm93KVxyXG4gICAgICAgIHJvdyA9IFtdXHJcbiAgICAgICAgcm93LnB1c2gocHJvZHVjdHNbeF0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm93LnB1c2gocHJvZHVjdHNbeF0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdy5wdXNoKHByb2R1Y3RzW3hdKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJvdy5sZW5ndGggIT09IDApIHtcclxuICAgIGdyaWQucHVzaChyb3cpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ3JpZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUdyaWQiLCJjb25zdCBnZW5lcmF0ZVBhdGggPSAoYmFzZSwgZW5kcG9pbnQpID0+IHtcclxuICBjb25zdCBwYXRoID0gYmFzZSArICcvJyArIGVuZHBvaW50XHJcblxyXG4gIHJldHVybiBwYXRoXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUGF0aCIsImNvbnN0IGhhbmRsZVN0YXRlID0gKHN0YXRlLCBoYW5kbGVyKSA9PiBoYW5kbGVyKHN0YXRlKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlU3RhdGUiLCJpbXBvcnQgZ2VuZXJhdGVHcmlkIGZyb20gJy4vZ2VuZXJhdGVHcmlkJ1xyXG5pbXBvcnQgZ2VuZXJhdGVQYXRoIGZyb20gJy4vZ2VuZXJhdGVQYXRoJ1xyXG5pbXBvcnQgaGFuZGxlU3RhdGUgZnJvbSAnLi9oYW5kbGVTdGF0ZSdcclxuXHJcbmNvbnN0IHV0aWxpdGllcyA9IHtcclxuICBnZW5lcmF0ZUdyaWQsXHJcbiAgZ2VuZXJhdGVQYXRoLFxyXG4gIGhhbmRsZVN0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxpdGllcyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgcGFyc2VkSHJlZjogVXJsT2JqZWN0LFxuICBwYWdlczogc3RyaW5nW10sXG4gIGFwcGx5QmFzZVBhdGggPSB0cnVlXG4pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgcmV0dXJuIHBhcnNlZEhyZWZcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlbXVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXNQYXRoKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHJvdXRlID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnXHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHByb3BzKSA9PiA8UGFnZXMuUHJvZHVjdCB7Li4ucHJvcHN9IC8+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0IiwiaW1wb3J0IHByb2R1Y3RBY3Rpb25zIGZyb20gJy4vcHJvZHVjdHMnXHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG4gIHByb2R1Y3RBY3Rpb25zXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnMiLCJcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1BJRllfUFJPRFVDVFNfR0VUX0FMTF9TVEFSVCcgfSlcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcHJvZHVjdHMnKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9BTExfU1VDQ0VTUycsIHBheWxvYWQ6IGRhdGF9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJ3Byb2R1Y3RzIGdldCBhbGwgaG9vaycpXHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9BTExfRkFJTEVEJywgcGF5bG9hZDogZXJyfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGdldE9uZSA9IGFzeW5jIChkaXNwYXRjaCwgaWQpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9PTkVfU1RBUlQnIH0pXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKGAvYXBpL3Byb2R1Y3RzLyR7aWR9YClcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9PTkVfU1VDQ0VTUycsIHBheWxvYWQ6IGRhdGF9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJ3Byb2R1Y3RzIGdldCBvbmUgaG9vaycpXHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9PTkVfRkFJTEVEJywgcGF5bG9hZDogZXJyfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE9uZSIsImltcG9ydCBnZXRBbGwgZnJvbSAnLi9nZXRBbGwnXHJcbmltcG9ydCBnZXRPbmUgZnJvbSAnLi9nZXRPbmUnXHJcblxyXG5jb25zdCBwcm9kdWN0QWN0aW9ucyA9IHtcclxuICBnZXRBbGwsXHJcbiAgZ2V0T25lXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RBY3Rpb25zIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucydcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBwcm9kdWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9kdWN0cydcclxuaW1wb3J0IHRlbXAgZnJvbSAnLi9kZWZhdWx0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0czogcHJvZHVjdHNSZWR1Y2VyLFxyXG4gIHRlbXBcclxufSkiLCJcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycjogbnVsbFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1NIT1BJRllfUFJPRFVDVFNfR0VUX0FMTF9TVEFSVCc6XHJcbiAgICAgIHJldHVybiB7bG9hZGluZzogdHJ1ZSwgZGF0YTogbnVsbCwgZXJyOiBudWxsfVxyXG5cclxuICAgIGNhc2UgJ1NIT1BJRllfUFJPRFVDVFNfR0VUX0FMTF9TVUNDRVNTJzpcclxuICAgICAgcmV0dXJuIHtsb2FkaW5nOiBmYWxzZSwgZGF0YTogYWN0aW9uLnBheWxvYWQsIGVycjogbnVsbH1cclxuXHJcbiAgICBjYXNlICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9BTExfRkFJTEVEJzpcclxuICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGRhdGE6IG51bGwsIGVycjogYWN0aW9uLnBheWxvYWR9XHJcblxyXG4gICAgY2FzZSAnU0hPUElGWV9QUk9EVUNUU19HRVRfT05FX1NUQVJUJzpcclxuICAgICAgcmV0dXJuIHtsb2FkaW5nOiB0cnVlLCBkYXRhOiBudWxsLCBlcnI6IG51bGx9XHJcblxyXG4gICAgY2FzZSAnU0hPUElGWV9QUk9EVUNUU19HRVRfT05FX1NVQ0NFU1MnOlxyXG4gICAgICByZXR1cm4ge2xvYWRpbmc6IGZhbHNlLCBkYXRhOiBhY3Rpb24ucGF5bG9hZCwgZXJyOiBudWxsfVxyXG5cclxuICAgIGNhc2UgJ1NIT1BJRllfUFJPRFVDVFNfR0VUX09ORV9GQUlMRUQnOlxyXG4gICAgICByZXR1cm4geyBsb2FkaW5nOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=