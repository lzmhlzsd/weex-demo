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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
module.exports = {
    props: {
        rows: {
            type: Array,
            required: true
        }
    },
    methods: {
        go: function go(url) {
            //var bundleUrl = this.$getConfig().bundleUrl;
            //var baseURL = getBaseUrl(bundleUrl)
            navigator.push({
                url: 'file://assets/withdraw/withdraw.js',
                //url: './dist/native/withdraw/withdraw.js',
                animated: "true"
            }, function (event) {
                // modal.toast( {
                //     message: 'callback: ' + event
                // } )
            });
        }
    },
    // methods: {
    //     onappear: function ( e ) {
    //         var appearId = this.rows[ e.target.attr.index ].id;
    //         nativeLog( '+++++', appearId );
    //         var appearIds = this.appearIds;
    //         appearIds.push( appearId );
    //         this.getMinAndMaxIds( appearIds );
    //     },
    //     ondisappear: function ( e ) {
    //         var disAppearId = this.rows[ e.target.attr.index ].id;
    //         nativeLog( '+++++', disAppearId );
    //         var appearIds = this.appearIds;
    //         var index = appearIds.indexOf( disAppearId );
    //         if ( index > -1 ) {
    //             appearIds.splice( index, 1 );
    //         }
    //         this.getMinAndMaxIds( appearIds );
    //     },
    //     getMinAndMaxIds: function ( appearIds ) {
    //         appearIds.sort( function ( a, b ) {
    //             return a - b;
    //         } );
    //         this.appearIds = appearIds;
    //         this.appearMax = appearIds[ appearIds.length - 1 ];
    //         this.appearMin = appearIds[ 0 ];
    //     }
    // },
    // data: function () {
    //     return {
    //         rows: [ {
    //                 id: 1
    //             },
    //             {
    //                 id: 2
    //             },
    //             {
    //                 id: 3
    //             }
    //         ]
    //     }
    // },
    computed: {
        listheight: function listheight() {
            return weex.config.env.deviceHeight - 88 * 2;
        }
    }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "backgroundColor": "#f3f3f3"
  },
  "block": {
    "height": 20,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2,
    "borderBottomColor": "#e2e2e2"
  },
  "row": {
    "flexDirection": "row",
    "paddingLeft": 20,
    "paddingRight": 20,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2,
    "borderBottomColor": "#e2e2e2",
    "backgroundColor": "#ffffff"
  },
  "icon": {
    "width": 50,
    "justifyContent": "center",
    "height": 88
  },
  "item": {
    "width": 630,
    "justifyContent": "center",
    "height": 88
  },
  "link": {
    "width": 30,
    "justifyContent": "center",
    "height": 88
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/components/listItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-98f92cc6"
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


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"],
    style: {
      height: _vm.listheight + 'px'
    }
  }, [_vm._m(0), _vm._l((_vm.rows), function(v, i) {
    return _c('cell', {
      staticClass: ["row"],
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": i
      },
      on: {
        "click": function($event) {
          _vm.go(v.path)
        }
      }
    }, [_c('div', {
      staticClass: ["icon"]
    }, [_c('text', {
      staticStyle: {
        fontFamily: "iconfont",
        fontSize: "30px"
      },
      style: {
        color: v.color
      }
    }, [_vm._v(_vm._s(v.icon))])]), _c('div', {
      staticClass: ["item"]
    }, [_c('text', {
      staticClass: ["item-title"],
      staticStyle: {
        fontSize: "30px",
        color: "#313131"
      }
    }, [_vm._v(_vm._s(v.label))])]), _vm._m(1, true)])
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["block"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["link"]
  }, [_c('text', {
    staticStyle: {
      fontFamily: "iconfont",
      fontSize: "30px",
      color: "#cdcdcd"
    }
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });