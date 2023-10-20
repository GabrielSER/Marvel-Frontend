import { useMemo } from 'react'
import { useContent } from '../../contexts/ContentContext'

const ContentRegex = /^(?<id>.*?)(:(?<params>{.*?}))?$/

const parseContentQuery = (query) => {

    let parsedQuery = {
        id: query,
        params: {}
    }

    const exec = ContentRegex.exec(query)

    if (!exec) return parsedQuery

    parsedQuery = exec.groups

    if (parsedQuery.params) {
        parsedQuery.params = JSON.parse(parsedQuery.params)
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

    return getContent(parsedQuery.id, { ...params, ...parsedQuery.params })
}

export default Content