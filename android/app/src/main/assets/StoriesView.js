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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "relative",
    "height": 120,
    "marginBottom": 3,
    "borderBottomWidth": 2,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "backgroundColor": "#FF6600"
  },
  "logo": {
    "position": "relative",
    "width": 50,
    "height": 50,
    "top": 35,
    "left": 35,
    "borderWidth": 3,
    "borderStyle": "solid",
    "borderColor": "#FFFFFF"
  },
  "image": {
    "width": 44,
    "height": 44
  },
  "nav": {
    "display": "flex",
    "position": "absolute",
    "left": 120,
    "top": 35,
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "link": {
    "paddingLeft": 15,
    "paddingRight": 15
  },
  "title": {
    "fontFamily": "Verdana, Geneva, sans-serif",
    "fontSize": 32,
    "lineHeight": 44,
    "color": "#FFFFFF"
  }
}

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["logo"],
    on: {
      "click": function($event) {
        _vm.jump('/')
      }
    }
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": "https://news.ycombinator.com/favicon.ico"
    }
  })]), _c('div', {
    staticClass: ["nav"]
  }, [_c('div', {
    staticClass: ["link"],
    on: {
      "click": function($event) {
        _vm.jump('/top')
      }
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Top")])]), _c('div', {
    staticClass: ["link"],
    on: {
      "click": function($event) {
        _vm.jump('/new')
      }
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("New")])]), _c('div', {
    staticClass: ["link"],
    on: {
      "click": function($event) {
        _vm.jump('/show')
      }
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Show")])]), _c('div', {
    staticClass: ["link"],
    on: {
      "click": function($event) {
        _vm.jump('/ask')
      }
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Ask")])]), _c('div', {
    staticClass: ["link"],
    on: {
      "click": function($event) {
        _vm.jump('/job')
      }
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Job")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(31)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/components/external-link.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(32)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/components/story.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b674ae50"
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

/***/ 28:
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

exports.default = {
  props: ['url'],
  methods: {
    open: function open() {
      // get the environment variables
      var env = weex.config.env || WXEnvironment;

      // open a new window (tab) on the web
      if (env.platform === 'Web') {
        window.open(this.url);
        return;
      }

      // change router path on native (Android & iOS)
      this.jump('/article/' + this.url);
    }
  }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalLink = __webpack_require__(25);

var _externalLink2 = _interopRequireDefault(_externalLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { ExternalLink: _externalLink2.default },
  props: {
    story: {
      type: Object,
      required: true
    },
    'no-comment': {
      type: [String, Boolean],
      default: false
    }
  }
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

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
  "cell-item": {
    "position": "relative",
    "paddingTop": 20,
    "paddingBottom": 25,
    "paddingLeft": 100,
    "paddingRight": 40
  },
  "story-score": {
    "position": "absolute",
    "width": 100,
    "textAlign": "center",
    "left": 0,
    "top": 20,
    "fontSize": 32,
    "fontWeight": "bold",
    "color": "#FF6600"
  },
  "story-link": {
    "marginBottom": 25,
    "width": 610
  },
  "story-title": {
    "fontSize": 33,
    "color": "#404040"
  },
  "small-text": {
    "color": "#BBBBBB",
    "fontSize": 22,
    "marginBottom": 0,
    "fontFamily": "Verdana, Geneva, sans-serif"
  },
  "link-text": {
    "textDecoration": "underline"
  },
  "text-group": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "text-cell": {
    "flexGrow": 0
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "click": _vm.open
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-item"]
  }, [_c('text', {
    staticClass: ["story-score"]
  }, [_vm._v(_vm._s(_vm.story.score))]), _c('external-link', {
    staticClass: ["story-link"],
    attrs: {
      "url": _vm.story.url
    }
  }, [_c('text', {
    staticClass: ["story-title"]
  }, [_vm._v(_vm._s(_vm.story.title))]), (_vm.story.url) ? _c('text', {
    staticClass: ["small-text"]
  }, [_vm._v("(" + _vm._s(_vm._f("host")(_vm.story.url)) + ")")]) : _vm._e()]), _c('div', {
    staticClass: ["text-group"]
  }, [_c('text', {
    staticClass: ["small-text", "text-cell"]
  }, [_vm._v("by ")]), _c('div', {
    staticClass: ["text-cell"],
    on: {
      "click": function($event) {
        _vm.jump(("/user/" + (_vm.story.by)))
      }
    }
  }, [_c('text', {
    staticClass: ["small-text", "link-text"]
  }, [_vm._v(_vm._s(_vm.story.by))])]), _c('text', {
    staticClass: ["small-text", "text-cell"]
  }, [_vm._v(" | " + _vm._s(_vm._f("timeAgo")(_vm.story.time)) + " ago")]), (!_vm.noComment) ? _c('text', {
    staticClass: ["small-text", "text-cell"]
  }, [_vm._v(" | ")]) : _vm._e(), (!_vm.noComment) ? _c('div', {
    staticClass: ["text-cell"],
    on: {
      "click": function($event) {
        _vm.jump(("/item/" + (_vm.story.id)))
      }
    }
  }, [_c('text', {
    staticClass: ["small-text", "link-text"]
  }, [_vm._v(_vm._s(_vm.story.descendants) + " comments")])]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appHeader = __webpack_require__(9);

var _appHeader2 = _interopRequireDefault(_appHeader);

var _story = __webpack_require__(26);

var _story2 = _interopRequireDefault(_story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'weex-compon'
//var modal = require( '@weex-module/modal' );
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

exports.default = {
  components: {
    AppHeader: _appHeader2.default,
    Story: _story2.default
  },
  props: {
    type: {
      type: String,
      required: true,
      default: 'top'
    }
  },
  data: function data() {
    return {
      loading: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },


  computed: {
    stories: function stories() {
      return this.$store.getters.activeItems;
    }
  },
  methods: {
    fetchListData: function fetchListData() {
      var _this = this;

      this.loading = true;
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type
      }).then(function () {
        _this.loading = false;
      });
    },
    loadMoreStories: function loadMoreStories() {
      var _this2 = this;

      this.loading = true;
      this.$store.dispatch('LOAD_MORE_ITEMS').then(function () {
        _this2.loading = false;
      });
    }
  },

  created: function created() {
    this.fetchListData();

    // modal.toast( {
    //   "message": "我是提示框",
    //   "duration": 2
    // } );
  }
};

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = {
  "stories-view": {
    "height": 100
  },
  "story-cell": {
    "marginBottom": 3,
    "borderBottomWidth": 2,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "backgroundColor": "#FFFFFF"
  },
  "loading": {
    "width": 750,
    "height": 120,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "loading-text": {
    "textAlign": "center",
    "fontSize": 40,
    "color": "#BBBBBB"
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["stories-view"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('app-header'), _c('list', {
    staticClass: ["story-list"],
    attrs: {
      "loadmoreoffset": "50"
    },
    on: {
      "loadmore": _vm.loadMoreStories
    }
  }, _vm._l((_vm.stories), function(story) {
    return _c('cell', {
      key: story.id,
      staticClass: ["story-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('story', {
      attrs: {
        "story": story
      }
    })], 1)
  })), (_vm.loading) ? _c('div', {
    staticClass: ["loading"]
  }, [_c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v("loading ...")])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(46)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/StoriesView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1da49b6b"
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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/components/app-header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d21d9e34"
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


/***/ })

/******/ });