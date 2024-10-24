import { useState, createElement } from 'react'
import Modal from '../Modal'

const EditModal = (props) => {

    const {
        title = 'Edit',
        summitText = 'Save changes',
        closeText = 'Cancel',
        initialValue,
        name,
        state,
        summitFunction,
        bodyComponent,
        ...otherProps
    } = props

    const [value, setValue] = useState(initialValue ?? state[name])

    return (
        <Modal
            title={title}
            summitText={summitText}
            closeText={closeText}
            summitFunction={() => summitFunction({ [name]: value })}
            {...otherProps}
        >
            {createElement(bodyComponent, { value, setValue })}
        </Modal>
    )
}

export default EditModal