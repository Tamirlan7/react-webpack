/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 972:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/assets/todo.jpg
const todo_namespaceObject = __webpack_require__.p + "975797035b0338835976.jpg";
;// CONCATENATED MODULE: ./src/components/TodoForm.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var TodoForm = function TodoForm(_ref) {
  var createTodo = _ref.createTodo;
  var _React$useState = react.useState({
      id: 0,
      title: '',
      body: '',
      completed: false
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    todo = _React$useState2[0],
    setTodo = _React$useState2[1];
  var _onChange = function onChange(e) {
    return setTodo(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };
  function _onSubmit(e) {
    e.preventDefault();
    var newTodo = _objectSpread(_objectSpread({}, todo), {}, {
      id: Date.now()
    });
    createTodo(newTodo);
  }
  return /*#__PURE__*/react.createElement("form", {
    id: "todo-form",
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    }
  }, /*#__PURE__*/react.createElement("div", {
    id: "todo-form__inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "todo-img"
  }, /*#__PURE__*/react.createElement("img", {
    src: todo_namespaceObject,
    alt: "todoImg"
  })), /*#__PURE__*/react.createElement("h1", {
    className: "todo-form__title"
  }, "Add your Todo!"), /*#__PURE__*/react.createElement("div", {
    className: "input-block"
  }, /*#__PURE__*/react.createElement("label", null, "Todo Title"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    placeholder: "title",
    name: "title",
    onChange: function onChange(e) {
      return _onChange(e);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "input-block"
  }, /*#__PURE__*/react.createElement("label", null, "Todo Body"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    placeholder: "body",
    name: "body",
    onChange: function onChange(e) {
      return _onChange(e);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-button"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "form-btn"
  }, "Add"))));
};
/* harmony default export */ const components_TodoForm = (TodoForm);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/SwitchTransition.js
var SwitchTransition = __webpack_require__(989);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 4 modules
var CSSTransition = __webpack_require__(75);
;// CONCATENATED MODULE: ./src/components/Todo.tsx
function Todo_slicedToArray(arr, i) { return Todo_arrayWithHoles(arr) || Todo_iterableToArrayLimit(arr, i) || Todo_unsupportedIterableToArray(arr, i) || Todo_nonIterableRest(); }
function Todo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Todo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Todo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Todo_arrayLikeToArray(o, minLen); }
function Todo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Todo_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Todo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Todo = function Todo(_ref) {
  var todo = _ref.todo,
    setTodos = _ref.setTodos;
  var hello = 0;
  var _React$useState = react.useState(false),
    _React$useState2 = Todo_slicedToArray(_React$useState, 2),
    isBody = _React$useState2[0],
    setIsBody = _React$useState2[1];
  var _React$useState3 = react.useState(false),
    _React$useState4 = Todo_slicedToArray(_React$useState3, 2),
    isHover = _React$useState4[0],
    setIsHover = _React$useState4[1];
  var todoBodyRef = react.useRef(null);
  function doHover() {
    setIsHover(true);
  }
  function undoHover() {
    setIsHover(false);
  }
  function completeTodo(todo, e) {
    e.stopPropagation();
    setTodos(function (prev) {
      return prev.map(function (currTodo) {
        if (currTodo.id === todo.id) {
          currTodo.completed = true;
        }
        return currTodo;
      });
    });
  }
  function deleteTodo(todo, e) {
    e.stopPropagation();
    setTodos(function (prev) {
      return prev.filter(function (currTodo) {
        return todo.id !== currTodo.id;
      });
    });
  }
  function toggleTodoBody() {
    setIsBody(function (prev) {
      return !prev;
    });
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(SwitchTransition/* default */.Z, {
    mode: "out-in"
  }, /*#__PURE__*/react.createElement(CSSTransition/* default */.Z, {
    timeout: 500,
    nodeRef: todoBodyRef,
    key: isBody ? 'body' : 'cover',
    classNames: 'todo-block__body',
    mountOnEnter: true,
    unmountOnExit: true
  }, isBody ? /*#__PURE__*/react.createElement("div", {
    className: "todo-block__body",
    onClick: toggleTodoBody,
    ref: todoBodyRef
  }, /*#__PURE__*/react.createElement("p", {
    className: "todo-body"
  }, todo.body)) : /*#__PURE__*/react.createElement("div", {
    title: "click on it to see it's body",
    className: isHover ? todo.completed ? "todo completed" : "todo not-completed" : "todo",
    onMouseEnter: doHover,
    onMouseLeave: undoHover,
    onClick: toggleTodoBody,
    key: todo.id
  }, /*#__PURE__*/react.createElement("h2", {
    className: "todo-title"
  }, todo.title), /*#__PURE__*/react.createElement("div", {
    className: "todo-buttons"
  }, /*#__PURE__*/react.createElement("div", {
    className: "todo-buttons__inner"
  }, todo.completed ? /*#__PURE__*/react.createElement("button", {
    onClick: function onClick(e) {
      return deleteTodo(todo, e);
    },
    className: "delete-btn"
  }, "Delete") : /*#__PURE__*/react.createElement("button", {
    onClick: function onClick(e) {
      return completeTodo(todo, e);
    },
    className: "complete-btn"
  }, "Complete"), /*#__PURE__*/react.createElement("span", {
    className: isHover ? "todo-completed-hover" : todo.completed ? "todo-completed-completed" : "todo-completed-not-completed"
  }, todo.completed ? "Completed" : "Not completed")))))));
};
/* harmony default export */ const components_Todo = (Todo);
;// CONCATENATED MODULE: ./src/components/TodoList.tsx



var TodoList = function TodoList(_ref) {
  var todos = _ref.todos,
    setTodos = _ref.setTodos;
  return /*#__PURE__*/react.createElement("div", {
    id: "todos"
  }, todos.map(function (todo) {
    return /*#__PURE__*/react.createElement(components_Todo, {
      setTodos: setTodos,
      todo: todo,
      key: todo.id
    });
  }));
};
/* harmony default export */ const components_TodoList = (TodoList);
;// CONCATENATED MODULE: ./src/App.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || App_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return App_arrayLikeToArray(arr); }
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }
function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }
function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function App_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var App = function App() {
  var _React$useState = react.useState([]),
    _React$useState2 = App_slicedToArray(_React$useState, 2),
    todos = _React$useState2[0],
    setTodos = _React$useState2[1];
  function createTodo(todo) {
    setTodos(function (prev) {
      return [todo].concat(_toConsumableArray(prev));
    });
  }
  console.log('app');
  return /*#__PURE__*/react.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement(components_TodoForm, {
    createTodo: createTodo
  }), /*#__PURE__*/react.createElement(components_TodoList, {
    todos: todos,
    setTodos: setTodos
  })));
};
/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.tsx



(0,client/* createRoot */.s)(document.getElementById('root')).render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App, null)));

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_webpack"] = self["webpackChunktodo_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [434], () => (__webpack_require__(972)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;