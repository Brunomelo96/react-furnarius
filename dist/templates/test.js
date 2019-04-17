"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "import React from 'react'\n{{#enzyme}}\nimport { shallow } from 'enzyme'\n{{/enzyme}}\n{{#reactTestRenderer}}\nimport renderer from 'react-test-renderer'\n{{/reactTestRenderer}}\nimport {{name}} from '../'\n\ndescribe('{{name}}', () => {\n  it('should render', () => {\n    {{#reactTestRenderer}}\n    const wrapper = renderer\n      .create(<{{name}}> aaa </{{name}}>)\n      .toJson()\n    {{/reactTestRenderer}}\n    {{#enzyme}}\n    const wrapper = shallow(<{{name}}> aaa </{{name}}>)\n    {{/enzyme}}\n    expect(wrapper).toMatchSnapshot()\n  })\n})\n";
exports["default"] = _default;