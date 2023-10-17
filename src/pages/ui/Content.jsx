import { useMemo } from 'react'
import { useContent } from '../../contexts/ContentContext'

const parseContentQuery = (query) => {
    const sections = query.split('=')
    const paramsSection = sections?.[1]
    const parsedQuery = {
        id: sections[0],
        params: {}
    }
    if (paramsSection) {
        parsedQuery.params = JSON.parse(paramsSection)
    }
    return parsedQuery
 }

const Content = (props) => {

    const {
        id,
        params = {}
    } = props

    const { getContent } = useContent()

    const parsedQuery = useMemo(() => parseContentQuery(id), [id])

    return getContent(parsedQuery.id, {...params, ...parsedQuery.params})
}

export default Content