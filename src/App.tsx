import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Game from "./pages/Game"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
    </>
    
  )
}

export default App
