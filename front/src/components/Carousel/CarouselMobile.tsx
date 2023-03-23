import {useState, useReducer} from 'react'
import './styles.scss'
import { motion, AnimatePresence } from 'framer-motion'
import GameinfoMobile from '../Gameinfo/GameinfoMobile'
import {cardData} from '../../../interfaces'


const CarouselMobile = ({data} : {data:cardData[]}) => {


    const usePrev = (state:any) =>{
      const [tuple, setTuple] = useState([null, state])

      tuple[1] !== state && setTuple([tuple[1], state])

      return tuple[0]
  
    }

    const reducer = (state:number, action:any) =>{
      switch(action.type){
        case 'PREVIOUS':
          return (state === 1 ? data.length : state-1)
        case 'NEXT':
          return (state === data.length ? 1 : state+1)
        case 'GOTO':
          return action.payload
        default:
          throw Error('Unknown action.')
      }
    }

    const [selected, dispatch] = useReducer(reducer, 1)
    const [count, setCount] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const prev:any = usePrev(count)

    let direction:number = prev < count ? 1 : -1

    

    const card = data.filter(el=> el.id === selected)[0]

    const cardAnimation = {
      initial: (direction:number) => ({ x: direction === 1 ? '100%' : '-100%' }),
      animate: { x: 0 },
      exit: (direction:number) => ({ x: direction === 1 ? '-100%' : '100%' }),
    }
 
    const handlePan = (offset:number) => {
      if(offset < 0) {
        dispatch({type:'NEXT'})
        setCount(previous=>previous+1)
      }
      else{
        dispatch({type:'PREVIOUS'})
        setCount(previous=>previous-1)
      }
    }

    const handleShowMore = () => {
      setShowMore((previous => !previous))
    }
  return (
    <>
        <AnimatePresence>
            {showMore && <GameinfoMobile data={card} onClose={handleShowMore}/>}
        </AnimatePresence>
        <div className='carousel'>
            <div className='card'>
            <AnimatePresence custom={direction}>
                <motion.div className='item' style={{backgroundImage:`url(${card.background_image})`}} key={count} onDoubleClick={handleShowMore}
                initial='initial' animate='animate' exit='exit' variants={cardAnimation} custom={direction} transition={{duration:.5}}  onPanEnd={(event , info) => Math.abs(Number(info.offset.x)) > 50 && handlePan(info.offset.x)}>
                <p className='title'>{card.name}</p>
                <p className='rating'>Rating: {card.rating}</p>
                
                
                </motion.div>
            </AnimatePresence>
            </div>
            <div className='dots'>
                {data.map(el => el.id===card.id ?
                <motion.button className='dot' key={el.id} initial={{scale:1}} animate={{scale:1.5}} exit={{scale:1}} transition={{duration: .05}}
                onClick={() => {card.id !== el.id && dispatch({type:'GOTO', payload:el.id}); card.id !== el.id && setCount(el.id > card.id ? previous=>previous+1 : previous=>previous-1)}}>
                </motion.button>
                :
                <motion.button className='dot' key={el.id} initial={{scale:1}}
                onClick={() => {card.id !== el.id && dispatch({type:'GOTO', payload:el.id}); card.id !== el.id && setCount(el.id > card.id ? previous=>previous+1 : previous=>previous-1)}}>
                </motion.button>
                )}
            </div>
        </div>
    </>
  )
}

export default CarouselMobile