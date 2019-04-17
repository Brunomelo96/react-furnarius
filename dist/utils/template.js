"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTemplate = void 0;

var _mustache = _interopRequireDefault(require("mustache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createTemplate = function createTemplate(component, view) {
  return _mustache["default"].render(component, view);
};

exports.createTemplate = createTemplate;