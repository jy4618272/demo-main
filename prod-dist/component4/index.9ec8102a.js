!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("ReactDOM"),require("React"));else if("function"==typeof define&&define.amd)define(["ReactDOM","React"],e);else{var r="object"==typeof exports?e(require("ReactDOM"),require("React")):e(t.ReactDOM,t.React);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__1__){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=6)}([function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE__0__;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?")},function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE__1__;\n\n//# sourceURL=webpack:///external_%22React%22?")},,,,,function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(0);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Test4 = function (_Component) {\n\t_inherits(Test4, _Component);\n\n\tfunction Test4(props) {\n\t\t_classCallCheck(this, Test4);\n\n\t\treturn _possibleConstructorReturn(this, (Test4.__proto__ || Object.getPrototypeOf(Test4)).call(this, props));\n\t}\n\n\t_createClass(Test4, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ id: 'test4' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t'\\u4E1A\\u52A1\\u7EC4\\u6B64\\u8D34\\u5E94\\u7528 2'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ onClick: window.openNew.bind(this, 'http://www.yonyou.com/index.html?t=0.5849746499134041', 'new') },\n\t\t\t\t\t'\\u5728\\u65B0\\u9875\\u7B7E\\u6253\\u5F00'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Test4;\n}(_react.Component);\n\nexports.default = Test4;\n\n\nReactDOM.render(_react2.default.createElement(Test4, null), document.querySelector('#app3'));\n\n//# sourceURL=webpack:///./src/platform-widgets/component4/index.js?")}])});