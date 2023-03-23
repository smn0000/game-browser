import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import Landing from "./pages/Landing/Landing"
import Games from "./pages/Games/Games"
import Navbar from "./components/Navbar/Navbar"
import Search from "./pages/Search/Search"

function App() {

  const [search, setSearch] = useState<string>('')
    return (
    <>
    <Navbar setSearch={setSearch}/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/games" element={<Games/>}/>
      <Route path="/search" element={<Search search={search}/>}/>
    </Routes>
    </>
    
  )
}

export default App
