(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["vue-read-more"] = factory();
  else
    root["vue-read-more"] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
    /******/
});
        /******/
}
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

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

/* harmony default export */ __webpack_exports__["a"] = ({
        props: {
          moreStr: {
            type: String,
            default: "read more"
          },
          lessStr: {
            type: String,
            default: ""
          },
          text: {
            type: String,
            required: true
          },
          link: {
            type: String,
            default: "#"
          },
          maxChars: {
            type: Number,
            default: 100
          }
        },

        data() {
          return {
            isReadMore: false
          };
        },

        computed: {
          formattedString() {
            var val_container = this.text;

            if (!this.isReadMore && this.text.length > this.maxChars) {
              val_container = val_container.substring(0, this.maxChars) + "...";
            }

            return val_container;
          }
        },

        methods: {
          triggerReadMore(e, b) {
            if (this.link == "#") {
              e.preventDefault();
            }
            if (this.lessStr !== null || this.lessStr !== "") this.isReadMore = b;
          }
        }
      });

      /***/
}),
/* 1 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReadMoreComponent_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReadMoreDirective_js__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["default"] = ({
        install: function (Vue, options) {
          Vue.component('readMore', __WEBPACK_IMPORTED_MODULE_0__ReadMoreComponent_vue__["a" /* default */])
          Vue.directive('readMore', __WEBPACK_IMPORTED_MODULE_1__ReadMoreDirective_js__["a" /* default */])
        }
      });


      /***/
}),
/* 2 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_ReadMoreComponent_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0df53f14_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_ReadMoreComponent_vue__ = __webpack_require__(4);
      var normalizeComponent = __webpack_require__(3)
      /* script */


      /* template */

      /* template functional */
      var __vue_template_functional__ = false
      /* styles */
      var __vue_styles__ = null
      /* scopeId */
      var __vue_scopeId__ = null
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null
      var Component = normalizeComponent(
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_ReadMoreComponent_vue__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0df53f14_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_ReadMoreComponent_vue__["a" /* default */],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      )

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


      /***/
}),
/* 3 */
/***/ (function (module, exports) {

      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file.
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      module.exports = function normalizeComponent(
        rawScriptExports,
        compiledTemplate,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */
      ) {
        var esModule
        var scriptExports = rawScriptExports = rawScriptExports || {}

        // ES6 modules interop
        var type = typeof rawScriptExports.default
        if (type === 'object' || type === 'function') {
          esModule = rawScriptExports
          scriptExports = rawScriptExports.default
        }

        // Vue.extend constructor export interop
        var options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports

        // render functions
        if (compiledTemplate) {
          options.render = compiledTemplate.render
          options.staticRenderFns = compiledTemplate.staticRenderFns
          options._compiled = true
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true
        }

        // scopedId
        if (scopeId) {
          options._scopeId = scopeId
        }

        var hook
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context)
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier)
            }
          }
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook
        } else if (injectStyles) {
          hook = injectStyles
        }

        if (hook) {
          var functional = options.functional
          var existing = functional
            ? options.render
            : options.beforeCreate

          if (!functional) {
            // inject component registration as beforeCreate hook
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook]
          } else {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook
            // register for functioal component in vue file
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context)
              return existing(h, context)
            }
          }
        }

        return {
          esModule: esModule,
          exports: scriptExports,
          options: options
        }
      }


      /***/
}),
/* 4 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      var render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', [_c('p', { domProps: { "innerHTML": _vm._s(_vm.formattedString) } }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: (_vm.text.length > _vm.maxChars), expression: "text.length > maxChars" }] }, [_c('a', { directives: [{ name: "show", rawName: "v-show", value: (!_vm.isReadMore), expression: "!isReadMore" }], attrs: { "href": _vm.link, "id": "readmore" }, on: { "click": function ($event) { _vm.triggerReadMore($event, true) } } }, [_vm._v(_vm._s(_vm.moreStr))]), _vm._v(" "), _c('a', { directives: [{ name: "show", rawName: "v-show", value: (_vm.isReadMore), expression: "isReadMore" }], attrs: { "href": _vm.link, "id": "readmore" }, on: { "click": function ($event) { _vm.triggerReadMore($event, false) } } }, [_vm._v(_vm._s(_vm.lessStr))])])]) }
      var staticRenderFns = []
      var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

      /***/
}),
/* 5 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
        twoWay: true,
        bind: function (el, bind, vn) {
          var val_container = bind.value;

        	if(bind.value.length > bind.arg){

            vn.elm.textContent = bind.value.substring(0,bind.arg)
            var read_more = document.createElement('div');
           
            read_more.innerText = 'read more';
            read_more.style.width = "85px";
            read_more.style.fontWeight = "500";
            read_more.style.color = "#42648b";
            read_more.style.opacity = "0.8"
            var read_less = document.createElement('div');
            read_less.style.fontWeight = "500";
            read_less.innerText = 'read less';
            read_less.style.width = "85px";
            read_less.style.color = "#42648b";
            read_less.style.opacity = "0.8"
            
      
            vn.elm.append(' ', read_more);

            read_more.addEventListener("mouseover",function(){
              read_more.style.opacity = "1"
              read_more.style.cursor = 'pointer'
            });
      
            read_more.addEventListener("mouseout",function(){
              read_more.style.opacity = '0.8',
              read_more.style.cursor = 'default'
              read_more.style.textDecoration = "none"
            });

            read_less.addEventListener("mouseover",function(){
              read_less.style.opacity = "1"
              read_less.style.cursor = 'pointer'
            });
      
            read_less.addEventListener("mouseout",function(){
              read_less.style.opacity = '0.8',
              read_less.style.cursor = 'default'
              read_less.style.textDecoration = "none"
            });

      
            read_more.addEventListener("click", function(){ 
              vn.elm.textContent = val_container;
              vn.elm.append(' ', read_less);
            
            });
      
            read_less.addEventListener("click", function(){ 
              vn.elm.textContent = bind.value.substring(0,bind.arg)
              vn.elm.append(' ', read_more);
            });
      
          }else{
            vn.elm.textContent = bind.value
          }


        },
        update: function (newValue) {
          // console.log('eyyow');
        },
      });

      /***/
})
/******/]);
});
//# sourceMappingURL=index.js.map