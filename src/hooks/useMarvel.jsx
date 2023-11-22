import axios from 'axios'
import { useCallback, useState } from 'react'
import { getToken } from '../contexts/UserContext'

const httpMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const config = {
    host : process.env.REACT_APP_BACKEND_PROXY
}

const useMarvel = () => {

    const [loading, setLoading] = useState(false)

    const query = useCallback(async (route, options) => {
        const axiosOptions = {
            baseURL: config.host,
            url: route,
            method: options?.method ?? httpMethod.GET
        }
        if (options?.body) {
            axiosOptions.data = options.body
        }
        axiosOptions.headers = {
            'Access-Control-Allow-Origin': '*'
        }
        if (options?.headers) {
            axiosOptions.headers = {
                ...axiosOptions.headers,
                ...options.headers
            }
        }
        const token = getToken()
        if (token) {
            axiosOptions.headers = {
                ...axiosOptions.headers,
                'Authorization': `Bearer ${token}`
            }
        }
        setLoading(true)
        try {
            const rawResponse = await axios(axiosOptions)
            let body = rawResponse.data
            if (typeof body !== 'object' && !Array.isArray(body)) {
                body = { message: body }
            }
            return body
        }
        catch (error) {
            console.error(error)
            const response = error?.response?.data
            throw new Error(response?.message ?? response?.error ?? 'Unknown error')
        }
        finally {
            setLoading(false)
        }
    }, [])

    return { query, loading }
}

export { useMarvel, httpMethod }