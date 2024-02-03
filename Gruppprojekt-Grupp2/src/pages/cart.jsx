import styled from "styled-components"
import React, { useState } from "react"
import '../cart.css'
import CartList from "../components/CartList"



const Cart = () => {
    return (
        <div className="cart-content">


            <h2>Din kundvagn</h2>
            <button className="continue-shopping-button" onClick={event => window.location.href='/ProductPage'}>⇦ Fortsätt handla</button>

                testar - finns något
                Om inget finns  din kundvagn är tom
                
                Cartlist - komponent som innehåller cartItem
                <div className="cart-product">
                    <img src="src\assets\Temporary1.webp" alt="bild på garn" />
                    <p>Garnnystan</p>
                    <input className="number-input" type="number" placeholder="1" />
                    <p>49kr</p>
                </div>
                
                <div className="cart-product">
                    <img src="src\assets\Temporary2.webp" alt="bild på garn" />
                    <p>Garnnystan</p>
                    <input className="number-input" type="number" placeholder="1" />
                    <p>39kr</p>
                </div>

            <button className="checkout-button" type="submit" onClick={event => window.location.href='/Checkout'}>Till kassan</button>
            <p>hej igen, igen</p>
        </div>
    )
}

export default Cart