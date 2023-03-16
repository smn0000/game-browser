import React from 'react'
import './styles.scss'
import Carousel from '../../components/Carousel/Carousel'

const Landing = () => {
  return (
    <div className='landing'>
      <h1>GAMES</h1>
      <p>Find the perfect game for yourself</p>
      <div className='carousel-container'>
        <Carousel/>
      </div>
      
    </div>
  )
}

export default Landing