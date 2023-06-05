import React, {useContext}from "react";
import {PRODUCTS} from "../../product"
import { ShopContext } from "../../context/shop-context";
import {CartItem} from './cart-item'
import './cart.css'

import {useNavigate} from 'react-router-dom'

export const Cart = () =>{

    const {cartItems,gettotalCartAmount} = useContext(ShopContext)
 const totalAmount = gettotalCartAmount();

 const Navigate = useNavigate();
    return (<div className="cart">
        <div className="title"><h1>Your Cart Item</h1></div>
        <div className="cartItems">

            {PRODUCTS.map((Product)=>{
                if(cartItems[Product.id]!==0){
                    return <CartItem data = {Product}/>
                }
            })}
        </div>
        {totalAmount>0 ?<div className="checkout">
           
           <p>Subtotal: ${totalAmount}</p>
           <div className="check-btn">
           <button onClick={()=>Navigate("/")}>Continue Shopping</button>
           <button>CheckOut</button>
           </div>
       </div> :<h1 style={{textAlign:"center"}}> Your Cart is Empty</h1>}
        
    </div>);
}

export default Cart;