import inquirer from 'inquirer'
import { compTestPlain } from './types'
import { createReact } from '../commands/create'

const questions = [
  { type: 'input', name: 'componentName', message: 'Type your component name:', },
  { type: 'input', name: 'componentPath', message: 'Type the path of your component:', default: './' },
  { type: 'confirm', name: 'componentPropTypes', message: 'Do you want to use prop-types?' },
  { type: 'confirm', name: 'componentStyled', message: 'Do you want to use styled-components?' },
  { type: 'list', name: 'componentTest', message: 'Do you want to use some testing utility for react?', choices: compTestPlain, default: 'Enzyme' },
]

export const create = () => {
  console.log('Select your options')
  console.log('--------------------')

  inquirer
    .prompt(questions)
    .then((answers) => {
      createReact(answers)
    })
}
