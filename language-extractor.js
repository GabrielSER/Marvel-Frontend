const { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs')
const { join } = require('path')

const destinationFolder = 'public/locales'
const fileRegex = /^((?<namespace>.+)\.)?lang\.json$/
const defaultNamespace = '_common_'

const loadJsonFile = (filePath) => {
    try {
        const fileContent = readFileSync(filePath, 'utf8')
        return JSON.parse(fileContent)
    } catch (error) {
        console.error(`Error reading or parsing lang JSON file at ${filePath}:`, error)
        return null
    }
}

const deepMerge = (target, source) => {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && !Array.isArray(source[key]) && typeof target[key] === 'object') {
                deepMerge(target[key], source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
}

const walkDirectory = (directoryPath) => {
    let namespaces = {}
    const items = readdirSync(directoryPath, { withFileTypes: true })
    for (const item of items) {
        const itemPath = join(directoryPath, item.name)
        const match = item.name.toLowerCase().match(fileRegex)
        if (item.isDirectory()) {
            const nestedNamespaces = walkDirectory(itemPath)
            deepMerge(namespaces, nestedNamespaces)
        } else if (item.isFile() && match) {
            const jsonData = loadJsonFile(itemPath)
            if (jsonData) {
                const namespace = match.groups?.namespace ?? defaultNamespace
                const currentNamespace = namespaces[namespace]
                if (currentNamespace) {
                    deepMerge(currentNamespace, jsonData)
                } else {
                    namespaces[namespace] = jsonData
                }
            }
        }
    }
    return namespaces
}

const extractResources = (directoryPath) => {
    if (!existsSync(destinationFolder)) {
        mkdirSync(destinationFolder)
    }
    Object
        .entries(walkDirectory(directoryPath))
        .forEach(([namespace, locales]) => {
            const destinationNamespaceFolder = namespace == defaultNamespace ? destinationFolder : `${destinationFolder}/${namespace}`
            if (namespace != defaultNamespace) {
                if (!existsSync(destinationNamespaceFolder)) {
                    mkdirSync(destinationNamespaceFolder)
                    console.log(`Created namespace in ${destinationNamespaceFolder}`)
                } else {
                    console.log(`Extracting namespace '${namespace}' to ${destinationNamespaceFolder}`)
                }
            }
            Object
                .entries(locales)
                .forEach(([lang, translations]) => {
                    const path = `${destinationNamespaceFolder}/${lang}.json`
                    
                    writeFileSync(
                        path,
                        JSON.stringify(translations, null, 1)
                    )
                    if (namespace != defaultNamespace) {
                        console.log(`\t- Extracted ${namespace}/${lang} to ${path}`)
                    } else {
                        console.log(`\t- Extracted ${lang} translation to common namespace${path}`)
                    }
                })
        })
}

extractResources('src')
