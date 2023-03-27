import './styles.scss'
import Carousel from '../../components/Carousel/Carousel'
import CarouselMobile from '../../components/Carousel/CarouselMobile'
import { useMediaQuery } from 'usehooks-ts'
import { useState, useEffect } from 'react'

const Landing = () => {
  const isMobile:boolean = useMediaQuery('(max-width: 1024px)')
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
          {isMobile ? <CarouselMobile data={carouselData}/> :<Carousel data={carouselData}/>}
        </>
        }
      </div>
      
    </div>
  )
}

export default Landing