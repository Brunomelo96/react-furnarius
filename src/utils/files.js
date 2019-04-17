import { writeFileSync } from 'fs'
import { mkdir, touch } from 'shelljs'
import { join } from 'path'

export const createDirectory = (path, name) => {
  try {
    const filePath = join(path, name)
    mkdir(filePath)
    return filePath
  }
  catch (error) {
    console.log(error)
  }
}

export const createStyled = (path, name) => {
  try {
    const filePath = join(path, name, 'styled.js')
    touch(filePath)
    return filePath
  }
  catch (error) {
    console.log(error)
  }
}

export const createTestDirectory = (path) => {
  try {
    const testPath = join(path, '__tests__')
    mkdir(testPath)
    return testPath
  }
  catch (error) {
    console.log(error)
  }
}

export const write = (path, content) => {
  try {
    writeFileSync(path, content, 'utf8')
  }
  catch (error) {
    console.log(error)
  }
}