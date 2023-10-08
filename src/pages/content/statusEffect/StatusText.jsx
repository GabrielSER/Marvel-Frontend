import Paragraph from '../../ui/Paragraph'
import Title from '../../ui/Title'

const StatusText = (props) => {
    const { title, children } = props
    return (
        <div className='flex justify-center shrink-0 flex-col space-y-4 w-full md:w-1/2'>
            <Title>{title}</Title>
            <Paragraph>
                {children}
            </Paragraph>
        </div>
    )
}
export default StatusText