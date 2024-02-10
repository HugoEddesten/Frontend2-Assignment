import styled from "styled-components";
import React, { useContext, useState } from 'react';
import CartItem from "./CartItem"
import { CartContext } from "../App"


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
    console.log();
}


function CartList(props) {

    const [inTotal, setinTotal] = useState(0);
    const handleChange = (itemPrice, product) => {

        const priceCalculation = inTotal + itemPrice;
        setinTotal(priceCalculation);

    };


    return (
        <CartListDiv>
            {props.products.map((product, index) => (
                <CartItem onItemTotalChange={handleChange} key={index} product={product} handler={props.handler}></CartItem>

            ))}

            <CartListText onChange={handleChange} type="number" id="inTotal" name="inTotal">Totalt: {inTotal} kr</CartListText>
        </CartListDiv>
    )
}

export default CartList