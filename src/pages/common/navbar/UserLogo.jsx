import Circular from '../../ui/Circular'

const UserLogo = (props) => {

    const {
        photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxk1BjMa0nM4U6C2Z_55R6JQYTME4AjXb1g&usqp=CAU'
    } = props

    return (
        <Circular className='w-10 border-2 border-primary'>
            <img src={photo} alt=''/>
        </Circular>
    )
}

export default UserLogo