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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
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
/* 26 */
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
/* 27 */,
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appHeader = __webpack_require__(9);

var _appHeader2 = _interopRequireDefault(_appHeader);

var _story = __webpack_require__(26);

var _story2 = _interopRequireDefault(_story);

var _comment = __webpack_require__(56);

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { AppHeader: _appHeader2.default, Story: _story2.default, Comment: _comment2.default },
  data: function data() {
    return {
      loading: true
    };
  },


  computed: {
    id: function id() {
      if (this.$route && this.$route.params) {
        return this.$route.params.id;
      }
      return '12922141';
    },
    story: function story() {
      return this.$store.state.items[this.id];
    }
  },

  methods: {
    fetchItem: function fetchItem() {
      return this.$store.dispatch('FETCH_ITEMS', {
        ids: [this.id]
      });
    },
    fetchComments: function fetchComments(item) {
      var _this = this;

      if (item.kids) {
        return this.$store.dispatch('FETCH_ITEMS', {
          ids: item.kids
        }).then(function () {
          return Promise.all(item.kids.map(function (id) {
            return _this.fetchComments(_this.$store.state.items[id]);
          }));
        });
      }
    },
    fetchItemAndComments: function fetchItemAndComments() {
      var _this2 = this;

      return this.fetchItem().then(function () {
        var _$store$state = _this2.$store.state,
            items = _$store$state.items,
            route = _$store$state.route;

        return _this2.fetchComments(items[_this2.id]);
      });
    }
  },

  created: function created() {
    var _this3 = this;

    this.fetchItemAndComments().then(function () {
      _this3.loading = false;
    });
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

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  "commont-view": {
    "backgroundColor": "#F5F5F5"
  },
  "story-cell": {
    "marginBottom": 3,
    "borderBottomWidth": 2,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "backgroundColor": "#FFFFFF"
  },
  "comments-box": {
    "marginTop": 20,
    "backgroundColor": "#FFFFFF",
    "paddingLeft": 35,
    "paddingRight": 35
  },
  "comment-count": {
    "fontSize": 36,
    "paddingTop": 30,
    "paddingBottom": 30,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2,
    "borderBottomColor": "#EEEEEE",
    "marginBottom": 30
  }
}

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["commont-view"]
  }, [_c('app-header'), _c('scroller', [(_vm.story) ? _c('div', {
    staticClass: ["story-cell"]
  }, [_c('story', {
    staticClass: ["comment-story"],
    attrs: {
      "story": _vm.story,
      "noComment": "true"
    }
  })], 1) : _vm._e(), (_vm.story && _vm.story.kids) ? _c('div', {
    staticClass: ["comments-box"]
  }, [(_vm.story.descendants) ? _c('text', {
    staticClass: ["comment-count"]
  }, [_vm._v(_vm._s(_vm.story.descendants) + " comments")]) : _c('text', {
    staticClass: ["comment-count"]
  }, [_vm._v("no comments")]), _c('div', {
    staticClass: ["comment-list"]
  }, _vm._l((_vm.story.kids), function(id) {
    return _c('comment', {
      key: id,
      attrs: {
        "id": id
      }
    })
  }))]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * vuex v2.3.0
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}

var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: {} };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors$1);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {
    return;
  }

  parent.removeChild(key);
};

function update(targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
        return;
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state;if (state === void 0) state = {};
  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) {
    return plugin(this$1);
  });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error("[vuex] unknown mutation type: " + type);
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) {
    return sub(mutation, this$1.state);
  });

  if (options && options.silent) {
    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error("[vuex] unknown action type: " + type);
    return;
  }
  return entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
};

Store.prototype.subscribe = function subscribe(fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule) {
  if (typeof path === 'string') {
    path = [path];
  }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {
    path = [path];
  }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors);

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () {
      return fn(store);
    };
    Object.defineProperty(store.getters, key, {
      get: function get() {
        return store._vm[key];
      },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function get() {
        return getNestedState(store.state, path);
      }
    }
  });

  return local;
}

function makeLocalGetters(store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) {
      return;
    }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function get() {
        return store.getters[type];
      },
      enumerable: true
    });
  });

  return gettersProxy;
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler(local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error("[vuex] duplicate getter key: " + type);
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.length ? path.reduce(function (state, key) {
    return state[key];
  }, state) : state;
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', "Expects string as the type, but found " + (typeof type === 'undefined' ? 'undefined' : _typeof(type)) + ".");

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue) {
    console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return;
      }
      return this.$store.commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if (!(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return;
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return { key: key, val: key };
  }) : Object.keys(map).map(function (key) {
    return { key: key, val: map[key] };
  });
}

function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.3.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

