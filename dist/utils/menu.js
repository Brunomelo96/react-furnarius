"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _types = require("./types");

var _create = require("../commands/create");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var questions = [{
  type: 'input',
  name: 'componentName',
  message: 'Type your component name:'
}, {
  type: 'input',
  name: 'componentPath',
  message: 'Type the path of your component:',
  "default": './'
}, {
  type: 'confirm',
  name: 'componentPropTypes',
  message: 'Do you want to use prop-types?'
}, {
  type: 'confirm',
  name: 'componentStyled',
  message: 'Do you want to use styled-components?'
}, {
  type: 'list',
  name: 'componentTest',
  message: 'Do you want to use some testing utility for react?',
  choices: _types.compTestPlain,
  "default": 'Enzyme'
}];

var create = function create() {
  console.log('Select your options');
  console.log('--------------------');

  _inquirer["default"].prompt(questions).then(function (answers) {
    (0, _create.createReact)(answers);
  });
};

exports.create = create;