import {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion' 
import Card from '../../components/Card/Card'
import './styles.scss'


const Search = ({search} : {search:string}) => {

  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    if(search !== null){
      fetch(`api/search?search=${search}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }
  }, [search])
  

  return (
    <AnimatePresence>
      <h1>Search results for: {search}</h1>
    {data.length !== 0  && 
    
 
      <div className='search-container'> 
        {data.map(el => <Card data={el} key={el.id}/>)}
      </div>
      }
  </AnimatePresence>)
}

export default Search