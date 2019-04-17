#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _menu = require("./utils/menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].command('description', 'See package description').alias('d').action(function () {
  console.log('Create react components from command line');
});

_commander["default"].command('create', 'Creates a react component').alias('c').action(function () {
  (0, _menu.create)();
});

_commander["default"].parse(process.argv);