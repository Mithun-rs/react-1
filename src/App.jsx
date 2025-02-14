import React from 'react'
import { Routes,Route } from "react-router-dom"
 import Navbar from "./component/Navbar"
 import Home from "./pages/Home"
 import About from "./pages/About"
 import Contact from "./pages/Contact"
 

 import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
