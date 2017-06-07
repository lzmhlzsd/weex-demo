// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/config.vue"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            imgServer: _config2.default.img_url
        };
    }
    // computed: {
    //     imgServer() {
    //         return this.$store.state.imgServer
    //     }
    // }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = {
  "main-action": {
    "flexDirection": "row",
    "height": 350,
    "backgroundColor": "#434A5A"
  },
  "action-item": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "action-label": {
    "color": "#FEAC00",
    "fontSize": 28,
    "marginTop": 10
  },
  "app-list": {
    "flexDirection": "row",
    "height": 200
  },
  "app-item": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "item-img": {
    "marginBottom": 10
  },
  "app-name": {
    "fontSize": 28
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["main-action"]
  }, [_c('div', {
    staticClass: ["action-item"]
  }, [_c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": _vm.imgServer + '/barcode.png'
    }
  }), _c('text', {
    staticClass: ["action-label"]
  }, [_vm._v("扫码收款")])]), _c('div', {
    staticClass: ["action-item"]
  }, [_c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": _vm.imgServer + '/qcode.png'
    }
  }), _c('text', {
    staticClass: ["action-label"]
  }, [_vm._v("收银牌")])]), _c('div', {
    staticClass: ["action-item"]
  }, [_c('image', {
    staticStyle: {
      width: "100px",
      height: "100px"
    },
    attrs: {
      "src": _vm.imgServer + '/order.png'
    }
  }), _c('text', {
    staticClass: ["action-label"]
  }, [_vm._v("订单列表")])])]), _vm._m(0), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-list"]
  }, [_c('div', {
    staticClass: ["app-item"]
  }, [_c('div', {
    staticClass: ["item-img"]
  }, [_c('text', {
    staticStyle: {
      fontFamily: "iconfont",
      fontSize: "60px",
      color: "#F76B6A"
    }
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["app-name"]
  }, [_vm._v("微店")])]), _c('div', {
    staticClass: ["app-item"]
  }, [_c('div', {
    staticClass: ["item-img"]
  }, [_c('text', {
    staticStyle: {
      fontFamily: "iconfont",
      fontSize: "60px",
      color: "#5599FE"
    }
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["app-name"]
  }, [_vm._v("分店管理")])]), _c('div', {
    staticClass: ["app-item"]
  }, [_c('div', {
    staticClass: ["item-img"]
  }, [_c('text', {
    staticStyle: {
      fontFamily: "iconfont",
      fontSize: "60px",
      color: "#EBA209"
    }
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["app-name"]
  }, [_vm._v("多收银通知")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-list"]
  }, [_c('div', {
    staticClass: ["app-item"]
  }, [_c('div', {
    staticClass: ["item-img"]
  }, [_c('text', {
    staticStyle: {
      fontFamily: "iconfont",
      fontSize: "60px",
      color: "#3ACB82"
    }
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["app-name"]
  }, [_vm._v("贷款")])]), _c('div', {
    staticClass: ["app-item"]
  }, [_c('div', {
    staticClass: ["item-img"]
  }, [_c('text', {
    staticStyle: {
      fontFamily: "iconfont",
      fontSize: "60px",
      color: "#EBA209"
    }
  }, [_vm._v("")])]), _c('text', {
    staticClass: ["app-name"]
  }, [_vm._v("信用卡")])]), _c('div', {
    staticClass: ["app-item"]
  })])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    img_url: 'http://192.168.95.39'
};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/cashier/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-740f9eb9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });