'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Switch = require('../elements/Switch.js');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOGGLE_CONTEXT = '__toggle__';

function ToggleOn(_ref, context) {
  var children = _ref.children;
  var on = context[TOGGLE_CONTEXT].on;

  return on ? children : null;
}
ToggleOn.contextTypes = _defineProperty({}, TOGGLE_CONTEXT, _propTypes2.default.object.isRequired);

function ToggleOff(_ref2, context) {
  var children = _ref2.children;
  var on = context[TOGGLE_CONTEXT].on;

  return on ? null : children;
}
ToggleOff.contextTypes = _defineProperty({}, TOGGLE_CONTEXT, _propTypes2.default.object.isRequired);

function ToggleButton(props, context) {
  var _context$TOGGLE_CONTE = context[TOGGLE_CONTEXT],
      on = _context$TOGGLE_CONTE.on,
      toggle = _context$TOGGLE_CONTE.toggle;

  return _react2.default.createElement(_Switch2.default, _extends({ onClick: toggle, on: on }, props));
}
ToggleButton.contextTypes = _defineProperty({}, TOGGLE_CONTEXT, _propTypes2.default.object.isRequired);

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref3, [this].concat(args))), _this), _this.state = { on: false }, _this.toggle = function () {
      _this.setState(function (_ref4) {
        var on = _ref4.on;
        return { on: !on };
      }, function () {
        _this.props.onToggle(_this.state.on);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return _defineProperty({}, TOGGLE_CONTEXT, {
        on: this.state.on,
        toggle: this.toggle
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.defaultProps = { onToggle: function onToggle() {} };
Toggle.On = ToggleOn;
Toggle.Off = ToggleOff;
Toggle.Button = ToggleButton;
Toggle.childContextTypes = _defineProperty({}, TOGGLE_CONTEXT, _propTypes2.default.object.isRequired);
exports.default = Toggle;