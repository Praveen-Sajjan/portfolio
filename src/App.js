import './App.scss'
import  {Routes, Route} from 'react-router-dom'
import Layout from './components/Layouts'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import React from 'react'

function App () {
  return (
    <>
   <Routes>
    <Route exact path= "/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
