import { Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import AboutUS from './AboutUS/AboutUS'
import ContactUS from './ContactUS/ContactUS'
import Product from './Product/Product'
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/product" element={<Product />} />
        </Routes> 
        {/* <Footer/> */}
    </React.Fragment>
  )
}

export default App
