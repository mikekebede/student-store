import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function Home() {
    const { id } = useParams(); 


    const [productDetail,setProductDetail]=useState(null);

    useEffect(()=> {
        axios.get(`https://codepath-store-api.herokuapp.com/${id}`)
        .then((response)=>{
        setProductDetail(response.data.products)
    })
    .catch((error) => {
      console.error(error);
    })
    }, [id]);


    if (!productDetail) {
      return <div>No product</div>;
    }
  
    //const { height, weight, sprites } = pokemonDetails;
  
    return (
      <div className="product-detail">
        <ProductView 
        product={productDetail}
      />
      </div>
    );
  
}
