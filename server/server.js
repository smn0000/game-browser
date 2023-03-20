const PORT = 5000
const express = require('express');
const axios = require('axios')
const cors = require('cors')
const apicache = require('apicache')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()

app.use(cors())

let cache = apicache.middleware

const limiter = rateLimit({
  windowMs: 1000,
  max:1
})

app.use(limiter)
app.set('trust proxy', 1)

const parseResult = (data) => {
  let counter = 1
  data.forEach(element => {
    element.id=counter
    counter++
  });

  return data
}


axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`)
    .then(response =>  dataCarousel = response)

app.get('/api/carousel', cache('24 hour'), (req, res) =>{ 
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`)
    .then(response => res.json(parseResult(response.data.results)))
})

app.get('/api/search', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.search}&metacritic=1,100`)
    .then(response => res.json(response.data.results))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))