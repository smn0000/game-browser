import {Link} from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react"
import "./styles.scss"
import { BiSearch, BiMenu } from "react-icons/bi"




const NavbarLong =  () => {
  return(
    <nav className="nav">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
      </ul>

      <div className="searchbar">
        <input type="text" placeholder="Search..."/>
      </div>

      <div>Data provided by:</div>
    </nav>
  )}

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)

  const animateMenu = {
    hidden:{
      scaleX:0,
      opacity:0,
      
    },
    visible:{ 
      scaleX: 1, 
      opacity:1, 
      originX:0, 
      originY:0,
      transition:{ duration: .25, when:'beforeChildren', staggerChildren: .2},
    },
   
  }

  const animateMenuChildren = {
    hidden:{y:-10, opacity:0},
    visible:{y:0,opacity:1,},

  }

  return(
    <nav className="mobile-nav">
      <button className="hamburger" onClick={() => setShowMenu(current => !current)}>
        <BiMenu size='48px'/>
      </button>

      <AnimatePresence>
      {showMenu && 
        <motion.div className="mobile-menu"
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={animateMenu}
        >
          <motion.div variants={animateMenuChildren}  className="searchbar">
            <input type="text" placeholder="Search..."/>
            <button className="search-button" onClick={() => setShowMenu(current => !current)}><BiSearch size="32px"/></button>
          </motion.div>
          
          <ul>
              <motion.li variants={animateMenuChildren}><Link to="/" onClick={() => setShowMenu(current => !current)}>Home</Link></motion.li>
              <motion.li variants={animateMenuChildren}><Link to="/games" onClick={() => setShowMenu(current => !current)}>Games</Link></motion.li>
          </ul>

          <motion.div variants={animateMenuChildren} className="data-by"><p>Data provided by:</p></motion.div>

        </motion.div>}
      </AnimatePresence>
      </nav>
    
  )}

const Navbar = () => {

  const isMobile: boolean = useMediaQuery('(max-width: 1024px)')

  return (
    <>
    {(isMobile ? <NavbarMobile/> : <NavbarLong/>)}
    </>
    
  )
}

export default Navbar