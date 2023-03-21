import {useState, useEffect} from 'react'
import './styles.scss'

interface Object {
  id: number
  name: string
  background_image: string
  }

const Search = ({search} : {search:string}) => {

  const [data, setData] = useState<any[]>([])
  console.log(data)

  useEffect(() => {
    if(search !== null){
      fetch(`api/search?search=${search}`)
      .then(response => {console.log(response); return response.json()})
      .then(data => setData(data))
      .catch(err => console.log(err))
  }
  }, [search])
  
  
  return (
  <>
    {data.length !== 0  && 
    
 
      <div className='search-container'>
        {data.map(el => <div className='search-card' key={el.id} style={{backgroundImage: `url(${el.background_image})`}}>{el.name}</div>)}
      </div>
      }
  </>
  )
}

export default Search