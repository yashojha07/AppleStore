import React, { useContext } from "react";

import { ShopContext } from "../../context/shop-context";


function Product(props){
    const {id,productName, price, productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext)
    // console.log(id);
    const itemAmount = cartItems[id];
    return (<div   className="product">
        
        <img src = {productImage} alt="img"/>
        {/* <div>{id}</div> */}
       <div className="content">
       <div className="description">
            <p>{productName}</p>
            <p>${price}</p>
            <button className="addToCartBttn"  onClick={()=> addToCart(id)}>
        Add To Cart  {itemAmount>0 && <>({itemAmount})</>}
      </button>
        </div>
        
       </div>
    </div>);
}

export default Product;