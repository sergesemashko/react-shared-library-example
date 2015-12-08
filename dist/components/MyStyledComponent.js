'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var MyStyledComponent = (function (_Component) {
  _inherits(MyStyledComponent, _Component);

  function MyStyledComponent() {
    _classCallCheck(this, MyStyledComponent);

    _Component.apply(this, arguments);
  }

  MyStyledComponent.prototype.render = function render() {
    var styles = require('./MyStyledComponent.scss');

    return _react2['default'].createElement(
      'div',
      { className: styles.wrapper },
      _react2['default'].createElement('div', { className: styles.content })
    );
  };

  return MyStyledComponent;
})(_react.Component);

exports['default'] = MyStyledComponent;
module.exports = exports['default'];
//# sourceMappingURL=MyStyledComponent.js.map