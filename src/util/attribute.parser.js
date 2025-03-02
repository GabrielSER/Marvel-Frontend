export const getAttributes = (attributes) => {
  return Object.entries(attributes).map(([key, value]) => ({
    name: key,
    uniqueName: key,
    value: value
  }))
}