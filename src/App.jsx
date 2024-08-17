import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Menu from "./components/Menu/Menu"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
