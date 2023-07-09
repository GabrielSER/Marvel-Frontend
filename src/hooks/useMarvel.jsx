import axios from 'axios'
import { useCallback, useState } from 'react'
import packageJson from '../../package.json'

const apiUrl = packageJson.proxy

const httpMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const useMarvel = () => {

    const [loading, setLoading] = useState(false)

    const query = useCallback(async (route, options) => {
        const axiosOptions = {
            baseURL: apiUrl,
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
        /*const username = localStorage.getItem('username')
        const password = localStorage.getItem('password') 
        if (username && password) {
            axiosOptions.headers = {
                ...axiosOptions.headers,
                'Authorization': 'Basic ' + base64.encode(username + ':' + password)
            }
        }*/
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

    return {query, loading}
}

export { useMarvel, httpMethod }