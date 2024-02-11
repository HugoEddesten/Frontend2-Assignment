import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react"
import '../cart.css'
import CartList from "../components/CartList"
import CartItem from "../components/CartItem"
import axios from "axios"
import { CartContext } from "../App"
import { useNavigate } from "react-router-dom"


const CartItems = [];

const Cart = () => {

    const cartProducts = useContext(CartContext);

    const navigate = useNavigate();

    const reload = () => {
        navigate();
    }

    const removeItem = (product) => {
        const index = cartProducts.indexOf(product);
        if (index > -1) {
            cartProducts.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cartProducts.filter((iteratedProduct) => iteratedProduct != product)))
        reload();
    };

    useEffect(() => {
        reload();
    }, cartProducts)


    return (
        <div className="cart-content">


            <h2>Din kundvagn</h2>
            <button className="continue-shopping-button" onClick={() => navigate('/ProductPage')}>⇦ Fortsätt handla</button>

            {
                cartProducts.length < 1 ? <p>Din kundvagn är tom</p> : null
            }

            <CartList products={cartProducts} handler={removeItem} />



            <button className="checkout-button" type="submit" onClick={() => navigate('/Checkout')}>Till kassan</button>

        </div>
    )
}

export default Cart