'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 20px;\n  border: 1px solid #e8e8e8;\n  background-color: #fafafa;\n'], ['\n  border-radius: 20px;\n  border: 1px solid #e8e8e8;\n  background-color: #fafafa;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n      transform: scaleX(1);\n  }\n  50% {\n      transform: scaleX(1.2);\n  }\n  100% {\n      transform: scaleX(1);\n  }\n'], ['\n  0% {\n      transform: scaleX(1);\n  }\n  50% {\n      transform: scaleX(1.2);\n  }\n  100% {\n      transform: scaleX(1);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  left: 2px;\n  ', '\n  transition: left .3s;\n'], ['\n  left: 2px;\n  ', '\n  transition: left .3s;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  height: 20px;\n  width: 40px;\n  padding: 2px;\n  position: relative;\n  display: block;\n  cursor: pointer;\n  ', '\n  transition: background-color .3s;\n  &:active span{\n    transform-origin: ', ';\n    animation-name: ', ';\n    animation-duration: .4s;\n    animation-iteration-count: infinite;\n  }\n'], ['\n  ', '\n  height: 20px;\n  width: 40px;\n  padding: 2px;\n  position: relative;\n  display: block;\n  cursor: pointer;\n  ', '\n  transition: background-color .3s;\n  &:active span{\n    transform-origin: ', ';\n    animation-name: ', ';\n    animation-duration: .4s;\n    animation-iteration-count: infinite;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  height: 18px;\n  width: 18px;\n  display: block;\n  position: absolute;\n  z-index: 1;\n  ', '\n'], ['\n  ', '\n  height: 18px;\n  width: 18px;\n  display: block;\n  position: absolute;\n  z-index: 1;\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  border-radius: 20px;\n  height: 18px;\n  width: 18px;\n  position: absolute;\n  background-color: #e7e7e7;\n  top: 7px;\n  opacity: .6;\n  ', '\n'], ['\n  border-radius: 20px;\n  height: 18px;\n  width: 18px;\n  position: absolute;\n  background-color: #e7e7e7;\n  top: 7px;\n  opacity: .6;\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultColors = (0, _styledComponents.css)(_templateObject);

var jerk = (0, _styledComponents.keyframes)(_templateObject2);

var transitions = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.on && 'left: 22px;';
});

var SwitchWrap = _styledComponents2.default.div(_templateObject4, defaultColors, function (props) {
  return props.on && 'background-color: #95e398;';
}, function (props) {
  return props.on ? 'right' : 'left';
}, jerk);

var Toggler = _styledComponents2.default.span(_templateObject5, defaultColors, transitions);

// animation-direction: alternate-reverse;

var Shadow = _styledComponents2.default.span(_templateObject6, transitions);

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      // {...this.props}
      return _react2.default.createElement(
        SwitchWrap,
        this.props,
        _react2.default.createElement(Toggler, { on: this.props.on }),
        _react2.default.createElement(Shadow, { on: this.props.on })
      );
    }
  }]);

  return Switch;
}(_react.Component);

Switch.defaultProps = { on: false };
exports.default = Switch;