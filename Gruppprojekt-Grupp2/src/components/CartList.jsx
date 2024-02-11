import styled from "styled-components";
import React, { useContext, useState, useEffect } from 'react';
import CartItem from "./CartItem"
import { CartContext } from "../App"
import { useNavigate } from "react-router-dom";


const CartListDiv = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CartListText = styled.p`
    display: flex;
    align-items: right;
    width: 10em;
    padding: .33rem;
    border: #000000 1px solid;
    border-radius: .33rem;
    margin: 1rem 0;
`


function handleChange(event) {

}


function CartList(props) {

    const [inTotal, setinTotal] = useState(0);

    const cartProducts = useContext(CartContext);

    const navigate = useNavigate();

    const reload = () => {
        navigate();
    }

    const removeItem = (product, totalPrice) => {
        const index = cartProducts.indexOf(product);
        if (index > -1) {
            cartProducts.splice(index, 1);
        }
        setinTotal(inTotal - totalPrice);
        localStorage.setItem("cart", JSON.stringify(cartProducts.filter((iteratedProduct) => iteratedProduct != product)));
        reload();

        
    };

    useEffect(() => {
        reload();
    }, cartProducts)


    const handleChange = (itemPrice, productPrice) => {
        const updatedTotal = inTotal + productPrice;
        setinTotal(updatedTotal);
    };


    return (
        <CartListDiv>
            {cartProducts.map((product, index) => (
                <CartItem onItemTotalChange={handleChange} key={index} product={product} handler={removeItem}></CartItem>
            ))}

            <CartListText onChange={handleChange} type="number" id="inTotal" name="inTotal">Totalt: {inTotal} kr</CartListText>
            
        </CartListDiv>
    )
}

export default CartList