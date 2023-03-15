import React from 'react'
import { Fade } from 'react-reveal'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'
import { useCharacters } from '../../Contexts/CharactersContext'

function Characters() {

    const { characters, loading } = useCharacters()
    const [error, setError] = useState(false)

    /* console.log(characters.values()) */

    if (loading) return <>
        <div id='AboutUs'>
            <div className='container-fluid'>
                <div className='d-flex aboutUs-behindITTI row justify-center'>
                    <div className='loadingring'>
                        Loading
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </>

    if (error) return <p>An error occurred: {error.message}</p>

    else return (
        <>
            <div className='aboutUs-banner row'>
                <div className='col-12 aboutUs-banner-col d-none d-lg-block'>
                    <img className='image-zoom3' src='/Assets/Photos/AboutUs/bannercharacters.png' alt='Banner artisan' />
                </div>
            </div>
            <div className='aboutUs-banner row d-lg-none d-xl-none'>
                <div className='col-12 aboutUs-banner-col'>
                    <img className='image-zoomsmallxd' src='/Assets/Photos/AboutUs/bannercharacters.png' alt='Banner artisan' />
                    <div id='aboutUs-banner-small'>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex'>
                {
                    Array.from(characters.values()).map((char) => (
                        <Link key={char._id}
                            className='d-flex justify-content-center col-md-4 col-sm-2 py-3'
                            to={`/characters/${char._id}`}
                        >
                            <Fade down>
                                <div className='col d-flex justify-content-center ' key={char._id}>
                                    <CharacterCard imageSource={char.image} logo={char.logo} />
                                </div>
                            </Fade>
                        </Link>
                    ))}
            </div>
        </>
    )
}

export default Characters