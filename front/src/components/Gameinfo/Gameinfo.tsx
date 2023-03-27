import './styles.scss'
import { AnimatePresence, motion } from 'framer-motion'
import {cardData} from '../../types'
import { RiComputerFill, RiPlaystationFill, RiXboxFill, RiSwitchFill, RiAppStoreFill, RiAndroidFill, RiAppleFill, RiSteamFill, RiGooglePlayFill } from 'react-icons/ri'
import { SiNintendo, SiLinux, SiWii, SiNintendogamecube, SiAtari, SiSega, SiGogdotcom, SiEpicgames } from 'react-icons/si'


const Gameinfo = ( {data, onClose} :{data: cardData, onClose:any}) => {
   
  const platformList = [
    {ids:[4], icon:<RiComputerFill size={25}/>}, //pc
    {ids:[187,18,16,15,27,19,17],icon:<RiPlaystationFill size={25}/>}, //playstation
    {ids:[1,186,14,80],icon:<RiXboxFill size={25}/>}, //xbox
    {ids:[7],icon:<RiSwitchFill size={25}/>}, //switch
    {ids:[3],icon:<RiAppStoreFill size={25}/>}, //ios
    {ids:[21],icon:<RiAndroidFill size={25}/>}, //android
    {ids:[8,9,13,83,79,49],icon:< SiNintendo size={25}/>}, //nintendo
    {ids:[5,41],icon:< RiAppleFill size={25}/>}, //mac
    {ids:[6],icon:<SiLinux size={25}/>}, //linux
    {ids:[10,11],icon:<SiWii size={25}/>}, //wii
    {ids:[105], icon:<SiNintendogamecube size={25}/>}, //gamecube
    {ids:[28,3123,22,25,34,46,50], icon:<SiAtari size={25}/>}, //atari
    {ids:[107,119,117,74], icon:<SiSega size={25}/>}, //sega
  ]

  const storeList = [
    {ids:[1,7], icon:<RiSteamFill size={25}/>}, //steam
    {ids:[3], icon:<RiPlaystationFill size={25}/>}, //ps store
    {ids:[2], icon:<RiXboxFill size={25}/>}, //xbox store
    {ids:[4], icon:<RiAppStoreFill size={25}/>}, //app store
    {ids:[5], icon:<SiGogdotcom size={25}/>}, //gog
    {ids:[6], icon:<SiNintendo size={25}/>}, //nintendo store
    {ids:[8], icon:<RiGooglePlayFill size={25}/>}, //google play
    {ids:[11], icon:<SiEpicgames size={25}/>}, //epic
  ]

  const handleClose = (e:any) =>{
    if(e.target === e.currentTarget) onClose()
  }
  type icon = {id:React.Key, icon:JSX.Element}
  
  const getPlatformIcons = (platforms:[any]) => {
    let icons : icon[] = []
    if(!platforms) return icons
    for (let i = 0; i < platformList.length; i++) {
      for (let y = 0; y < platforms.length; y++) {
        let indexOfPlatform = platformList[i].ids.indexOf(platforms[y].platform.id)
        if(indexOfPlatform >= 0){
          let obj = {id: platformList[i].ids[indexOfPlatform], icon: platformList[i].icon}
          icons.push(obj)
          break
        }
      }
    }
    return icons
  }

  const getStoreIcons = (stores:[any]) =>{
    let icons : icon[] = []
    if(!stores) return icons
    for (let i = 0; i < storeList.length; i++) {
      for (let y = 0; y < stores.length; y++) {
        let indexOfStore = storeList[i].ids.indexOf(stores[y].store.id)
        if(indexOfStore >= 0){
          let obj = {id: storeList[i].ids[indexOfStore], icon: storeList[i].icon}
          icons.push(obj)
          break
        }
      }
    }
    return icons
  }


  return (
     <>
        <motion.div className='more-container' onMouseDown={(e) => handleClose(e)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0 }} transition={{duration:.15}}>
            <motion.div className='more-card' initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
              <div className='more-graphic' style={{backgroundImage:`url(${data.background_image})`}}></div>
              <div className='more-info'>
                <p>{data.name}</p>
                <p><span>Released:</span>{data.released}</p>
                <p><span>Rating:</span>{data.rating}/5</p>
                <p><span>Metacritic score:</span>{data.metacritic}</p>
                <p><span>Genre:</span>{data.genres.map(el => <span key={el.id}>{el.name}</span>)}</p>
                <p><span>Platforms:</span>{getPlatformIcons(data.platforms).map(el => <span key={el.id}> {el.icon} </span>)}</p>
                <p><span>Stores:</span>{getStoreIcons(data.stores).map(el => <span key={el.id}> {el.icon} </span>)}</p> 
              </div>
              
            </motion.div>
        </motion.div>
        </>)
}

export default Gameinfo