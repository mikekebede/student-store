import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero"
import axios from "axios"
import "./App.css"



export default function App() {

  const [products,setProducts]=useState([]);

  useEffect(()=> {
      axios.get("https://codepath-store-api.herokuapp.com/store")
      .then((response)=>{
      setProducts(response.data.products)
  })
  .catch((error) => {
    console.error(error);
  })
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
          {/* <Search/> */}
    
          <ProductGrid products={products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
