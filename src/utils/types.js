export const compTypes = [
  { name: 'Stateful' },
  { name: 'Stateless', }
]

export const compTypesPlain = compTypes.map((item => {
  return item.name
}))

export const compTest = [
  { name: 'Enzyme' },
  { name: 'React Test Renderer' },
  { name: 'none' }
]

export const compTestPlain = compTest.map((item) => {
  return item.name
})