import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"

export default function Home(props) {
  return (
    <>
    <div className="home">
      <Hero/>
      <ProductGrid products={props.products}/>
      <About/>
      <ContactUs/>
    </div>
    </>
  )
}
