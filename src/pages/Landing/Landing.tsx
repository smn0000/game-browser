import React from 'react'
import './styles.scss'
import Carousel from '../../components/Carousel/Carousel'
import CarouselMobile from '../../components/Carousel/CarouselMobile'
import { useMediaQuery } from 'usehooks-ts'

const Landing = () => {
  const isMobile:boolean = useMediaQuery('(max-width: 1024px)')

  return (
    <div className='landing'>
      <h1>GAMES</h1>
      <p>Find the perfect game for yourself</p>
      <div className='carousel-container'>
        {isMobile ? <CarouselMobile/> :<Carousel/> }
      </div>
      
    </div>
  )
}

export default Landing