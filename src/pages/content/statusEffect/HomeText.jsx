import ComicPanel from '../../ui/ComicPanel'
import ComicTitlePanel from '../../ui/ComicTitlePanel'

const HomeText = (props) => {
    const { title, children } = props
    return (
        <div className='flex justify-center shrink-0 flex-col space-y-4 w-full md:w-1/2'>
            <ComicTitlePanel>{title}</ComicTitlePanel>
            <ComicPanel className='flex relative overflow-hidden bg-opacity-10'
            >
                <div className='flex flex-col  w-full h-full p-5 sm:p-10 bg-black bg-opacity-50'>
                    <p className='text-xs sm:text-base lg:text-xl text-white text-justify'>
                        {children}
                    </p>

                </div>
            </ComicPanel>
        </div>
    )
}
export default HomeText