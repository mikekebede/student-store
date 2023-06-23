import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios"

import "./App.css"



export default function App() {

  const [shoppingCart, setShoppingCart]=useState([])

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
      <div>
        <div className="app">
          <BrowserRouter>
            <main>
              
            
              <Routes>
                <Route path="/" element={<Home shoppingcart={shoppingCart} setShoppingCart={setShoppingCart}  className="home-view" products={products} />} />
                <Route path="/products/:productId" element={<ProductDetail  shoppingcart={shoppingCart} setShoppingCart={setShoppingCart} products={products} />} />
              </Routes>
              
            </main>
            <Sidebar shoppingcart={shoppingCart} setShoppingCart={setShoppingCart} />
          </BrowserRouter>
          
        </div>
      </div>
    );
}
