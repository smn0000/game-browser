import { category, cardData } from '../../../types'
import { useState, useEffect } from 'react'
import { BiChevronsDown } from 'react-icons/bi'
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
  

  return (
    <div className='category'>
        <p className='category__name'>{name}</p>
        <div className='category__items'>
            {data.slice(0,6).map(el => <Card data={el} key={el.id}/>)}
        </div>
        <div className='category__more'>
          <button><BiChevronsDown size={'50px'}/></button>
        </div>
    </div>
  )
}

export default Category