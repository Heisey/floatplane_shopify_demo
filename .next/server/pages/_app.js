module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "./core/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");


var _jsxFileName = "D:\\files\\school\\react\\shopify\\demo_1\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_6__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
          theme: _core__WEBPACK_IMPORTED_MODULE_5__["themes"].defaultTheme,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_core__WEBPACK_IMPORTED_MODULE_5__["templates"].GlobalStyle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9fY2FyZFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9faDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX2gyLmpzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL19oMy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9faDQuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvX3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9nbG9iYWxTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90aGVtZS9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL2NvcmUvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS91dGlsaXRpZXMvZ2VuZXJhdGVHcmlkLmpzIiwid2VicGFjazovLy8uL2NvcmUvdXRpbGl0aWVzL2dlbmVyYXRlUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3V0aWxpdGllcy9oYW5kbGVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL3V0aWxpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0cy9nZXRBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0cy9nZXRPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9wcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJfYnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwicHJvcHMiLCJjYXJkUm93IiwiZGl2IiwiX2gxIiwiaDEiLCJfaDIiLCJoMiIsIl9oMyIsIl9oNCIsImg0IiwiX3BhZ2UiLCJtYWluIiwidGhlbWUiLCJjb2xvcnMiLCJiYXNlQ29sb3IiLCJfc3ZnIiwic3ZnIiwiYXR0cnMiLCJ4bWxucyIsInJvbGUiLCJmb2N1c2FibGUiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGVtcGxhdGVzIiwiX2NhcmRSb3ciLCJkZWZhdWx0VGhlbWUiLCJiYXNlQ29sb3JEYXJrIiwiYmFzZUNvbG9yTGlnaHQiLCJ3aGl0ZSIsInByaW1hcnlDb2xvckxpZ2h0IiwicHJpbWFyeUNvbG9yIiwicHJpbWFyeUNvbG9yRGFyayIsInNlY29uZGFyeUNvbG9yTGlnaHQiLCJzZWNvbmRhcnlDb2xvciIsInNlY29uZGFyeUNvbG9yRGFyayIsInRlcnRpYXJ5Q29sb3JMaWdodCIsInRlcnRpYXJ5Q29sb3IiLCJ0ZXJ0aWFyeUNvbG9yRGFyayIsInF1YXRlbmFyeUNvbG9yTGlnaHQiLCJxdWF0ZW5hcnlDb2xvciIsInF1YXRlbmFyeUNvbG9yRGFyayIsInRoZW1lcyIsImdlbmVyYXRlR3JpZCIsInByb2R1Y3RzIiwiZ3JpZCIsInJvdyIsIngiLCJsZW5ndGgiLCJwdXNoIiwiZ2VuZXJhdGVQYXRoIiwiYmFzZSIsImVuZHBvaW50IiwicGF0aCIsImhhbmRsZVN0YXRlIiwic3RhdGUiLCJoYW5kbGVyIiwidXRpbGl0aWVzIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwic3RvcmUiLCJhY3Rpb25zIiwicHJvZHVjdEFjdGlvbnMiLCJnZXRBbGwiLCJkaXNwYXRjaCIsInR5cGUiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwYXlsb2FkIiwiZXJyIiwibG9nIiwiZ2V0T25lIiwiaWQiLCJheGlvcyIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0c1JlZHVjZXIiLCJ0ZW1wIiwiaW5pdFN0YXRlIiwibG9hZGluZyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDBEQUNEQyxLQUFLLElBQUlBLEtBQUssQ0FBQyxRQUFELENBQUwsR0FBa0JBLEtBQUssQ0FBQyxRQUFELENBQXZCLEdBQW9DLE1BRDVDLEVBRVNBLEtBQUssSUFBSUEsS0FBSyxDQUFDLGtCQUFELENBQUwsR0FBNEJBLEtBQUss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dkJEOztBQXlCZXNELHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGVzIH0gZnJvbSAnLi90ZW1wbGF0ZXMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGhlbWVzIH0gZnJvbSAnLi90aGVtZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1dGlscyB9IGZyb20gJy4vdXRpbGl0aWVzJyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBfYnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6ICR7cHJvcHMgPT4gcHJvcHNbJ2JvcmRlciddID8gcHJvcHNbJ2JvcmRlciddIDogJ25vbmUnfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzWydiYWNrZ3JvdW5kLWNvbG9yJ10gPyBwcm9wc1snYmFja2dyb3VuZC1jb2xvciddIDogJ3RyYW5zcGFyZW50J307XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfYnV0dG9uIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IGNhcmRSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiAke3Byb3BzID0+IHByb3BzWydqdXN0aWZ5LWNvbnRlbnQnXSA/IHByb3BzWydqdXN0aWZ5LWNvbnRlbnQnXSA6ICdzcGFjZS1iZXR3ZWVuJ307XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzWydoZWlnaHQnXSA/IHByb3BzWydoZWlnaHQnXSA6ICdmaXQtY29udGVudCd9O1xyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzWyd3aWR0aCddID8gcHJvcHNbJ3dpZHRoJ10gOiAnMTAwJSd9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkUm93IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IF9oMSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHNbJ2ZvbnQtc2l6ZSddID8gcHJvcHNbJ2ZvbnQtc2l6ZSddIDogJzNyZW0nfTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2gxIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IF9oMiA9IHN0eWxlZC5oMmBgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfaDIiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgX2gzID0gc3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9oMyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBfaDQgPSBzdHlsZWQuaDRgYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2g0IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IF9wYWdlID0gc3R5bGVkLm1haW5gXHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzWydiYWNrZ3JvdW5kLWNvbG9yJ10gPyBwcm9wc1snYmFja2dyb3VuZC1jb2xvciddIDogcHJvcHMudGhlbWUuY29sb3JzLmJhc2VDb2xvcn1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX3BhZ2UiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgX3N2ZyA9IHN0eWxlZC5zdmcuYXR0cnMoe1xyXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcclxuICByb2xlOiAnaW1nJyxcclxuICBmb2N1c2FibGU6IFwiZmFsc2VcIlxyXG59KWBgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfc3ZnIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC8qIEJveCBzaXppbmcgcnVsZXMgKi9cclxuICAqLFxyXG4gICo6OmJlZm9yZSxcclxuICAqOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xyXG4gIHVsW2NsYXNzXSxcclxuICBvbFtjbGFzc10ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xyXG4gIGJvZHksXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgcCxcclxuICB1bFtjbGFzc10sXHJcbiAgb2xbY2xhc3NdLFxyXG4gIGxpLFxyXG4gIGZpZ3VyZSxcclxuICBmaWdjYXB0aW9uLFxyXG4gIGJsb2NrcXVvdGUsXHJcbiAgZGwsXHJcbiAgZGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xyXG4gIGJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG5cclxuICAvKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBjbGFzcyBhdHRyaWJ1dGUgKi9cclxuICB1bFtjbGFzc10sXHJcbiAgb2xbY2xhc3NdIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xyXG4gIGE6bm90KFtjbGFzc10pIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuICB9XHJcblxyXG4gIC8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAvKiBOYXR1cmFsIGZsb3cgYW5kIHJoeXRobSBpbiBhcnRpY2xlcyBieSBkZWZhdWx0ICovXHJcbiAgYXJ0aWNsZSA+ICogKyAqIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcblxyXG4gIC8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xyXG4gIGlucHV0LFxyXG4gIGJ1dHRvbixcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3Qge1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICB9XHJcblxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZSIsImltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuL2dsb2JhbFN0eWxlcydcclxuXHJcbmltcG9ydCBfYnV0dG9uIGZyb20gJy4vX2J1dHRvbidcclxuaW1wb3J0IF9jYXJkUm93IGZyb20gJy4vX2NhcmRSb3cnXHJcbmltcG9ydCBfaDEgZnJvbSAnLi9faDEnXHJcbmltcG9ydCBfaDIgZnJvbSAnLi9faDInXHJcbmltcG9ydCBfaDMgZnJvbSAnLi9faDMnXHJcbmltcG9ydCBfaDQgZnJvbSAnLi9faDQnXHJcbmltcG9ydCBfcGFnZSBmcm9tICcuL19wYWdlJ1xyXG5pbXBvcnQgX3N2ZyBmcm9tICcuL19zdmcnXHJcblxyXG5jb25zdCB0ZW1wbGF0ZXMgPSB7XHJcbiAgR2xvYmFsU3R5bGUsXHJcbiAgX2J1dHRvbixcclxuICBfY2FyZFJvdyxcclxuICBfaDEsXHJcbiAgX2gyLFxyXG4gIF9oMyxcclxuICBfaDQsXHJcbiAgX3BhZ2UsXHJcbiAgX3N2Z1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZXMiLCJjb25zdCBkZWZhdWx0VGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBiYXNlQ29sb3JEYXJrOiAnIzAwMCcsXHJcbiAgICBiYXNlQ29sb3I6ICcjMjcyNzI3JyxcclxuICAgIGJhc2VDb2xvckxpZ2h0OiAnIzc0NzQ3NCcsXHJcblxyXG4gICAgd2hpdGU6ICcjZmZmJyxcclxuXHJcbiAgICBwcmltYXJ5Q29sb3JMaWdodDogJyNmZmEyODInLFxyXG4gICAgcHJpbWFyeUNvbG9yOiAnI2ZmNjUyZicsXHJcbiAgICBwcmltYXJ5Q29sb3JEYXJrOiAnI2E2NDExZScsXHJcbiAgICBcclxuICAgIHNlY29uZGFyeUNvbG9yTGlnaHQ6ICcjNTE4OGNmJyxcclxuICAgIHNlY29uZGFyeUNvbG9yOiAnIzNiNjI5NCcsXHJcbiAgICBzZWNvbmRhcnlDb2xvckRhcms6ICcjMjQzYjU5JyxcclxuXHJcbiAgICB0ZXJ0aWFyeUNvbG9yTGlnaHQ6ICcjMWJlMzkzJyxcclxuICAgIHRlcnRpYXJ5Q29sb3I6ICcjMTRhNzZjJyxcclxuICAgIHRlcnRpYXJ5Q29sb3JEYXJrOiAnIzBjNjEzZicsXHJcbiAgICBcclxuICAgIHF1YXRlbmFyeUNvbG9yTGlnaHQ6ICcjZmFlZDgyJyxcclxuICAgIHF1YXRlbmFyeUNvbG9yOiAnI2ZmZTQwMCcsXHJcbiAgICBxdWF0ZW5hcnlDb2xvckRhcms6ICcjYTg5NzAzJ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRoZW1lIiwiaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHQnXHJcblxyXG5jb25zdCB0aGVtZXMgPSB7XHJcbiAgZGVmYXVsdFRoZW1lXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lcyIsImNvbnN0IGdlbmVyYXRlR3JpZCA9IChwcm9kdWN0cykgPT4ge1xyXG4gIGNvbnN0IGdyaWQgPSBbXVxyXG4gIGxldCByb3cgPSBbXVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgcHJvZHVjdHMubGVuZ3RoOyB4KyspIHtcclxuICAgIGlmICh4ICE9PSAwKSB7XHJcbiAgICAgIGlmICh4ICUgMyA9PT0gMCkge1xyXG4gICAgICAgIGdyaWQucHVzaChyb3cpXHJcbiAgICAgICAgcm93ID0gW11cclxuICAgICAgICByb3cucHVzaChwcm9kdWN0c1t4XSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3cucHVzaChwcm9kdWN0c1t4XSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm93LnB1c2gocHJvZHVjdHNbeF0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocm93Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgZ3JpZC5wdXNoKHJvdylcclxuICB9XHJcblxyXG4gIHJldHVybiBncmlkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlR3JpZCIsImNvbnN0IGdlbmVyYXRlUGF0aCA9IChiYXNlLCBlbmRwb2ludCkgPT4ge1xyXG4gIGNvbnN0IHBhdGggPSBiYXNlICsgJy8nICsgZW5kcG9pbnRcclxuXHJcbiAgcmV0dXJuIHBhdGhcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQYXRoIiwiY29uc3QgaGFuZGxlU3RhdGUgPSAoc3RhdGUsIGhhbmRsZXIpID0+IGhhbmRsZXIoc3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVTdGF0ZSIsImltcG9ydCBnZW5lcmF0ZUdyaWQgZnJvbSAnLi9nZW5lcmF0ZUdyaWQnXHJcbmltcG9ydCBnZW5lcmF0ZVBhdGggZnJvbSAnLi9nZW5lcmF0ZVBhdGgnXHJcbmltcG9ydCBoYW5kbGVTdGF0ZSBmcm9tICcuL2hhbmRsZVN0YXRlJ1xyXG5cclxuY29uc3QgdXRpbGl0aWVzID0ge1xyXG4gIGdlbmVyYXRlR3JpZCxcclxuICBnZW5lcmF0ZVBhdGgsXHJcbiAgaGFuZGxlU3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbGl0aWVzIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHRlbXBsYXRlcywgdGhlbWVzIH0gZnJvbSAnLi4vY29yZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZXMuZGVmYXVsdFRoZW1lfT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlcy5HbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cclxuICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiaW1wb3J0IHByb2R1Y3RBY3Rpb25zIGZyb20gJy4vcHJvZHVjdHMnXHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG4gIHByb2R1Y3RBY3Rpb25zXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnMiLCJcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1BJRllfUFJPRFVDVFNfR0VUX0FMTF9TVEFSVCcgfSlcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcHJvZHVjdHMnKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9BTExfU1VDQ0VTUycsIHBheWxvYWQ6IGRhdGF9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJ3Byb2R1Y3RzIGdldCBhbGwgaG9vaycpXHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9BTExfRkFJTEVEJywgcGF5bG9hZDogZXJyfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGdldE9uZSA9IGFzeW5jIChkaXNwYXRjaCwgaWQpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9PTkVfU1RBUlQnIH0pXHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKGAvYXBpL3Byb2R1Y3RzLyR7aWR9YClcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9PTkVfU1VDQ0VTUycsIHBheWxvYWQ6IGRhdGF9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coJ3Byb2R1Y3RzIGdldCBvbmUgaG9vaycpXHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9PTkVfRkFJTEVEJywgcGF5bG9hZDogZXJyfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE9uZSIsImltcG9ydCBnZXRBbGwgZnJvbSAnLi9nZXRBbGwnXHJcbmltcG9ydCBnZXRPbmUgZnJvbSAnLi9nZXRPbmUnXHJcblxyXG5jb25zdCBwcm9kdWN0QWN0aW9ucyA9IHtcclxuICBnZXRBbGwsXHJcbiAgZ2V0T25lXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RBY3Rpb25zIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucydcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBwcm9kdWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9kdWN0cydcclxuaW1wb3J0IHRlbXAgZnJvbSAnLi9kZWZhdWx0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0czogcHJvZHVjdHNSZWR1Y2VyLFxyXG4gIHRlbXBcclxufSkiLCJcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBkYXRhOiBudWxsLFxyXG4gIGVycjogbnVsbFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1NIT1BJRllfUFJPRFVDVFNfR0VUX0FMTF9TVEFSVCc6XHJcbiAgICAgIHJldHVybiB7bG9hZGluZzogdHJ1ZSwgZGF0YTogbnVsbCwgZXJyOiBudWxsfVxyXG5cclxuICAgIGNhc2UgJ1NIT1BJRllfUFJPRFVDVFNfR0VUX0FMTF9TVUNDRVNTJzpcclxuICAgICAgcmV0dXJuIHtsb2FkaW5nOiBmYWxzZSwgZGF0YTogYWN0aW9uLnBheWxvYWQsIGVycjogbnVsbH1cclxuXHJcbiAgICBjYXNlICdTSE9QSUZZX1BST0RVQ1RTX0dFVF9BTExfRkFJTEVEJzpcclxuICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGRhdGE6IG51bGwsIGVycjogYWN0aW9uLnBheWxvYWR9XHJcblxyXG4gICAgY2FzZSAnU0hPUElGWV9QUk9EVUNUU19HRVRfT05FX1NUQVJUJzpcclxuICAgICAgcmV0dXJuIHtsb2FkaW5nOiB0cnVlLCBkYXRhOiBudWxsLCBlcnI6IG51bGx9XHJcblxyXG4gICAgY2FzZSAnU0hPUElGWV9QUk9EVUNUU19HRVRfT05FX1NVQ0NFU1MnOlxyXG4gICAgICByZXR1cm4ge2xvYWRpbmc6IGZhbHNlLCBkYXRhOiBhY3Rpb24ucGF5bG9hZCwgZXJyOiBudWxsfVxyXG5cclxuICAgIGNhc2UgJ1NIT1BJRllfUFJPRFVDVFNfR0VUX09ORV9GQUlMRUQnOlxyXG4gICAgICByZXR1cm4geyBsb2FkaW5nOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyOiBhY3Rpb24ucGF5bG9hZH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==