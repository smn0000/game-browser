import {Link} from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { motion } from "framer-motion"
import { useState } from "react"
import "./styles.scss"
import { BiMenu } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"




const NavbarLong =  () => {
  return(
    <nav className="nav">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Games</Link></li>
      </ul>

      <div className="searchbar">
        <input type="text" placeholder="Search..."/>
      </div>

      <div>Data provided by:</div>
    </nav>
  )}

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  return(
    <nav className="mobile-nav">

      <button className="hamburger" onClick={() => setShowMenu(current => !current)}><BiMenu size='48px'/></button>

      {showMenu && 
      <nav className="mobile-menu">
        <ul>
            <li><Link to="/" onClick={() => setShowMenu(current => !current)}>Home</Link></li>
            <li><Link to="/game" onClick={() => setShowMenu(current => !current)}>Games</Link></li>
        </ul>

        <div className="searchbar">
          <input type="text" placeholder="Search..."/>
          <button className="search-button" onClick={() => setShowMenu(current => !current)}><BiSearch size="32px"/></button>
          
        </div>

        <div className="data-by"><p>Data provided by:</p></div>
      </nav>}
    </nav>
  )}

const Navbar = () => {

  const isMobile: boolean = useMediaQuery('(max-width: 1024px)')
  console.log(isMobile)

  return (
    <>
    {(isMobile ? <NavbarMobile/> : <NavbarLong/>)}
    </>
    
  )
}

export default Navbar