exports.Store = Store;
exports.mapState = mapState;
exports.mapMutations = mapMutations;
exports.mapGetters = mapGetters;
exports.mapActions = mapActions;
exports.default = index_esm;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_LIST_DATA = FETCH_LIST_DATA;
exports.LOAD_MORE_ITEMS = LOAD_MORE_ITEMS;
exports.ENSURE_ACTIVE_ITEMS = ENSURE_ACTIVE_ITEMS;
exports.FETCH_ITEMS = FETCH_ITEMS;
exports.FETCH_USER = FETCH_USER;
exports.SET_ITEMTAB = SET_ITEMTAB;

var _fetch = __webpack_require__(53);

var LOAD_MORE_STEP = 10;

// ensure data for rendering given list type
function FETCH_LIST_DATA(_ref, _ref2) {
  var commit = _ref.commit,
      dispatch = _ref.dispatch,
      state = _ref.state;
  var type = _ref2.type;

  commit('SET_ACTIVE_TYPE', { type: type });
  return (0, _fetch.fetchIdsByType)(type).then(function (ids) {
    return commit('SET_LIST', { type: type, ids: ids });
  }).then(function () {
    return dispatch('ENSURE_ACTIVE_ITEMS');
  });
}

// load more items
function LOAD_MORE_ITEMS(_ref3) {
  var dispatch = _ref3.dispatch,
      state = _ref3.state;

  state.counts[state.activeType] += LOAD_MORE_STEP;
  return dispatch('ENSURE_ACTIVE_ITEMS');
}

// ensure all active items are fetched
function ENSURE_ACTIVE_ITEMS(_ref4) {
  var dispatch = _ref4.dispatch,
      getters = _ref4.getters;

  return dispatch('FETCH_ITEMS', {
    ids: getters.activeIds
  });
}

function FETCH_ITEMS(_ref5, _ref6) {
  var commit = _ref5.commit,
      state = _ref5.state;
  var ids = _ref6.ids;

  // only fetch items that we don't already have.
  var newIds = ids.filter(function (id) {
    return !state.items[id];
  });
  return newIds.length ? (0, _fetch.fetchItems)(newIds).then(function (items) {
    return commit('SET_ITEMS', { items: items });
  }) : Promise.resolve();
}

function FETCH_USER(_ref7, _ref8) {
  var commit = _ref7.commit,
      state = _ref7.state;
  var id = _ref8.id;

  return state.users[id] ? Promise.resolve(state.users[id]) : (0, _fetch.fetchUser)(id).then(function (user) {
    return commit('SET_USER', { user: user });
  });
}

function SET_ITEMTAB(_ref9, itemId) {
  var commit = _ref9.commit,
      state = _ref9.state;

  console.log('state_SET_ITEMTAB', itemId);
  return commit('MU_SET_TAB', { itemId: itemId });
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.fetchIdsByType = fetchIdsByType;
exports.fetchItem = fetchItem;
exports.fetchItems = fetchItems;
exports.fetchUser = fetchUser;
var stream = weex.requireModule('stream');
var baseURL = 'https://hacker-news.firebaseio.com/v0';

function fetch(path) {
  return new Promise(function (resolve, reject) {
    stream.fetch({
      method: 'GET',
      url: baseURL + '/' + path + '.json',
      type: 'json'
    }, function (response) {
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject(response);
      }
    }, function () {});
  });
}

function fetchIdsByType(type) {
  return fetch(type + 'stories');
}

function fetchItem(id) {
  return fetch('item/' + id);
}

function fetchItems(ids) {
  return Promise.all(ids.map(function (id) {
    return fetchItem(id);
  }));
}

