const removeSpecialCharactersRegex = /[^A-Za-z0-9+#]+/gi
const replacementSeparator = '_'

const normalizeString = (name) =>
  name.toLowerCase().replace(removeSpecialCharactersRegex, replacementSeparator)

export { normalizeString }
