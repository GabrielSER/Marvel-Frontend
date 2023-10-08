import { useContent } from '../../contexts/ContentContext'

const Content = (props) => {

    const {
        id,
        params = {}
    } = props

    const { getContent } = useContent()

    return getContent(id, params)
}

export default Content