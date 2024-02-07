import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react"
import '../cart.css'
import CartList from "../components/CartList"
import CartItem from "../components/CartItem"
import axios from "axios"
import {CartContext} from "../App"


const CartItems = [];

const Cart = () => {
    
    const cartProducts = useContext(CartContext);
    console.log(cartProducts);

    const removeItem = (product) => {
        
      console.log(cartProducts);
      const index = cartProducts.indexOf(product);
      if (index > -1) { 
        cartProducts.splice(index, 1);
      }

      // array = [2, 9]
      console.log(cartProducts);
              };

   


    return (
        <div className="cart-content">


            <h2>Din kundvagn</h2>
            <button className="continue-shopping-button" onClick={event => window.location.href='/ProductPage'}>⇦ Fortsätt handla</button>

                <CartList products = {cartProducts} handler={removeItem} />
              
              {
                cartProducts.length < 1 ? <p>Din kundvagn är tom</p> : null
              }

            <button className="checkout-button" type="submit" onClick={event => window.location.href='/Checkout'}>Till kassan</button>

        </div>
    )
}

export default Cart