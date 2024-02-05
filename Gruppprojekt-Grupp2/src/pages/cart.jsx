import styled from "styled-components"
import React, { useState } from "react"
import '../cart.css'
import CartList from "../components/CartList"



const Cart = () => {
    return (
        <div className="cart-content">


            <h2>Din kundvagn</h2>
            <button className="continue-shopping-button" onClick={event => window.location.href='/ProductPage'}>⇦ Fortsätt handla</button>

           <p>Å här ska det vara korrekt kod. </p>




            <button className="checkout-button" type="submit" onClick={event => window.location.href='/Checkout'}>Till kassan</button>

        </div>
    )
}

export default Cart