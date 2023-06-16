import React, { useState } from "react";
import ProductCards from "../productCard/ProductCards";
import  "./ProductGrid.css"



export default function ProductGrid(props){
   const productsresult= props.products

   const [searchTerm,setSearchTerm]= useState(productsresult)
   const [filteredData, setFilteredData] = useState(productsresult);

   const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    
    setFilteredData(
        productsresult.filter((item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase())
        ))
   }

   
    return(
        // gridSearch is the overall container containing the searchbar, the categories and the productGrid
        <div className="gridSearch">
        
        {/* This part contains the searchbar */}
        <div className="search">
        <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Enter search query....."
      />    

      
        </div>

    {/* Declare the catagory section*/}
    {/* <div className="category">
    <ul className="catagoryButtons">
        <button>All Categories</button>
        <button>Clothing</button>
        <button>Food</button>
        <button>Accessories</button>
        <button>Tech</button>
    </ul>
    </div>     */}


        <div className="productGrid">
        {filteredData.length > 0 ? (
    filteredData.map((productItem, index) => (
      <ProductCards key={index} product={productItem} />
    ))
  ) : (
    productsresult.map((product, index) => (
      <ProductCards key={index} product={product} />
    ))
  )}
       </div>
       </div>
    )
}