function fetchUser(id) {
  return fetch('user/' + id);
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__(51);

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = __webpack_require__(52);

var actions = _interopRequireWildcard(_actions);

var _mutations = __webpack_require__(55);

var mutations = _interopRequireWildcard(_mutations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(_vuex2.default);
} // import Vue from 'vue'


var store = new _vuex2.default.Store({
  actions: actions,
  mutations: mutations,

  state: {
    activeType: null,
    items: {},
    users: {},
    appname: 'shopex',
    imgServer: 'http://192.168.95.39',
    selectTab: 'cashier',
    counts: {
      top: 20,
      new: 20,
      show: 15,
      ask: 15,
      job: 15
    },
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: []
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds: function activeIds(state) {
      var activeType = state.activeType,
          lists = state.lists,
          counts = state.counts;

      return activeType ? lists[activeType].slice(0, counts[activeType]) : [];
    },


    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems: function activeItems(state, getters) {
      return getters.activeIds.map(function (id) {
        return state.items[id];
      }).filter(function (_) {
        return _;
      });
    }
  }
});

exports.default = store;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_ACTIVE_TYPE = SET_ACTIVE_TYPE;
exports.SET_LIST = SET_LIST;
exports.SET_ITEMS = SET_ITEMS;
exports.SET_USER = SET_USER;
exports.MU_SET_TAB = MU_SET_TAB;
function SET_ACTIVE_TYPE(state, _ref) {
  var type = _ref.type;

  state.activeType = type;
}

function SET_LIST(state, _ref2) {
  var type = _ref2.type,
      ids = _ref2.ids;

  state.lists[type] = ids;
}

function SET_ITEMS(state, _ref3) {
  var items = _ref3.items;

  items.forEach(function (item) {
    if (item) {
      Vue.set(state.items, item.id, item);
    }
  });
}

function SET_USER(state, _ref4) {
  var user = _ref4.user;

  Vue.set(state.users, user.id, user);
}

function MU_SET_TAB(state, _ref5) {
  var itemId = _ref5.itemId;

  console.log('mutaions_SET_TAB:', itemId);
  state.selectTab = itemId;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(73)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(74)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/components/comment.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dd59dafc"
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
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(47)
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
__vue_options__.__file = "/Users/lukaijie/workspace/work/study/weex/weex-hackernews/src/views/CommentView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b3d4512"
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
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(54);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'comment',
  props: {
    id: {
      type: [Number, String],
      required: true,
      default: '13230551'
    },
    depth: {
      type: [Number, String],
      default: 1
    }
  },

  data: function data() {
    return {
      collapsed: false
    };
  },


  computed: {
    className: function className() {
      return Number(this.depth) > 1 ? ['deep-comment'] : ['comment'];
    },
    indent: function indent() {
      return Number(this.depth) > 4 ? 0 : '50px';
    },
    comment: function comment() {
      return _store2.default.state.items[this.id];
    }
  },

  methods: {
    toggle: function toggle(state) {
      this.collapsed = state === undefined ? !this.collapsed : state;
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

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {
  "comment": {
    "paddingBottom": 25,
    "borderBottomWidth": 1,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "marginBottom": 35,
    "position": "relative"
  },
  "deep-comment": {
    "marginTop": 25,
    "position": "relative"
  },
  "text-group": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "text-cell": {
    "flexGrow": 0
  },
  "small-text": {
    "color": "#BBBBBB",
    "fontSize": 22,
    "lineHeight": 22,
    "marginBottom": 10,
    "fontFamily": "Verdana, Geneva, sans-serif"
  },
  "link": {
    "textDecoration": "underline"
  },
  "comment-btn": {
    "position": "absolute",
    "fontFamily": "Consolas, \"Liberation Mono\", Menlo, Courier, monospace"
  },
  "comment-title": {
    "fontSize": 26,
    "color": "#404040"
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.comment) ? _c('div', {
    class: _vm.className
  }, [(_vm.collapsed) ? _c('text', {
    staticClass: ["small-text", "comment-btn"],
    on: {
      "click": function($event) {
        _vm.toggle(false)
      }
    }
  }, [_vm._v("[+]")]) : _c('text', {
    staticClass: ["small-text", "comment-btn"],
    on: {
      "click": function($event) {
        _vm.toggle(true)
      }
    }
  }, [_vm._v("[-]")]), _c('div', {
    staticClass: ["text-group"],
    style: {
      marginLeft: _vm.indent
    }
  }, [_c('text', {
    staticClass: ["text-cell", "small-text"]
  }, [_vm._v("by ")]), _c('div', {
    staticClass: ["text-cell"],
    on: {
      "click": function($event) {
        _vm.jump(("/user/" + (_vm.comment.by)))
      }
    }
  }, [_c('text', {
    staticClass: ["small-text", "link"]
  }, [_vm._v(_vm._s(_vm.comment.by))])]), _c('text', {
    staticClass: ["text-cell", "small-text"]
  }, [_vm._v(" | " + _vm._s(_vm._f("timeAgo")(_vm.comment.time)) + " ago")]), _c('text', {
    staticClass: ["text-cell", "small-text"]
  }, [_vm._v(_vm._s(_vm.collapsed ? '  (collapsed)' : ''))])]), (!_vm.collapsed) ? _c('div', {
    staticClass: ["comment-inner"],
    style: {
      marginLeft: _vm.indent
    }
  }, [_c('text', {
    staticClass: ["comment-title"]
  }, [_vm._v(_vm._s(_vm._f("unescape")(_vm.comment.text)))]), _c('div', {
    staticClass: ["comment-list"]
  }, _vm._l((_vm.comment.kids), function(id) {
    return _c('comment', {
      key: id,
      attrs: {
        "id": id,
        "depth": _vm.depth + 1
      }
    })
  }))]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);