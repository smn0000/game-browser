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
  max:20
})

app.use(limiter)
app.set('trust proxy', 1)

const parseResult = (data) => {

  data = data.slice(0,10)
  let counter = 1
  data.forEach(element => {
    element.id=counter
    counter++
  });

  return data
}

app.use(express.static(path.join(__dirname,"/front/dist/")));

app.get('/api/carousel', cache('24 hour'), (req, res) =>{ 
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&metacritic=96,100`)
    .then(response => res.json(parseResult(response.data.results)))
})

app.get('/api/search', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.search}&metacritic=1,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/action', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=action&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/shooter', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=shooter&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/indie', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=indie&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/adventure', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=adventure&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/rpg', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=role-playing-games-rpg&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/strategy', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=strategy&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/shooter', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=shooter&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/casual', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=casual&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/sim', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=simulation&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/puzzle', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=puzzle&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/arcade', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=arcade&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/platformer', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=platformer&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/racing', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=racing&page_size=40&metacritic=80,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/mmo', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=massively-multiplayer&page_size=40&metacritic=80,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/sports', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=sports&page_size=40&metacritic=80,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/fighting', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=fighting&page_size=40&metacritic=50,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/family', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=family&page_size=40&metacritic=50,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/board',  cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=board-games&page_size=40&metacritic=50,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/educational',  cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=educational&page_size=40&metacritic=50,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/card', cache('24 hour') ,(req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=card&page_size=40&metacritic=90,100`)
    .then(response => res.json(response.data.results))
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))