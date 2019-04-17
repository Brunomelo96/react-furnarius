"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.write = exports.createTestDirectory = exports.createStyled = exports.createDirectory = void 0;

var _fs = require("fs");

var _shelljs = require("shelljs");

var _path = require("path");

var createDirectory = function createDirectory(path, name) {
  try {
    var filePath = (0, _path.join)(path, name);
    (0, _shelljs.mkdir)(filePath);
    return filePath;
  } catch (error) {
    console.log(error);
  }
};

exports.createDirectory = createDirectory;

var createStyled = function createStyled(path, name) {
  try {
    var filePath = (0, _path.join)(path, name, 'styled.js');
    (0, _shelljs.touch)(filePath);
    return filePath;
  } catch (error) {
    console.log(error);
  }
};

exports.createStyled = createStyled;

var createTestDirectory = function createTestDirectory(path) {
  try {
    var testPath = (0, _path.join)(path, '__tests__');
    (0, _shelljs.mkdir)(testPath);
    return testPath;
  } catch (error) {
    console.log(error);
  }
};

exports.createTestDirectory = createTestDirectory;

var write = function write(path, content) {
  try {
    (0, _fs.writeFileSync)(path, content, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

exports.write = write;