import styled from "styled-components";
import React, { useContext, useState } from 'react';
import CartItem from "./CartItem"
import { CartContext } from "../App"

const CartListDiv = styled.p`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`



function CartList(props){
    



    return (
        <CartListDiv>
           {props.products.map((product, index) => (
                <CartItem key={index} product={product}  handler={props.handler}></CartItem>
            ))}
                    
        </CartListDiv>
    )
}

export default CartList

