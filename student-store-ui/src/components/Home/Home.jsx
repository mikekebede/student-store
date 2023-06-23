import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

export default function Home(props) {
  return (
    <>
    <div className="home">
      
    <Navbar />
              
      <Hero />

      <ProductGrid shoppingcart={props.shoppingCart} setShoppingCart={props.setShoppingCart} id="gridview" products={props.products}/>
      
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  )
}
