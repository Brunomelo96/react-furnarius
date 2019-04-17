export default `import React, { Component } from 'react'
{{#propTypes}}
import PropTypes from 'prop-types'
{{/propTypes}}

class {{name}} extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div>
        aaaa
      </div>
    )
  }
}

{{#propTypes}}
{{name}}.defaultProps = {
}

{{name}}.propTypes = {
}
{{/propTypes}}

export default {{name}}
`