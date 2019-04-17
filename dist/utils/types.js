"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compTestPlain = exports.compTest = exports.compTypesPlain = exports.compTypes = void 0;
var compTypes = [{
  name: 'Stateful'
}, {
  name: 'Stateless'
}];
exports.compTypes = compTypes;
var compTypesPlain = compTypes.map(function (item) {
  return item.name;
});
exports.compTypesPlain = compTypesPlain;
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