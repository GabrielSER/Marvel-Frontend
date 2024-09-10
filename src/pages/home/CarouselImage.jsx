import clsx from 'clsx'
import Slide from 'react-reveal/Slide'
import { useLanguage } from '@hooks/useLanguage'
import { useMemo } from 'react'

const CarouselImage = (props) => {
  const { section } = props
  const { image, title } = section
  const { t } = useLanguage('home')

  const titleTranslated = useMemo(() => t(title), [title])

  return (
    <div
      className={clsx(
        'flex relative',
        'w-full h-full',
        'justify-center items-center',
        'overflow-hidden'
      )}
    >
      <Slide left>
        <h1
          className={clsx(
            'flex',
            'absolute',
            'text-center',
            'text-4xl p-4 rounded-l-full',
            'rounded-r-full',
            'bg-shadow'
          )}
        >
          {titleTranslated}
        </h1>
      </Slide>
      <img
        className='flex w-full h-full object-cover'
        src={image}
        alt={titleTranslated}
      />
    </div>
  )
}

export default CarouselImage
