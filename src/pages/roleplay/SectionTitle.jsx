import ComicTitlePanel from '@ui/ComicTitlePanel'
import clsx from 'clsx'

const SectionTitle = (props) => {

    const { title, big } = props

    return (
        <div className='flex justify-center w-full p-5'>
            <ComicTitlePanel>
                <h1
                    className={clsx(
                        big && 'text-3xl sm:text-5xl',
                        !big && 'text-2xl sm:text-4xl',
                        'font-semibold text-center'
                    )}
                >
                    {title}
                </h1>
            </ComicTitlePanel>
        </div>
    )
}

export default SectionTitle