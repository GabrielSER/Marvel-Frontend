import React from 'react'
import clsx from 'clsx'

const CharacterCard = (props) => {

    const { character } = props

    const { logo, image } = props

    return (
        <div
            className={clsx(
                'w-36 h-72',
                'bg-red-200',
                'animate__animated animate__fadeInUp'
            )}
        >
            <div className='overflow'>
                <img src={image} alt='' className='card-img-top' />
                <img src={logo} alt='' className='card-img-bottom' />
            </div>
        </div>
    )
}

export default CharacterCard