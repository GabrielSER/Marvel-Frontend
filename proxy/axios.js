const axios = require('axios')

const axiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})

const HttpMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const useAxios = async (url, options = {}) => {
    const {
        method = HttpMethod.GET,
        body
    } = options
    const response = await axiosClient[method](url, body)
    return response.data
}

module.exports = { useAxios, HttpMethod }