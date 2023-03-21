require('dotenv').config()
const express = require('express');
const axios = require('axios')
const cors = require('cors')
const apicache = require('apicache')
const rateLimit = require('express-rate-limit')
const path = require('path')



const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())

let cache = apicache.middleware

const limiter = rateLimit({
  windowMs: 1000,
  max:10
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

  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './main.html'))
  })
/* app.use(express.static(path.join(__dirname,"/front/public/")));

app.get('/api/carousel', cache('24 hour'), (req, res) =>{ 
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`)
    .then(response => res.json(parseResult(response.data.results)))
})

app.get('/api/search', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.search}&metacritic=1,100`)
    .then(response => res.json(response.data.results))
})
 */
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))