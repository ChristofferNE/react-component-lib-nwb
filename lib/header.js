'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyHeader = (_temp = _class = function (_Component) {
    _inherits(MyHeader, _Component);

    function MyHeader() {
        _classCallCheck(this, MyHeader);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MyHeader.prototype.render = function render() {
        var _props = this.props,
            text = _props.text,
            className = _props.className,
            props = _objectWithoutProperties(_props, ['text', 'className']);

        return _react2.default.createElement(
            'div',
            _extends({ className: className ? 'header ' + className : 'header' }, props),
            text
        );
    };

    return MyHeader;
}(_react.Component), _class.defaultProps = {
    text: "header"
}, _temp);
MyHeader.propTypes = process.env.NODE_ENV !== "production" ? {
    text: _propTypes2.default.string
} : {};
exports.default = MyHeader;
module.exports = exports['default'];