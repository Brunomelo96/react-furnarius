export default `import React from 'react'
{{#propTypes}}
import PropTypes from 'prop-types'
{{/propTypes}}

const {{name}} = (props) => (
  <div>
    aaaa
  </div>
)

{{#propTypes}}
{{name}}.defaultProps = {
}

{{name}}.propTypes = {
}
{{/propTypes}}

export default {{name}}
`