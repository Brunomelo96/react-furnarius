#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _menu = require("./utils/menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].command('description').alias('d').description('See package description').action(function () {
  console.log('Create react components from command line');
});

_commander["default"].command('create').alias('c').description('Creates a react component').action(function () {
  (0, _menu.create)();
});

_commander["default"].parse(process.argv);