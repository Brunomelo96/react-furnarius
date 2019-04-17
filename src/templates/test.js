export default `import React from 'react'
{{#enzyme}}
import { shallow } from 'enzyme'
{{/enzyme}}
{{#reactTestRenderer}}
import renderer from 'react-test-renderer'
{{/reactTestRenderer}}
import {{name}} from '../'

describe('{{name}}', () => {
  it('should render', () => {
    {{#reactTestRenderer}}
    const wrapper = renderer
      .create(<{{name}}> aaa </{{name}}>)
      .toJson()
    {{/reactTestRenderer}}
    {{#enzyme}}
    const wrapper = shallow(<{{name}}> aaa </{{name}}>)
    {{/enzyme}}
    expect(wrapper).toMatchSnapshot()
  })
})
`