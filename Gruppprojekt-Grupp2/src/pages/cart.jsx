import styled from "styled-components"
import React, { useContext, useEffect, useState } from "react"
import '../cart.css'
import CartList from "../components/CartList"
import CartItem from "../components/CartItem"
import axios from "axios"
import {CartContext} from "../App"


const CartItems = [];

const Cart = () => {
    
    const CartProducts = useContext(CartContext);


    const [products, setProducts] = useState ([]); /*ska bort sen*/

    const [error, setError] = useState(null)

    useEffect(() => {/* vi får se om den ska vara kvar*/
    
        axios.get(`http://localhost:1300/api/Products?populate=*`)
       .then(({ data }) => setProducts(data.data))
        .catch((error) => setError(error));
        console.log(products);
    }, [])

   


    return (
        <div className="cart-content">


            <h2>Din kundvagn</h2>
            <button className="continue-shopping-button" onClick={event => window.location.href='/ProductPage'}>⇦ Fortsätt handla</button>

                <CartList products = {products} />
               


            <button className="checkout-button" type="submit" onClick={event => window.location.href='/Checkout'}>Till kassan</button>

        </div>
    )
}

export default Cart