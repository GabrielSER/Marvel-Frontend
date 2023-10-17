import { useCallback, useState } from 'react'

const useAudio = (url, autoStart = false) => {

    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(autoStart)

    const toggle = useCallback(() => {
        setPlaying(!playing)
    }, [setPlaying, playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    }, [])
    
    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    return [playing, toggle]
}

export default useAudio