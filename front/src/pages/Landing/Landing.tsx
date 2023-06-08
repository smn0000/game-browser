import "./styles.scss"
import Carousel from "../../components/Carousel/Carousel"
import { cardData } from "../../types"

import { useState, useEffect } from "react"

const Landing = () => {
  const [carouselData, setCarouselData] = useState<cardData[]>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("/api/carousel")
      .then((response) => response.json())
      .then((data) => {
        setCarouselData(data)
        setIsLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="landing">
      <h1>TOP GAMES</h1>
      <div className="carousel-container">
        {isLoading && (
          <>
            <div className="landing__loading">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        )}

        {carouselData && (
          <>
            <Carousel data={carouselData} />
          </>
        )}
      </div>
    </div>
  )
}

export default Landing
