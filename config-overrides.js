const path = require('path')

const mapping = [
    ['ui', 'pages/ui'],
    ['sound', 'assets/sound'],
    ['images', 'assets/images'],
    ['svg', 'assets/svg'],
    ['content', 'pages/content'],
    'assets',
    'contexts',
    'hooks',
    'util'
]

module.exports = (config) => {

    const alias = config.resolve.alias

    mapping.forEach((element) => {
        let name
        let resourcePath
        if (Array.isArray(element)) {
            name = element[0]
            resourcePath = element?.[1]
        } else {
            name = element
        }
        resourcePath = resourcePath ?? name
        alias[`@${name}`] = path.resolve(__dirname, `src/${resourcePath}`)
    })

    return config
}
