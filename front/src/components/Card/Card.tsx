import './styles.scss'
import { motion, useMotionValue , useTransform } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Gameinfo from '../Gameinfo/Gameinfo'
import GameinfoMobile from '../Gameinfo/GameinfoMobile'
import {cardData} from '../../../types'

const Card = ({ data }:{ data:cardData }) => {

    const [showInfo, setShowInfo] = useState(false)
    const isMobile = useMediaQuery('(max-width:1024px)')

    const noImage = new URL('../../../static/noimage.png', import.meta.url).href
   if(!data.background_image) data.background_image = noImage

    //DISABLES POINTER EVENTS IF Y ISN'T EQUAL 0 
    const y = useMotionValue(0)
    const pointerEvents = useTransform(
      y,
      latest => latest !== 0 ? "none" : "auto"
    )

    const cardAnimation = {
        visible: {
        opacity:1,
        y:0,
        transition:{
            duration:.2, 
            type:"spring", 
            stiffness:125}
        },

        hidden: {
        opacity:0, 
        y:-50,
        },

        exit:{
          opacity:0,
          y:'20vh'
        }
    }

  return (
    <motion.div className='card' onClick={()=>setShowInfo(true)} variants={cardAnimation} initial='hidden' animate='visible' exit='exit' style={{backgroundImage: `url(${data.background_image})`, y, pointerEvents }}>
        {showInfo && 
        <>
            {isMobile ? <GameinfoMobile data={data} onClose={() => setShowInfo(false)}/> : <Gameinfo data={data} onClose={() => setShowInfo(false)}/>}
        </>
        }

        {data.name}
    </motion.div>
  )
}
export default Card