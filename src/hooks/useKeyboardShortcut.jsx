import { useEffect, useState } from 'react'

const joint = '+'
const tapDelay = 300

const actualKeyOf = (event) => {
    const isLetterOrNumber = (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 48 && event.keyCode <= 57)
    return isLetterOrNumber ? String.fromCharCode(event.keyCode) : event.key
}

const useKeyboardShortcut = (shortcuts, callback, dependencies = []) => {

    const [builtShortcut, setBuiltShortcut] = useState([])
    const [matched, setMatched] = useState(false)

    useEffect(() => {

        if (shortcuts === null || shortcuts === undefined) {
            throw new Error('The parameter \'shortcuts\' must be defined')
        }

        const timeOuts = new Map()

        const handleKeyDown = (event) => {
            setBuiltShortcut(previous => {
                const actualKey = actualKeyOf(event)
                const keylower = actualKey.toLowerCase()
                const keyIndex = previous.findIndex(key => key === actualKey)
                if (
                    previous.length === 0 ||
                    keyIndex !== previous.length - 1
                ) {
                    const remaining = previous.filter(key => {
                        const previousKey = key.toLowerCase()
                        const timeOutId = timeOuts.get(previousKey)
                        const stays = timeOutId === undefined
                        if (!stays) {
                            timeOuts.delete(previousKey)
                            clearTimeout(timeOutId)
                        }
                        return stays
                    })
                    return [...remaining, actualKey]
                }
                else if (keyIndex === previous.length - 1 && timeOuts.has(keylower)) {
                    return [...previous, actualKey]
                }
                return previous
            })
        }

        const handleKeyUp = (event) => {
            const actualKey = actualKeyOf(event)
            const keylower = actualKey.toLowerCase()
            const timeOutId = setTimeout(() => {
                setBuiltShortcut(previous => {
                    const keyIndex = previous.findIndex(key => key === actualKey)
                    if (keyIndex >= 0) {
                        previous.splice(keyIndex, 1)
                    }
                    return [...previous]
                })
                timeOuts.delete(keylower)
            }, tapDelay)
            timeOuts.set(keylower, timeOutId)
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
            timeOuts.values().forEach(clearTimeout)
            setBuiltShortcut([])
        }
    }, [shortcuts, setBuiltShortcut])

    useEffect(() => {
        if (builtShortcut.length === 0) return
        const shortcutJoin = builtShortcut.join(joint)
        let shortcutsArray = shortcuts
        if (!Array.isArray(shortcutsArray)) {
            shortcutsArray = [shortcuts]
        }
        if (shortcutsArray.some(shortcut => shortcut === shortcutJoin)) {
            setMatched(true)
        }
    }, [shortcuts, builtShortcut, setMatched])

    useEffect(() => {
        if (!matched) return
        (async () => { await callback() })()
        setMatched(false)
    }, [matched, setMatched, dependencies])

}

export default useKeyboardShortcut