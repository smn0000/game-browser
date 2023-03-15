import {Link} from "react-router-dom"
import "./styles.scss"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
        </ul>

        <div>Searchbar</div>

        <div>Data provided by:</div>
    </nav>
  )
}

export default Navbar