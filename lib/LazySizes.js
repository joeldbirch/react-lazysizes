"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _invariant = _interopRequireDefault(require("invariant"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var lazySizes = null;

if (canUseDOM) {
  lazySizes = require('lazysizes');
}

var LazySizes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LazySizes, _React$Component);

  function LazySizes() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LazySizes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LazySizes.__proto__ || Object.getPrototypeOf(LazySizes)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "componentWillMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            iframe = _this$props.iframe,
            dataSrc = _this$props.dataSrc;

        if (iframe && !dataSrc) {
          (0, _invariant.default)(false, 'Prop dataSrc is required on iframe.');
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "componentWillUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(nextProps) {
        var propsChanged = false;
        var _arr = ['src', 'dataSizes', 'dataSrc', 'dataSrcSet', 'className', 'iframe'];

        for (var _i = 0; _i < _arr.length; _i++) {
          var propName = _arr[_i];
          var prop = propName === 'dataSrcSet' ? _this.handleSrcSet(_this.props[propName]) : _this.props[propName];
          var nextProp = propName === 'dataSrcSet' ? _this.handleSrcSet(nextProps[propName]) : nextProps[propName];

          if (prop !== nextProp) {
            propsChanged = true;
            break;
          }
        }

        if (propsChanged && lazySizes) {
          var lazyElement = _reactDom.default.findDOMNode(_assertThisInitialized(_this));

          if (lazySizes.hC(lazyElement, 'lazyloaded')) {
            lazySizes.rC(lazyElement, 'lazyloaded');
          }
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "componentDidUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!lazySizes) {
          return;
        }

        var lazyElement = _reactDom.default.findDOMNode(_assertThisInitialized(_this));

        if (!lazySizes.hC(lazyElement, 'lazyloaded') && !lazySizes.hC(lazyElement, 'lazyload')) {
          lazySizes.aC(lazyElement, 'lazyload');
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSrcSet", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(srcSet) {
        var result = srcSet;

        if (_typeof(srcSet) === 'object') {
          if (!Array.isArray(srcSet)) {
            result = [];

            for (var variant in srcSet) {
              if (srcSet.hasOwnProperty(variant)) {
                result.push({
                  variant: variant,
                  src: srcSet[variant]
                });
              }
            }
          }

          result = result.map(function (item) {
            return "".concat(item.src, " ").concat(item.variant);
          }).join(', ');
        }

        return result;
      }
    }), _temp));
  }

  _createClass(LazySizes, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          src = _props.src,
          dataSizes = _props.dataSizes,
          dataSrc = _props.dataSrc,
          dataSrcSet = _props.dataSrcSet,
          className = _props.className,
          iframe = _props.iframe,
          other = _objectWithoutProperties(_props, ["src", "dataSizes", "dataSrc", "dataSrcSet", "className", "iframe"]);

      dataSrcSet = this.handleSrcSet(dataSrcSet);
      className = (0, _classnames.default)(['lazyload', className]).trim();

      if (iframe) {
        return _react.default.createElement("iframe", _extends({}, other, {
          src: dataSrc ? '' : src,
          "data-src": dataSrc,
          className: className
        }));
      }

      return _react.default.createElement("img", _extends({}, other, {
        src: src,
        "data-src": dataSrc,
        "data-sizes": dataSizes,
        "data-srcset": dataSrcSet,
        className: className
      }));
    }
  }]);

  return LazySizes;
}(_react.default.Component);

Object.defineProperty(LazySizes, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    src: _propTypes.default.string,
    dataSizes: _propTypes.default.string,
    dataSrc: _propTypes.default.string,
    dataSrcSet: _propTypes.default.oneOfType([_react.default.PropTypes.string, _react.default.PropTypes.object, _react.default.PropTypes.array]),
    className: _propTypes.default.string,
    iframe: _react.default.PropTypes.bool
  }
});
Object.defineProperty(LazySizes, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
    dataSizes: 'auto',
    iframe: false
  }
});
var _default = LazySizes;
exports.default = _default;