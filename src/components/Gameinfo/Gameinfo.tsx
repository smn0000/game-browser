import './styles.scss'
import { AnimatePresence, motion } from 'framer-motion'

type data ={
    id: number
    name: string
    released: string
    rating: number
}


const Gameinfo = ( {data, onClose} :{data: data, onClose:any}) => {
    
    
    let direction: number


  return (
    
        <motion.div className='container' onDoubleClick={onClose} initial={{scaleY:0}} animate={{scaleY:1, originY:0}} exit={{scaleY:0 }} transition={{duration:.2}}>
            
            
        </motion.div>
  )
}

export default Gameinfo