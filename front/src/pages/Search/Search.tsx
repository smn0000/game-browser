import {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion' 
import Card from '../../components/Card/Card'
import './styles.scss'
import {cardData} from '../../types'


const Search = ({search} : {search:string}) => {

  const [data, setData] = useState<cardData[]>([])

  useEffect(() => {
    if(search !== ''){
      setData([])
      fetch(`api/search?search=${search}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }
  }, [search])
  

  return (
    <AnimatePresence>
      
    {data.length !== 0  && 
    <>
      <motion.h1 initial={{y:'10', opacity:.5}} animate={{y:0, opacity:1}}>{search}</motion.h1>
 
      <div className='search-container'> 
        {data.map(el => <Card data={el} key={el.id}/>)}
      </div>
      
    </>
      }
  </AnimatePresence>)
}

export default Search