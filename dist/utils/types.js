"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compTestPlain = exports.compTest = void 0;
var compTest = [{
  name: 'Enzyme'
}, {
  name: 'React Test Renderer'
}, {
  name: 'none'
}];
exports.compTest = compTest;
var compTestPlain = compTest.map(function (item) {
  return item.name;
});
exports.compTestPlain = compTestPlain;