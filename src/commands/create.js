import statefulTemplate from '../templates/stateful'
import statelessTemplate from '../templates/stateless'
import testTemplate from '../templates/test'
import styledTemplate from '../templates/styled'
import { createTemplate } from '../utils/template'
import { write, createDirectory, createTestDirectory, createStyled } from '../utils/files'
import { join } from 'path'

export const createReact = (template) => {
  const { componentName } = template
  const capitalLetter = componentName[0]

  if (componentName == "" || capitalLetter != capitalLetter.toUpperCase()) {
    console.log('Invalid component name')
    process.exit(1)
  }

  createReactComp(template)
  createReactStyled(template)
  createReactTest(template)
}

export const createReactComp = ({ componentName, componentPath, componentPropTypes, componentType }) => {
  const path = createDirectory(componentPath, componentName)
  const file = join(path, 'index.jsx')
  const componentView = {
    name: componentName,
    propTypes: componentPropTypes
  }
  const component = componentType === 'Stateful' ? statefulTemplate : statelessTemplate
  const code = createTemplate(component, componentView)

  write(file, code)
}

export const createReactStyled = ({ componentName, componentPath, componentStyled }) => {
  if (componentStyled) {
    const file = createStyled(componentPath, componentName)
    const code = createTemplate(styledTemplate)
    write(file, code)
  }
}

export const createReactTest = ({ componentName, componentPath, componentTest }) => {
  if (componentTest !== 'none') {
    const path = join(componentName, componentPath)
    const testDirectory = createTestDirectory(path)
    const testFile = componentName + '.spec.js'
    const testPath = join(testDirectory, testFile)
    const testView = {
      name: componentName,
      enzyme: componentTest === 'Enzyme' ? true : false,
      reactTestRenderer: componentTest === 'Enzyme' ? false : true,

    }
    const code = createTemplate(testTemplate, testView)
    write(testPath, code)
  }
}