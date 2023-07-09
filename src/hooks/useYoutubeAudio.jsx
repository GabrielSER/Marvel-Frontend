import { useState, useEffect } from 'react'
import youtubedl from 'youtube-dl-exec'

const useYoutubeAudio = ({ videoUrl }) => {

    const [audioUrl, setAudioUrl] = useState()

    useEffect(() => {
        const fetchAudioUrl = async () => {
            try {
                const { stdout } = await youtubedl(videoUrl, {
                    dumpSingleJson: true,
                    format: 'bestaudio',
                    noWarnings: true,
                    preferFfmpeg: true,
                    youtubeSkipDashManifest: true
                })
                const audioInfo = JSON.parse(stdout)
                setAudioUrl(audioInfo.url)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAudioUrl()
    }, [videoUrl])

    return audioUrl
}