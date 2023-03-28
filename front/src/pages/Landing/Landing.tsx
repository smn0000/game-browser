import './styles.scss'
import Carousel from '../../components/Carousel/Carousel'

import { useState, useEffect } from 'react'

const Landing = () => {

  const [carouselData, setCarouselData] = useState()



  useEffect(()=>{
      fetch('/api/carousel')
      .then(response => response.json())
      .then(data => setCarouselData(data))
      .catch(err => console.error(err))
    }
   ,[])
   
  return (
    <div className='landing'>
      <h1>TOP GAMES</h1>
      <div className='carousel-container'>
        {carouselData && <>
          <Carousel data={carouselData}/>
        </>
        }
      </div>
      
    </div>
  )
}

export default Landing