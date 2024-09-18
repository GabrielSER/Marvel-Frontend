import UIButton from '@ui/UIButton'

const MenuButton = (props) =>
    <UIButton
        className='px-2 py-0.5 justify-start gap-2' {...props}
        centered={false}
    />

export default MenuButton