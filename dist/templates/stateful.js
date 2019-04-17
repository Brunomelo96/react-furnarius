"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "import React, { Component } from 'react'\n{{#propTypes}}\nimport PropTypes from 'prop-types'\n{{/propTypes}}\n\nclass {{name}} extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {}\n  }\n\n  render() {\n    return(\n      <div>\n        aaaa\n      </div>\n    )\n  }\n}\n\n{{#propTypes}}\n{{name}}.defaultProps = {\n}\n\n{{name}}.propTypes = {\n}\n{{/propTypes}}\n\nexport default {{name}}\n";
exports["default"] = _default;