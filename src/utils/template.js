import Mustache from 'mustache'

export const createTemplate = (component, view) => {
  return Mustache.render(component, view)
}