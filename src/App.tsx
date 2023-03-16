import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Games from "./pages/Games/Games"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/games" element={<Games/>}/>
    </Routes>
    </>
    
  )
}

export default App
