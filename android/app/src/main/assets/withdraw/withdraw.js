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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        title: {
            type: String,
            required: true
        }
    }
};

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "header-bar": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": 88,
    "backgroundColor": "#434A5A"
  },
  "headerbar-center-title": {
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["header-bar"]
  }, [_c('div', {
    staticClass: ["left"]
  }), _c('div', {
    staticClass: ["center"]
  }, [_c('text', {
    staticClass: ["headerbar-center-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(2)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/components/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9829eb4e"
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = __webpack_require__(3);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
// import he from 'he'
exports.default = {
    components: {
        "header-bar": _header2.default
    },
    data: function data() {
        return {
            title: '提现'
        };
    },

    computed: {
        imgServer: function imgServer() {
            return "this.$store.state.imgServer111";
        }
    },
    // mounted() {
    //     var globalEvent = weex.requireModule( 'globalEvent' );
    //     //注意这里跟官网提到的引入方式是不同的.官网是：var globalEvent = __weex_require_module__('globalEvent');
    //     //显然是不对的。监听的方法建议在mounted事件里面写：
    //     globalEvent.addEventListener( "androidback", function ( e ) {
    //         navigator.pop( {
    //             animated: "true"
    //         }, event => {
    //             modal.toast( {
    //                 message: 'callback: ' + event
    //             } )
    //         } )
    //     } );
    // },
    methods: {
        back: function back() {
            navigator.pop({
                animated: "true"
            }, function (event) {
                // modal.toast( {
                //     message: 'callback: ' + event
                // } )
            });
        }
    }
};

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "androidback": _vm.back
    }
  }, [_c('header-bar', {
    attrs: {
      "title": _vm.title
    }
  }), _c('text', [_vm._v("12313232")]), _c('text', [_vm._v(_vm._s(_vm.imgServer))]), _c('text', {
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  }, [_vm._v("后退")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(42)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(48)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/withdraw/withdraw.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2cb8eea2"
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