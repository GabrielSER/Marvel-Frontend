require('dotenv').config()
const { handleError } = require('./api_error')
const { useAxios } = require('./axios')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000

const {
    PLACES_KEY
} = process.env

app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/reviews', handleError(async (req, res) => {
    const response = await useAxios(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ_bKrDfXcQIYRGqNIjleGt94&fields=review&key=${PLACES_KEY}`)
    return response.result.reviews

}))

    