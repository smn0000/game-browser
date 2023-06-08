import "./styles.scss"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import Gameinfo from "../Gameinfo/Gameinfo"
import { cardData } from "../../types"

const Card = ({ data }: { data: cardData }) => {
  const [showInfo, setShowInfo] = useState(false)
  const isMobile = useMediaQuery("(max-width:1024px)")

  const noImage = new URL("../../../static/noimage.png", import.meta.url).href
  if (!data.background_image) data.background_image = noImage

  const cardAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },

    hidden: {
      opacity: 0.5,
      y: 10,
    },

    hover: {
      y: -10,
    },
  }

  return (
    <motion.div className="card__wrapper" onClick={() => setShowInfo(true)}>
      <motion.div
        className="card"
        variants={cardAnimation}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <img src={data.background_image} loading="lazy"></img>
        <p>{data.name}</p>
      </motion.div>

      {showInfo && (
        <>
          <Gameinfo data={data} onClose={() => setShowInfo(false)} />
        </>
      )}
    </motion.div>
  )
}
export default Card
