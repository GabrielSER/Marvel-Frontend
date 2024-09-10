const removeSpecialCharactersRegex = /[^A-Za-z0-9+#]+/gi
const replacementSeparator = '_'

const normalizeName = (name) =>
  name.toLowerCase().replace(removeSpecialCharactersRegex, replacementSeparator)

export { normalizeName }
