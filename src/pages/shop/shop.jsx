import React from "react";
import {PRODUCTS} from '../../product'
import Product from "./product";
import './shop.css'
 
function pdt(product){
 return (<Product data = {product} key ={product.id}/>);
}

function Shop(){
    return (<div className="shop">
           <div className="shopTitle">
           <h1>APPLE STORE</h1>
           </div>
           <div className="products" >
               {/* { PRODUCTS.map((product) =>{
              return (  <Product data = {product} key ={product.id}/> );               
               })} */ }
               {PRODUCTS.map(pdt)}
           </div>
    </div>);
}

export default Shop;