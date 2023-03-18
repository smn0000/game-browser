import {useState, useReducer} from 'react'
import './styles.scss'
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import Gameinfo from '../Gameinfo/Gameinfo'

const Carousel = ({}) => {

    const MOCK_DATA =[{"id":1,"slug":"Antonietta","name":"TOPICAL STARCH","released":"2018-08-07","background_image":"http://dummyimage.com/155x100.png/dddddd/000000","rating":3},
    {"id":2,"slug":"Pavel","name":"DIPHENHYDRAMINE HYDROCHLORIDE","released":"2011-04-25","background_image":"http://dummyimage.com/102x100.png/dddddd/000000","rating":10},
    {"id":3,"slug":"Welch","name":"docusate sodium and sennosides","released":"2002-09-15","background_image":"http://dummyimage.com/179x100.png/5fa2dd/ffffff","rating":5},
    {"id":4,"slug":"Brennan","name":"Ragweed False Bur","released":"2020-10-19","background_image":"http://dummyimage.com/163x100.png/ff4444/ffffff","rating":9},
    {"id":5,"slug":"Gusella","name":"Cyclopentolate Hydrochloride","released":"2005-02-17","background_image":"http://dummyimage.com/126x100.png/ff4444/ffffff","rating":10},
    {"id":6,"slug":"Duky","name":"Sodium Fluoride and Triclosan","released":"2003-01-19","background_image":"http://dummyimage.com/196x100.png/ff4444/ffffff","rating":8},
    {"id":7,"slug":"Jonell","name":"Ranitidine","released":"2006-12-06","background_image":"http://dummyimage.com/182x100.png/ff4444/ffffff","rating":7},
    {"id":8,"slug":"Saidee","name":"Sulfamethoxazole and Trimethoprim","released":"2023-02-22","background_image":"http://dummyimage.com/204x100.png/ff4444/ffffff","rating":2},
    {"id":9,"slug":"Dorie","name":"Mosquito","released":"2009-05-10","background_image":"http://dummyimage.com/114x100.png/5fa2dd/ffffff","rating":10},
    {"id":10,"slug":"Skelly","name":"Nizatidine","released":"2002-02-16","background_image":"http://dummyimage.com/121x100.png/ff4444/ffffff","rating":1}]

    const usePrev = (state:any) =>{
      const [tuple, setTuple] = useState([null, state])

      tuple[1] !== state && setTuple([tuple[1], state])

      return tuple[0]
  
    }

    const reducer = (state:number, action:any) =>{
      switch(action.type){
        case 'PREVIOUS':
          return (state===1 ? MOCK_DATA.length : state-1)
        case 'NEXT':
          return (state===MOCK_DATA.length ? 1 : state+1)
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

    

    const card = MOCK_DATA.filter(el=> el.id === selected)[0]

    const cardAnimation = {
      initial: (direction:number) => ({ x: direction === 1 ? '100%' : '-100%' }),
      animate: { x: 0 },
      exit: (direction:number) => ({ x: direction === 1 ? '-100%' : '100%' }),
    }

    const handleShowMore = () => {
      setShowMore(true)
    }
    const handleHideMore = (e:any) =>{
      if(e.target === e.currentTarget){
        setShowMore(false)
        }
    }
  return (
    <>
      <AnimatePresence>
      {showMore && <Gameinfo data={card} onClose={handleHideMore}/>}
      </AnimatePresence>

      <div className='carousel'>
          <button className='sidebar prev-btn' onClick={() => {dispatch({type:'PREVIOUS'}); setCount(previous=>previous-1)}}><BiCaretLeft/></button>
          <div className='card'>
            <AnimatePresence custom={direction}>
              <motion.div className='item' style={{backgroundImage:`url(${card.background_image})`}} key={count} onClick={handleShowMore}
              initial='initial' animate='animate' exit='exit' variants={cardAnimation} custom={direction} transition={{duration:.5}} >
              <p className='title'>{card.name}</p>
              <p className='rating'>Rating: {card.rating}</p>
              
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button className='sidebar next-btn'onClick={() => {dispatch({type:'NEXT'}); setCount(previous=>previous+1)} }><BiCaretRight/></button>
      </div>
    </>
  )
}

export default Carousel