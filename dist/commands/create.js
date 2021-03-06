"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReactTest = exports.createReactStyled = exports.createReactComp = exports.createReact = void 0;

var _reactComponent = _interopRequireDefault(require("../templates/reactComponent"));

var _test = _interopRequireDefault(require("../templates/test"));

var _styled = _interopRequireDefault(require("../templates/styled"));

var _template = require("../utils/template");

var _files = require("../utils/files");

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createReact = function createReact(template) {
  var componentName = template.componentName;
  var capitalLetter = componentName[0];

  if (componentName == "" || capitalLetter != capitalLetter.toUpperCase()) {
    console.log('Invalid component name');
    process.exit(1);
  }

  createReactComp(template);
  createReactStyled(template);
  createReactTest(template);
};

exports.createReact = createReact;

var createReactComp = function createReactComp(_ref) {
  var componentName = _ref.componentName,
      componentPath = _ref.componentPath,
      componentPropTypes = _ref.componentPropTypes;
  var path = (0, _files.createDirectory)(componentPath, componentName);
  var file = (0, _path.join)(path, 'index.jsx');
  var componentView = {
    name: componentName,
    propTypes: componentPropTypes
  };
  var code = (0, _template.createTemplate)(_reactComponent["default"], componentView);
  (0, _files.write)(file, code);
};

exports.createReactComp = createReactComp;

var createReactStyled = function createReactStyled(_ref2) {
  var componentName = _ref2.componentName,
      componentPath = _ref2.componentPath,
      componentStyled = _ref2.componentStyled;

  if (componentStyled) {
    var file = (0, _files.createStyled)(componentPath, componentName);
    var code = (0, _template.createTemplate)(_styled["default"]);
    (0, _files.write)(file, code);
  }
};

exports.createReactStyled = createReactStyled;

var createReactTest = function createReactTest(_ref3) {
  var componentName = _ref3.componentName,
      componentPath = _ref3.componentPath,
      componentTest = _ref3.componentTest;

  if (componentTest !== 'none') {
    var path = (0, _path.join)(componentName, componentPath);
    var testDirectory = (0, _files.createTestDirectory)(path, componentName);
    var testFile = componentName + '.spec.js';
    var testPath = (0, _path.join)(testDirectory, testFile);
    var testView = {
      name: componentName,
      enzyme: componentTest === 'Enzyme' ? true : false,
      reactTestRenderer: componentTest === 'Enzyme' ? false : true
    };
    var code = (0, _template.createTemplate)(_test["default"], testView);
    (0, _files.write)(testPath, code);
  }
};

exports.createReactTest = createReactTest;