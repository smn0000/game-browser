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
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`)
    .then(response => res.json(parseResult(response.data.results)))
})

app.get('/api/search', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.query.search}&metacritic=1,100`)
    .then(response => res.json(response.data.results))
})

app.get('/api/action', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=action`)
    .then(response => res.json(response.data.results))
})

app.get('/api/shooter', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=shooter`)
    .then(response => res.json(response.data.results))
})

app.get('/api/indie', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=indie`)
    .then(response => res.json(response.data.results))
})

app.get('/api/adventure', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=adventure`)
    .then(response => res.json(response.data.results))
})

app.get('/api/rpg', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=role-playing-games-rpg`)
    .then(response => res.json(response.data.results))
})

app.get('/api/strategy', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=strategy`)
    .then(response => res.json(response.data.results))
})

app.get('/api/shooter', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=shooter`)
    .then(response => res.json(response.data.results))
})

app.get('/api/casual', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=casual`)
    .then(response => res.json(response.data.results))
})

app.get('/api/sim', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=simulation`)
    .then(response => res.json(response.data.results))
})

app.get('/api/puzzle', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=puzzle`)
    .then(response => res.json(response.data.results))
})

app.get('/api/arcade', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=arcade`)
    .then(response => res.json(response.data.results))
})

app.get('/api/platformer', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=platformer`)
    .then(response => res.json(response.data.results))
})

app.get('/api/racing', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=racing`)
    .then(response => res.json(response.data.results))
})

app.get('/api/mmo', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=massively-multiplayer`)
    .then(response => res.json(response.data.results))
})

app.get('/api/sports', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=sports`)
    .then(response => res.json(response.data.results))
})

app.get('/api/fighting', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=fighting`)
    .then(response => res.json(response.data.results))
})

app.get('/api/family', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=family`)
    .then(response => res.json(response.data.results))
})

app.get('/api/board', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=board-games`)
    .then(response => res.json(response.data.results))
})

app.get('/api/educational', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=educational`)
    .then(response => res.json(response.data.results))
})

app.get('/api/card', cache('24 hour'), (req, res) =>{
  axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=card`)
    .then(response => res.json(response.data.results))
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))