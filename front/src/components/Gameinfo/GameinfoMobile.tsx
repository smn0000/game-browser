import './styles.scss'
import { AnimatePresence, motion} from 'framer-motion'
import {cardData} from '../../../interfaces'


const GameinfoMobile = ( {data, onClose} :{data: cardData, onClose:any}) => {
  

  const handleClose = (e:any) =>{
    if(e.target === e.currentTarget) onClose()
  }


  return (
    
    <motion.div className='more-container' onMouseDown={(e) => handleClose(e)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0 }} transition={{duration:.15}}>
      <motion.div className='more-card' initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
        <div className='more-graphic' style={{backgroundImage:`url(${data.background_image})`}}></div>
        <div className='more-info'>
          <p>{data.name}</p>
          <p>{data.released}</p>
          <p>{data.rating}</p>
      
        </div>

      </motion.div>
    </motion.div>
  )
}

export default GameinfoMobile