import { category, cardData } from '../../types'
import { useState, useEffect } from 'react'
import { BiChevronsDown } from 'react-icons/bi'
import { motion, AnimatePresence, animate } from 'framer-motion'
import Card from '../Card/Card'
import './styles.scss'

const Category = ({name}:{name:category}) => {
  const [data, setData] = useState<cardData[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch(`/api/${name}`)
    .then(res => res.json())
    .then(data => setData(data))

  }, [])
  
  const animateArrow = {
    initial:{rotateX:0},
    animate:(showAll:boolean) => showAll ? {rotateX:180} : {rotateX:0}

  }

  return (
    
      <div className='category' >
          <p className='category__name' id={`${name}`} >{name}</p>
          <AnimatePresence>
          {!showAll ?
            <motion.div key={1} className='category__items' initial={{height:'100vh'}} animate={{height:350}} transition={{duration:.1}}>
              {data.slice(0,6).map(el => <Card data={el} key={el.id}/>) }
            </motion.div>
            :
            <motion.div key={2} className='category__items' initial={{height:350}} animate={{height:'auto'}}>
              {data.map(el => <Card data={el} key={el.id}/>)}
            </motion.div>
            }
          </AnimatePresence>
          <div className='category__more'>
            <motion.a href={`#${name}`} onClick={() => setShowAll(current=>!current)} variants={animateArrow} custom={showAll} initial="initial" animate='animate'><BiChevronsDown size={'50px'}/></motion.a>
          </div>
      </div>
  )
}

export default Category